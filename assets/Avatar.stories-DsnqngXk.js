import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-DlGTtrP2.js";import{n,t as r}from"./Avatar-Denk-9RL.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Components/Avatar`,component:r,tags:[`autodocs`],argTypes:{configuration:{control:`select`,options:[`filled`,`outlined`]},size:{control:`select`,options:[`small`,`large`]},label:{control:`text`},showIcon:{control:`boolean`}}},o={name:`Filled, small`,args:{configuration:`filled`,size:`small`,label:`AB`}},s={name:`Filled, large`,args:{configuration:`filled`,size:`large`,label:`AB`}},c={name:`Outlined, small`,args:{configuration:`outlined`,size:`small`,label:`AB`}},l={name:`Outlined, large`,args:{configuration:`outlined`,size:`large`,label:`AB`}},u={name:`With icon (filled)`,args:{configuration:`filled`,size:`large`,showIcon:!0}},d={name:`With icon (outlined)`,args:{configuration:`outlined`,size:`large`,showIcon:!0}},f={name:`With photo`,args:{size:`large`,photoSrc:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces`}},p={name:`All variants`,render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[`filled`,`outlined`].map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,i.jsx)(`span`,{style:{width:`80px`,fontSize:`12px`,color:`var(--sys-color-text-muted)`},children:e}),(0,i.jsx)(r,{configuration:e,size:`small`,label:`AB`}),(0,i.jsx)(r,{configuration:e,size:`large`,label:`AB`}),(0,i.jsx)(r,{configuration:e,size:`small`,showIcon:!0}),(0,i.jsx)(r,{configuration:e,size:`large`,showIcon:!0})]},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Filled, small',
  args: {
    configuration: 'filled',
    size: 'small',
    label: 'AB'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Filled, large',
  args: {
    configuration: 'filled',
    size: 'large',
    label: 'AB'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Outlined, small',
  args: {
    configuration: 'outlined',
    size: 'small',
    label: 'AB'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Outlined, large',
  args: {
    configuration: 'outlined',
    size: 'large',
    label: 'AB'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With icon (filled)',
  args: {
    configuration: 'filled',
    size: 'large',
    showIcon: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With icon (outlined)',
  args: {
    configuration: 'outlined',
    size: 'large',
    showIcon: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With photo',
  args: {
    size: 'large',
    photoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      {(['filled', 'outlined'] as const).map(configuration => <div key={configuration} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        width: '80px',
        fontSize: '12px',
        color: 'var(--sys-color-text-muted)'
      }}>
            {configuration}
          </span>
          <Avatar configuration={configuration} size="small" label="AB" />
          <Avatar configuration={configuration} size="large" label="AB" />
          <Avatar configuration={configuration} size="small" showIcon />
          <Avatar configuration={configuration} size="large" showIcon />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m=[`FilledSmall`,`FilledLarge`,`OutlinedSmall`,`OutlinedLarge`,`WithIcon`,`WithIconOutlined`,`WithPhoto`,`AllVariants`]}))();export{p as AllVariants,s as FilledLarge,o as FilledSmall,l as OutlinedLarge,c as OutlinedSmall,u as WithIcon,d as WithIconOutlined,f as WithPhoto,m as __namedExportsOrder,a as default};