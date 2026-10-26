import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Page } from '@ds/patterns/Page/Page';
import { Button } from '@ds/components/Button/Button';
import { Banner } from '@ds/components/Banner/Banner';
import { Toast } from '@ds/components/Toast/Toast';
import './customizable-dashboard.css';

/* Customizable dashboard prototype: add, remove and arrange widgets from the widget library.
   The free-plan "Upgrade to save" flow (preview banner, plans page, upgrade copy) is kept below
   but hidden behind UPGRADE_FLOW for a future iteration. */
const UPGRADE_FLOW = false;

type WidgetId =
  | 'delivery' | 'opened' | 'bounce' | 'failed' | 'clicked' | 'unsub' | 'complained'
  | 'tickets' | 'overview' | 'account' | 'domains' | 'movers' | 'fixfirst' | 'health';
type Size = 's' | 'l';
type Format = 'Number' | 'Bar' | 'Line' | 'List' | 'Summary';

interface WidgetDef {
  type: 'm' | 'b';
  title: string;
  desc: string;
  val?: string;
  sub?: string;
}

const DEFS: Record<WidgetId, WidgetDef> = {
  delivery: { type: 'm', title: 'Delivery rate', val: '100%', sub: '258/258', desc: 'Percentage of sent emails that were delivered.' },
  opened: { type: 'm', title: 'Opened rate', val: '1.16%', sub: '3/258', desc: 'Percentage of emails that are opened vs delivered.' },
  bounce: { type: 'm', title: 'Bounce rate', val: '0%', sub: '0/258', desc: 'Percentage of processed emails that received a hard bounce.' },
  failed: { type: 'm', title: 'Failed rate', val: '0%', sub: '0/258', desc: 'Messages that failed to reach recipients.' },
  clicked: { type: 'm', title: 'Clicked rate', val: '0%', sub: '0/258', desc: 'Percentage of emails that were clicked vs delivered.' },
  unsub: { type: 'm', title: 'Unsubscribed rate', val: '0%', sub: '0/2', desc: 'Percentage of emails that unsubscribed vs delivered.' },
  complained: { type: 'm', title: 'Complaint rate', val: '0%', sub: '0/258', desc: 'Percentage of delivered emails marked as spam.' },
  tickets: { type: 'b', title: 'Support tickets', desc: 'Open support tickets.' },
  overview: { type: 'b', title: 'Sending overview', desc: 'Accepted, delivered, opened, and clicked counts visualized over time.' },
  account: { type: 'b', title: 'Mailgun', desc: 'Plan and usage.' },
  domains: { type: 'b', title: 'Sending domains', desc: 'Sending domains and their verification status.' },
  health: { type: 'b', title: 'Email health score', desc: 'Your account score, or the score of one domain you choose to monitor.' },
  fixfirst: { type: 'b', title: 'Fix these first', desc: 'Domains to work on first, ranked by how far they are below Healthy and how much email they deliver.' },
  movers: { type: 'b', title: 'Biggest movers', desc: 'Domains whose email health score changed the most vs the previous 30 days.' },
};

const SEND_IDS: WidgetId[] = ['overview', 'delivery', 'opened', 'clicked', 'bounce', 'failed', 'unsub', 'complained', 'domains'];
const ACCOUNT_IDS: WidgetId[] = ['account', 'tickets'];
const OPTIMIZE_IDS: WidgetId[] = ['health', 'fixfirst', 'movers'];
/* Widgets offered in a small (metric tile) and a large format. */
const SIZED: WidgetId[] = ['health', 'fixfirst', 'movers'];
const LIBRARY: { cat: string; ids: WidgetId[] }[] = [
  { cat: 'Send', ids: SEND_IDS },
  { cat: 'Optimize', ids: OPTIMIZE_IDS },
  { cat: 'Account', ids: ACCOUNT_IDS },
];
const ALL_IDS = LIBRARY.flatMap((g) => g.ids);
/* A widget on the dashboard. The same widget can be added more than once, so each has its own key. */
interface Item { key: string; id: WidgetId; size: Size }
const MULTI: WidgetId[] = ['health'];
const DEFAULT_LAYOUT: Item[] = (['delivery', 'opened', 'bounce', 'failed', 'clicked', 'unsub', 'tickets', 'overview', 'account'] as WidgetId[])
  .map((id) => ({ key: id, id, size: 'l' as Size }));

