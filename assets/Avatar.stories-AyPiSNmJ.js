import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-cwPQkQwV.js";import{n as r,t as i}from"./Icon-BNq5srmP.js";var a=e((()=>{})),o,s,c=e((()=>{t(),r(),a(),o=n(),s=({configuration:e=`filled`,size:t=`small`,label:n=`AB`,photoSrc:r,showIcon:a=!1,className:s,"aria-label":c})=>(0,o.jsx)(`div`,{className:[`mg-avatar`,`mg-avatar--${e}`,`mg-avatar--${t}`,s||``].filter(Boolean).join(` `),role:`img`,"aria-label":c||n,children:r?(0,o.jsx)(`img`,{className:`mg-avatar__photo`,src:r,alt:``}):a?(0,o.jsx)(`span`,{className:`mg-avatar__icon`,children:(0,o.jsx)(i,{name:`users/user-default-gen2`})}):(0,o.jsx)(`span`,{className:`mg-avatar__label`,children:n})}),s.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{configuration:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outlined'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`}]},description:``,defaultValue:{value:`'filled'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'small'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:"Initials to display. Ignored if `photoSrc` or `icon` is provided.",defaultValue:{value:`'AB'`,computed:!1}},photoSrc:{required:!1,tsType:{name:`string`},description:`URL of a photo to display instead of initials/icon.`},showIcon:{required:!1,tsType:{name:`boolean`},description:"Show the default person icon instead of initials. Ignored if `photoSrc` is set.",defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d,f,p,m,h,g,_,v,y;e((()=>{c(),l=n(),u={title:`Components/Avatar`,component:s,tags:[`autodocs`],argTypes:{configuration:{control:`select`,options:[`filled`,`outlined`]},size:{control:`select`,options:[`small`,`large`]},label:{control:`text`},showIcon:{control:`boolean`}}},d={name:`Filled, small`,args:{configuration:`filled`,size:`small`,label:`AB`}},f={name:`Filled, large`,args:{configuration:`filled`,size:`large`,label:`AB`}},p={name:`Outlined, small`,args:{configuration:`outlined`,size:`small`,label:`AB`}},m={name:`Outlined, large`,args:{configuration:`outlined`,size:`large`,label:`AB`}},h={name:`With icon (filled)`,args:{configuration:`filled`,size:`large`,showIcon:!0}},g={name:`With icon (outlined)`,args:{configuration:`outlined`,size:`large`,showIcon:!0}},_={name:`With photo`,args:{size:`large`,photoSrc:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces`}},v={name:`All variants`,render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[`filled`,`outlined`].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,l.jsx)(`span`,{style:{width:`80px`,fontSize:`12px`,color:`var(--sys-color-text-muted)`},children:e}),(0,l.jsx)(s,{configuration:e,size:`small`,label:`AB`}),(0,l.jsx)(s,{configuration:e,size:`large`,label:`AB`}),(0,l.jsx)(s,{configuration:e,size:`small`,showIcon:!0}),(0,l.jsx)(s,{configuration:e,size:`large`,showIcon:!0})]},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Filled, small',
  args: {
    configuration: 'filled',
    size: 'small',
    label: 'AB'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Filled, large',
  args: {
    configuration: 'filled',
    size: 'large',
    label: 'AB'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Outlined, small',
  args: {
    configuration: 'outlined',
    size: 'small',
    label: 'AB'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Outlined, large',
  args: {
    configuration: 'outlined',
    size: 'large',
    label: 'AB'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With icon (filled)',
  args: {
    configuration: 'filled',
    size: 'large',
    showIcon: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With icon (outlined)',
  args: {
    configuration: 'outlined',
    size: 'large',
    showIcon: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With photo',
  args: {
    size: 'large',
    photoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`FilledSmall`,`FilledLarge`,`OutlinedSmall`,`OutlinedLarge`,`WithIcon`,`WithIconOutlined`,`WithPhoto`,`AllVariants`]}))();export{v as AllVariants,f as FilledLarge,d as FilledSmall,m as OutlinedLarge,p as OutlinedSmall,h as WithIcon,g as WithIconOutlined,_ as WithPhoto,y as __namedExportsOrder,u as default};