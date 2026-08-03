import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-B-eiRk3W.js";import{n,t as r}from"./Icon-BCiSfwnI.js";import{n as i,t as a}from"./Badge-BrfIZeGU.js";var o,s,c,l,u,d,f,p;e((()=>{i(),n(),o=t(),s={title:`Components/Badge`,component:a,tags:[`autodocs`],argTypes:{configuration:{control:`select`,options:[`filled`,`outline`]},children:{control:`text`},dotStatus:{control:`select`,options:[void 0,`info`,`success`,`error`,`warning`]},notificationStatus:{control:`select`,options:[void 0,`info`,`success`,`error`,`warning`]}}},c={args:{configuration:`filled`,children:`Badge`}},l={args:{configuration:`outline`,children:`Badge`}},u={name:`With icon and dot`,args:{configuration:`filled`,children:`Badge`,icon:(0,o.jsx)(r,{name:`ui/lock-locked-gen2`}),dotStatus:`success`}},d={name:`With notification`,args:{configuration:`filled`,children:`Badge`,notificationStatus:`error`}},f={name:`All variants`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[`filled`,`outline`].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,o.jsx)(`span`,{style:{width:`80px`,fontSize:`12px`,color:`var(--sys-color-text-muted)`},children:e}),(0,o.jsx)(a,{configuration:e,children:`Badge`}),(0,o.jsx)(a,{configuration:e,dotStatus:`success`,children:`Badge`}),(0,o.jsx)(a,{configuration:e,icon:(0,o.jsx)(r,{name:`ui/lock-locked-gen2`}),children:`Badge`}),(0,o.jsx)(a,{configuration:e,notificationStatus:`error`,children:`Badge`})]},e))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'filled',
    children: 'Badge'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'outline',
    children: 'Badge'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With icon and dot',
  args: {
    configuration: 'filled',
    children: 'Badge',
    icon: <Icon name="ui/lock-locked-gen2" />,
    dotStatus: 'success'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With notification',
  args: {
    configuration: 'filled',
    children: 'Badge',
    notificationStatus: 'error'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      {(['filled', 'outline'] as const).map(configuration => <div key={configuration} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        width: '80px',
        fontSize: '12px',
        color: 'var(--sys-color-text-muted)'
      }}>
            {configuration}
          </span>
          <Badge configuration={configuration}>Badge</Badge>
          <Badge configuration={configuration} dotStatus="success">
            Badge
          </Badge>
          <Badge configuration={configuration} icon={<Icon name="ui/lock-locked-gen2" />}>
            Badge
          </Badge>
          <Badge configuration={configuration} notificationStatus="error">
            Badge
          </Badge>
        </div>)}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Filled`,`Outline`,`WithIconAndDot`,`WithNotification`,`AllVariants`]}))();export{f as AllVariants,c as Filled,l as Outline,u as WithIconAndDot,d as WithNotification,p as __namedExportsOrder,s as default};