const formatsOf = (id: WidgetId): Format[] => {
  if (id === 'overview') return ['Bar', 'Line'];
  if (id === 'domains' || id === 'tickets' || id === 'movers' || id === 'fixfirst') return ['List'];
  if (id === 'health') return [];
  if (id === 'account') return ['Summary'];
  return ['Number', 'Bar', 'Line'];
};
const isTimed = (id: WidgetId) => DEFS[id].type === 'm' || id === 'overview';

/* Sample data from the Email health score page: biggest movers vs the previous 30 days,
   domains with 10,000+ emails and a move of 3+ points, best improvement first, biggest drop last. */
const MOVERS: { name: string; delta: number; score: number; color: string }[] = [
  { name: 'hello.acme.com', delta: 8, score: 92, color: '#23613c' },
  { name: 'events.acme.com', delta: 6, score: 86, color: '#23613c' },
  { name: 'alerts.acme.com', delta: 3, score: 89, color: '#23613c' },
  { name: 'sales.acme.com', delta: -7, score: 76, color: '#8f5509' },
  { name: 'eu.acme.com', delta: -8, score: 88, color: '#23613c' },
  { name: 'survey.acme.com', delta: -12, score: 63, color: '#b3302f' },
  { name: 'winback.acme.com', delta: -13, score: 48, color: '#b3302f' },
  { name: 'promo-eu.acme.com', delta: -14, score: 38, color: '#b3302f' },
];

/* Sample data from the Email health score page: top 5 domains by priority
   (shortfall below Healthy x delivered volume, boosted for sharp drops). */
const FIX_FIRST: { name: string; score: number; color: string; sent: string; count: string; pts: number }[] = [
  { name: 'winback.acme.com', score: 48, color: '#b3302f', sent: '460,000', count: '106 complaints', pts: 22 },
  { name: 'leads.acme.com', score: 55, color: '#b3302f', sent: '215,000', count: '26 complaints', pts: 11 },
  { name: 'promo.acme.com', score: 82, color: '#8f5509', sent: '1,020,000', count: '102 complaints', pts: 9 },
  { name: 'promo-eu.acme.com', score: 38, color: '#b3302f', sent: '76,000', count: '319 critical failures', pts: 20 },
  { name: 'survey.acme.com', score: 63, color: '#b3302f', sent: '140,000', count: '24 complaints', pts: 16 },
];

const BAR_VALUES: [number, number][] = [[130, 128], [0, 0], [135, 133], [2, 2], [1, 1], [0, 0], [3, 2], [1, 1]];

const OverviewChart = () => (
  <svg viewBox="0 0 290 112" width="100%" height="140" role="img" aria-label="Sending overview bar chart">
    <line x1="0" y1="100.5" x2="290" y2="100.5" stroke="#dfe3e6" />
    {BAR_VALUES.map(([a, d], i) => (
      <g key={i}>
        <rect x={14 + i * 34} y={100 - a * 0.7} width="6" height={Math.max(a * 0.7, 1)} fill="#53bd69" />
        <rect x={22 + i * 34} y={100 - d * 0.7} width="6" height={Math.max(d * 0.7, 1)} fill="#f26d6d" />
      </g>
    ))}
  </svg>
);

