import { Fragment, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Page } from '@ds/patterns/Page/Page';
import './email-health-score.css';

/* ------------------------------------------------------------------ */
/* Sample data: 25 sending domains                                    */
/* Impacts are points lost from a perfect 100, in this order:          */
/* bounce, complaint, spam trap, full mailbox, critical failure.       */
/* ------------------------------------------------------------------ */

type Band = 'healthy' | 'risk' | 'attention' | 'collecting';
type FilterKey = 'all' | Band;
type SortKey = 'priority' | 'name' | 'score' | 'change' | 'sent' | 'imp0' | 'imp1' | 'imp2' | 'imp3' | 'imp4';
type SortDir = 'asc' | 'desc';

const METRIC_LABELS = ['Bounce', 'Complaint', 'Spam trap', 'Full mailbox', 'Critical failure'];
const METRIC_FIX: Record<number, [string, string, string]> = {
  0: ['Reduce bounces', 'Excessive bounces will harm your sending reputation. Reduce your bounces to lower your bounce count and maintain your health score. To lower your bounce count, consider using validations to remove invalid recipients from your lists.', 'https://help.mailgun.com/hc/en-us/articles/202229054-How-can-I-lower-my-domain-s-bounce-rate'],
  1: ['Reduce spam complaints', 'Complaints occur when recipients mark your email as spam. This has a significant negative impact on your reputation. Ensure your users expect to receive your mail to reduce complaints.', 'https://www.mailgun.com/blog/deliverability/spam-complaint-rate/'],
  2: ['Remove spam trap risk', 'Spam traps are email addresses designed to receive spam. If you are sending to spam traps, review your list hygiene practices and sunset policies.', 'https://help.mailgun.com/hc/en-us/articles/4413151071515-What-are-spam-traps-and-why-should-I-avoid-them'],
  3: ['Reduce full mailboxes', 'If you send enough email you will always see some full mailbox bounces, but an excessive number points to a problem with your list. Consider validating your recipients to reduce full mailbox bounces.', 'https://www.mailgun.com/blog/deliverability/email-bounces-what-to-do-about-them/'],
  4: ['Reduce critical failures', 'Critical failures will erode your reputation. It is up to you to manage your sending when you start to see them. Bounce classification helps you identify these issues and resolve specific problems to maintain your health score.', 'https://help.mailgun.com/hc/en-us/articles/23504153869723-Bounce-Classification'],
};

const BAND: Record<Band, { label: string; range: string; fg: string; bar: string }> = {
  healthy: { label: 'Healthy', range: 'over 85', fg: '#23613c', bar: '#53bd69' },
  risk: { label: 'At risk', range: '70 to 85', fg: '#8f5509', bar: '#c97a12' },
  attention: { label: 'Requires attention', range: 'under 70', fg: '#b3302f', bar: '#e24b4a' },
  collecting: { label: 'Collecting data', range: '', fg: '#4b575e', bar: '#b9c3c9' },
};
const BAND_ORDER: Band[] = ['attention', 'risk', 'healthy', 'collecting'];
const ATTENTION_RED = '#b3302f';
const POSITIVE_GREEN = '#23613c';

const RAW: Array<[string, number | null, number | null, number, number[] | null]> = [
  ['mg.acme.com', 94, 93, 1240000, [2, 2, 0, 1, 1]],
  ['news.acme.com', 91, 92, 860000, [3, 3, 1, 1, 1]],
  ['receipts.acme.com', 96, 96, 410000, [1, 1, 0, 1, 1]],
  ['alerts.acme.com', 89, 86, 220000, [3, 2, 2, 1, 3]],
  ['hello.acme.com', 92, 84, 95000, [2, 3, 0, 1, 2]],
  ['billing.acme.com', 97, 97, 61000, [1, 0, 0, 0, 2]],
  ['eu.acme.com', 88, 96, 305000, [4, 3, 1, 2, 2]],
  ['support.acme.com', 90, 89, 74000, [2, 2, 0, 3, 3]],
  ['onboarding.acme.com', 93, 94, 133000, [2, 2, 0, 1, 2]],
  ['digest.acme.com', 87, 87, 540000, [4, 3, 2, 2, 2]],
  ['careers.acme.com', 95, 94, 18000, [1, 1, 0, 2, 1]],
  ['events.acme.com', 86, 80, 47000, [3, 3, 3, 2, 3]],
  ['promo.acme.com', 82, 88, 1020000, [3, 9, 2, 2, 2]],
  ['offers.acme.com', 78, 80, 380000, [8, 4, 5, 2, 3]],
  ['partners.acme.com', 74, 79, 52000, [6, 2, 1, 2, 15]],
  ['app.acme.com', 84, 85, 690000, [4, 3, 1, 6, 2]],
  ['community.acme.com', 71, 70, 29000, [5, 4, 10, 3, 7]],
  ['sales.acme.com', 76, 83, 88000, [4, 3, 2, 10, 5]],
  ['winback.acme.com', 48, 61, 460000, [10, 22, 8, 4, 8]],
  ['leads.acme.com', 55, 58, 215000, [10, 11, 10, 4, 10]],
  ['survey.acme.com', 63, 75, 140000, [7, 16, 3, 4, 7]],
  ['beta.acme.com', 67, 66, 12500, [6, 6, 1, 10, 10]],
  ['promo-eu.acme.com', 38, 52, 76000, [10, 18, 10, 4, 20]],
  ['pilot.acme.com', null, null, 6300, null],
  ['staging.acme.com', null, null, 1900, null],
];

