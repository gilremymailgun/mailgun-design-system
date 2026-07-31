import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-B9mmqt8a.js";import{n as r,t as i}from"./Icon-BSZ5rOpH.js";var a=e((()=>{})),o,s,c=e((()=>{t(),a(),o=n(),s=({children:e,hierarchy:t=`primary`,size:n=`default`,iconPosition:r,icon:i,disabled:a=!1,loading:s=!1,onClick:c,className:l,type:u=`button`,"aria-label":d})=>{let f=r===`only`;return(0,o.jsxs)(`button`,{type:u,className:[`mg-button`,`mg-button--${t}`,`mg-button--${n}`,f?`mg-button--icon-only`:``,s?`mg-button--loading`:``,l||``].filter(Boolean).join(` `),disabled:a||s,onClick:c,"aria-label":f?d:void 0,"aria-busy":s||void 0,children:[s&&(0,o.jsx)(`span`,{className:`mg-button__spinner`,"aria-hidden":`true`}),!s&&i&&r===`leading`&&(0,o.jsx)(`span`,{className:`mg-button__icon`,children:i}),!s&&!f&&e&&(0,o.jsx)(`span`,{className:`mg-button__label`,children:e}),!s&&i&&f&&(0,o.jsx)(`span`,{className:`mg-button__icon`,children:i}),!s&&i&&r===`trailing`&&(0,o.jsx)(`span`,{className:`mg-button__icon`,children:i})]})},s.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},hierarchy:{required:!1,tsType:{name:`union`,raw:`| 'primary'
| 'secondary'
| 'secondary-dark'
| 'secondary-neutral'
| 'tertiary'
| 'destructive'
| 'brand'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'secondary-dark'`},{name:`literal`,value:`'secondary-neutral'`},{name:`literal`,value:`'tertiary'`},{name:`literal`,value:`'destructive'`},{name:`literal`,value:`'brand'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'default'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'default'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},iconPosition:{required:!1,tsType:{name:`union`,raw:`'leading' | 'trailing' | 'only'`,elements:[{name:`literal`,value:`'leading'`},{name:`literal`,value:`'trailing'`},{name:`literal`,value:`'only'`}]},description:`Omit for no icon. Set to control where the icon renders.`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:``,defaultValue:{value:`'button'`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{c(),r(),l=n(),u={title:`Components/Button`,component:s,argTypes:{hierarchy:{control:`select`,options:[`primary`,`secondary`,`secondary-dark`,`secondary-neutral`,`tertiary`,`destructive`,`brand`]},size:{control:`select`,options:[`small`,`default`]},disabled:{control:`boolean`},loading:{control:`boolean`},children:{control:`text`}}},d={args:{children:`Button`,hierarchy:`primary`,size:`default`}},f={args:{children:`Button`,hierarchy:`secondary`,size:`default`}},p={args:{children:`Button`,hierarchy:`secondary-dark`,size:`default`}},m={args:{children:`Button`,hierarchy:`secondary-neutral`,size:`default`}},h={args:{children:`Button`,hierarchy:`tertiary`,size:`default`}},g={args:{children:`Delete`,hierarchy:`destructive`,size:`default`}},_={args:{children:`Get started`,hierarchy:`brand`,size:`default`}},v={args:{children:`Button`,hierarchy:`primary`,size:`small`}},y={args:{children:`Button`,hierarchy:`primary`,size:`default`,disabled:!0}},b={args:{children:`Saving...`,hierarchy:`primary`,size:`default`,loading:!0}},x={name:`With leading icon`,args:{children:`Undo`,hierarchy:`primary`,size:`default`,iconPosition:`leading`,icon:(0,l.jsx)(i,{name:`navigate/point-down-gen2`})}},S={name:`With trailing icon`,args:{children:`Next`,hierarchy:`primary`,size:`default`,iconPosition:`trailing`,icon:(0,l.jsx)(i,{name:`navigate/point-down-gen2`})}},C={name:`Icon only`,args:{hierarchy:`primary`,size:`default`,iconPosition:`only`,icon:(0,l.jsx)(i,{name:`navigate/point-down-gen2`}),"aria-label":`Restart`}},w={name:`All hierarchies`,render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[`primary`,`secondary`,`secondary-dark`,`secondary-neutral`,`tertiary`,`destructive`,`brand`].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,l.jsx)(`span`,{style:{width:`140px`,fontSize:`12px`,color:`var(--sys-color-text-muted)`},children:e}),(0,l.jsx)(s,{hierarchy:e,size:`default`,children:`Button`}),(0,l.jsx)(s,{hierarchy:e,size:`small`,children:`Button`}),(0,l.jsx)(s,{hierarchy:e,size:`default`,disabled:!0,children:`Disabled`}),(0,l.jsx)(s,{hierarchy:e,size:`default`,loading:!0,children:`Loading`}),(0,l.jsx)(s,{hierarchy:e,size:`default`,iconPosition:`leading`,icon:(0,l.jsx)(i,{name:`navigate/point-down-gen2`}),children:`Undo`}),(0,l.jsx)(s,{hierarchy:e,size:`default`,iconPosition:`only`,icon:(0,l.jsx)(i,{name:`navigate/point-down-gen2`}),"aria-label":`Restart`})]},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'primary',
    size: 'default'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'secondary',
    size: 'default'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'secondary-dark',
    size: 'default'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'secondary-neutral',
    size: 'default'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'tertiary',
    size: 'default'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    hierarchy: 'destructive',
    size: 'default'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Get started',
    hierarchy: 'brand',
    size: 'default'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'primary',
    size: 'small'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    hierarchy: 'primary',
    size: 'default',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Saving...',
    hierarchy: 'primary',
    size: 'default',
    loading: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With leading icon',
  args: {
    children: 'Undo',
    hierarchy: 'primary',
    size: 'default',
    iconPosition: 'leading',
    icon: <Icon name="navigate/point-down-gen2" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With trailing icon',
  args: {
    children: 'Next',
    hierarchy: 'primary',
    size: 'default',
    iconPosition: 'trailing',
    icon: <Icon name="navigate/point-down-gen2" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Icon only',
  args: {
    hierarchy: 'primary',
    size: 'default',
    iconPosition: 'only',
    icon: <Icon name="navigate/point-down-gen2" />,
    'aria-label': 'Restart'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
          <Button hierarchy={hierarchy} size="default" iconPosition="leading" icon={<Icon name="navigate/point-down-gen2" />}>
            Undo
          </Button>
          <Button hierarchy={hierarchy} size="default" iconPosition="only" icon={<Icon name="navigate/point-down-gen2" />} aria-label="Restart" />
        </div>)}
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`Secondary`,`SecondaryDark`,`SecondaryNeutral`,`Tertiary`,`Destructive`,`Brand`,`Small`,`Disabled`,`Loading`,`WithLeadingIcon`,`WithTrailingIcon`,`IconOnly`,`AllHierarchies`]}))();export{w as AllHierarchies,_ as Brand,g as Destructive,y as Disabled,C as IconOnly,b as Loading,d as Primary,f as Secondary,p as SecondaryDark,m as SecondaryNeutral,v as Small,h as Tertiary,x as WithLeadingIcon,S as WithTrailingIcon,T as __namedExportsOrder,u as default};