/* Sample domains from the Email health score page: name, score (null = not ready), delivered, points lost per measure. */
const HEALTH_DOMAINS: [string, number | null, number, number[] | null][] = [
  ['mg.acme.com', 94, 1240000, [2, 2, 0, 1, 1]], ['news.acme.com', 91, 860000, [3, 3, 1, 1, 1]], ['receipts.acme.com', 96, 410000, [1, 1, 0, 1, 1]],
  ['alerts.acme.com', 89, 220000, [3, 2, 2, 1, 3]], ['hello.acme.com', 92, 95000, [2, 3, 0, 1, 2]], ['billing.acme.com', 97, 61000, [1, 0, 0, 0, 2]],
  ['eu.acme.com', 88, 305000, [4, 3, 1, 2, 2]], ['support.acme.com', 90, 74000, [2, 2, 0, 3, 3]], ['onboarding.acme.com', 93, 133000, [2, 2, 0, 1, 2]],
  ['digest.acme.com', 87, 540000, [4, 3, 2, 2, 2]], ['careers.acme.com', 95, 18000, [1, 1, 0, 2, 1]], ['events.acme.com', 86, 47000, [3, 3, 3, 2, 3]],
  ['promo.acme.com', 82, 1020000, [3, 9, 2, 2, 2]], ['offers.acme.com', 78, 380000, [8, 4, 5, 2, 3]], ['partners.acme.com', 74, 52000, [6, 2, 1, 2, 15]],
  ['app.acme.com', 84, 690000, [4, 3, 1, 6, 2]], ['community.acme.com', 71, 29000, [5, 4, 10, 3, 7]], ['sales.acme.com', 76, 88000, [4, 3, 2, 10, 5]],
  ['winback.acme.com', 48, 460000, [10, 22, 8, 4, 8]], ['leads.acme.com', 55, 215000, [10, 11, 10, 4, 10]], ['survey.acme.com', 63, 140000, [7, 16, 3, 4, 7]],
  ['beta.acme.com', 67, 12500, [6, 6, 1, 10, 10]], ['promo-eu.acme.com', 38, 76000, [10, 18, 10, 4, 20]],
  ['pilot.acme.com', null, 6300, null], ['staging.acme.com', null, 1900, null],
];
const MEASURES = ['Bounces', 'Complaints', 'Spam traps', 'Full mailboxes', 'Critical failures'];
const READY_AT = 10000;
type Tone = 'ok' | 'warn' | 'bad' | 'none';
const TONE: Record<Tone, { label: string; fg: string; arc: string }> = {
  ok: { label: 'Healthy', fg: '#23613c', arc: '#53bd69' },
  warn: { label: 'Caution', fg: '#8f5509', arc: '#c97a12' },
  bad: { label: 'Urgent', fg: '#b3302f', arc: '#e24b4a' },
  none: { label: 'Not ready', fg: '#4b575e', arc: '#b9c3c9' },
};
const toneOf = (score: number): Tone => (score > 85 ? 'ok' : score >= 70 ? 'warn' : 'bad');
const SCORED_DOMAINS = HEALTH_DOMAINS.filter((d) => d[1] != null);
const ACCOUNT_SCORE = Math.round(
  SCORED_DOMAINS.reduce((a, d) => a + (d[1] as number) * d[2], 0) / SCORED_DOMAINS.reduce((a, d) => a + d[2], 0),
);