const HEALTHY_FLOOR = 86;
const SCORE_MIN_EMAILS = 10000;
const MIN_MOVE = 3;
const HIT_THRESHOLD = 5;

const bandOf = (score: number | null): Band =>
  score == null ? 'collecting' : score > 85 ? 'healthy' : score >= 70 ? 'risk' : 'attention';
const BAND_RANK: Record<Band, number> = { healthy: 0, risk: 1, attention: 2, collecting: 3 };

interface Domain {
  name: string;
  score: number | null;
  sent: number;
  band: Band;
  counts: number[];
  lost: number;
  topIndex: number;
  delta: number | null;
  priority: number;
}

const fmt = (n: number) => n.toLocaleString('en-US');
const nullsLast = (a: Domain, b: Domain) => (a.score == null ? 1 : 0) - (b.score == null ? 1 : 0);

/** Splits `total` across `weights` with the largest-remainder method so the parts add up exactly. */
const allocate = (weights: number[], total: number) => {
  const sum = weights.reduce((a, b) => a + b, 0) || 1;
  const raw = weights.map((w) => (w * total) / sum);
  const parts = raw.map(Math.floor);
  let rest = total - parts.reduce((a, b) => a + b, 0);
  raw
    .map((x, i) => [x - parts[i], i] as const)
    .sort((a, b) => b[0] - a[0])
    .forEach(([, i]) => {
      if (rest > 0) {
        parts[i] += 1;
        rest -= 1;
      }
    });
  return parts;
};

const DOMAINS: Domain[] = RAW.map(([name, score, prev, sent, counts]) => {
  const band = bandOf(score);
  const c = counts ?? [];
  const lost = c.reduce((a, b) => a + b, 0);
  let topIndex = 0;
  c.forEach((n, i) => {
    if (n > c[topIndex]) topIndex = i;
  });
  const delta = score == null || prev == null ? null : score - prev;
  const prevBand = prev == null ? null : bandOf(prev);
  const crossedDown = prevBand != null && prevBand !== band && BAND_RANK[band] > BAND_RANK[prevBand];
  const boost = delta != null && (delta <= -5 || crossedDown) ? 1.5 : 1;
  const shortfall = score == null ? 0 : Math.max(0, HEALTHY_FLOOR - score);
  return { name, score, sent, band, counts: c, lost, topIndex, delta, priority: shortfall * sent * boost };
});

const SCORED = DOMAINS.filter((d) => d.score != null);
const SCORED_SENT = SCORED.reduce((a, d) => a + d.sent, 0);
const byBand = (b: Band) => DOMAINS.filter((d) => d.band === b);

/* Account score: volume-weighted average of the scored domains. */
const ACCOUNT_SCORE = Math.round(SCORED.reduce((a, d) => a + (d.score ?? 0) * d.sent, 0) / SCORED_SENT);
const ACCOUNT_BAND = bandOf(ACCOUNT_SCORE);
const ACCOUNT_IMPACTS = allocate(
  METRIC_LABELS.map((_, i) => SCORED.reduce((a, d) => a + d.counts[i] * d.sent, 0) / SCORED_SENT),
  100 - ACCOUNT_SCORE,
);

const METRIC_HITS = METRIC_LABELS.map((_, i) => SCORED.filter((d) => d.counts[i] >= HIT_THRESHOLD).length);

/* Account insight: what changed, what drives it, where to focus, what to do. */
const PLURAL = ['Bounces', 'Complaints', 'Spam traps', 'Full mailboxes', 'Critical failures'];
const ACTION_HINT = [
  'validate addresses and remove invalid ones',
  'confirm opt-in and drop inactive subscribers',
  'clean up old or unconfirmed lists',
  'suppress full mailboxes and send less often',
  'use bounce classification to fix failures',
];

