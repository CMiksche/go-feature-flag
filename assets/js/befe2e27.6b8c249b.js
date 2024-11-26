"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[71545],{57039:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"openfeature_sdk/sdk","title":"SDKs","description":"Use GO Feature Flag with Openfeature SDKs","source":"@site/versioned_docs/version-v1.37.1/openfeature_sdk/sdk.mdx","sourceDirName":"openfeature_sdk","slug":"/openfeature_sdk/sdk","permalink":"/docs/v1.37.1/openfeature_sdk/sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.37.1/openfeature_sdk/sdk.mdx","tags":[],"version":"v1.37.1","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Use GO Feature Flag with Openfeature SDKs"},"sidebar":"tutorialSidebar","previous":{"title":"How to export evaluation data","permalink":"/docs/v1.37.1/configure_flag/export_flags_usage"},"next":{"title":"GO","permalink":"/docs/v1.37.1/openfeature_sdk/server_providers/openfeature_go"}}');var t=a(74848),s=a(28453),n=a(84576),i=a(22607);const l={sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},d="SDKs",c={},g=[{value:"Server Providers",id:"server-providers",level:2},{value:"Client Providers",id:"client-providers",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"sdks",children:"SDKs"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GO Feature Flag"})," stands out as a feature flag solution, distinct from others, due to our decision to fully support the ",(0,t.jsx)(r.a,{href:"https://openfeature.dev",children:(0,t.jsx)(r.code,{children:"Openfeature"})})," CNCF project."]}),"\n",(0,t.jsx)(r.p,{children:"The benefit of choosing OpenFeature lies in its framework-agnostic nature. When utilizing OpenFeature SDKs, you minimize the effort required for switching to a different feature flag provider. This flexibility empowers you to make changes without being tied down to a particular vendor."}),"\n",(0,t.jsxs)(r.p,{children:["To show our commitment to this initiative, ",(0,t.jsx)(r.strong,{children:"GO Feature Flag has opted not to develop any custom SDKs and instead relies entirely on OpenFeature SDKs"}),".\nIn order to seamlessly integrate with our solution, we offer ",(0,t.jsx)(r.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/provider",children:(0,t.jsx)(r.code,{children:"providers"})})," for GO Feature Flag in multiple programming languages."]}),"\n",(0,t.jsx)(r.p,{children:"Rest assured, working with OpenFeature SDKs alongside GO Feature Flag providers is as straightforward as using any other feature flag solution. The added advantage is that you now adhere to a standard approach and avoid any vendor lock-in!"}),"\n",(0,t.jsx)(r.h2,{id:"server-providers",children:"Server Providers"}),"\n",(0,t.jsx)(n.C,{cards:[{logoCss:"devicon-go-original-wordmark colored",title:"GO",badges:["Server"],docLink:"./server_providers/openfeature_go",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fproxy.golang.org%2Fgithub.com%2Fopen-feature%2Fgo-sdk-contrib%2Fproviders%2Fgo-feature-flag%2F%40latest&query=%24.Version&label=GO&color=blue&style=flat-square&log=go",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-nodejs-plain colored",title:"Node.JS",badges:["Server"],docLink:"./server_providers/openfeature_javascript",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/npm/v/%40openfeature%2Fgo-feature-flag-provider?color=blue&style=flat-square&logo=npm",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-java-plain colored",title:"Java / Kotlin",badges:["Server"],docLink:"./server_providers/openfeature_java",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/maven-central/v/dev.openfeature.contrib.providers/go-feature-flag?color=blue&style=flat-square&logo=java",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-dot-net-plain-wordmark colored",title:".Net",badges:["Server"],docLink:"./server_providers/openfeature_dotnet",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/nuget/v/OpenFeature.Contrib.GOFeatureFlag?color=blue&style=flat-square&logo=nuget",features:["remoteEval"]})},{logoCss:"devicon-python-plain colored",title:"Python",badges:["Server"],docLink:"./server_providers/openfeature_python",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/pypi/v/gofeatureflag-python-provider?color=blue&style=flat-square&logo=pypi",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-php-plain colored",title:"PHP",badges:["Server"],docLink:"./server_providers/openfeature_php",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/packagist/v/open-feature/go-feature-flag-provider?logo=php&color=blue&style=flat-square",features:["remoteEval"]})},{logoCss:"devicon-ruby-plain colored",title:"Ruby",badges:["Server"],docLink:"./server_providers/openfeature_ruby",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/gem/v/openfeature-go-feature-flag-provider?color=blue&style=flat-square&logo=ruby",features:["remoteEval"]})}]}),"\n",(0,t.jsx)(r.h2,{id:"client-providers",children:"Client Providers"}),"\n",(0,t.jsx)(n.C,{cards:[{logoCss:"devicon-typescript-plain colored",title:"Typescript",badges:["Client"],docLink:"./client_providers/openfeature_javascript",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/npm/v/%40openfeature%2Fgo-feature-flag-web-provider?color=blue&style=flat-square&logo=npm",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-react-original-wordmark colored",title:"React",badges:["Client"],docLink:"./client_providers/openfeature_react",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/npm/v/%40openfeature%2Fgo-feature-flag-web-provider?color=blue&style=flat-square&logo=npm",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-swift-plain colored",title:"Swift (iOS/tvOS/macOS)",badges:["Client"],docLink:"./client_providers/openfeature_swift",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/github/v/release/go-feature-flag/openfeature-swift-provider?label=Swift&amp;display_name=tag&style=flat-square&logo=Swift",features:["remoteEval","localCache","dynamicRefresh"]})},{logoCss:"devicon-android-plain colored",title:"Android / Kotlin",badges:["Client"],docLink:"./client_providers/openfeature_android",content:(0,t.jsx)(i._,{badgeUrl:"https://img.shields.io/maven-central/v/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider?color=blue&style=flat-square&logo=android",features:["remoteEval","localCache","dynamicRefresh"]})}]}),"\n",(0,t.jsx)(r.h2,{id:"how-openfeature-and-go-feature-flag-are-working-together",children:"How OpenFeature and GO Feature Flag are working together?"}),"\n",(0,t.jsxs)(r.p,{children:["To use the OpenFeature SDKs you need what we call a provider.\nA ",(0,t.jsx)(r.strong,{children:"provider"})," is responsible for performing flag evaluations. It provides an abstraction between ",(0,t.jsx)(r.strong,{children:"GO Feature Flag"})," and the OpenFeature SDK."]}),"\n",(0,t.jsxs)(r.p,{children:["A provider needs a backend service to perform the flag evaluation. This is why we have introduced the ",(0,t.jsx)(r.a,{href:"../relay_proxy",children:(0,t.jsx)(r.strong,{children:"relay proxy"})}),".\nThis component retrieve your feature flag configuration file using the GO module and exposes APIs to get your flags variations."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:a(63893).A+"",width:"2850",height:"932"})}),"\n",(0,t.jsxs)(r.p,{children:["With this simple architecture you have a central component ",(0,t.jsx)(r.em,{children:"(the relay proxy)"})," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."]}),"\n",(0,t.jsx)(r.p,{children:"This supports different languages the same way and facilitates you to use GO Feature Flag with all your favorite languages."})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},84576:(e,r,a)=>{a.d(r,{C:()=>c});var o=a(96540),t=a(28774);const s={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var n=a(20053),i=a(5556),l=a.n(i),d=a(74848);function c(e){const r=e.cards.map(((e,r)=>(0,o.createElement)(g,{...e,key:r})));return(0,d.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 xl:grid-cols-3",children:r})}function g(e){return(0,d.jsx)(t.A,{to:e.docLink,className:s.link,children:(0,d.jsxs)("div",{className:s.card,children:[(0,d.jsx)("div",{className:s.header,children:(0,d.jsxs)("span",{className:s.socialIcon,children:[e.logoCss&&(0,d.jsx)("i",{className:e.logoCss}),e.logoImg&&(0,d.jsx)("img",{src:e.logoImg,className:s.logoImg})]})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:s.name,children:e.title})}),(0,d.jsx)("p",{className:s.message,children:e.content}),(0,d.jsxs)("div",{className:s.badgeSection,children:[e.badges&&e.badges.map(((e,r)=>(0,d.jsx)("span",{className:(0,n.A)(s.badge,s.badgeInfo),children:e},e))),e.warningBadges&&e.warningBadges.map(((e,r)=>(0,d.jsx)("span",{className:(0,n.A)(s.badge,s.badgeWarning),children:e},e)))]})]})})}c.prototype={cards:l().array.isRequired},g.propTypes={title:l().string.isRequired,badges:l().array,warningBadges:l().array,logoCss:l().string,logoImg:l().string,docLink:l().string}},22607:(e,r,a)=>{a.d(r,{_:()=>l});a(96540);var o=a(20053);const t={green:"green_II7v",orange:"orange_ujtc"};var s=a(5556),n=a.n(s),i=a(74848);function l(e){return(0,i.jsxs)(i.Fragment,{children:[e.badgeUrl&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{alt:"badge",src:e.badgeUrl}),(0,i.jsx)("br",{})]}),d(e.features,"remoteEval")," Remote evaluation ",(0,i.jsx)("br",{}),d(e.features,"localCache")," Local cache",(0,i.jsx)("br",{}),d(e.features,"dynamicRefresh")," Dynamic cache refresh",(0,i.jsx)("br",{})]})}function d(e,r){return e.includes(r)?(0,i.jsx)("i",{className:(0,o.A)("fa-solid fa-circle-check",t.green)}):(0,i.jsx)("i",{className:(0,o.A)("fa-solid fa-person-digging",t.orange)})}l.propTypes={features:n().array.isRequired,badgeUrl:n().string.isRequired}},63893:(e,r,a)=>{a.d(r,{A:()=>o});const o=a.p+"assets/images/concepts-a33d70f93a75ef216fe6d0894daeac81.png"},28453:(e,r,a)=>{a.d(r,{R:()=>n,x:()=>i});var o=a(96540);const t={},s=o.createContext(t);function n(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);