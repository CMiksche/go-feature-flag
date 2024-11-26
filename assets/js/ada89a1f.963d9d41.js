"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[47952],{43509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"configure_flag/rollout/canary","title":"Canary Release","description":"Canary release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody.","source":"@site/docs/configure_flag/rollout/canary.mdx","sourceDirName":"configure_flag/rollout","slug":"/configure_flag/rollout/canary","permalink":"/docs/next/configure_flag/rollout/canary","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/configure_flag/rollout/canary.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Rollout strategies","permalink":"/docs/next/category/rollout-strategies"},"next":{"title":"Experimentation rollout / A/B Testing","permalink":"/docs/next/configure_flag/rollout/experimentation"}}');var r=a(74848),l=a(28453),o=a(11470),s=a(19365);const u={},i="Canary Release",c={},d=[{value:"Example",id:"example",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"canary-release",children:"Canary Release"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Canary release"})," is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody."]}),"\n",(0,r.jsxs)(t.p,{children:["This is the easiest rollout strategy available.\nYou just have to select a percentage of your users in your flag, and the ",(0,r.jsx)(t.code,{children:"True"})," behavior will apply to them."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(o.A,{groupId:"code",children:[(0,r.jsx)(s.A,{value:"yaml",label:"YAML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"canary-flag:\n  variations:\n    oldBehavior: false\n    canary: true\n  defaultRule:\n  # highlight-start\n    percentage:\n      oldBehavior: 99\n      canary: 1\n  # highlight-end\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:' {\n  "canary-flag": {\n    "variations": {\n      "oldBehavior": false,\n      "canary": true\n    },\n    "defaultRule": {\n# highlight-start\n      "percentage": {\n        "oldBehavior": 99,\n        "canary": 1\n      }\n# highlight-end\n    }\n  }\n}\n'})})}),(0,r.jsx)(s.A,{value:"toml",label:"TOML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:"[canary-flag.variations]\noldBehavior = false\ncanary = true\n\n# highlight-start\n[canary-flag.defaultRule.percentage]\noldBehavior = 99\ncanary = 1\n# highlight-end\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(96540),r=a(18215),l=a(23104),o=a(56347),s=a(205),u=a(57485),i=a(31682),c=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=h(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,d]=g({queryString:a,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=i??p;return f({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function y(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==n&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:l}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(96540);const r={},l=n.createContext(r);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);