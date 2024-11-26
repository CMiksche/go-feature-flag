"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[44116],{4705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"openfeature_sdk/server_providers/openfeature_dotnet","title":".NET","description":"How to use the OpenFeature .Net SDK","source":"@site/versioned_docs/version-v1.38.0/openfeature_sdk/server_providers/openfeature_dotnet.mdx","sourceDirName":"openfeature_sdk/server_providers","slug":"/openfeature_sdk/server_providers/openfeature_dotnet","permalink":"/docs/v1.38.0/openfeature_sdk/server_providers/openfeature_dotnet","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/openfeature_sdk/server_providers/openfeature_dotnet.mdx","tags":[],"version":"v1.38.0","sidebarPosition":60,"frontMatter":{"sidebar_position":60,"title":".NET","description":"How to use the OpenFeature .Net SDK"},"sidebar":"tutorialSidebar","previous":{"title":"Ruby","permalink":"/docs/v1.38.0/openfeature_sdk/server_providers/openfeature_ruby"},"next":{"title":"Javascript / Typescript","permalink":"/docs/v1.38.0/openfeature_sdk/client_providers/openfeature_javascript"}}');var r=n(74848),l=n(28453),o=n(11470),s=n(19365);const i={sidebar_position:60,title:".NET",description:"How to use the OpenFeature .Net SDK"},u=".Net SDK usage",c={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"net-sdk-usage",children:".Net SDK usage"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://nuget.info/packages/OpenFeature.Contrib.GOFeatureFlag",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/nuget/v/OpenFeature.Contrib.GOFeatureFlag?color=blue&style=flat-square",alt:"NuGet Version"})}),"\n",(0,r.jsx)(t.img,{src:"https://img.shields.io/nuget/dt/OpenFeature.Contrib.GOFeatureFlag?style=flat-square",alt:"NuGet Downloads"})]}),"\n",(0,r.jsx)(t.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["The first things we will do is install the ",(0,r.jsx)(t.strong,{children:"Open Feature SDK"})," and the ",(0,r.jsx)(t.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,r.jsxs)(o.A,{groupId:"code",children:[(0,r.jsx)(s.A,{value:"netcli",label:".NET CLI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"dotnet add package OpenFeature.Contrib.GOFeatureFlag\n"})})}),(0,r.jsx)(s.A,{value:"pm",label:"Package Manager",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"NuGet\\Install-Package OpenFeature.Contrib.GOFeatureFlag\n"})})}),(0,r.jsx)(s.A,{value:"pr",label:"Package Reference",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<PackageReference Include="OpenFeature.Contrib.GOFeatureFlag" />\n'})})}),(0,r.jsx)(s.A,{value:"pc",label:"Packet cli",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"paket add OpenFeature.Contrib.GOFeatureFlag\n"})})}),(0,r.jsx)(s.A,{value:"cake",label:"Cake",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"// Install OpenFeature.Contrib.GOFeatureFlag as a Cake Addin\n#addin nuget:?package=OpenFeature.Contrib.GOFeatureFlag\n\n// Install OpenFeature.Contrib.GOFeatureFlag as a Cake Tool\n#tool nuget:?package=OpenFeature.Contrib.GOFeatureFlag\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,r.jsx)(t.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,r.jsx)(o.A,{groupId:"code",children:(0,r.jsx)(s.A,{value:"csharp",label:"C#",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'using OpenFeature;\nusing OpenFeature.Contrib.GOFeatureFlag;\n\n// ...\n\nvar goFeatureFlagProvider = new GoFeatureFlagProvider(new GoFeatureFlagProviderOptions\n{\n    Endpoint = "http://localhost:1031/",\n    Timeout = new TimeSpan(1000 * TimeSpan.TicksPerMillisecond)\n});\nApi.Instance.SetProvider(goFeatureFlagProvider);\nvar client = Api.Instance.GetClient("my-app");\n'})})})}),"\n",(0,r.jsx)(t.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsxs)(t.p,{children:["This code block explain how you can create an ",(0,r.jsx)(t.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["In this example we are evaluating a ",(0,r.jsx)(t.code,{children:"boolean"})," flag, but other types are also available."]}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,r.jsx)(o.A,{groupId:"code",children:(0,r.jsx)(s.A,{value:"csharp",label:"C#",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nvar userContext = EvaluationContext.Builder()\n    .Set("targetingKey", "1d1b9238-2591-4a47-94cf-d2bc080892f1") // user unique identifier (mandatory)\n    .Set("firstname", "john")\n    .Set("lastname", "doe")\n    .Set("email", "john.doe@gofeatureflag.org")\n    .Set("admin", true) // this field is used in the targeting rule of the flag "flag-only-for-admin"\n    .Set("anonymous", false)\n    .Build();\n\nvar adminFlag = await client.GetBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n'})})})}),"\n",(0,r.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,r.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,r.jsx)(t.a,{href:"https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.GOFeatureFlag",children:(0,r.jsx)(t.code,{children:"open-feature/dotnet-sdk-contrib"})})," repository."]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(96540),r=n(18215),l=n(23104),o=n(56347),s=n(205),i=n(57485),u=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:n,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=u??g;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function F(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(x,{...t,...e}),(0,m.jsx)(j,{...t,...e})]})}function y(e){const t=(0,v.A)();return(0,m.jsx)(F,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},l=a.createContext(r);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);