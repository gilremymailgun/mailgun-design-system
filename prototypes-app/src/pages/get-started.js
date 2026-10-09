/* ==========================================================================
   Get started guide: main content
   Framework-free. Renders the page header, tabs, step list and step panels.

   Usage:
     GetStarted.mount('#get-started-root');
     GetStarted.mount(element, { activeStep: 'health', healthScore: { state: 'ready' } });

   Demo shortcut (works with hash routing because it uses the real query string):
     /prototypes/?healthScore=ready#/get-started
     /prototypes/?step=health&healthScore=none#/get-started
     Guide completion shows 5/7 on step 1 and 6/7 on step 2 (see autoComplete).

   Events: the root element fires a bubbling "gs:action" CustomEvent for every
   button that should do something in your app. Read event.detail.action.
     run-placement-test        Step 1 button
     view-health-score         Step 2 button (score ready)
     acknowledge-health-score  Step 2 button (score not ready yet)
     toggle-score-notification Step 2 toggle (detail.value is true/false)
   ========================================================================== */

(function (global) {
  'use strict';

  /* ------------------------------------------------------------------------
     Content + data. Everything the page shows lives here.
     ------------------------------------------------------------------------ */

  var DEFAULTS = {
    guide: {
      title: 'Get started guide',
      subtitle: 'Welcome to Mailgun! Let\u2019s get some of the basics set up.',
      completed: 5, /* already done before the Optimize steps: 5/7 on step 1, 6/7 on step 2 */
      total: 7
    },

    tabs: [
      { id: 'send', label: 'Send', done: 5, total: 5 },
      { id: 'optimize', label: 'Optimize', done: 0, total: 8 }
    ],
    activeTab: 'optimize',

    steps: [
      { id: 'placement', label: 'Conduct a placement test', icon: 'inbox', duration: '2 mins', done: false },
      { id: 'health', label: 'Review your email health score', icon: 'heart-pulse', duration: '1 min' }
    ],
    activeStep: 'placement',

    /* true: steps before the active one count as done, so the guide completion
       and the green checks follow the step you are viewing (5/7, then 6/7).
       false: use each step's own "done" flag and guide.completed as given. */
    autoComplete: true,

    /* Step 1: inbox placement test --------------------------------------- */
    placement: {
      title: 'Check where your emails will land before you send',
      description: 'Inbox placement tests show whether your email reaches the inbox, promotions, or spam.',
      segments: [
        { key: 'inbox', label: 'Inbox', value: 69.92, color: 'var(--gs-success)' },
        { key: 'missing', label: 'Missing', value: 7.52, color: 'var(--gs-info)' },
        { key: 'spam', label: 'Spam', value: 22.56, color: 'var(--gs-danger)' }
      ],
      overall: { label: 'Low', tone: 'low' },
      checks: [
        { label: 'SpamAssassin', value: '2.3', ok: true },
        { label: 'SPF', value: 'Passed', ok: true },
        { label: 'DKIM', value: 'Passed', ok: true },
        { label: 'DMARC', value: 'Passed', ok: true }
      ],
      benefits: [
        {
          icon: 'send',
          title: 'See where your emails actually land',
          text: 'Delivered emails can still land in spam. A test shows where yours really go.'
        },
        {
          icon: 'target',
          title: 'Spot problems before you send',
          text: 'Run a test before each campaign to catch placement problems early.'
        },
        {
          icon: 'mail-open',
          title: 'Find out what to fix',
          text: 'Your domain checks (SPF, DKIM, and DMARC) show what may be hurting your inbox placement.'
        }
      ],
      cta: { label: 'Run your first test', action: 'run-placement-test' }
    },

    /* Step 2: email health score ----------------------------------------- */
    healthScore: {
      state: 'none', /* 'none' = not enough sends yet, 'ready' = user has a score */
      titles: {
        none: 'Your email health score isn\u2019t ready yet',
        ready: 'Your email health score is ready'
      },
      description:
        'A real-time score of your sending activity, so you can spot and fix deliverability issues before they affect your reputation.',

      requiredEmails: 10000,
      sentEmails: 6300,
      trackerNote: '', /* optional, e.g. 'Based on emails sent in the last 30 days' */
      notify: false,
      notifyHelp: 'You\u2019ll get an email as soon as your score is ready.',

      exampleLabel: 'What your score will look like',
      actualLabel: 'Your score',
      highlightBand: false, /* true outlines the band the score falls in */
      showMetricCaption: false, /* true adds "Bars show each metric's share of the total..." */

      /* Shown while the user has no score. Illustrative only. */
      example: {
        score: 88,
        metrics: [
          { label: 'Bounce', value: 4 },
          { label: 'Complaint', value: 2 },
          { label: 'Spam trap', value: 1 },
          { label: 'Mailbox full', value: 2 },
          { label: 'Hard failure', value: 3 }
        ]
      },

      /* Shown once the user has a score. Replace with the account's real data. */
      actual: {
        score: 50,
        metrics: [
          { label: 'Bounce', value: 10 },
          { label: 'Complaint', value: 15 },
          { label: 'Spam trap', value: 5 },
          { label: 'Mailbox full', value: 10 },
          { label: 'Hard failure', value: 10 }
        ]
      },

      why: [
        {
          icon: 'send',
          title: 'Catch problems before they become outages',
          text: 'Flags bounces, spam complaints, and spam traps early, including the new 0.3% complaint threshold.'
        },
        {
          icon: 'target',
          title: 'Drill down to the root cause',
          text: 'Filter by domain, IP, or subaccount for a 30-day breakdown of all five signals.'
        },
        {
          icon: 'mail-open',
          title: 'No deliverability expertise needed',
          text: 'Skip the raw logs. Check one score and know where to look.'
        }
      ],

      whatScoresMeanHref: '#',
      /* Button when the score is ready */
      cta: { label: 'See full report', action: 'view-health-score' },
      /* Button when the score is not ready yet */
      ctaNone: { label: 'Got it', action: 'acknowledge-health-score' }
    }
  };

  /* Score bands: Healthy >85, At risk 70-85, Requires attention <70 */
  var BANDS = {
    healthy: { name: 'Healthy', range: '>85', color: 'var(--gs-band-healthy)' },
    risk: { name: 'At risk', range: '70\u201385', color: 'var(--gs-band-risk)' },
    attention: { name: 'Requires attention', range: '<70', color: 'var(--gs-band-attention)' }
  };

  function bandFor(score) {
    if (score > 85) return 'healthy';
    if (score >= 70) return 'risk';
    return 'attention';
  }

  /* ------------------------------------------------------------------------
     Icons. Simple stroke icons as stand-ins: swap for your icon set.
     ------------------------------------------------------------------------ */

  var ICONS = {
    inbox:
      '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    'heart-pulse':
      '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'mail-open':
      '<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>',
    activity:
      '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    'shield-check':
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'user-check':
      '<path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'
  };

  function icon(name, size) {
    return (
      '<svg class="gs-svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true" focusable="false">' + (ICONS[name] || '') + '</svg>'
    );
  }

  var DOTS_ICON =
    '<svg class="gs-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' +
    '<circle cx="5" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="19" cy="12" r="1.75"/></svg>';

  /* ------------------------------------------------------------------------
     Small helpers
     ------------------------------------------------------------------------ */

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function isObject(v) {
    return v && typeof v === 'object' && !Array.isArray(v);
  }

  function merge(base, extra) {
    var out = {};
    Object.keys(base).forEach(function (k) {
      if (isObject(base[k])) out[k] = merge(base[k], {});
      else if (Array.isArray(base[k])) out[k] = JSON.parse(JSON.stringify(base[k]));
      else out[k] = base[k];
    });
    Object.keys(extra || {}).forEach(function (k) {
      out[k] = isObject(extra[k]) && isObject(out[k]) ? merge(out[k], extra[k]) : extra[k];
    });
    return out;
  }

  function formatNumber(n) {
    return Number(n).toLocaleString('en-US');
  }

  /* ------------------------------------------------------------------------
     Ring chart (SVG). Segments are drawn as round-capped arcs.
     ------------------------------------------------------------------------ */

  function ring(opts) {
    var size = opts.size;
    var sw = opts.stroke;
    var r = (size - sw) / 2;
    var c = 2 * Math.PI * r;
    var mid = size / 2;
    var gap = opts.gap || 0;
    var total = opts.total || opts.segments.reduce(function (a, s) { return a + s.value; }, 0);
    var rotate = opts.rotate === undefined ? -90 : opts.rotate;
    var pos = 0;
    var out = '';

    if (opts.track) {
      out += '<circle cx="' + mid + '" cy="' + mid + '" r="' + r + '" fill="none" stroke="' + opts.track +
        '" stroke-width="' + sw + '"/>';
    }

    opts.segments.forEach(function (s) {
      var len = (s.value / total) * c;
      var dash = Math.max(len - gap - sw, 0.01); /* round caps add sw in total */
      var start = pos + gap / 2 + sw / 2;
      out += '<circle cx="' + mid + '" cy="' + mid + '" r="' + r + '" fill="none" stroke="' + s.color +
        '" stroke-width="' + sw + '" stroke-linecap="round" stroke-dasharray="' + dash.toFixed(2) + ' ' +
        (c - dash).toFixed(2) + '" stroke-dashoffset="' + (-start).toFixed(2) +
        '" data-dash="1" style="--dash:' + dash.toFixed(2) + 'px;--circ:' + c.toFixed(2) +
        'px" transform="rotate(' + rotate + ' ' + mid + ' ' + mid + ')"/>';
      pos += len;
    });

    return (
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size +
      '" role="img" aria-label="' + esc(opts.label) + '">' + out + '</svg>'
    );
  }

  /* ------------------------------------------------------------------------
     Pieces shared by the step panels
     ------------------------------------------------------------------------ */

  function panelHeader(title, description) {
    return (
      '<div class="gs-panel__header">' +
        '<div class="gs-panel__titles">' +
          '<h2 class="gs-panel__title">' + esc(title) + '</h2>' +
          '<p class="gs-panel__desc">' + esc(description) + '</p>' +
        '</div>' +
      '</div>'
    );
  }

  function benefits(list) {
    return (
      '<div class="gs-benefits">' +
      list.map(function (b) {
        return (
          '<div class="gs-benefit">' +
            '<span class="gs-benefit__tile">' + icon(b.icon, 24) + '</span>' +
            '<div class="gs-benefit__text">' +
              '<p class="gs-benefit__title">' + esc(b.title) + '</p>' +
              '<p class="gs-benefit__desc">' + esc(b.text) + '</p>' +
            '</div>' +
          '</div>'
        );
      }).join('') +
      '</div>'
    );
  }

  function primaryButton(cta, focusKey) {
    return (
      '<div class="gs-actions">' +
        '<button type="button" class="gs-btn gs-btn--primary" data-action="' + esc(cta.action) +
        '" data-focus-key="' + focusKey + '">' + esc(cta.label) + '</button>' +
      '</div>'
    );
  }

  /* ------------------------------------------------------------------------
     Step 1: inbox placement test
     ------------------------------------------------------------------------ */

  function renderPlacement(p) {
    var inbox = p.segments.filter(function (s) { return s.key === 'inbox'; })[0] || p.segments[0];

    var list = p.segments.map(function (s) {
      return (
        '<li class="gs-dotlist__item">' +
          '<span class="gs-dot" style="background:' + s.color + '"></span>' +
          '<span class="gs-dotlist__label">' + esc(s.label) + '</span>' +
          '<span>' + s.value.toFixed(2) + ' %</span>' +
        '</li>'
      );
    }).join('');

    var checks = p.checks.map(function (c) {
      return (
        '<li class="gs-check">' +
          '<span>' + esc(c.label) + '</span>' +
          '<span class="gs-check__value' + (c.ok === false ? ' gs-check__value--fail' : '') + '">' + esc(c.value) + '</span>' +
        '</li>'
      );
    }).join('');

    return (
      '<div class="gs-panel" id="gs-panel" role="region" aria-label="' + esc(p.title) + '">' +
        panelHeader(p.title, p.description) +
        '<div class="gs-example">' +
          '<div class="gs-example__top">' +
            '<div class="gs-score">' +
              '<div class="gs-ring">' +
                ring({
                  size: 125, stroke: 14, gap: 4, rotate: -75, segments: p.segments,
                  label: 'Example: ' + Math.round(inbox.value) + ' percent of test emails reached the inbox'
                }) +
                '<div class="gs-ring__center">' +
                  '<span class="gs-ring__value" data-count-to="' + Math.round(inbox.value) + '" data-count-suffix="%">' + Math.round(inbox.value) + '%</span>' +
                  '<span class="gs-ring__caption">' + esc(inbox.label) + '</span>' +
                '</div>' +
              '</div>' +
              '<span class="gs-tag">Example</span>' +
            '</div>' +
            '<div class="gs-example__text">' +
              '<div class="gs-example__head">' +
                '<p class="gs-example__title">Overall placement</p>' +
                '<p class="gs-example__meta">Share of test emails</p>' +
              '</div>' +
              '<ul class="gs-dotlist">' + list + '</ul>' +
              '<p class="gs-overall gs-overall--' + esc(p.overall.tone) + '">OVERALL SCORE: <strong>' + esc(p.overall.label) + '</strong></p>' +
            '</div>' +
          '</div>' +
          '<ul class="gs-checks">' + checks + '</ul>' +
        '</div>' +
        benefits(p.benefits) +
        primaryButton(p.cta, 'cta-placement') +
      '</div>'
    );
  }

  /* ------------------------------------------------------------------------
     Step 2: email health score
     ------------------------------------------------------------------------ */

  function legend(current, highlight) {
    return (
      '<div class="gs-legend" role="list" aria-label="Score bands">' +
      ['healthy', 'risk', 'attention'].map(function (key) {
        var b = BANDS[key];
        return (
          '<span class="gs-legend__item" role="listitem"' + (highlight && key === current ? ' aria-current="true"' : '') + '>' +
            '<span class="gs-dot" style="background:' + b.color + '"></span>' +
            esc(b.name) + ' ' + esc(b.range) +
          '</span>'
        );
      }).join('') +
      '</div>'
    );
  }

  function scoreCard(data, hs, isExample) {
    var band = bandFor(data.score);
    var total = data.metrics.reduce(function (a, m) { return a + m.value; }, 0) || 1;

    var rows = data.metrics.map(function (m) {
      return (
        '<div class="gs-metric">' +
          '<span>' + esc(m.label) + '</span>' +
          '<span class="gs-metric__bar"><span style="width:' + ((m.value / total) * 100).toFixed(1) + '%"></span></span>' +
          '<span class="gs-metric__value">' + m.value + '</span>' +
        '</div>'
      );
    }).join('');

    var caption = '';
    if (hs.showMetricCaption) {
      var top = data.metrics.slice().sort(function (a, b) { return b.value - a.value; })[0];
      caption = '<p class="gs-caption">Bars show each metric\u2019s share of the total. Largest: ' +
        esc(top.label) + ' (' + Math.round((top.value / total) * 100) + '%).</p>';
    }

    return (
      '<div class="gs-example">' +
        '<p class="gs-example__label">' + esc(isExample ? hs.exampleLabel : hs.actualLabel) + '</p>' +
        '<div class="gs-example__top">' +
          '<div class="gs-score">' +
            '<div class="gs-ring">' +
              ring({
                size: 125, stroke: 12, total: 100, track: 'var(--gs-border-subtle)',
                segments: [{ value: data.score, color: BANDS[band].color }],
                label: (isExample ? 'Example score: ' : 'Your score: ') + data.score + ' out of 100, ' + BANDS[band].name
              }) +
              '<div class="gs-ring__center">' +
                '<span class="gs-ring__value gs-ring__value--score gs-ring__value--' + band + '" data-count-to="' + data.score + '">' + data.score + '</span>' +
              '</div>' +
            '</div>' +
            '<span class="gs-status gs-status--' + band + '">' + esc(BANDS[band].name) + '</span>' +
            (isExample ? '<span class="gs-tag">Example</span>' : '') +
          '</div>' +
          '<div class="gs-example__text">' +
            '<div class="gs-example__head">' +
              '<p class="gs-example__title">Metrics impacting score</p>' +
              '<p class="gs-example__meta">Count</p>' +
            '</div>' +
            '<div class="gs-metrics">' + rows + '</div>' +
            caption +
          '</div>' +
        '</div>' +
        '<div class="gs-legend-row">' +
          legend(band, hs.highlightBand) +
          '<a class="gs-link" href="' + esc(hs.whatScoresMeanHref) + '">What scores mean</a>' +
        '</div>' +
      '</div>'
    );
  }

  function tracker(hs) {
    var pct = Math.min(100, Math.floor((hs.sentEmails / hs.requiredEmails) * 100));
    var remaining = Math.max(hs.requiredEmails - hs.sentEmails, 0);
    return (
      '<div class="gs-tracker">' +
        '<p class="gs-tracker__title">' + formatNumber(hs.requiredEmails) + ' sent emails required</p>' +
        '<div class="gs-tracker__row">' +
          '<div class="gs-tracker__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct +
            '" aria-label="Progress toward ' + formatNumber(hs.requiredEmails) + ' sent emails">' +
            '<div class="gs-tracker__fill" style="width:' + pct + '%"></div>' +
          '</div>' +
          '<span class="gs-tracker__percent" data-count-to="' + pct + '" data-count-suffix="%">' + pct + '%</span>' +
        '</div>' +
        '<p class="gs-tracker__hint">Send ' + formatNumber(remaining) + ' more emails to generate your score</p>' +
        (hs.trackerNote ? '<p class="gs-tracker__note">' + esc(hs.trackerNote) + '</p>' : '') +
        '<div class="gs-tracker__divider"></div>' +
        '<div class="gs-toggle">' +
          '<div>' +
            '<p class="gs-toggle__label" id="gs-notify-label">Email me when my score is ready</p>' +
            '<p class="gs-caption">' + esc(hs.notifyHelp) + '</p>' +
          '</div>' +
          '<button type="button" class="gs-switch" role="switch" aria-checked="' + (hs.notify ? 'true' : 'false') +
            '" aria-labelledby="gs-notify-label" data-toggle="notify" data-focus-key="notify"></button>' +
        '</div>' +
      '</div>'
    );
  }

  function renderHealth(hs) {
    var ready = hs.state === 'ready';
    var title = ready ? hs.titles.ready : hs.titles.none;

    return (
      '<div class="gs-panel" id="gs-panel" role="region" aria-label="' + esc(title) + '">' +
        panelHeader(title, hs.description) +
        (ready
          ? scoreCard(hs.actual, hs, false) + primaryButton(hs.cta, 'cta-health')
          : tracker(hs) + scoreCard(hs.example, hs, true) + benefits(hs.why) + primaryButton(hs.ctaNone, 'cta-health-none')) +
      '</div>'
    );
  }

  /* ------------------------------------------------------------------------
     Page shell
     ------------------------------------------------------------------------ */

  function computeView(state) {
    var activeIndex = 0;
    state.steps.forEach(function (st, i) { if (st.id === state.activeStep) activeIndex = i; });

    var steps = state.steps.map(function (st, i) {
      var copy = {};
      Object.keys(st).forEach(function (k) { copy[k] = st[k]; });
      copy.done = !!st.done || (state.autoComplete && i < activeIndex);
      return copy;
    });

    var doneCount = steps.filter(function (st) { return st.done; }).length;
    var completed = Math.min(state.guide.total, state.guide.completed + doneCount);
    return { steps: steps, completed: completed };
  }

  function renderHeader(g, completed) {
    var pct = g.total ? Math.round((completed / g.total) * 100) : 0;
    return (
      '<header class="gs-header">' +
        '<div>' +
          '<h1 class="gs-header__title">' + esc(g.title) + '</h1>' +
          '<p class="gs-header__sub">' + esc(g.subtitle) + '</p>' +
        '</div>' +
        '<div class="gs-progress">' +
          '<div class="gs-progress__main">' +
            '<div class="gs-progress__row">' +
              '<span class="gs-progress__label">Guide completion</span>' +
              '<span>' + completed + ' / ' + g.total + '</span>' +
            '</div>' +
            '<div class="gs-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct +
              '" aria-label="Guide completion"><div class="gs-progress__fill" style="width:' + pct + '%"></div></div>' +
          '</div>' +
          '<button type="button" class="gs-icon-btn" aria-label="More options" data-action="guide-menu" data-focus-key="menu">' +
            DOTS_ICON + '</button>' +
        '</div>' +
      '</header>'
    );
  }

  function renderTabs(state) {
    return (
      '<div class="gs-tabs" role="tablist" aria-label="Guide sections">' +
      state.tabs.map(function (t) {
        return (
          '<button type="button" class="gs-tab" role="tab" id="gs-tab-' + t.id + '" aria-selected="' +
            (t.id === state.activeTab) + '" data-tab="' + t.id + '" data-focus-key="tab-' + t.id + '">' +
            esc(t.label) + ' (' + t.done + '/' + t.total + ')' +
          '</button>'
        );
      }).join('') +
      '</div>'
    );
  }

  var DONE_ICON =
    '<svg class="gs-svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<circle cx="12" cy="12" r="10" fill="var(--gs-success)"/>' +
    '<path d="m7.5 12.5 3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function renderSteps(state, steps) {
    return (
      '<nav class="gs-steps" aria-label="Optimize steps"><ul class="gs-steps__list">' +
      steps.map(function (s) {
        return (
          '<li><button type="button" class="gs-step" data-step="' + s.id + '" data-focus-key="step-' + s.id + '"' +
            (s.id === state.activeStep ? ' aria-current="true"' : '') + '>' +
            '<span class="gs-step__icon">' + (s.done ? DONE_ICON : icon(s.icon, 20)) + '</span>' +
            '<span class="gs-step__label">' + esc(s.label) + (s.done ? '<span class="gs-sr"> (completed)</span>' : '') + '</span>' +
            (s.duration ? '<span class="gs-badge gs-step__duration">' + esc(s.duration) + '</span>' : '') +
          '</button></li>'
        );
      }).join('') +
      '</ul></nav>'
    );
  }

  function renderBody(state, steps) {
    if (state.activeTab !== 'optimize') {
      /* TODO: build the Send tab steps. Placeholder so the tab switch works. */
      var tab = state.tabs.filter(function (t) { return t.id === state.activeTab; })[0];
      return '<div class="gs-body"><div class="gs-panel-col" style="padding-left:0;flex:1">' +
        '<div class="gs-panel"><p class="gs-empty">' + esc(tab.label) + ' steps go here.</p></div></div></div>';
    }

    var panel = state.activeStep === 'health' ? renderHealth(state.healthScore) : renderPlacement(state.placement);
    return '<div class="gs-body">' + renderSteps(state, steps) + '<div class="gs-panel-col">' + panel + '</div></div>';
  }

  /* ------------------------------------------------------------------------
     Loading animation. The arcs and the bar are animated in CSS (get-started.css);
     this only counts the numbers up so they land with the arc.
     ------------------------------------------------------------------------ */

  var ANIMATION_MS = 1000;

  function prefersReducedMotion() {
    return !!(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function countUp(root) {
    if (prefersReducedMotion()) return;
    var els = root.querySelectorAll('[data-count-to]');
    if (!els.length) return;

    var items = Array.prototype.map.call(els, function (el) {
      var item = {
        el: el,
        to: Number(el.getAttribute('data-count-to')),
        suffix: el.getAttribute('data-count-suffix') || ''
      };
      el.textContent = '0' + item.suffix;
      return item;
    });

    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / ANIMATION_MS, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      items.forEach(function (it) {
        it.el.textContent = Math.round(it.to * eased) + it.suffix;
      });
      if (p < 1) global.requestAnimationFrame(step);
    }
    global.requestAnimationFrame(step);
  }

  /* ------------------------------------------------------------------------
     Mount
     ------------------------------------------------------------------------ */

  function mount(target, options) {
    var root = typeof target === 'string' ? document.querySelector(target) : target;
    if (!root) throw new Error('GetStarted.mount: target not found');

    var state = merge(DEFAULTS, options || {});

    /* Query-string shortcuts for prototyping */
    var params = new URLSearchParams(global.location ? global.location.search : '');
    if (params.get('healthScore') === 'ready' || params.get('healthScore') === 'none') {
      state.healthScore.state = params.get('healthScore');
    }
    if (params.get('placementDone') === '1' || params.get('placementDone') === 'true') {
      state.steps[0].done = true;
    }
    if (params.get('step') === 'health' || params.get('step') === 'placement') {
      state.activeStep = params.get('step');
    }

    root.classList.add('gs');

    function emit(action, extra) {
      var detail = { action: action };
      Object.keys(extra || {}).forEach(function (k) { detail[k] = extra[k]; });
      root.dispatchEvent(new CustomEvent('gs:action', { bubbles: true, detail: detail }));
      if (state.onAction) state.onAction(detail);
    }

    /* animate: play the loading animation. True whenever a step, tab or state is shown,
       false for small updates such as flipping the notify toggle. */
    function render(focusKey, animate) {
      var view = computeView(state);
      root.classList.toggle('gs--animate', !!animate);
      root.innerHTML = renderHeader(state.guide, view.completed) + renderTabs(state) + renderBody(state, view.steps);
      if (animate) countUp(root);
      if (focusKey) {
        var el = root.querySelector('[data-focus-key="' + focusKey + '"]');
        if (el) el.focus();
      }
    }

    root.addEventListener('click', function (event) {
      var el = event.target.closest('[data-tab],[data-step],[data-toggle],[data-action]');
      if (!el || !root.contains(el)) return;
      var focusKey = el.getAttribute('data-focus-key');

      if (el.hasAttribute('data-tab')) {
        state.activeTab = el.getAttribute('data-tab');
        render(focusKey, true);
      } else if (el.hasAttribute('data-step')) {
        state.activeStep = el.getAttribute('data-step');
        render(focusKey, true);
      } else if (el.getAttribute('data-toggle') === 'notify') {
        state.healthScore.notify = !state.healthScore.notify;
        render(focusKey, false);
        emit('toggle-score-notification', { value: state.healthScore.notify });
      } else if (el.hasAttribute('data-action')) {
        emit(el.getAttribute('data-action'));
      }
    });

    render(null, true);

    return {
      setHealthScoreState: function (value) {
        state.healthScore.state = value === 'ready' ? 'ready' : 'none';
        render(null, true);
      },
      selectStep: function (id) { state.activeStep = id; render(null, true); },
      selectTab: function (id) { state.activeTab = id; render(null, true); },
      getState: function () { return state; }
    };
  }

  global.GetStarted = { mount: mount };
})(window);
