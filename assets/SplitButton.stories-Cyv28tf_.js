import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-DJ6M_JbP.js";var i=e((()=>{})),a,o,s,c=e((()=>{a=t(n(),1),i(),o=r(),s=({label:e=`Split`,disabled:t=!1,loading:n=!1,onActionClick:r,onDropdownClick:i})=>{let[s,c]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:[`mg-split-button`,t?`mg-split-button--disabled`:``,n?`mg-split-button--loading`:``].filter(Boolean).join(` `),children:[(0,o.jsx)(`button`,{className:`mg-split-button__action`,disabled:t||n,onClick:r,type:`button`,children:n?(0,o.jsx)(`span`,{className:`mg-split-button__spinner`,"aria-hidden":`true`}):(0,o.jsx)(`span`,{className:`mg-split-button__label`,children:e})}),(0,o.jsx)(`button`,{className:`mg-split-button__chevron`,disabled:t||n,onClick:i,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),"aria-label":`More options`,type:`button`,children:(0,o.jsx)(`svg`,{width:`10`,height:`6`,viewBox:`0 0 10 6`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M1 1L5 5L9 1`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})},s.__docgenInfo={description:``,methods:[],displayName:`SplitButton`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Split'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onActionClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDropdownClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),l,u,d,f,p,m,h;e((()=>{c(),l=r(),u={title:`Navigation/Split Button`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},loading:{control:`boolean`}}},d={args:{label:`Split`}},f={args:{label:`Split`,disabled:!0}},p={args:{label:`Split`,loading:!0}},m={name:`All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`,padding:`24px`},children:[(0,l.jsx)(s,{label:`Split`}),(0,l.jsx)(s,{label:`Split`,disabled:!0}),(0,l.jsx)(s,{label:`Split`,loading:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Split'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Split',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Split',
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All states',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px'
  }}>
      <SplitButton label="Split" />
      <SplitButton label="Split" disabled />
      <SplitButton label="Split" loading />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Disabled`,`Loading`,`AllStates`]}))();export{m as AllStates,d as Default,f as Disabled,p as Loading,h as __namedExportsOrder,u as default};