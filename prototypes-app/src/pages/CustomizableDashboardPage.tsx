import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Page } from '@ds/patterns/Page/Page';
import { Button } from '@ds/components/Button/Button';
import { Banner } from '@ds/components/Banner/Banner';
import { Toast } from '@ds/components/Toast/Toast';
import './customizable-dashboard.css';

/* Free-plan preview of the paid, customizable dashboard.
   Customize enters a sandbox; saving requires an upgrade, which is disclosed up front. */

type WidgetId =
  | 'delivery' | 'opened' | 'bounce' | 'failed' | 'clicked' | 'unsub' | 'complained'
  | 'tickets' | 'overview' | 'account' | 'domains' | 'movers' | 'fixfirst';
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
  fixfirst: { type: 'b', title: 'Fix these first', desc: 'Domains to work on first, ranked by how far they are below Healthy and how much email they deliver.' },
  movers: { type: 'b', title: 'Biggest movers', desc: 'Domains whose email health score changed the most vs the previous 30 days.' },
};

const SEND_IDS: WidgetId[] = ['overview', 'delivery', 'opened', 'clicked', 'bounce', 'failed', 'unsub', 'complained', 'domains'];
const ACCOUNT_IDS: WidgetId[] = ['account', 'tickets'];
const OPTIMIZE_IDS: WidgetId[] = ['fixfirst', 'movers'];
const LIBRARY: { cat: string; ids: WidgetId[] }[] = [
  { cat: 'Send', ids: SEND_IDS },
  { cat: 'Optimize', ids: OPTIMIZE_IDS },
  { cat: 'Account', ids: ACCOUNT_IDS },
];
const ALL_IDS = LIBRARY.flatMap((g) => g.ids);
const DEFAULT_LAYOUT: WidgetId[] = ['delivery', 'opened', 'bounce', 'failed', 'clicked', 'unsub', 'tickets', 'overview', 'account'];

const formatsOf = (id: WidgetId): Format[] => {
  if (id === 'overview') return ['Bar', 'Line'];
  if (id === 'domains' || id === 'tickets' || id === 'movers' || id === 'fixfirst') return ['List'];
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

const WidgetBody = ({ id }: { id: WidgetId }) => {
  const d = DEFS[id];
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
  if (id === 'fixfirst') {
    return (
      <div className="cd-w__body cd-w__body--list">
        <div className="cd-w__sub">Ranked by how far a domain is below Healthy (over 85) and how much email it delivers</div>
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
  const [layout, setLayout] = useState<WidgetId[]>(DEFAULT_LAYOUT);
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modal, setModal] = useState<'add' | 'leave' | null>(null);
  const [picked, setPicked] = useState<WidgetId[]>([]);
  const [tab, setTab] = useState('Send');
  const [flash, setFlash] = useState<WidgetId[]>([]);
  const [homeBanner, setHomeBanner] = useState(true);
  const [editBanner, setEditBanner] = useState(true);
  const [toast, setToast] = useState('');

  const available = ALL_IDS.filter((i) => !layout.includes(i)).length;

  const customize = () => { setEditing(true); setEditBanner(true); setSaved(false); };
  const openLibrary = () => { setTab('Send'); setPicked([]); setModal('add'); };
  const remove = (id: WidgetId) => { setLayout(layout.filter((i) => i !== id)); setDirty(true); };
  const cancel = () => {
    if (dirty) { setModal('leave'); return; }
    setEditing(false);
    setLayout(DEFAULT_LAYOUT);
  };
  const discard = () => {
    setModal(null); setEditing(false); setDirty(false); setSaved(false);
    setLayout(DEFAULT_LAYOUT);
    setToast('Changes discarded.');
  };
  const commitAdd = () => {
    setLayout([...layout, ...picked]);
    setFlash(picked);
    window.setTimeout(() => setFlash([]), 1400);
    setPicked([]); setDirty(true); setModal(null);
    setToast('Added to your preview. Upgrade to save it.');
  };
  const upgrade = () => { setModal(null); setScreen('plans'); };
  const choosePlan = () => {
    setScreen('dash'); setEditing(false); setModal(null); setDirty(false); setSaved(true);
    setToast('Dashboard saved.');
  };

  const metrics = layout.filter((i) => DEFS[i].type === 'm');
  const bigs = layout.filter((i) => DEFS[i].type === 'b');

  const renderWidget = (id: WidgetId) => (
    <section key={id} className={`cd-w${DEFS[id].type === 'b' ? ' cd-w--big' : ''}${flash.includes(id) ? ' is-new' : ''}`} aria-label={DEFS[id].title}>
      <div className="cd-w__head">
        {editing && <span className="cd-grip" aria-hidden="true">⋮⋮</span>}
        <span className="cd-w__title">{DEFS[id].title}</span>
        {editing
          ? <button type="button" className="cd-rm" onClick={() => remove(id)} aria-label={`Remove ${DEFS[id].title}`}>×</button>
          : <span className="cd-dots" aria-hidden="true">•••</span>}
      </div>
      <WidgetBody id={id} />
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
              {editing && <span className="cd-tag">Preview</span>}
              <div className="cd-bar__actions">
                {editing ? (
                  <>
                    <Button hierarchy="secondary-neutral" onClick={cancel}>Cancel</Button>
                    <Button hierarchy="secondary" onClick={openLibrary}>{`Widget library (${available})`}</Button>
                    <Button hierarchy="primary" onClick={upgrade}>Upgrade to save</Button>
                  </>
                ) : (
                  <Button hierarchy="primary" onClick={customize}>Customize</Button>
                )}
              </div>
            </div>

            {editing && editBanner && (
              <Banner type="info" onClose={() => setEditBanner(false)}>
                <strong>Preview mode.</strong> Add widgets from the library, rearrange, and resize to see how your dashboard could look. Saving your layout requires a paid plan.
              </Banner>
            )}
            {!editing && !saved && homeBanner && (
              <Banner type="info" onClose={() => setHomeBanner(false)}>
                <strong>Customize your dashboard.</strong> {`Select from ${ALL_IDS.length} different widgets covering delivery, engagement, domains and more, then rearrange and resize them. Try it in preview mode.`}
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
              <span className="cd-modal__left">{`Widgets selected (${picked.length})`}</span>
              <Button hierarchy="secondary" onClick={() => setModal(null)}>Cancel</Button>
              <Button hierarchy="primary" disabled={!picked.length} onClick={commitAdd}>Add to dashboard</Button>
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
              const have = layout.includes(id);
              const on = picked.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  className="cd-pick"
                  aria-pressed={on}
                  disabled={have}
                  onClick={() => setPicked(on ? picked.filter((p) => p !== id) : [...picked, id])}
                >
                  <span className="cd-pick__t"><span className="cd-cb">✓</span>{DEFS[id].title}</span>
                  <p>{DEFS[id].desc}</p>
                  <span className="cd-ftiles">{formatsOf(id).map((f) => <FormatTile key={f} f={f} />)}</span>
                  {isTimed(id) && <span className="cd-pick__rng">Day ▾</span>}
                  {have && <span className="cd-pick__have">Already on dashboard</span>}
                </button>
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
              <Button hierarchy="primary" onClick={upgrade}>Upgrade to save</Button>
            </>
          }
        >
          <h2 className="cd-leave__t">Leave without saving?</h2>
          <p className="cd-leave__p">Your preview layout can’t be saved on the Free plan, so your changes will be discarded. You can upgrade to keep it.</p>
        </Modal>
      )}

      {toast && <Toast onClose={() => setToast('')}>{toast}</Toast>}
    </Page>
  );
};

export default CustomizableDashboardPage;