const buildInsight = () => {
  const accRaw = SCORED.reduce((a, d) => a + (d.score ?? 0) * d.sent, 0) / SCORED_SENT;
  const lostPts = 100 - accRaw;
  const weights = METRIC_LABELS.map((_, i) => SCORED.reduce((a, d) => a + d.counts[i] * d.sent, 0) / SCORED_SENT);
  const weightTotal = weights.reduce((a, b) => a + b, 0) || 1;
  const topMetric = weights.indexOf(Math.max(...weights));
  const prevScore = Math.round(SCORED.reduce((a, d) => a + ((d.score ?? 0) - (d.delta ?? 0)) * d.sent, 0) / SCORED_SENT);
  const prevBand = bandOf(prevScore);
  const change = ACCOUNT_SCORE - prevScore;
  const points = Math.abs(change) === 1 ? ' point' : ' points';

  const headline =
    change === 0
      ? `Your account score held steady at ${ACCOUNT_SCORE} (${BAND[ACCOUNT_BAND].label}).`
      : `Your account score ${change < 0 ? 'fell' : 'rose'} ${Math.abs(change)}${points} to ${ACCOUNT_SCORE}` +
        (prevBand !== ACCOUNT_BAND ? ` and moved from ${BAND[prevBand].label} to ${BAND[ACCOUNT_BAND].label}.` : ` (${BAND[ACCOUNT_BAND].label}).`);

  const driver = `${PLURAL[topMetric]} are the biggest driver, costing ${weights[topMetric].toFixed(1)} of the ${Math.round(lostPts)} points lost (${Math.round((weights[topMetric] / weightTotal) * 100)}%).`;

  const focus = SCORED.filter((d) => (d.score ?? 0) < HEALTHY_FLOOR)
    .map((d) => ({ d, pts: ((100 - (d.score ?? 0)) * d.sent) / SCORED_SENT }))
    .sort((a, b) => b.pts - a.pts)
    .slice(0, 2);

  if (!focus.length) {
    return { headline, driver, focus: [] as Domain[], focusSentence: 'No domain is below Healthy.', action: 'Keep sending to engaged recipients and watch the 30-day change for early signs of a drop.' };
  }

  const names = focus.map((f) => f.d.name);
  const ptsShare = Math.round((focus.reduce((a, f) => a + f.pts, 0) / lostPts) * 100);
  const volShare = Math.round((focus.reduce((a, f) => a + f.d.sent, 0) / SCORED_SENT) * 100);
  const lifted = SCORED.reduce((a, d) => a + (names.includes(d.name) ? Math.max(d.score ?? 0, HEALTHY_FLOOR) : (d.score ?? 0)) * d.sent, 0) / SCORED_SENT;
  const keys = focus.map((f) => f.d.topIndex);
  const same = keys.every((k) => k === keys[0]);
  const both = names.length > 1;

  return {
    headline,
    driver,
    focus: focus.map((f) => f.d),
    focusSentence: `${both ? ' represent ' : ' represents '}${ptsShare}% of points lost and ${volShare}% of all email delivered.`,
    action:
      `Lift ${both ? 'both' : names[0]} to Healthy (${HEALTHY_FLOOR}+) to reach about ${Math.round(lifted)}. ` +
      (same
        ? `${PLURAL[keys[0]]} drive ${both ? 'both' : 'it'}`
        : `${names[0]}: ${PLURAL[keys[0]].toLowerCase()}, ${names[1]}: ${PLURAL[keys[1]].toLowerCase()}`) +
      `: ${ACTION_HINT[keys[0]]}.`,
  };
};
const INSIGHT = buildInsight();

/* Fix these first: shortfall below Healthy x delivered volume, boosted for sharp drops. */
const PRIORITY_ORDER = [...DOMAINS].sort((a, b) => nullsLast(a, b) || b.priority - a.priority || (a.score ?? 0) - (b.score ?? 0));
const FIX_FIRST = DOMAINS.filter((d) => d.priority > 0)
  .sort((a, b) => b.priority - a.priority || (a.score ?? 0) - (b.score ?? 0))
  .slice(0, 5);

/* Biggest movers: best improvement first, biggest drop last. */
const ELIGIBLE = SCORED.filter((d) => d.sent >= SCORE_MIN_EMAILS);
const RISERS = ELIGIBLE.filter((d) => (d.delta ?? 0) >= MIN_MOVE).sort((a, b) => (b.delta ?? 0) - (a.delta ?? 0)).slice(0, 5);
const DROPPERS = ELIGIBLE.filter((d) => (d.delta ?? 0) <= -MIN_MOVE).sort((a, b) => (a.delta ?? 0) - (b.delta ?? 0)).slice(0, 5).reverse();
const MOVERS = [...RISERS, ...DROPPERS];

/* Daily account scores for the last 30 days. */
const DAILY_OFFSETS = [2, 1, 2, 0, -1, 1, 2, 3, 1, 0, -2, -1, 1, 2, 0, -1, -3, -2, 0, 1, 2, 1, -1, 0, 2, 1, -1, -2, -1, 0];
const accountWeights = METRIC_LABELS.map((_, i) => SCORED.reduce((a, d) => a + d.counts[i] * d.sent, 0) / SCORED_SENT);
const pad2 = (n: number) => String(n).padStart(2, '0');
const DAYS = DAILY_OFFSETS.map((offset, i) => {
  const score = Math.max(0, Math.min(100, ACCOUNT_SCORE + offset));
  const date = new Date(2026, 9, 23 - (DAILY_OFFSETS.length - 1 - i));
  return {
    score,
    date: `${pad2(date.getMonth() + 1)}/${pad2(date.getDate())}/${String(date.getFullYear()).slice(2)}`,
    impacts: allocate(accountWeights, 100 - score),
  };
});
const dayX = (i: number) => ((i + 0.5) / DAYS.length) * 100;

