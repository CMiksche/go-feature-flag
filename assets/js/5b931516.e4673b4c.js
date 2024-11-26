"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[64729],{36810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"go_module/store_file/index","title":"Retrieve your feature flags configuration","description":"The module supports different ways of retrieving the flag file.","source":"@site/versioned_docs/version-v1.34.3/go_module/store_file/index.mdx","sourceDirName":"go_module/store_file","slug":"/go_module/store_file/","permalink":"/docs/v1.34.3/go_module/store_file/","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.3/go_module/store_file/index.mdx","tags":[],"version":"v1.34.3","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Performing flag evaluations","permalink":"/docs/v1.34.3/go_module/target_user"},"next":{"title":"HTTP endpoint","permalink":"/docs/v1.34.3/go_module/store_file/http"}}');var i=r(74848),o=r(28453),s=r(3514);const l={sidebar_position:1},a="Retrieve your feature flags configuration",c={},u=[{value:"Available retrievers",id:"available-retrievers",level:2},{value:"Explicitly call the retrievers",id:"explicitly-call-the-retrievers",level:2}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"retrieve-your-feature-flags-configuration",children:"Retrieve your feature flags configuration"})}),"\n",(0,i.jsx)(t.p,{children:"The module supports different ways of retrieving the flag file."}),"\n",(0,i.jsx)(t.h2,{id:"available-retrievers",children:"Available retrievers"}),"\n",(0,i.jsx)(s.A,{}),"\n",(0,i.jsxs)(t.p,{children:["To retrieve a file you need to provide a ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever",children:"retriever"})," in your ",(0,i.jsx)(t.code,{children:"ffclient.Config{}"})," during the initialization.",(0,i.jsx)(t.br,{}),"\n","If the existing retriever does not work with your system you can extend the system and use a ",(0,i.jsx)(t.a,{href:"/docs/v1.34.3/go_module/store_file/custom",children:"custom retriever"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"explicitly-call-the-retrievers",children:"Explicitly call the retrievers"}),"\n",(0,i.jsx)(t.p,{children:"By default, the retrievers are called regularly to refresh the configuration based on the polling interval."}),"\n",(0,i.jsxs)(t.p,{children:["But there are use cases where you want to refresh the configuration explicitly ",(0,i.jsx)(t.em,{children:"(for example, during the CI process\nafter you have changed your configuration file)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To do that, you can call the ",(0,i.jsx)(t.code,{children:"ForceRefresh"})," method on the client."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Init ffclient with a file retriever.\n\tgoff, _ := ffclient.New(ffclient.Config{\n\t\tPollingInterval: 10 * time.Minute,\n\t\tRetriever: &fileretriever.Retriever{\n\t\t\tPath: "xxxx.yaml",\n\t\t},\n\t})\n\n\t// ...\n\tgoff.ForceRefresh()\n\t// ...\n'})})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>v});r(96540);var n=r(18215),i=r(26972),o=r(28774),s=r(53465),l=r(16654),a=r(21312),c=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function f(e){let{href:t,children:r}=e;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:i,description:o}=e;return(0,d.jsxs)(f,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.$S)();return(0,d.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),i=r(44586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),o=r.pluralForms.indexOf(i);return n[Math.min(o,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);