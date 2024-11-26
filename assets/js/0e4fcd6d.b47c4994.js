"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[34887],{82416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"relay_proxy/index","title":"Use the relay proxy","description":"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages.","source":"@site/versioned_docs/version-v1.35.0/relay_proxy/index.mdx","sourceDirName":"relay_proxy","slug":"/relay_proxy/","permalink":"/docs/v1.35.0/relay_proxy/","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.35.0/relay_proxy/index.mdx","tags":[],"version":"v1.35.0","frontMatter":{"title":"Use the relay proxy","description":"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages."},"sidebar":"tutorialSidebar","previous":{"title":"Android / Kotlin","permalink":"/docs/v1.35.0/openfeature_sdk/client_providers/openfeature_android"},"next":{"title":"Getting started","permalink":"/docs/v1.35.0/relay_proxy/getting_started"}}');var n=r(74848),s=r(28453),o=r(3514);const i={title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages."},l="Use the relay proxy",c={},u=[];function d(e){const t={h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"use-the-relay-proxy",children:"Use the relay proxy"})}),"\n",(0,n.jsxs)(t.p,{children:["The GO Feature Flag Relay Proxy serves as the ",(0,n.jsx)(t.strong,{children:"backend"})," for your feature flag solution, housing all the necessary logic for feature flag management."]}),"\n",(0,n.jsxs)(t.p,{children:["It provides APIs to enable remote access to the GO Feature Flag system. While you have the option to interact directly with these APIs, it is recommended to use the ",(0,n.jsx)(t.strong,{children:"Openfeature SDK"})," and the appropriate ",(0,n.jsx)(t.strong,{children:"provider"})," for your programming language for a seamless experience."]}),"\n",(0,n.jsxs)(t.p,{children:["The relay proxy is designed to be ",(0,n.jsx)(t.strong,{children:"simple, lightweight, and stateless"}),". It operates without the need for any databases or complex systems, as it loads feature flag configuration files from a specified location and stores them in memory. Periodic polling ensures the proxy stays up-to-date with any changes in the configuration. This straightforward setup makes installation and usage incredibly easy and hassle-free."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(50966).A+"",width:"684",height:"265"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(o.A,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var a=r(18215),n=r(26972),s=r(28774),o=r(53465),i=r(16654),l=r(21312),c=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function h(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,a.A)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:n,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,a.A)("text--truncate",u.cardTitle),title:n,children:[r," ",n]}),s&&(0,d.jsx)("p",{className:(0,a.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const r=(0,n.Nr)(t),a=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??a(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,n.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(y,{...e});const s=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,a.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var a=r(96540),n=r(44586);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),s=r.pluralForms.indexOf(n);return a[Math.min(s,a.length-1)]}(r,t,e)}}},50966:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/arch-5ef698ddb50577ad73285434b41d6e7e.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);