import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CwPiNqep.js";import{n as i,t as a}from"./Icon-DwbypJUJ.js";import{n as o,t as s}from"./Button-BdwRm-pk.js";import{n as c,t as l}from"./Breadcrumb-DAU8wUCd.js";import{n as u,t as d}from"./Field-C_hzMFlh.js";var f=e((()=>{})),p,m,h,g=e((()=>{p=t(n(),1),i(),f(),m=r(),h=({value:e,state:t=`Default`,onChange:n,className:r})=>{let[i,o]=(0,p.useState)(e),s=t===`Open`||t===`Edit`,c=[`mg-page-header-domain`,r||``].filter(Boolean).join(` `);return s?(0,m.jsxs)(`div`,{className:c,children:[(0,m.jsx)(`span`,{className:`mg-page-header-domain__icon`,children:(0,m.jsx)(a,{name:`navigate/chevron-right-gen2`})}),(0,m.jsx)(`input`,{type:`text`,className:`mg-page-header-domain__input`,value:i,onChange:e=>{o(e.target.value),n?.(e.target.value)},autoFocus:t===`Open`})]}):(0,m.jsxs)(`div`,{className:c,children:[(0,m.jsx)(`span`,{className:`mg-page-header-domain__icon`,children:(0,m.jsx)(a,{name:`navigate/chevron-right-gen2`})}),(0,m.jsx)(`p`,{className:`mg-page-header-domain__text`,children:e})]})},h.__docgenInfo={description:``,methods:[],displayName:`PageHeaderDomain`,props:{value:{required:!0,tsType:{name:`string`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Open' | 'Edit'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Open'`},{name:`literal`,value:`'Edit'`}]},description:``,defaultValue:{value:`'Default'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),_=e((()=>{})),v,y,b=e((()=>{n(),c(),o(),u(),i(),g(),_(),v=r(),y=({title:e,breadcrumbItems:t,description:n,domain:r,onDomainChange:i,inputValue:o,inputPlaceholder:c=`acme.com`,onInputChange:u,onCopy:f,onMore:p,secondaryButtonLabel:m,onSecondaryClick:g,primaryButtonLabel:_,onPrimaryClick:y,infoText:b,className:x})=>(0,v.jsxs)(`div`,{className:[`mg-page-header`,x||``].filter(Boolean).join(` `),children:[(0,v.jsxs)(`div`,{className:`mg-page-header__left`,children:[t&&(0,v.jsx)(l,{type:`default`,items:t}),(0,v.jsxs)(`div`,{className:`mg-page-header__title-row`,children:[(0,v.jsx)(`h1`,{className:`mg-page-header__title`,children:e}),r!==void 0&&(0,v.jsx)(h,{value:r,onChange:i})]}),n&&(0,v.jsx)(`p`,{className:`mg-page-header__description`,children:n})]}),(0,v.jsxs)(`div`,{className:`mg-page-header__right`,children:[(0,v.jsxs)(`div`,{className:`mg-page-header__actions`,children:[o!==void 0&&(0,v.jsx)(d,{value:o,placeholder:c,onChange:u,size:`small`,showTrailingIcon:!0,className:`mg-page-header__field`}),f&&(0,v.jsx)(s,{hierarchy:`tertiary`,size:`small`,iconPosition:`only`,icon:(0,v.jsx)(a,{name:`document/copy-gen1`}),onClick:f,"aria-label":`Copy`}),(m||_)&&(0,v.jsxs)(`div`,{className:`mg-page-header__button-group`,children:[m&&(0,v.jsx)(s,{hierarchy:`secondary`,size:`default`,onClick:g,children:m}),_&&(0,v.jsx)(s,{hierarchy:`primary`,size:`default`,iconPosition:`trailing`,icon:(0,v.jsx)(a,{name:`navigate/point-down-gen2`}),onClick:y,children:_})]}),p&&(0,v.jsx)(s,{hierarchy:`tertiary`,size:`small`,iconPosition:`only`,icon:(0,v.jsx)(a,{name:`navigate/more-gen2`}),onClick:p,"aria-label":`More`})]}),b&&(0,v.jsxs)(`div`,{className:`mg-page-header__info`,children:[(0,v.jsx)(`p`,{className:`mg-page-header__info-text`,children:b}),(0,v.jsx)(`span`,{className:`mg-page-header__info-icon`,children:(0,v.jsx)(a,{name:`feedback/info-circle-gen1`})})]})]})]}),y.__docgenInfo={description:``,methods:[],displayName:`PageHeader`,props:{title:{required:!0,tsType:{name:`string`},description:``},breadcrumbItems:{required:!1,tsType:{name:`Array`,elements:[{name:`BreadcrumbItemData`}],raw:`BreadcrumbItemData[]`},description:``},description:{required:!1,tsType:{name:`string`},description:``},domain:{required:!1,tsType:{name:`string`},description:``},onDomainChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},inputValue:{required:!1,tsType:{name:`string`},description:`Right-side search/filter input value.`},inputPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'acme.com'`,computed:!1}},onInputChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onMore:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},secondaryButtonLabel:{required:!1,tsType:{name:`string`},description:``},onSecondaryClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},primaryButtonLabel:{required:!1,tsType:{name:`string`},description:``},onPrimaryClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},infoText:{required:!1,tsType:{name:`string`},description:`e.g. "You've used 2,153 of 20,000 validations"`},className:{required:!1,tsType:{name:`string`},description:``}}}})),x,S,C,w,T,E;e((()=>{b(),x={title:`Patterns/Page Header`,component:y,tags:[`autodocs`]},S=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien odio, feugiat sed laoreet vel, sodales id lectus. Pellentesque consectetur lorem ac massa posuere, non placerat est consequat. Aliquam id pretium orci. Phasellus ullamcorper risus eu pharetra feugiat. Phasellus eu est odio.`,C={args:{title:`Title of the page`,breadcrumbItems:[{label:`Item 1`,onClick:()=>{}},{label:`Item 2`,onClick:()=>{}},{label:`Item 3`,onClick:()=>{}},{label:`Item 4`,onClick:()=>{}},{label:`Item 5`}],description:S,domain:`domain1.company.com`,inputValue:``,inputPlaceholder:`acme.com`,onCopy:()=>{},secondaryButtonLabel:`Preview list`,primaryButtonLabel:`Validate`,onMore:()=>{},infoText:`You've used 2,153 of 20,000 validations`}},w={name:`Minimal (title only)`,args:{title:`Title of the page`}},T={name:`Without domain field`,args:{title:`Title of the page`,breadcrumbItems:[{label:`Item 1`,onClick:()=>{}},{label:`Item 2`}],description:S,primaryButtonLabel:`Validate`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title of the page',
    breadcrumbItems: [{
      label: 'Item 1',
      onClick: () => {}
    }, {
      label: 'Item 2',
      onClick: () => {}
    }, {
      label: 'Item 3',
      onClick: () => {}
    }, {
      label: 'Item 4',
      onClick: () => {}
    }, {
      label: 'Item 5'
    }],
    description: DESCRIPTION,
    domain: 'domain1.company.com',
    inputValue: '',
    inputPlaceholder: 'acme.com',
    onCopy: () => {},
    secondaryButtonLabel: 'Preview list',
    primaryButtonLabel: 'Validate',
    onMore: () => {},
    infoText: "You've used 2,153 of 20,000 validations"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Minimal (title only)',
  args: {
    title: 'Title of the page'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Without domain field',
  args: {
    title: 'Title of the page',
    breadcrumbItems: [{
      label: 'Item 1',
      onClick: () => {}
    }, {
      label: 'Item 2'
    }],
    description: DESCRIPTION,
    primaryButtonLabel: 'Validate'
  }
}`,...T.parameters?.docs?.source}}},E=[`Full`,`Minimal`,`WithoutDomain`]}))();export{C as Full,w as Minimal,T as WithoutDomain,E as __namedExportsOrder,x as default};