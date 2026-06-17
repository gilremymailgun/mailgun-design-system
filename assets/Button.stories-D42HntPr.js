import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-RFM0MLDp.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({label:e=`Button`,hierarchy:t=`primary`,size:n=`md`,icon:r=`none`,iconElement:a,disabled:o=!1,loading:s=!1,onClick:c})=>(0,i.jsxs)(`button`,{className:[`mg-button`,`mg-button--${t}`,`mg-button--${n}`,r===`none`?``:`mg-button--icon-${r}`,o?`mg-button--disabled`:``,s?`mg-button--loading`:``].filter(Boolean).join(` `),disabled:o||s,onClick:c,type:`button`,children:[s&&(0,i.jsx)(`span`,{className:`mg-button__spinner`,"aria-hidden":`true`}),!s&&r===`leading`&&a&&(0,i.jsx)(`span`,{className:`mg-button__icon`,children:a}),r!==`only`&&!s&&(0,i.jsx)(`span`,{className:`mg-button__label`,children:e}),!s&&r===`trailing`&&a&&(0,i.jsx)(`span`,{className:`mg-button__icon`,children:a}),!s&&r===`only`&&a&&(0,i.jsx)(`span`,{className:`mg-button__icon`,"aria-label":e,children:a})]}),a.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Button'`,computed:!1}},hierarchy:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'destructive' | 'neutral'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'destructive'`},{name:`literal`,value:`'neutral'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`'none' | 'leading' | 'trailing' | 'only'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'leading'`},{name:`literal`,value:`'trailing'`},{name:`literal`,value:`'only'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}},iconElement:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),s,c,l,u,d,f,p,m,h,g;e((()=>{o(),s=n(),c={title:`Navigation/Button`,component:a,tags:[`autodocs`],argTypes:{hierarchy:{control:`select`,options:[`primary`,`secondary`,`destructive`,`neutral`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},loading:{control:`boolean`},label:{control:`text`}}},l={args:{label:`Button`,hierarchy:`primary`,size:`md`}},u={args:{label:`Button`,hierarchy:`secondary`,size:`md`}},d={args:{label:`Delete`,hierarchy:`destructive`,size:`md`}},f={args:{label:`Cancel`,hierarchy:`neutral`,size:`md`}},p={args:{label:`Button`,hierarchy:`primary`,size:`md`,disabled:!0}},m={args:{label:`Saving...`,hierarchy:`primary`,size:`md`,loading:!0}},h={name:`All variants`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,padding:`24px`},children:[`primary`,`secondary`,`destructive`,`neutral`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,s.jsx)(`span`,{style:{width:`100px`,fontSize:`12px`,color:`#808a91`,textTransform:`capitalize`},children:e}),[`sm`,`md`,`lg`].map(t=>(0,s.jsx)(a,{label:`Button`,hierarchy:e,size:t},t)),(0,s.jsx)(a,{label:`Disabled`,hierarchy:e,size:`md`,disabled:!0}),(0,s.jsx)(a,{label:`Loading`,hierarchy:e,size:`md`,loading:!0})]},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    hierarchy: 'primary',
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    hierarchy: 'secondary',
    size: 'md'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    hierarchy: 'destructive',
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cancel',
    hierarchy: 'neutral',
    size: 'md'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    hierarchy: 'primary',
    size: 'md',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Saving...',
    hierarchy: 'primary',
    size: 'md',
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {(['primary', 'secondary', 'destructive', 'neutral'] as const).map(hierarchy => <div key={hierarchy} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        width: '100px',
        fontSize: '12px',
        color: '#808a91',
        textTransform: 'capitalize'
      }}>{hierarchy}</span>
          {(['sm', 'md', 'lg'] as const).map(size => <Button key={size} label="Button" hierarchy={hierarchy} size={size} />)}
          <Button label="Disabled" hierarchy={hierarchy} size="md" disabled />
          <Button label="Loading" hierarchy={hierarchy} size="md" loading />
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Primary`,`Secondary`,`Destructive`,`Neutral`,`Disabled`,`Loading`,`AllVariants`]}))();export{h as AllVariants,d as Destructive,p as Disabled,m as Loading,f as Neutral,l as Primary,u as Secondary,g as __namedExportsOrder,c as default};