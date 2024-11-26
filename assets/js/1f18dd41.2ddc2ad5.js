"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[32],{87734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"configure_flag/rollout/progressive","title":"Progressive rollout","description":"A progressive rollout allows you to change the value of your flag over time.","source":"@site/versioned_docs/version-v1.39.0/configure_flag/rollout/progressive.mdx","sourceDirName":"configure_flag/rollout","slug":"/configure_flag/rollout/progressive","permalink":"/docs/v1.39.0/configure_flag/rollout/progressive","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.39.0/configure_flag/rollout/progressive.mdx","tags":[],"version":"v1.39.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Experimentation rollout / A/B Testing","permalink":"/docs/v1.39.0/configure_flag/rollout/experimentation"},"next":{"title":"Scheduled rollout","permalink":"/docs/v1.39.0/configure_flag/rollout/scheduled"}}');var a=t(74848),i=t(28453),l=t(11470),o=t(19365);const s={},d="Progressive rollout",c={},u=[{value:"Example",id:"example",level:2},{value:"Using the percentage field (advanced)",id:"using-the-percentage-field-advanced",level:3},{value:"Configuration fields",id:"configuration-fields",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"progressive-rollout",children:"Progressive rollout"})}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"progressive rollout"})," allows you to change the value of your flag over time."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(l.A,{groupId:"code",children:[(0,a.jsx)(o.A,{value:"yaml",label:"YAML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"progressive-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n# highlight-start\n    progressiveRollout:\n      initial:\n        variation: variationA\n        date: 2024-01-01T05:00:00.100Z\n      end:\n        variation: variationB\n        date: 2024-01-05T05:00:00.100Z\n# highlight-end\n"})})}),(0,a.jsx)(o.A,{value:"json",label:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "progressive-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n# highlight-start\n      "progressiveRollout": {\n        "initial": {\n          "variation": "variationA",\n          "date": "2024-01-01T05:00:00.100Z"\n        },\n        "end": {\n          "variation": "variationB",\n          "date": "2024-01-05T05:00:00.100Z"\n        }\n      },\n# highlight-end\n    }\n  }\n}\n'})})}),(0,a.jsx)(o.A,{value:"toml",label:"TOML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[progressive-flag.variations]\nvariationA = "A"\nvariationB = "B"\n# highlight-start\n[progressive-flag.defaultRule.progressiveRollout.initial]\nvariation = "variationA"\ndate = 2024-01-01T05:00:00.100Z\n\n[progressive-flag.defaultRule.progressiveRollout.end]\nvariation = "variationB"\ndate = 2024-01-05T05:00:00.100Z\n# highlight-end\n'})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Before the ",(0,a.jsx)(n.code,{children:"initial"})," date, the flag will return variationA"]}),"\n",(0,a.jsxs)(n.li,{children:["Between the ",(0,a.jsx)(n.code,{children:"initial"})," and ",(0,a.jsx)(n.code,{children:"end"})," date, the flag will gradually shift to return variationB instead of variationA."]}),"\n",(0,a.jsxs)(n.li,{children:["After the ",(0,a.jsx)(n.code,{children:"end"})," date, the flag will return variationB."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"using-the-percentage-field-advanced",children:"Using the percentage field (advanced)"}),"\n",(0,a.jsx)(n.p,{children:"If you intend to partially rollout or keep both features."}),"\n",(0,a.jsxs)(l.A,{groupId:"code",children:[(0,a.jsx)(o.A,{value:"yaml",label:"YAML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"    progressiveRollout:\n      initial:\n        variation: variationA\n        # highlight-start\n        percentage: 20   \n        # highlight-end\n        date: 2024-01-01T05:00:00.100Z\n      end:\n        variation: variationB\n        # highlight-start\n        percentage: 80\n        # highlight-end\n        date: 2024-01-05T05:00:00.100Z\n"})})}),(0,a.jsx)(o.A,{value:"json",label:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'      "progressiveRollout": {\n        "initial": {\n          "variation": "variationA",\n          # highlight-start\n          "percentage": 20,\n          # highlight-end\n          "date": "2024-01-01T05:00:00.100Z"\n        },\n        "end": {\n          "variation": "variationB",\n          # highlight-start\n          "percentage": 80,\n          # highlight-end\n          "date": "2024-01-05T05:00:00.100Z"\n        }\n      }\n'})})}),(0,a.jsx)(o.A,{value:"toml",label:"TOML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[progressive-flag.defaultRule.progressiveRollout.initial]\nvariation = "variationA"\n# highlight-start\npercentage = 20\n# highlight-end\ndate = 2024-01-01T05:00:00.100Z\n\n[progressive-flag.defaultRule.progressiveRollout.end]\nvariation = "variationB"\n# highlight-start\npercentage = 80\n# highlight-end\ndate = 2024-01-05T05:00:00.100Z\n'})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Before the ",(0,a.jsx)(n.code,{children:"initial"})," date, the flag will return ",(0,a.jsx)(n.strong,{children:"variationB 20% of the time"})," and ",(0,a.jsx)(n.strong,{children:"variationA 80% of the time"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Between the ",(0,a.jsx)(n.code,{children:"initial"})," and ",(0,a.jsx)(n.code,{children:"end"})," date, the flag will gradually shift to return variationB more instead of variationA."]}),"\n",(0,a.jsxs)(n.li,{children:["After the ",(0,a.jsx)(n.code,{children:"end"})," date, the flag will return ",(0,a.jsx)(n.strong,{children:"variationB 80% of the time"})," and ",(0,a.jsx)(n.strong,{children:"variationA 20% of the time"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"This may not be intuitive. It starts with variationA as the dominant response and gradually shifts towards variationB."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The dates are in the format supported natively by your flag file format."})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"initial"})})}),(0,a.jsxs)(n.td,{children:["The initial state of this flag.",(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"variation"})," is the variation you intend to switch from.",(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"date"})," is the date to start the rollout.",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"end"})})}),(0,a.jsxs)(n.td,{children:["The end state of this flag.",(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"variation"})," is the variation you intend to switch to.",(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"date"})," is the date when rollout is completed.",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"percentage"})}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"(optional)"})]}),(0,a.jsxs)(n.td,{children:["It represents the ramp of progress, at which level the flag starts (",(0,a.jsx)(n.code,{children:"initial"}),") and ends (",(0,a.jsx)(n.code,{children:"end"}),").",(0,a.jsx)("br",{}),(0,a.jsxs)(n.strong,{children:["Default: ",(0,a.jsx)(n.code,{children:"initial"})," = ",(0,a.jsx)(n.code,{children:"0"})," and ",(0,a.jsx)(n.code,{children:"end"})," = ",(0,a.jsx)(n.code,{children:"100"})]}),"."]})]})]})]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(96540),a=t(18215),i=t(23104),l=t(56347),o=t(205),s=t(57485),d=t(31682),c=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=f({queryString:t,groupId:a}),[v,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=d??v;return g({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function m(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(d(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=v(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(m,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function A(e){const n=(0,p.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);