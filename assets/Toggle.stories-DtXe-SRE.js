import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-B-eiRk3W.js";import{n as i,t as a}from"./Icon-BCiSfwnI.js";var o=e((()=>{})),s,c,l=e((()=>{n(),o(),s=r(),c=({options:e,value:t,onChange:n,className:r})=>(0,s.jsx)(`div`,{className:`mg-toggle${r?` ${r}`:``}`,role:`group`,children:e.map((r,i)=>{let a=r.value===t,o=i===0,c=i===e.length-1;return(0,s.jsxs)(`button`,{type:`button`,className:[`mg-toggle__item`,a?`mg-toggle__item--selected`:``,o?`mg-toggle__item--first`:``,c?`mg-toggle__item--last`:``].filter(Boolean).join(` `),onClick:()=>n(r.value),"aria-pressed":a,children:[r.icon&&(0,s.jsx)(`span`,{className:`mg-toggle__icon`,children:r.icon}),(0,s.jsx)(`span`,{className:`mg-toggle__label`,children:r.label})]},r.value)})}),c.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`ToggleOption`}],raw:`ToggleOption[]`},description:``},value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),u,d,f,p,m,h;e((()=>{u=t(n(),1),l(),i(),d=r(),f={title:`Components/Toggle`,component:c,tags:[`autodocs`]},p={name:`2 items`,render:()=>{let[e,t]=(0,u.useState)(`a`);return(0,d.jsx)(c,{value:e,onChange:t,options:[{value:`a`,label:`Toggle`,icon:(0,d.jsx)(a,{name:`ui/gear-gen2`})},{value:`b`,label:`Toggle`,icon:(0,d.jsx)(a,{name:`ui/gear-gen2`})}]})}},m={name:`5 items`,render:()=>{let[e,t]=(0,u.useState)(`a`);return(0,d.jsx)(c,{value:e,onChange:t,options:[{value:`a`,label:`A`},{value:`b`,label:`B`},{value:`c`,label:`C`},{value:`d`,label:`D`},{value:`e`,label:`E`}]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '2 items',
  render: () => {
    const [value, setValue] = useState('a');
    return <Toggle value={value} onChange={setValue} options={[{
      value: 'a',
      label: 'Toggle',
      icon: <Icon name="ui/gear-gen2" />
    }, {
      value: 'b',
      label: 'Toggle',
      icon: <Icon name="ui/gear-gen2" />
    }]} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '5 items',
  render: () => {
    const [value, setValue] = useState('a');
    return <Toggle value={value} onChange={setValue} options={[{
      value: 'a',
      label: 'A'
    }, {
      value: 'b',
      label: 'B'
    }, {
      value: 'c',
      label: 'C'
    }, {
      value: 'd',
      label: 'D'
    }, {
      value: 'e',
      label: 'E'
    }]} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`TwoItems`,`FiveItems`]}))();export{m as FiveItems,p as TwoItems,h as __namedExportsOrder,f as default};