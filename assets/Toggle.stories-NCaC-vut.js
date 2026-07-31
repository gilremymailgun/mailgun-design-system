import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-BzrVBfPc.js";var i=e((()=>{})),a,o,s,c=e((()=>{a=t(n(),1),i(),o=r(),s=({items:e,defaultValue:t,value:n,onChange:r})=>{let[i,s]=(0,a.useState)(t??e[0]?.value),c=n??i,l=e=>{s(e),r?.(e)};return(0,o.jsx)(`div`,{className:`mg-toggle`,role:`group`,children:e.map((t,n)=>{let r=t.value===c,i=n===0,a=n===e.length-1;return(0,o.jsxs)(`button`,{className:[`mg-toggle__item`,r?`mg-toggle__item--selected`:``,i?`mg-toggle__item--first`:``,a?`mg-toggle__item--last`:``].filter(Boolean).join(` `),onClick:()=>l(t.value),"aria-pressed":r,type:`button`,children:[t.icon&&(0,o.jsx)(`span`,{className:`mg-toggle__icon`,"aria-hidden":`true`,children:t.icon}),(0,o.jsx)(`span`,{className:`mg-toggle__label`,children:t.label})]},t.value)})})},s.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`ToggleItem`}],raw:`ToggleItem[]`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})),l,u,d,f,p,m,h,g,_,v;e((()=>{c(),l=r(),u={title:`Navigation/Toggle`,component:s,tags:[`autodocs`]},d=()=>(0,l.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`2`,fill:`currentColor`})]}),f={name:`2 items`,args:{items:[{value:`a`,label:`Toggle`},{value:`b`,label:`Toggle`}],defaultValue:`b`}},p={name:`3 items`,args:{items:[{value:`a`,label:`Toggle`},{value:`b`,label:`Toggle`},{value:`c`,label:`Toggle`}],defaultValue:`c`}},m={name:`4 items`,args:{items:[{value:`a`,label:`Toggle`},{value:`b`,label:`Toggle`},{value:`c`,label:`Toggle`},{value:`d`,label:`Toggle`}],defaultValue:`d`}},h={name:`5 items`,args:{items:[{value:`a`,label:`Toggle`},{value:`b`,label:`Toggle`},{value:`c`,label:`Toggle`},{value:`d`,label:`Toggle`},{value:`e`,label:`Toggle`}],defaultValue:`e`}},g={name:`With icons`,args:{items:[{value:`a`,label:`Toggle`,icon:(0,l.jsx)(d,{})},{value:`b`,label:`Toggle`,icon:(0,l.jsx)(d,{})},{value:`c`,label:`Toggle`,icon:(0,l.jsx)(d,{})}],defaultValue:`c`}},_={name:`All sizes`,render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`24px`},children:[2,3,4,5].map(e=>(0,l.jsx)(s,{defaultValue:String.fromCharCode(96+e),items:Array.from({length:e},(e,t)=>({value:String.fromCharCode(97+t),label:`Toggle`,icon:(0,l.jsx)(d,{})}))},e))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '2 items',
  args: {
    items: [{
      value: 'a',
      label: 'Toggle'
    }, {
      value: 'b',
      label: 'Toggle'
    }],
    defaultValue: 'b'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '3 items',
  args: {
    items: [{
      value: 'a',
      label: 'Toggle'
    }, {
      value: 'b',
      label: 'Toggle'
    }, {
      value: 'c',
      label: 'Toggle'
    }],
    defaultValue: 'c'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '4 items',
  args: {
    items: [{
      value: 'a',
      label: 'Toggle'
    }, {
      value: 'b',
      label: 'Toggle'
    }, {
      value: 'c',
      label: 'Toggle'
    }, {
      value: 'd',
      label: 'Toggle'
    }],
    defaultValue: 'd'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '5 items',
  args: {
    items: [{
      value: 'a',
      label: 'Toggle'
    }, {
      value: 'b',
      label: 'Toggle'
    }, {
      value: 'c',
      label: 'Toggle'
    }, {
      value: 'd',
      label: 'Toggle'
    }, {
      value: 'e',
      label: 'Toggle'
    }],
    defaultValue: 'e'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With icons',
  args: {
    items: [{
      value: 'a',
      label: 'Toggle',
      icon: <IconPlaceholder />
    }, {
      value: 'b',
      label: 'Toggle',
      icon: <IconPlaceholder />
    }, {
      value: 'c',
      label: 'Toggle',
      icon: <IconPlaceholder />
    }],
    defaultValue: 'c'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      {[2, 3, 4, 5].map(n => <Toggle key={n} defaultValue={String.fromCharCode(96 + n)} items={Array.from({
      length: n
    }, (_, i) => ({
      value: String.fromCharCode(97 + i),
      label: 'Toggle',
      icon: <IconPlaceholder />
    }))} />)}
    </div>
}`,..._.parameters?.docs?.source}}},v=[`TwoItems`,`ThreeItems`,`FourItems`,`FiveItems`,`WithIcons`,`AllSizes`]}))();export{_ as AllSizes,h as FiveItems,m as FourItems,p as ThreeItems,f as TwoItems,g as WithIcons,v as __namedExportsOrder,u as default};