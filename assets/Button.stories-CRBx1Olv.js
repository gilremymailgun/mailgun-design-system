import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-CaiwlDvA.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({children:e,hierarchy:t=`primary`,size:n=`default`,iconPosition:r,icon:a,disabled:o=!1,loading:s=!1,onClick:c,className:l,type:u=`button`,"aria-label":d})=>{let f=r===`only`;return(0,i.jsxs)(`button`,{type:u,className:[`mg-button`,`mg-button--${t}`,`mg-button--${n}`,f?`mg-button--icon-only`:``,s?`mg-button--loading`:``,l||``].filter(Boolean).join(` `),disabled:o||s,onClick:c,"aria-label":f?d:void 0,"aria-busy":s||void 0,children:[s&&(0,i.jsx)(`span`,{className:`mg-button__spinner`,"aria-hidden":`true`}),!s&&a&&r===`leading`&&(0,i.jsx)(`span`,{className:`mg-button__icon`,children:a}),!s&&!f&&e&&(0,i.jsx)(`span`,{className:`mg-button__label`,children:e}),!s&&a&&f&&(0,i.jsx)(`span`,{className:`mg-button__icon`,children:a}),!s&&a&&r===`trailing`&&(0,i.jsx)(`span`,{className:`mg-button__icon`,children:a})]})},a.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},hierarchy:{required:!1,tsType:{name:`union`,raw:`| 'primary'
| 'secondary'
| 'secondary-dark'
| 'secondary-neutral'
| 'tertiary'
| 'destructive'
| 'brand'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'secondary-dark'`},{name:`literal`,value:`'secondary-neutral'`},{name:`literal`,value:`'tertiary'`},{name:`literal`,value:`'destructive'`},{name:`literal`,value:`'brand'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'default'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'default'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},iconPosition:{required:!1,tsType:{name:`union`,raw:`'leading' | 'trailing' | 'only'`,elements:[{name:`literal`,value:`'leading'`},{name:`literal`,value:`'trailing'`},{name:`literal`,value:`'only'`}]},description:`Omit for no icon. Set to control where the icon renders.`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:``,defaultValue:{value:`'button'`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{o(),s=n(),c={title:`Components/Button`,component:a,argTypes:{hierarchy:{control:`select`,options:[`primary`,`secondary`,`secondary-dark`,`secondary-neutral`,`tertiary`,`destructive`,`brand`]},size:{control:`select`,options:[`small`,`default`]},disabled:{control:`boolean`},loading:{control:`boolean`},children:{control:`text`}}},l={args:{children:`Button`,hierarchy:`primary`,size:`default`}},u={args:{children:`Button`,hierarchy:`secondary`,size:`default`}},d={args:{children:`Button`,hierarchy:`secondary-dark`,size:`default`}},f={args:{children:`Button`,hierarchy:`secondary-neutral`,size:`default`}},p={args:{children:`Button`,hierarchy:`tertiary`,size:`default`}},m={args:{children:`Delete`,hierarchy:`destructive`,size:`default`}},h={args:{children:`Get started`,hierarchy:`brand`,size:`default`}},g={args:{children:`Button`,hierarchy:`primary`,size:`small`}},_={args:{children:`Button`,hierarchy:`primary`,size:`default`,disabled:!0}},v={args:{children:`Saving...`,hierarchy:`primary`,size:`default`,loading:!0}},y={name:`All hierarchies`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[`primary`,`secondary`,`secondary-dark`,`secondary-neutral`,`tertiary`,`destructive`,`brand`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,s.jsx)(`span`,{style:{width:`140px`,fontSize:`12px`,color:`var(--sys-color-text-muted)`},children:e}),(0,s.jsx)(a,{hierarchy:e,size:`default`,children:`Button`}),(0,s.jsx)(a,{hierarchy:e,size:`small`,children:`Button`}),(0,s.jsx)(a,{hierarchy:e,size:`default`,disabled:!0,children:`Disabled`}),(0,s.jsx)(a,{hierarchy:e,size:`default`,loading:!0,children:`Loading`})]},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'primary',
    size: 'default'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'secondary',
    size: 'default'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'secondary-dark',
    size: 'default'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'secondary-neutral',
    size: 'default'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'tertiary',
    size: 'default'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    hierarchy: 'destructive',
    size: 'default'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Get started',
    hierarchy: 'brand',
    size: 'default'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'primary',
    size: 'small'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'primary',
    size: 'default',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Saving...',
    hierarchy: 'primary',
    size: 'default',
    loading: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All hierarchies',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      {(['primary', 'secondary', 'secondary-dark', 'secondary-neutral', 'tertiary', 'destructive', 'brand'] as const).map(hierarchy => <div key={hierarchy} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        width: '140px',
        fontSize: '12px',
        color: 'var(--sys-color-text-muted)'
      }}>
            {hierarchy}
          </span>
          <Button hierarchy={hierarchy} size="default">
            Button
          </Button>
          <Button hierarchy={hierarchy} size="small">
            Button
          </Button>
          <Button hierarchy={hierarchy} size="default" disabled>
            Disabled
          </Button>
          <Button hierarchy={hierarchy} size="default" loading>
            Loading
          </Button>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`Secondary`,`SecondaryDark`,`SecondaryNeutral`,`Tertiary`,`Destructive`,`Brand`,`Small`,`Disabled`,`Loading`,`AllHierarchies`]}))();export{y as AllHierarchies,h as Brand,m as Destructive,_ as Disabled,v as Loading,l as Primary,u as Secondary,d as SecondaryDark,f as SecondaryNeutral,g as Small,p as Tertiary,b as __namedExportsOrder,c as default};