const HealthWidget = ({ size }: { size: Size }) => {
  const [domain, setDomain] = useState('all');
  const d = HEALTH_DOMAINS.find((x) => x[0] === domain);
  const px = size === 's' ? 72 : 104;
  const R = 30;
  const C = 2 * Math.PI * R;
  const SW = 7;

  let score: number | null;
  let tone: Tone;
  let frac: number;
  let info: ReactNode;
  if (!d) {
    score = ACCOUNT_SCORE; tone = toneOf(score); frac = score / 100;
    info = `${HEALTH_DOMAINS.length} domains, last 30 days`;
  } else if (d[1] == null) {
    score = null; tone = 'none'; frac = d[2] / READY_AT;
    info = <><b>{d[2].toLocaleString('en-US')}</b>{` of ${READY_AT.toLocaleString('en-US')} emails`}</>;
  } else {
    score = d[1]; tone = toneOf(score); frac = score / 100;
    const c = d[3] ?? [];
    const top = c.indexOf(Math.max(...c));
    info = tone === 'ok' ? 'No action needed' : <>{`${MEASURES[top]}:`}<br /><b>{`\u2212${c[top]} pts`}</b></>;
  }
  const t = TONE[tone];

  const counts = (['ok', 'warn', 'bad'] as Tone[]).map((k) => ({
    k,
    n: SCORED_DOMAINS.filter((x) => toneOf(x[1] as number) === k).length,
  }));
  const notReady = HEALTH_DOMAINS.length - SCORED_DOMAINS.length;

  return (
    <div className={`cd-w__body cd-hs cd-hs--${size}`}>
      <div className="cd-hs__top">
        <div className="cd-hs__ring" style={{ width: px, height: px }} role="img" aria-label={`${score ?? 'No'} score, ${t.label}`}>
          <svg width={px} height={px} viewBox="0 0 72 72" aria-hidden="true">
            <circle cx="36" cy="36" r={R} fill="none" stroke="#dfe3e6" strokeWidth={SW} />
            <circle className="cd-hs__arc" cx="36" cy="36" r={R} fill="none" stroke={t.arc} strokeWidth={SW} strokeLinecap="round"
              strokeDasharray={`${Math.max(frac * C - SW, 0.01)} ${C}`} strokeDashoffset={-SW / 2} transform="rotate(-90 36 36)" />
          </svg>
          <span className="cd-hs__val" style={{ fontSize: size === 's' ? 24 : 34, lineHeight: size === 's' ? '30px' : '40px' }}>{score ?? '—'}</span>
        </div>
        <div className="cd-hs__txt">
          <span className="cd-hs__band" style={{ color: t.fg }}>{t.label}</span>
          <div className="cd-hs__info">{info}</div>
        </div>
      </div>
      {size === 'l' && (
        <div className="cd-hs__stats">
          {!d ? (
            <>
              {counts.map(({ k, n }) => (
                <div key={k}><b style={{ color: TONE[k].fg }}>{n}</b><span>{TONE[k].label}</span></div>
              ))}
              <div><b style={{ color: TONE.none.fg }}>{notReady}</b><span>Not ready</span></div>
            </>
          ) : d[3] ? (
            d[3].map((n, i) => (
              <div key={MEASURES[i]}><b>{`\u2212${n}`}</b><span>{MEASURES[i]}</span></div>
            ))
          ) : (
            <div className="cd-hs__wait">Scores start once a domain has delivered {READY_AT.toLocaleString('en-US')} emails.</div>
          )}
        </div>
      )}
      <div className="cd-hs__sel">
        <select value={domain} onChange={(e) => setDomain(e.target.value)} aria-label="Domain to monitor">
          <option value="all">All domains</option>
          {HEALTH_DOMAINS.map((x) => <option key={x[0]} value={x[0]}>{x[0]}</option>)}
        </select>
      </div>
    </div>
  );
};