/* Gauge geometry: 128px ring, 12px round-capped stroke (round caps add the stroke width to the arc). */
const GAUGE_CIRC = 2 * Math.PI * 58;
const GAUGE_DASH = Math.max((ACCOUNT_SCORE / 100) * GAUGE_CIRC - 12, 0.01);

const deltaColor = (delta: number | null) =>
  delta == null ? '#626c73' : delta < 0 ? ATTENTION_RED : delta > 0 ? POSITIVE_GREEN : '#272f36';

const scoreColor = (d: { band: Band }) => (d.band === 'healthy' ? '#3d9e57' : BAND[d.band].fg);

/* ------------------------------------------------------------------ */
/* Small presentational pieces                                         */
/* ------------------------------------------------------------------ */

const Delta = ({ value }: { value: number | null }) => (
  <span className="ehs-delta" style={{ color: deltaColor(value) }}>
    {value != null && value < 0 && (
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 10 1.5 3.5h9z" fill="currentColor" /></svg>
    )}
    {value != null && value > 0 && (
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 2 10.5 8.5h-9z" fill="currentColor" /></svg>
    )}
    {value == null ? '—' : Math.abs(value)}
  </span>
);

const Card = ({ title, subtitle, action, children, id }: { title: string; subtitle?: string; action?: ReactNode; children: ReactNode; id?: string }) => (
  <section className="ehs-card" id={id}>
    <header className="ehs-card__head">
      <div className="ehs-card__heading">
        <h2 className="ehs-card__title">{title}</h2>
        {subtitle && <span className="ehs-card__subtitle">{subtitle}</span>}
      </div>
      {action}
    </header>
    {children}
  </section>
);

