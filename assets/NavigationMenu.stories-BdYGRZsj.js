import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-MI8yrrAV.js";import{n,t as r}from"./NavigationMenu-D_NW0pjX.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Navigation/NavigationMenu`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},decorators:[e=>(0,i.jsx)(`div`,{style:{display:`flex`,height:`100vh`},children:(0,i.jsx)(e,{})})],argTypes:{sections:{description:`Which top-level sections to show in the nav. Defaults to all.`,control:{type:`check`},options:[`dashboard`,`reporting`,`send`,`inspect`,`optimize`,`validate`,`sms`,`integrations`]},defaultActive:{description:`The item selected by default on mount.`,control:{type:`select`},options:`dashboard.reporting:metrics.reporting:logs.reporting:bounce.reporting:tags.reporting:saved.send:domains.send:templates.send:suppressions.send:webhooks.send:ips.send:mailing-lists.send:domain-settings.send:routes.inspect:email-testing.optimize:ai-insights.optimize:dmarc.optimize:health-score.optimize:email-preview.optimize:postmaster.optimize:snds.optimize:spam-trap.optimize:bl-domains.optimize:bl-ips.optimize:ip-reports.optimize:seed-lists.validate.sms.integrations`.split(`.`)}}},o={args:{defaultActive:`dashboard`}},s={args:{defaultActive:`reporting:metrics`}},c={args:{defaultActive:`send:domains`}},l={args:{defaultActive:`optimize:ai-insights`}},u={name:`Custom sections — Send + Reporting only`,args:{sections:[`dashboard`,`reporting`,`send`],defaultActive:`send:domains`}},d={name:`Standalone items only`,args:{sections:[`dashboard`,`validate`,`sms`,`integrations`],defaultActive:`dashboard`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActive: 'dashboard'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActive: 'reporting:metrics'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActive: 'send:domains'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActive: 'optimize:ai-insights'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Custom sections — Send + Reporting only',
  args: {
    sections: ['dashboard', 'reporting', 'send'],
    defaultActive: 'send:domains'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Standalone items only',
  args: {
    sections: ['dashboard', 'validate', 'sms', 'integrations'],
    defaultActive: 'dashboard'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`ReportingActive`,`SendActive`,`OptimizeActive`,`SendAndReportingOnly`,`NoExpandableSections`]}))();export{o as Default,d as NoExpandableSections,l as OptimizeActive,s as ReportingActive,c as SendActive,u as SendAndReportingOnly,f as __namedExportsOrder,a as default};