const WidgetBody = ({ id, size = 'l' }: { id: WidgetId; size?: Size }) => {
  const d = DEFS[id];
  if (id === 'health') return <HealthWidget size={size} />;
  if (d.type === 'm') {
    return (
      <div className="cd-w__body">
        <div className="cd-w__num">{d.val}</div>
        <div className="cd-w__sub">{d.sub}</div>
        <div className="cd-w__range">Day ▾</div>
      </div>
    );
  }
  if (id === 'tickets') {
    return (
      <div className="cd-w__body">
        <div className="cd-w__num">2</div>
        <div className="cd-trows">
          {['10/05/26 5:53 AM', '10/05/26 5:10 AM'].map((t) => (
            <div key={t} className="cd-trow"><span className="cd-pill">Feedback Needed</span>{t}</div>
          ))}
        </div>
      </div>
    );
  }
  if (id === 'overview') {
    return (
      <div className="cd-w__body">
        <div className="cd-legend">
          <span><i style={{ background: '#53bd69' }} />Accepted</span>
          <span><i style={{ background: '#f26d6d' }} />Delivered</span>
          <span><i style={{ background: '#f0a020' }} />Opened</span>
          <span className="cd-legend__more">+1 more</span>
        </div>
        <OverviewChart />
        <div className="cd-w__range">Day ▾</div>
      </div>
    );
  }
  if (id === 'fixfirst' && size === 's') {
    return (
      <div className="cd-w__body cd-w__body--list">
        {FIX_FIRST.map((f, i) => (
          <div key={f.name} className="cd-it">
            <span className="cd-mover__name cd-it__name">{f.name}</span>
            <span className="cd-dots-p" role="img" aria-label={`Priority ${i + 1} of ${FIX_FIRST.length}`}>
              {[0, 1, 2, 3, 4].map((k) => <span key={k} className={k < 5 - i ? 'is-on' : undefined} />)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (id === 'movers' && size === 's') {
    const up = MOVERS[0];
    const down = MOVERS[MOVERS.length - 1];
    return (
      <div className="cd-w__body">
        {[up, down].map((m) => (
          <div key={m.name} className="cd-mv">
            <span className="cd-mv__d" style={{ color: m.delta < 0 ? '#b3302f' : '#23613c' }}>
              <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
                <path d={m.delta < 0 ? 'M6 10 1.5 3.5h9z' : 'M6 2 10.5 8.5h-9z'} fill="currentColor" />
              </svg>
              {Math.abs(m.delta)}<small>pts</small>
            </span>
            <span className="cd-mover__name cd-it__name">{m.name}</span>
          </div>
        ))}
        <div className="cd-w__sub cd-w__foot">vs previous 30 days</div>
      </div>
    );
  }
  if (id === 'fixfirst') {
    return (
      <div className="cd-w__body cd-w__body--list">
        <div className="cd-w__sub">Ranked by score and email volume</div>
        {FIX_FIRST.map((f, i) => (
          <div key={f.name} className="cd-fix">
            <div className="cd-fix__main">
              <span className="cd-fix__name">
                <span className="cd-mover__name">{f.name}</span>
                <span className="cd-dots-p" role="img" aria-label={`Priority ${i + 1} of ${FIX_FIRST.length}`}>
                  {[0, 1, 2, 3, 4].map((k) => <span key={k} className={k < 5 - i ? 'is-on' : undefined} />)}
                </span>
              </span>
              <span className="cd-fix__sub">
                <span>Score: <b style={{ color: f.color }}>{f.score}</b></span>
                <span>Email delivered: <b>{f.sent}</b></span>
              </span>
            </div>
            <div className="cd-fix__driver"><span>{f.count}</span><b>{`\u2212${f.pts} pts`}</b></div>
          </div>
        ))}
      </div>
    );
  }
  if (id === 'movers') {
    return (
      <div className="cd-w__body cd-w__body--list">
        <div className="cd-w__sub">Score change vs previous 30 days</div>
        {MOVERS.map((m) => (
          <div key={m.name} className="cd-mover">
            <span className="cd-mover__name">{m.name}</span>
            <span className="cd-mover__delta" style={{ color: m.delta < 0 ? '#b3302f' : '#23613c' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d={m.delta < 0 ? 'M6 10 1.5 3.5h9z' : 'M6 2 10.5 8.5h-9z'} fill="currentColor" />
              </svg>
              {Math.abs(m.delta)}
            </span>
            <strong className="cd-mover__score" style={{ color: m.color }}>{m.score}</strong>
          </div>
        ))}
      </div>
    );
  }
  if (id === 'account') {
    const rows: [string, string][] = [
      ['Current billing period', '10/01 – 11/01'], ['Mailgun plan', 'Free'], ['Emails sent', '3 / 100'],
      ['Email preview', '216 / 4,000'], ['Log retention', '1 day'],
    ];
    return (
      <div className="cd-w__body">
        <dl className="cd-kv">{rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
      </div>
    );
  }
  return (
    <div className="cd-w__body">
      {['sandbox.mailgun.org', 'mg.example.com'].map((n) => (
        <div key={n} className="cd-dom"><span>{n}</span><span className="cd-ok">Verified</span></div>
      ))}
    </div>
  );
};

const FormatTile = ({ f }: { f: Format }) => {
  const cls = f === 'Number' ? 'cd-ft cd-ft--num' : f === 'Bar' ? 'cd-ft cd-ft--bar' : f === 'Line' ? 'cd-ft cd-ft--line' : 'cd-ft cd-ft--list';
  return (
    <span className={cls} title={f}>
      {f === 'Number' && '123'}
      {f === 'Bar' && (<svg viewBox="0 0 18 18" fill="currentColor" aria-hidden="true"><rect x="3" y="4" width="2" height="11" /><rect x="7" y="8" width="2" height="7" /><rect x="11" y="6" width="2" height="9" /><rect x="15" y="10" width="1.5" height="5" /></svg>)}
      {f === 'Line' && (<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M2 12l4-4 3 3 7-6" /><path d="M2 15l4-3 3 2 7-5" opacity=".6" /></svg>)}
      {f === 'List' && (<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="4" cy="5" r="1.2" /><circle cx="4" cy="9" r="1.2" /><circle cx="4" cy="13" r="1.2" /><path d="M8 5h7M8 9h7M8 13h7" /></svg>)}
      {f === 'Summary' && (<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="12" height="12" rx="2" /><path d="M6 7h6M6 11h4" /></svg>)}
    </span>
  );
};

const Modal = ({ title, size, onClose, children, footer }: { title?: string; size: 'sm' | 'lg'; onClose: () => void; children: ReactNode; footer: ReactNode }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="cd-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`cd-modal cd-modal--${size}`} role="dialog" aria-modal="true" aria-label={title}>
        {title && (
          <div className="cd-modal__head">
            <h2>{title}</h2>
            <button type="button" className="cd-modal__close" onClick={onClose} aria-label="Close">×</button>
          </div>
        )}
        <div className="cd-modal__body">{children}</div>
        <div className="cd-modal__foot">{footer}</div>
      </div>
    </div>
  );
};

export const CustomizableDashboardPage = () => {
  const [screen, setScreen] = useState<'dash' | 'plans'>('dash');
  const [editing, setEditing] = useState(false);
  const [layout, setLayout] = useState<Item[]>(DEFAULT_LAYOUT);
  const [baseline, setBaseline] = useState<Item[]>(DEFAULT_LAYOUT);
  const nextKey = useRef(0);
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modal, setModal] = useState<'add' | 'leave' | null>(null);
  const [pickSize, setPickSize] = useState<Partial<Record<WidgetId, Size>>>({});
  const [tab, setTab] = useState('Send');
  const [flash, setFlash] = useState<string[]>([]);
  const [homeBanner, setHomeBanner] = useState(true);
  const [editBanner, setEditBanner] = useState(true);
  const [toast, setToast] = useState('');

  const countOf = (id: WidgetId) => layout.filter((i) => i.id === id).length;
  const canAdd = (id: WidgetId) => MULTI.includes(id) || countOf(id) === 0;
  const available = ALL_IDS.filter(canAdd).length;

  const customize = () => { setEditing(true); setEditBanner(true); setSaved(false); };
  const typeOf = (item: Item) => (SIZED.includes(item.id) ? (item.size === 's' ? 'm' : 'b') : DEFS[item.id].type);
  const openLibrary = () => { setTab('Send'); setPickSize({}); setModal('add'); };
  const remove = (key: string) => { setLayout(layout.filter((i) => i.key !== key)); setDirty(true); };
  const cancel = () => {
    if (dirty) { setModal('leave'); return; }
    setEditing(false);
    setLayout(baseline);
  };
  const discard = () => {
    setModal(null); setEditing(false); setDirty(false); setSaved(false);
    setLayout(baseline);
    setToast('Changes discarded.');
  };
  const addWidget = (id: WidgetId) => {
    const size: Size = SIZED.includes(id) ? (pickSize[id] ?? 's') : 'l';
    const key = `${id}-new-${nextKey.current++}`;
    setLayout([...layout, { key, id, size }]);
    setFlash([key]);
    window.setTimeout(() => setFlash([]), 1400);
    setDirty(true);
    setToast(UPGRADE_FLOW ? `${DEFS[id].title} added to your preview. Upgrade to save it.` : `${DEFS[id].title} added to your dashboard.`);
  };
  const upgrade = () => { setModal(null); setScreen('plans'); };
  const save = () => {
    setBaseline(layout); setModal(null); setEditing(false); setDirty(false); setSaved(true);
    setToast('Dashboard saved.');
  };
  const primaryAction = UPGRADE_FLOW ? upgrade : save;
  const primaryLabel = UPGRADE_FLOW ? 'Upgrade to save' : 'Save changes';
  const choosePlan = () => {
    setScreen('dash'); setEditing(false); setModal(null); setDirty(false); setSaved(true);
    setToast('Dashboard saved.');
  };

  const metrics = layout.filter((i) => typeOf(i) === 'm');
  const bigs = layout.filter((i) => typeOf(i) === 'b');

  const renderWidget = ({ key, id, size }: Item) => (
    <section key={key} className={`cd-w${typeOf({ key, id, size }) === 'b' ? ' cd-w--big' : ''}${flash.includes(key) ? ' is-new' : ''}`} aria-label={DEFS[id].title}>
      <div className="cd-w__head">
        {editing && <span className="cd-grip" aria-hidden="true">⋮⋮</span>}
        <span className="cd-w__title">{DEFS[id].title}</span>
        {editing
          ? <button type="button" className="cd-rm" onClick={() => remove(key)} aria-label={`Remove ${DEFS[id].title}`}>×</button>
          : <span className="cd-dots" aria-hidden="true">•••</span>}
      </div>
      <WidgetBody id={id} size={size} />
      {editing && <span className="cd-corner" aria-hidden="true" />}
    </section>
  );

  const plan = (name: string, price: string, list: string[], rec?: boolean) => (
    <div className={`cd-plan${rec ? ' is-rec' : ''}`}>
      <div className="cd-plan__head"><span>{name}</span>{rec && <span className="cd-tag">Recommended</span>}</div>
      <div className="cd-plan__price">{price}<small> /month</small></div>
      <ul className="cd-incl">{list.map((x) => <li key={x}>{x}</li>)}</ul>
      <Button hierarchy={rec ? 'primary' : 'secondary'} onClick={choosePlan}>{`Choose ${name}`}</Button>
    </div>
  );

  const group = LIBRARY.find((g) => g.cat === tab) ?? LIBRARY[0];

  return (
    <Page
      navigationProps={{ defaultActive: 'dashboard' }}
      headerProps={{ accountName: 'Bob', accountCompany: 'Acme, Inc.', hasSubAccountTag: false }}
      pageHeaderProps={{ title: screen === 'plans' ? 'Choose a plan' : 'Dashboard' }}
    >
      <div className="cd">
        {screen === 'plans' ? (
          <>
            <div className="cd-bar">
              <Button hierarchy="tertiary" onClick={() => setScreen('dash')}>Back to dashboard</Button>
            </div>
            <Banner type="info">{`Your dashboard layout (${layout.length} widgets) will be saved when you upgrade.`}</Banner>
            <div className="cd-plans">
              {plan('Foundation', '$35', ['50,000 emails', 'Custom dashboard', '5-day log retention'])}
              {plan('Scale', '$90', ['100,000 emails', 'Custom dashboard', '30-day log retention', 'Dedicated IPs'], true)}
            </div>
            <p className="cd-fine">Placeholder plans and prices for the prototype.</p>
          </>
        ) : (
          <>
            <div className="cd-bar">
              {editing && UPGRADE_FLOW && <span className="cd-tag">Preview</span>}
              <div className="cd-bar__actions">
                {editing ? (
                  <>
                    <Button hierarchy="secondary-neutral" onClick={cancel}>Cancel</Button>
                    <Button hierarchy="secondary" onClick={openLibrary}>{`Widget library (${available})`}</Button>
                    <Button hierarchy="primary" onClick={primaryAction}>{primaryLabel}</Button>
                  </>
                ) : (
                  <Button hierarchy="primary" onClick={customize}>Customize</Button>
                )}
              </div>
            </div>

            {editing && editBanner && (
              <Banner type="info" onClose={() => setEditBanner(false)}>
                {UPGRADE_FLOW
                  ? <><strong>Preview mode.</strong> Add widgets from the library, rearrange, and resize to see how your dashboard could look. Saving your layout requires a paid plan.</>
                  : <><strong>Customizing your dashboard.</strong> Add widgets from the library, rearrange, and resize them, then save your changes.</>}
              </Banner>
            )}
            {!editing && !saved && homeBanner && (
              <Banner type="info" onClose={() => setHomeBanner(false)}>
                <strong>Customize your dashboard.</strong> {`Select from ${ALL_IDS.length} different widgets covering delivery, engagement, domains and more, then rearrange and resize them.${UPGRADE_FLOW ? ' Try it in preview mode.' : ''}`}
              </Banner>
            )}

            <div className={editing ? 'cd-edit' : undefined}>
              <div className="cd-grid cd-grid--metric">{metrics.map(renderWidget)}</div>
              <div className="cd-grid cd-grid--big">
                {bigs.map(renderWidget)}
                {!layout.length && <div className="cd-empty">No widgets. Add some from the widget library.</div>}
              </div>
            </div>
          </>
        )}
      </div>

      {modal === 'add' && (
        <Modal
          title="Widget library"
          size="lg"
          onClose={() => setModal(null)}
          footer={
            <>
              <span className="cd-modal__left">{`${layout.length} widgets on your dashboard`}</span>
              <Button hierarchy="primary" onClick={() => setModal(null)}>Done</Button>
            </>
          }
        >
          <div className="cd-tabs" role="tablist">
            {LIBRARY.map((g) => (
              <button key={g.cat} type="button" role="tab" aria-selected={tab === g.cat} onClick={() => setTab(g.cat)}>{`${g.cat} (${g.ids.length})`}</button>
            ))}
            <button type="button" role="tab" disabled>Inspect (coming soon)</button>
          </div>
          <p className="cd-msub"><b>{available}</b> {`of ${ALL_IDS.length} widgets available to add`}</p>
          <div className="cd-picks">
            {group.ids.map((id) => {
              const n = countOf(id);
              const sz = pickSize[id] ?? 's';
              const addable = canAdd(id);
              return (
                <div key={id} className={`cd-pickwrap${n ? ' is-have' : ''}`}>
                  <div className="cd-pick">
                    <span className="cd-pick__t">{DEFS[id].title}</span>
                    <p>{DEFS[id].desc}</p>
                    {!SIZED.includes(id) && <span className="cd-ftiles">{formatsOf(id).map((f) => <FormatTile key={f} f={f} />)}</span>}
                    {isTimed(id) && <span className="cd-pick__rng">Day ▾</span>}
                  </div>
                  <div className="cd-pickfoot">
                    {SIZED.includes(id) && (
                      <div className="cd-size" role="group" aria-label={`${DEFS[id].title} size`}>
                        {(['s', 'l'] as Size[]).map((z) => (
                          <button key={z} type="button" className="cd-size__opt" aria-pressed={sz === z} onClick={() => setPickSize({ ...pickSize, [id]: z })}>
                            {z === 's' ? 'Small' : 'Large'}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="cd-pickfoot__row">
                      <span className="cd-pick__have">{n ? (MULTI.includes(id) ? `${n} on dashboard` : 'On dashboard') : ''}</span>
                      <Button hierarchy="secondary" size="small" disabled={!addable} onClick={() => addWidget(id)}>{addable ? 'Add' : 'Added'}</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}

      {modal === 'leave' && (
        <Modal
          size="sm"
          onClose={() => setModal(null)}
          footer={
            <>
              <Button hierarchy="tertiary" onClick={discard}>Discard changes</Button>
              <Button hierarchy="secondary" onClick={() => setModal(null)}>Keep editing</Button>
              <Button hierarchy="primary" onClick={primaryAction}>{primaryLabel}</Button>
            </>
          }
        >
          <h2 className="cd-leave__t">Leave without saving?</h2>
          <p className="cd-leave__p">{UPGRADE_FLOW
            ? 'Your preview layout can’t be saved on the Free plan, so your changes will be discarded. You can upgrade to keep it.'
            : 'Your changes will be discarded if you leave without saving.'}</p>
        </Modal>
      )}

      {toast && <Toast onClose={() => setToast('')}>{toast}</Toast>}
    </Page>
  );
};

export default CustomizableDashboardPage;
