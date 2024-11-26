"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[6415],{68135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"openfeature_sdk/client_providers/openfeature_react","title":"React","description":"How to use the OpenFeature Javascript React SDK for your React application","source":"@site/versioned_docs/version-v1.38.0/openfeature_sdk/client_providers/openfeature_react.mdx","sourceDirName":"openfeature_sdk/client_providers","slug":"/openfeature_sdk/client_providers/openfeature_react","permalink":"/docs/v1.38.0/openfeature_sdk/client_providers/openfeature_react","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/openfeature_sdk/client_providers/openfeature_react.mdx","tags":[],"version":"v1.38.0","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"React","description":"How to use the OpenFeature Javascript React SDK for your React application"},"sidebar":"tutorialSidebar","previous":{"title":"Javascript / Typescript","permalink":"/docs/v1.38.0/openfeature_sdk/client_providers/openfeature_javascript"},"next":{"title":"Swift","permalink":"/docs/v1.38.0/openfeature_sdk/client_providers/openfeature_swift"}}');var n=r(74848),o=r(28453);r(11470),r(19365);const i={sidebar_position:11,title:"React",description:"How to use the OpenFeature Javascript React SDK for your React application"},s="React SDK usage",l={},u=[{value:"About this provider",id:"about-this-provider",level:2},{value:"Install the provider",id:"install-the-provider",level:2},{value:"How to use the provider?",id:"how-to-use-the-provider",level:2},{value:"OpenFeatureProvider context provider",id:"openfeatureprovider-context-provider",level:3},{value:"Evaluation hooks",id:"evaluation-hooks",level:3},{value:"Advanced usage",id:"advanced-usage",level:3},{value:"Available options",id:"available-options",level:2},{value:"Example",id:"example",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"react-sdk-usage",children:"React SDK usage"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@openfeature/go-feature-flag-web-provider",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/npm/v/%40openfeature%2Fgo-feature-flag-web-provider?color=blue&style=flat-square&logo=npm",alt:"NPM Version"})}),"\n",(0,n.jsx)(t.img,{src:"https://img.shields.io/npm/d18m/%40openfeature%2Fgo-feature-flag-web-provider?style=flat-square",alt:"NPM Downloads"})]}),"\n",(0,n.jsx)(t.p,{children:"This page describes how to use the OpenFeature React SDK for your client application."}),"\n",(0,n.jsx)(t.h2,{id:"about-this-provider",children:"About this provider"}),"\n",(0,n.jsxs)(t.p,{children:["OpenFeature React SDK allows you to connect to your GO Feature Flag instance with the ",(0,n.jsx)(t.code,{children:"@openfeature/react-sdk"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you work with React the ",(0,n.jsx)(t.code,{children:"@openfeature/react-sdk"})," will give you a better integration with your React application.\nTo integrate it with GO Feature Flag, you need to use the ",(0,n.jsx)(t.code,{children:"@openfeature/go-feature-flag-web-provider"})," provider."]}),"\n",(0,n.jsx)(t.h2,{id:"install-the-provider",children:"Install the provider"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm install @openfeature/go-feature-flag-web-provider\nnpm install @openfeature/web-sdk\nnpm install @openfeature/react-sdk\nnpm install @openfeature/core\n"})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-the-provider",children:"How to use the provider?"}),"\n",(0,n.jsx)(t.h3,{id:"openfeatureprovider-context-provider",children:"OpenFeatureProvider context provider"}),"\n",(0,n.jsx)(t.p,{children:"The OpenFeatureProvider is a React context provider which represents a scope for feature flag evaluations within a React application.\nIt binds an OpenFeature client to all evaluations within child components, and allows the use of evaluation hooks."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'import { EvaluationContext, OpenFeature, OpenFeatureProvider, useFlag } from "@openfeature/react-sdk";\nimport { GoFeatureFlagWebProvider } from "@openfeature/go-feature-flag-web-provider";\n\nconst goFeatureFlagWebProvider = new GoFeatureFlagWebProvider({\n  endpoint: "http://localhost:1031"\n});\n\n// Set the initial context for your evaluations\nOpenFeature.setContext({\n  targetingKey: "user-1",\n  admin: false\n});\n\n// Instantiate and set our provider (be sure this only happens once)!\n// Note: there\'s no need to await its initialization, the React SDK handles re-rendering and suspense for you!\nOpenFeature.setProvider(goFeatureFlagWebProvider);\n\n// Enclose your content in the configured provider\nfunction App() {\n  return (\n    <OpenFeatureProvider>\n      <Page />\n    </OpenFeatureProvider>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"evaluation-hooks",children:"Evaluation hooks"}),"\n",(0,n.jsx)(t.p,{children:"Within the provider, you can use the various evaluation hooks to evaluate flags."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'function Page() {\n  // Use the "query-style" flag evaluation hook, specifying a flag-key and a default value.\n  const { value: showNewMessage } = useFlag(\'new-message\', true);\n  return (\n    <div className="App">\n      <header className="App-header">\n        {showNewMessage ? <p>Welcome to this OpenFeature-enabled React app!</p> : <p>Welcome to this React app.</p>}\n      </header>\n    </div>\n  )\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,n.jsxs)(t.p,{children:["You can check the ",(0,n.jsx)(t.a,{href:"https://openfeature.dev/docs/reference/technologies/client/web/react",children:"OpenFeature React SDK documentation"})," to see all the available hooks and how to use them."]}),"\n",(0,n.jsx)(t.h2,{id:"available-options",children:"Available options"}),"\n",(0,n.jsxs)(t.p,{children:["Check the available options for the provider in the ",(0,n.jsx)(t.a,{href:"./openfeature_javascript",children:"web provider page"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to see some code, you can check the ",(0,n.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/openfeature_react",children:"example"})," in the GO Feature Flag repository."]}),"\n",(0,n.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,n.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,n.jsx)(t.a,{href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag-web",children:(0,n.jsx)(t.code,{children:"open-feature/js-sdk-contrib"})})," repository."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var a=r(96540),n=r(18215),o=r(23104),i=r(56347),s=r(205),l=r(57485),u=r(31682),c=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=v({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=u??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=s[r].value;n!==a&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,m.jsx)(x,{...t,...e}),(0,m.jsx)(w,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,m.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(96540);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);