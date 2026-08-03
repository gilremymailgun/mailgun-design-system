import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./PageHeader-CeTdwplM.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Patterns/Page Header`,component:n,tags:[`autodocs`]},i=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien odio, feugiat sed laoreet vel, sodales id lectus. Pellentesque consectetur lorem ac massa posuere, non placerat est consequat. Aliquam id pretium orci. Phasellus ullamcorper risus eu pharetra feugiat. Phasellus eu est odio.`,a={args:{title:`Title of the page`,breadcrumbItems:[{label:`Item 1`,onClick:()=>{}},{label:`Item 2`,onClick:()=>{}},{label:`Item 3`,onClick:()=>{}},{label:`Item 4`,onClick:()=>{}},{label:`Item 5`}],description:i,domain:`domain1.company.com`,inputValue:``,inputPlaceholder:`acme.com`,onCopy:()=>{},secondaryButtonLabel:`Preview list`,primaryButtonLabel:`Validate`,onMore:()=>{},infoText:`You've used 2,153 of 20,000 validations`}},o={name:`Minimal (title only)`,args:{title:`Title of the page`}},s={name:`Without domain field`,args:{title:`Title of the page`,breadcrumbItems:[{label:`Item 1`,onClick:()=>{}},{label:`Item 2`}],description:i,primaryButtonLabel:`Validate`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Minimal (title only)',
  args: {
    title: 'Title of the page'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Full`,`Minimal`,`WithoutDomain`]}))();export{a as Full,o as Minimal,s as WithoutDomain,c as __namedExportsOrder,r as default};