import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-CPGuSGKG.js";import{n as r,t as i}from"./Icon-NIiAo76S.js";import{n as a,t as o}from"./StatusDot-yBqzvgLv.js";var s=e((()=>{})),c,l,u=e((()=>{t(),a(),s(),c=n(),l=({children:e,configuration:t=`filled`,icon:n,dotStatus:r,notificationStatus:i,className:a})=>(0,c.jsxs)(`div`,{className:[`mg-badge`,`mg-badge--${t}`,a||``].filter(Boolean).join(` `),children:[n&&(0,c.jsx)(`span`,{className:`mg-badge__icon`,children:n}),r&&(0,c.jsx)(o,{type:r}),(0,c.jsx)(`span`,{className:`mg-badge__text`,children:e}),i&&(0,c.jsx)(`span`,{className:`mg-badge__notification`,children:(0,c.jsx)(o,{type:i})})]}),l.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},configuration:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outline'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outline'`}]},description:``,defaultValue:{value:`'filled'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional icon element, e.g. <Icon name="..." />`},dotStatus:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'error' | 'warning'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`}]},description:`Optional status dot shown before the label.`},notificationStatus:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'error' | 'warning'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`}]},description:`Optional notification dot shown at the top-right corner.`},className:{required:!1,tsType:{name:`string`},description:``}}}})),d,f,p,m,h,g,_,v;e((()=>{u(),r(),d=n(),f={title:`Components/Badge`,component:l,tags:[`autodocs`],argTypes:{configuration:{control:`select`,options:[`filled`,`outline`]},children:{control:`text`},dotStatus:{control:`select`,options:[void 0,`info`,`success`,`error`,`warning`]},notificationStatus:{control:`select`,options:[void 0,`info`,`success`,`error`,`warning`]}}},p={args:{configuration:`filled`,children:`Badge`}},m={args:{configuration:`outline`,children:`Badge`}},h={name:`With icon and dot`,args:{configuration:`filled`,children:`Badge`,icon:(0,d.jsx)(i,{name:`ui/lock-locked-gen2`}),dotStatus:`success`}},g={name:`With notification`,args:{configuration:`filled`,children:`Badge`,notificationStatus:`error`}},_={name:`All variants`,render:()=>(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[`filled`,`outline`].map(e=>(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,d.jsx)(`span`,{style:{width:`80px`,fontSize:`12px`,color:`var(--sys-color-text-muted)`},children:e}),(0,d.jsx)(l,{configuration:e,children:`Badge`}),(0,d.jsx)(l,{configuration:e,dotStatus:`success`,children:`Badge`}),(0,d.jsx)(l,{configuration:e,icon:(0,d.jsx)(i,{name:`ui/lock-locked-gen2`}),children:`Badge`}),(0,d.jsx)(l,{configuration:e,notificationStatus:`error`,children:`Badge`})]},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'filled',
    children: 'Badge'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'outline',
    children: 'Badge'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With icon and dot',
  args: {
    configuration: 'filled',
    children: 'Badge',
    icon: <Icon name="ui/lock-locked-gen2" />,
    dotStatus: 'success'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With notification',
  args: {
    configuration: 'filled',
    children: 'Badge',
    notificationStatus: 'error'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Filled`,`Outline`,`WithIconAndDot`,`WithNotification`,`AllVariants`]}))();export{_ as AllVariants,p as Filled,m as Outline,h as WithIconAndDot,g as WithNotification,v as __namedExportsOrder,f as default};