const SortHead = ({ label, active, dir, onClick }: { label: string; active: boolean; dir: SortDir; onClick: () => void }) => (
  <button type="button" className={`ehs-th${active ? ' is-active' : ''}`} onClick={onClick} aria-label={`Sort by ${label}`}>
    <span>{label}</span>
    <svg width="8" height="12" viewBox="0 0 8 12" aria-hidden="true">
      <path d="M4 0 7.5 4.5h-7z" fill={active && dir === 'asc' ? '#272f36' : '#b9c3c9'} />
      <path d="M4 12 .5 7.5h7z" fill={active && dir === 'desc' ? '#272f36' : '#b9c3c9'} />
    </svg>
  </button>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export const EmailHealthScorePage = () => {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [sort, setSort] = useState<SortKey>('priority');
  const [dir, setDir] = useState<SortDir>('desc');
  const [open, setOpen] = useState('');
  const [query, setQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState(-1);

  const goTable = () => {
    window.setTimeout(() => {
      document.getElementById('ehs-domains-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const applyView = (next: { filter?: FilterKey; sort?: SortKey; dir?: SortDir; open?: string; query?: string; page?: number }) => {
    if (next.filter !== undefined) setFilter(next.filter);
    if (next.sort !== undefined) setSort(next.sort);
    if (next.dir !== undefined) setDir(next.dir);
    setOpen(next.open ?? '');
    if (next.query !== undefined) setQuery(next.query);
    setPage(next.page ?? 1);
  };

  const reviewDomain = (d: Domain) => {
    applyView({ filter: 'all', sort: 'priority', open: d.name, query: '', page: Math.floor(PRIORITY_ORDER.indexOf(d) / pageSize) + 1 });
    goTable();
  };

  const clickHeader = (key: SortKey, first: SortDir) => {
    if (sort === key) setDir(dir === 'asc' ? 'desc' : 'asc');
    else {
      setSort(key);
      setDir(first);
    }
    setPage(1);
  };

  /* Table rows: filter, search, sort, paginate. */
  const q = query.trim().toLowerCase();
  const list = DOMAINS.filter((d) => (filter === 'all' || d.band === filter) && (!q || d.name.toLowerCase().includes(q)));
  const sg = dir === 'asc' ? 1 : -1;
  if (sort === 'priority') list.sort((a, b) => nullsLast(a, b) || b.priority - a.priority || (a.score ?? 0) - (b.score ?? 0));
  if (sort === 'name') list.sort((a, b) => sg * a.name.localeCompare(b.name));
  if (sort === 'score') list.sort((a, b) => nullsLast(a, b) || sg * ((a.score ?? 0) - (b.score ?? 0)));
  if (sort === 'change') list.sort((a, b) => nullsLast(a, b) || sg * ((a.delta ?? 0) - (b.delta ?? 0)));
  if (sort === 'sent') list.sort((a, b) => sg * (a.sent - b.sent));
  if (sort.startsWith('imp')) {
    const k = Number(sort.slice(3));
    list.sort((a, b) => nullsLast(a, b) || sg * ((a.counts[k] ?? 0) - (b.counts[k] ?? 0)));
  }
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  const visible = list.slice(start, start + pageSize);

  const dropActive = sort === 'change' && dir === 'asc' && filter === 'all';
  const dropped = DOMAINS.filter((d) => d.delta != null && d.delta <= -5).length;

  const tiles: Array<{ key: string; label: string; count: number; sub: string; color: string; fg: string; active: boolean; pick: () => void }> = [
    ...BAND_ORDER.map((b) => ({
      key: b,
      label: BAND[b].label,
      count: byBand(b).length,
      sub: b === 'collecting' ? 'Domains with fewer than 10,000 delivered emails' : `Domains with score ${BAND[b].range}`,
      color: BAND[b].bar,
      fg: b === 'collecting' ? '#272f36' : BAND[b].fg,
      active: filter === b,
      pick: () => {
        applyView({ filter: filter === b ? 'all' : b });
        goTable();
      },
    })),
    {
      key: 'dropped',
      label: 'Dropped 5+ points',
      count: dropped,
      sub: 'Compared with the previous 30 days',
      color: '#4b575e',
      fg: '#272f36',
      active: dropActive,
      pick: () => {
        applyView(dropActive ? { filter: 'all', sort: 'priority' } : { filter: 'all', sort: 'change', dir: 'asc' });
        goTable();
      },
    },
  ];

  const hoverDay = hover >= 0 ? DAYS[hover] : null;
  const rowsHeadDir = dir;

  return (
    <Page
      navigationProps={{ defaultActive: 'optimize:health-score' }}
      pageHeaderProps={{
        title: 'Email health score',
        description:
          "Utilize knowledge of your sending health score as you would a credit score. It assesses your email program's health and IP reputation and shows you if your sending health is good or needs attention.",
      }}
    >
      <div className="ehs">
        {/* Account score and metrics */}
        <div className="ehs-score-row">
          <Card title="Account score" subtitle="Weighted average of all domains, last 30 days">
            <div className="ehs-account">
              <div className="ehs-account__score">
              <div className="ehs-gauge__ring">
                <svg width="128" height="128" viewBox="0 0 128 128" role="img" aria-label={`Account score ${ACCOUNT_SCORE} out of 100, ${BAND[ACCOUNT_BAND].label}`}>
                  <circle cx="64" cy="64" r="58" fill="none" stroke="#dfe3e6" strokeWidth="12" />
                  <circle
                    className="ehs-gauge__arc"
                    cx="64"
                    cy="64"
                    r="58"
                    fill="none"
                    stroke={BAND[ACCOUNT_BAND].bar}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${GAUGE_DASH.toFixed(2)} ${GAUGE_CIRC.toFixed(2)}`}
                    strokeDashoffset={-6}
                    style={{ '--dash': `${GAUGE_DASH.toFixed(2)}px`, '--circ': `${GAUGE_CIRC.toFixed(2)}px` } as CSSProperties}
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <div className="ehs-gauge__value" style={{ color: scoreColor({ band: ACCOUNT_BAND }) }}>{ACCOUNT_SCORE}</div>
              </div>
              <div className="ehs-gauge__label" style={{ color: scoreColor({ band: ACCOUNT_BAND }) }}>{BAND[ACCOUNT_BAND].label}</div>
              <div className="ehs-legend">
                {(['healthy', 'risk', 'attention'] as Band[]).map((b) => (
                  <span key={b} className="ehs-legend__item">
                    <span className="ehs-dot" style={{ background: BAND[b].bar }} />
                    {b === 'healthy' ? 'Healthy >85' : b === 'risk' ? 'At risk 70\u201385' : 'Requires attention <70'}
                  </span>
                ))}
              </div>
              </div>
              <div className="ehs-insight">
                <p className="ehs-insight__headline">{INSIGHT.headline}</p>
                <p className="ehs-insight__row">{INSIGHT.driver}</p>
                <p className="ehs-insight__row">
                  {INSIGHT.focus.map((d, i) => (
                    <Fragment key={d.name}>
                      <button type="button" className="ehs-link ehs-link--inline" onClick={() => reviewDomain(d)}>{d.name}</button>
                      {i < INSIGHT.focus.length - 1 ? ', ' : ''}
                    </Fragment>
                  ))}
                  {INSIGHT.focusSentence}
                </p>
                <p className="ehs-insight__action">{INSIGHT.action}</p>
              </div>
            </div>
          </Card>

          <Card title="Metrics impacting score">
            <div className="ehs-metrics">
              <div className="ehs-metrics__head"><span>Metric</span><span>Domains affected</span></div>
              {METRIC_LABELS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  className="ehs-metric-row"
                  title="Sort the table by this impact"
                  onClick={() => {
                    applyView({ filter: 'all', sort: `imp${i}` as SortKey, dir: 'desc' });
                    goTable();
                  }}
                >
                  <span className="ehs-metric-row__label">{label}</span>
                  <span className="ehs-bar"><span style={{ width: `${Math.round((METRIC_HITS[i] / SCORED.length) * 100)}%` }} /></span>
                  <span className="ehs-metric-row__n">{METRIC_HITS[i]}</span>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Domains by score */}
        <Card title="Domains by score" subtitle="Avg 30 days" action={<span className="ehs-card__subtitle">{`${DOMAINS.length} domains, ${SCORED.length} with a score`}</span>}>
          <div className="ehs-overview">
            <div
              className="ehs-distribution"
              role="img"
              aria-label={BAND_ORDER.map((b) => `${byBand(b).length} ${BAND[b].label.toLowerCase()}`).join(', ')}
            >
              {BAND_ORDER.map((b) => (
                <div key={b} style={{ width: `${(byBand(b).length / DOMAINS.length) * 100}%`, background: BAND[b].bar }} />
              ))}
            </div>
            <div className="ehs-tiles">
              {tiles.map((t) => (
                <button key={t.key} type="button" className={`ehs-tile${t.active ? ' is-active' : ''}`} aria-pressed={t.active} onClick={t.pick}>
                  <span className="ehs-tile__label"><span className="ehs-dot" style={{ background: t.color }} />{t.label}</span>
                  <span className="ehs-tile__count" style={{ color: t.fg }}>{t.count}</span>
                  <span className="ehs-muted-small">{t.sub}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Fix these first / Biggest movers */}
        <div className="ehs-pair">
          <Card
            title="Fix these first"
            subtitle="Ranked by distance below Healthy and email volume"
            action={
              <button type="button" className="ehs-link ehs-link--action" onClick={() => { applyView({ filter: 'all', sort: 'priority', query: '' }); goTable(); }}>
                See all
              </button>
            }
          >
            <div className="ehs-list">
              {FIX_FIRST.map((d, i) => (
                <div key={d.name} className="ehs-list__row ehs-list__row--fix" style={{ borderBottomColor: i === FIX_FIRST.length - 1 ? 'transparent' : undefined }}>
                  <div className="ehs-fix__main">
                    <span className="ehs-list__name">
                      <button type="button" className="ehs-link ehs-link--name" onClick={() => reviewDomain(d)}>{d.name}</button>
                      <span className="ehs-dots" role="img" aria-label={`Priority ${i + 1} of ${FIX_FIRST.length}`} title={`Priority ${i + 1} of ${FIX_FIRST.length}`}>
                        {[0, 1, 2, 3, 4].map((k) => (
                          <span key={k} className={k < 5 - i ? 'is-on' : undefined} />
                        ))}
                      </span>
                    </span>
                    <span className="ehs-fix__sub">Email delivered: <b>{fmt(d.sent)}</b></span>
                  </div>
                  <span className="ehs-fix__driver">{`\u2212${d.counts[d.topIndex]} pts from ${METRIC_LABELS[d.topIndex].toLowerCase()}`}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            title="Biggest movers"
            subtitle="Score change vs previous 30 days"
            action={
              <button type="button" className="ehs-link ehs-link--action" onClick={() => { applyView({ filter: 'all', sort: 'change', dir: 'desc', query: '' }); goTable(); }}>
                See all
              </button>
            }
          >
            <div className="ehs-list">
              {MOVERS.map((d, i) => (
                <div key={d.name} className="ehs-list__row" style={{ borderBottomColor: i === MOVERS.length - 1 ? 'transparent' : undefined }}>
                  <button type="button" className="ehs-link ehs-link--name" onClick={() => reviewDomain(d)}>{d.name}</button>
                  <Delta value={d.delta} />
                  <strong className="ehs-score" style={{ color: BAND[d.band].fg }}>{d.score}</strong>
                </div>
              ))}
              {MOVERS.length === 0 && <div className="ehs-empty">No domains moved 3+ points.</div>}
            </div>
          </Card>
        </div>

        {/* Table */}
        <Card
          id="ehs-domains-table"
          title="Email health scores"
          subtitle="Avg. 30 days"
          action={
            <div className="ehs-tools">
              <select
                className="ehs-select"
                aria-label="Filter domains"
                value={filter}
                onChange={(e) => applyView({ filter: e.target.value as FilterKey })}
              >
                <option value="all">Filter: All domains</option>
                <option value="attention">Filter: Requires attention</option>
                <option value="risk">Filter: At risk</option>
                <option value="healthy">Filter: Healthy</option>
                <option value="collecting">Filter: Collecting data</option>
              </select>
              <label className="ehs-search">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="6.8" cy="6.8" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m10.4 10.4 3.6 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <input type="search" aria-label="Search domains" placeholder="Search" value={query} onChange={(e) => applyView({ query: e.target.value })} />
              </label>
            </div>
          }
        >
          {filter !== 'all' && (
            <div className="ehs-filterbar">
              <span className="ehs-card__subtitle">Filtered by</span>
              <span className="ehs-pill">
                <span className="ehs-dot" style={{ background: BAND[filter].bar }} />
                {BAND[filter].label}
                <button type="button" aria-label="Remove filter" onClick={() => applyView({ filter: 'all' })}>
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m2.5 2.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </button>
              </span>
            </div>
          )}

          <div className="ehs-table-scroll">
            <div className="ehs-table">
              <div className="ehs-cols ehs-thead">
                <SortHead label="Domain" active={sort === 'name'} dir={rowsHeadDir} onClick={() => clickHeader('name', 'asc')} />
                <SortHead label="Score" active={sort === 'score'} dir={rowsHeadDir} onClick={() => clickHeader('score', 'asc')} />
                <SortHead label="Change" active={sort === 'change'} dir={rowsHeadDir} onClick={() => clickHeader('change', 'asc')} />
                <SortHead label="Delivered" active={sort === 'sent'} dir={rowsHeadDir} onClick={() => clickHeader('sent', 'desc')} />
                <SortHead label="Bounce" active={sort === 'imp0'} dir={rowsHeadDir} onClick={() => clickHeader('imp0', 'desc')} />
                <SortHead label="Complaint" active={sort === 'imp1'} dir={rowsHeadDir} onClick={() => clickHeader('imp1', 'desc')} />
                <SortHead label="Spam Trap" active={sort === 'imp2'} dir={rowsHeadDir} onClick={() => clickHeader('imp2', 'desc')} />
                <SortHead label="Full mailbox" active={sort === 'imp3'} dir={rowsHeadDir} onClick={() => clickHeader('imp3', 'desc')} />
                <SortHead label="Critical failure" active={sort === 'imp4'} dir={rowsHeadDir} onClick={() => clickHeader('imp4', 'desc')} />
                <span />
              </div>

              {visible.map((d) => {
                const isOpen = open === d.name;
                const isCollecting = d.band === 'collecting';
                const maxN = Math.max(1, ...d.counts);
                const fix: [string, string, string?] =
                  d.band === 'healthy'
                    ? ['No action needed', 'This domain is scoring Healthy. Keep an eye on the change.']
                    : isCollecting
                      ? ['Not scored yet', `A score needs ${fmt(SCORE_MIN_EMAILS)} delivered emails in the last 30 days. ${fmt(Math.max(SCORE_MIN_EMAILS - d.sent, 0))} more need to be delivered from this domain to get one.`]
                      : METRIC_FIX[d.topIndex];
                const progress = Math.min(100, Math.floor((d.sent / SCORE_MIN_EMAILS) * 100));
                return (
                  <div key={d.name} className={`ehs-row${isOpen ? ' is-open' : ''}`}>
                    <button type="button" className="ehs-cols ehs-row__main" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : d.name)}>
                      <span className="ehs-row__name">{d.name}</span>
                      <span className="ehs-score ehs-score--left" style={{ color: isCollecting ? '#626c73' : scoreColor(d) }}>{d.score ?? '—'}</span>
                      <Delta value={d.delta} />
                      <span className="ehs-num">{fmt(d.sent)}</span>
                      {METRIC_LABELS.map((label, i) => {
                        const isTop = !isCollecting && d.band !== 'healthy' && i === d.topIndex;
                        return (
                          <span key={label} style={{ color: isTop ? ATTENTION_RED : isCollecting ? '#626c73' : '#272f36', fontWeight: isTop ? 700 : 400 }}>
                            {isCollecting ? '—' : d.counts[i]}
                          </span>
                        );
                      })}
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="ehs-row__chev" style={{ transform: isOpen ? 'rotate(180deg)' : undefined }}>
                        <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="ehs-detail">
                        <div className="ehs-detail__col">
                          <div className="ehs-strong-500">
                            {isCollecting ? 'Progress to a first score' : `Points lost by metric (${d.lost} of 100 lost, score ${d.score})`}
                          </div>
                          {!isCollecting && (
                            <div className="ehs-detail__bars">
                              {METRIC_LABELS.map((label, i) => {
                                const isTop = d.band !== 'healthy' && i === d.topIndex;
                                return (
                                  <div key={label} className="ehs-detail__bar" style={{ color: isTop ? '#272f36' : '#4b575e', fontWeight: isTop ? 700 : 400 }}>
                                    <span>{`${label} impact`}</span>
                                    <span className="ehs-bar ehs-bar--thick"><span style={{ width: `${Math.round((d.counts[i] / maxN) * 100)}%`, background: isTop ? BAND[d.band].bar : '#4b575e' }} /></span>
                                    <span className="ehs-detail__n">{d.counts[i]}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {isCollecting && (
                            <div className="ehs-progress">
                              <span className="ehs-bar ehs-bar--thick"><span style={{ width: `${progress}%`, background: '#1976c9' }} /></span>
                              <strong>{progress}%</strong>
                            </div>
                          )}
                        </div>
                        <div className="ehs-detail__col">
                          <div className="ehs-strong-500">{fix[0]}</div>
                          <p>{fix[1]}</p>
                          {fix[2] && <a className="ehs-learn" href={fix[2]} target="_blank" rel="noopener noreferrer">Learn more</a>}
                          <div className="ehs-detail__actions">
                            <button type="button" className="ehs-btn ehs-btn--primary">Open domain report</button>
                            {!isCollecting && d.band !== 'healthy' && <button type="button" className="ehs-btn ehs-btn--quiet">Check DNS records</button>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              {visible.length === 0 && <div className="ehs-empty ehs-empty--table">No domains match. Clear the search or pick another filter.</div>}
            </div>
          </div>

          <footer className="ehs-pager">
            <div className="ehs-pager__sizes" role="group" aria-label="Rows per page">
              {[10, 20, 50].map((n) => (
                <button key={n} type="button" className={pageSize === n ? 'is-active' : undefined} aria-pressed={pageSize === n} onClick={() => { setPageSize(n); setPage(1); }}>
                  {n}
                </button>
              ))}
            </div>
            <div className="ehs-pager__pages">
              <span className="ehs-pager__count">{list.length ? `Showing ${start + 1} to ${start + visible.length} of ${list.length}` : 'No domains'}</span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} type="button" className={p === currentPage ? 'is-active' : undefined} aria-current={p === currentPage ? 'page' : undefined} onClick={() => setPage(p)}>
                  {p}
                </button>
              ))}
              {currentPage < totalPages && (
                <button type="button" aria-label="Next page" onClick={() => setPage(currentPage + 1)}>&gt;</button>
              )}
            </div>
          </footer>
        </Card>

        {/* Daily scores */}
        <Card title="Daily scores" subtitle="Account, last 30 days">
          <div className="ehs-chart">
            <div className="ehs-chart__yaxis" aria-hidden="true">
              {[100, 75, 50, 25, 0].map((v) => (
                <span key={v} style={{ top: `${100 - v}%` }}>{v}</span>
              ))}
            </div>
            <div className="ehs-chart__main">
              <div className="ehs-chart__plot" onMouseLeave={() => setHover(-1)}>
                <div className="ehs-chart__band" style={{ top: 0, height: '15%', background: '#53bd69', opacity: 0.1 }} />
                <div className="ehs-chart__band" style={{ top: '15%', height: '15%', background: '#f0a113', opacity: 0.12 }} />
                <div className="ehs-chart__band" style={{ top: '30%', height: '70%', background: '#ef5350', opacity: 0.07 }} />
                {[0, 25, 50, 75].map((t) => (
                  <div key={t} className="ehs-chart__grid" style={{ top: `${t}%` }} />
                ))}
                <span className="ehs-chart__note" style={{ top: 2, color: '#23613c' }}>Healthy over 85</span>
                <span className="ehs-chart__note" style={{ top: 'calc(30% - 16px)', color: '#8f5509' }}>At risk 70 to 85</span>
                <span className="ehs-chart__note" style={{ top: 'calc(30% + 2px)', color: ATTENTION_RED }}>Requires attention under 70</span>
                <svg className="ehs-chart__line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points={DAYS.map((d, i) => `${dayX(i).toFixed(2)},${100 - d.score}`).join(' ')} fill="none" stroke="#1976c9" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                </svg>
                {hover >= 0 && <div className="ehs-chart__cross" style={{ left: `${dayX(hover)}%` }} />}
                {DAYS.map((d, i) => (
                  <div key={d.date} className="ehs-chart__dot" style={{ left: `${dayX(i)}%`, top: `${100 - d.score}%`, background: i === hover ? '#1976c9' : '#ffffff' }} />
                ))}
                <div className="ehs-chart__hits">
                  {DAYS.map((d, i) => (
                    <div key={d.date} onMouseEnter={() => setHover(i)} />
                  ))}
                </div>
                {hoverDay && (
                  <div
                    className="ehs-chart__tip"
                    style={{
                      left: `${dayX(hover)}%`,
                      transform: dayX(hover) > 70 ? 'translateX(calc(-100% - 12px))' : 'translateX(12px)',
                    } as CSSProperties}
                  >
                    <div className="ehs-chart__tip-date">{hoverDay.date}</div>
                    <div>Daily health score: <strong style={{ color: BAND[bandOf(hoverDay.score)].fg }}>{hoverDay.score}</strong></div>
                    {['Bounce impact', 'Complaint impact', 'Trap impact', 'Full mailbox impact', 'Critical failure impact'].map((label, i) => (
                      <div key={label}>{`${label}: ${hoverDay.impacts[i]}`}</div>
                    ))}
                  </div>
                )}
              </div>
              <div className="ehs-chart__xaxis">
                {[0, 7, 14, 21, DAYS.length - 1].map((i) => (
                  <span key={i}>{DAYS[i].date}</span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
};

export default EmailHealthScorePage;
