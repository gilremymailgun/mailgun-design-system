import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-DJ6M_JbP.js";var i=e((()=>{})),a,o,s,c,l,u,d,f,p,m=e((()=>{a=t(n(),1),i(),o=r(),s=()=>(0,o.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M10 12L6 8L10 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),c=()=>(0,o.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M6 4L10 8L6 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),l=()=>(0,o.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M13 8H3M3 8L7 4M3 8L7 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),u=()=>(0,o.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M3 8H13M13 8L9 4M13 8L9 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),d=({currentPage:e,totalPages:t,onPageChange:n})=>(0,o.jsxs)(`div`,{className:`mg-pagination__navigator`,role:`navigation`,"aria-label":`Pagination`,children:[(0,o.jsx)(`button`,{className:`mg-pagination__nav-btn`,onClick:()=>n(1),disabled:e===1,"aria-label":`First page`,children:(0,o.jsx)(l,{})}),(0,o.jsx)(`button`,{className:`mg-pagination__nav-btn`,onClick:()=>n(e-1),disabled:e===1,"aria-label":`Previous page`,children:(0,o.jsx)(s,{})}),(()=>{let n=[];if(t<=7)return Array.from({length:t},(e,t)=>t+1);n.push(1),e>3&&n.push(`...`);for(let r=Math.max(2,e-1);r<=Math.min(t-1,e+1);r++)n.push(r);return e<t-2&&n.push(`...`),n.push(t),n})().map((t,r)=>t===`...`?(0,o.jsx)(`span`,{className:`mg-pagination__ellipsis`,children:`…`},`ellipsis-${r}`):(0,o.jsx)(`button`,{className:`mg-pagination__page-btn ${t===e?`mg-pagination__page-btn--active`:``}`,onClick:()=>n(t),"aria-label":`Page ${t}`,"aria-current":t===e?`page`:void 0,children:t},t)),(0,o.jsx)(`button`,{className:`mg-pagination__nav-btn`,onClick:()=>n(e+1),disabled:e===t,"aria-label":`Next page`,children:(0,o.jsx)(c,{})}),(0,o.jsx)(`button`,{className:`mg-pagination__nav-btn`,onClick:()=>n(t),disabled:e===t,"aria-label":`Last page`,children:(0,o.jsx)(u,{})})]}),f=({pageSize:e,options:t,onPageSizeChange:n})=>(0,o.jsx)(`div`,{className:`mg-pagination__sizer`,role:`group`,"aria-label":`Rows per page`,children:t.map((r,i)=>{let a=i===0,s=i===t.length-1;return(0,o.jsx)(`button`,{className:[`mg-pagination__sizer-btn`,r===e?`mg-pagination__sizer-btn--selected`:``,a?`mg-pagination__sizer-btn--first`:``,s?`mg-pagination__sizer-btn--last`:``].filter(Boolean).join(` `),onClick:()=>n(r),"aria-pressed":r===e,children:r},r)})}),p=({currentPage:e,totalPages:t=10,pageSize:n,pageSizeOptions:r=[10,20,30],variant:i=`complete`,onPageChange:s,onPageSizeChange:c})=>{let[l,u]=(0,a.useState)(1),[p,m]=(0,a.useState)(r[0]),h=e??l,g=n??p,_=e=>{u(e),s?.(e)},v=e=>{m(e),c?.(e)},y=(0,o.jsx)(d,{currentPage:h,totalPages:t,onPageChange:_}),b=(0,o.jsx)(f,{pageSize:g,options:r,onPageSizeChange:v});return(0,o.jsxs)(`div`,{className:`mg-pagination mg-pagination--${i}`,children:[i===`complete`&&(0,o.jsxs)(o.Fragment,{children:[b,y]}),i===`mirrored`&&(0,o.jsxs)(o.Fragment,{children:[y,b]}),i===`no-toggle`&&(0,o.jsx)(o.Fragment,{children:y})]})},p.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{currentPage:{required:!1,tsType:{name:`number`},description:``},totalPages:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},pageSize:{required:!1,tsType:{name:`union`,raw:`10 | 20 | 30`,elements:[{name:`literal`,value:`10`},{name:`literal`,value:`20`},{name:`literal`,value:`30`}]},description:``},pageSizeOptions:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`10 | 20 | 30`,elements:[{name:`literal`,value:`10`},{name:`literal`,value:`20`},{name:`literal`,value:`30`}]}],raw:`PageSize[]`},description:``,defaultValue:{value:`[10, 20, 30]`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'complete' | 'mirrored' | 'no-toggle'`,elements:[{name:`literal`,value:`'complete'`},{name:`literal`,value:`'mirrored'`},{name:`literal`,value:`'no-toggle'`}]},description:``,defaultValue:{value:`'complete'`,computed:!1}},onPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``},onPageSizeChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(size: PageSize) => void`,signature:{arguments:[{type:{name:`union`,raw:`10 | 20 | 30`,elements:[{name:`literal`,value:`10`},{name:`literal`,value:`20`},{name:`literal`,value:`30`}]},name:`size`}],return:{name:`void`}}},description:``}}}})),h,g,_,v,y,b,x,S,C;e((()=>{m(),h=r(),g={title:`Navigation/Pagination`,component:p,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`complete`,`mirrored`,`no-toggle`],description:`Layout variant matching Figma`},currentPage:{control:{type:`number`,min:1}},totalPages:{control:{type:`number`,min:1}},pageSize:{control:`select`,options:[10,20,30]}}},_={name:`Complete (sizer + navigator)`,args:{variant:`complete`,currentPage:1,totalPages:10,pageSize:10}},v={name:`Mirrored (navigator + sizer)`,args:{variant:`mirrored`,currentPage:1,totalPages:10,pageSize:10}},y={name:`No Toggle (navigator only)`,args:{variant:`no-toggle`,currentPage:1,totalPages:10}},b={name:`Middle page`,args:{variant:`complete`,currentPage:5,totalPages:10,pageSize:20}},x={name:`Last page`,args:{variant:`complete`,currentPage:10,totalPages:10,pageSize:30}},S={name:`All variants`,render:()=>(0,h.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,padding:`24px`},children:[`complete`,`mirrored`,`no-toggle`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{style:{fontSize:`11px`,color:`#808a91`,textTransform:`capitalize`,marginBottom:`8px`},children:e}),(0,h.jsx)(p,{variant:e,currentPage:1,totalPages:10,pageSize:10})]},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Complete (sizer + navigator)',
  args: {
    variant: 'complete',
    currentPage: 1,
    totalPages: 10,
    pageSize: 10
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Mirrored (navigator + sizer)',
  args: {
    variant: 'mirrored',
    currentPage: 1,
    totalPages: 10,
    pageSize: 10
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'No Toggle (navigator only)',
  args: {
    variant: 'no-toggle',
    currentPage: 1,
    totalPages: 10
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Middle page',
  args: {
    variant: 'complete',
    currentPage: 5,
    totalPages: 10,
    pageSize: 20
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Last page',
  args: {
    variant: 'complete',
    currentPage: 10,
    totalPages: 10,
    pageSize: 30
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {(['complete', 'mirrored', 'no-toggle'] as const).map(variant => <div key={variant}>
          <div style={{
        fontSize: '11px',
        color: '#808a91',
        textTransform: 'capitalize',
        marginBottom: '8px'
      }}>{variant}</div>
          <Pagination variant={variant} currentPage={1} totalPages={10} pageSize={10} />
        </div>)}
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Complete`,`Mirrored`,`NoToggle`,`MiddlePage`,`LastPage`,`AllVariants`]}))();export{S as AllVariants,_ as Complete,x as LastPage,b as MiddlePage,v as Mirrored,y as NoToggle,C as __namedExportsOrder,g as default};