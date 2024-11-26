"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[26637],{37672:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var n=o(22115),a=o(74848),s=o(28453);const i={slug:"introduction-blog-post",title:"Introduction blog post",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},r=void 0,l={authorsImageUrls:[void 0]},u=[];function g(e){const t={a:"a",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("center",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(51242).A+"",width:"400",height:"380"})})}),"\n",(0,a.jsx)(t.p,{children:"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags."}),"\n",(0,a.jsxs)(t.p,{children:["There are a lot of systems available on the market to manage your flags, like ",(0,a.jsx)(t.a,{href:"https://launchdarkly.com/",children:"LaunchDarkly"})," or ",(0,a.jsx)(t.a,{href:"https://unleash.org/",children:"UNLEASH"}),", that have Golang support \u2014 but this option is expensive, and you have to host a server somewhere to manage your flags."]}),"\n",(0,a.jsx)(t.p,{children:"From this starting point, I came up with the idea to create a simple library with only one file in the back end. This file can be stored in different places (AWS S3, GitHub, an HTTP endpoint somewhere, etc.). This is the only thing you have to host \u2014 all the decision logic stands inside the Go module."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},51242:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/logo-26e5adbbf02da2d72eb5d51280cc5ba9.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},22115:e=>{e.exports=JSON.parse('{"permalink":"/blog/introduction-blog-post","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2021-01-11-introduction-blog-post/index.md","source":"@site/blog/2021-01-11-introduction-blog-post/index.md","title":"Introduction blog post","description":"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.","date":"2021-01-11T00:00:00.000Z","tags":[{"inline":true,"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"inline":true,"label":"v0.x.x","permalink":"/blog/tags/v-0-x-x"}],"readingTime":4.035,"hasTruncateMarker":true,"authors":[{"name":"Thomas Poignant","title":"Creator of GO Feature Flag","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant","page":null}],"frontMatter":{"slug":"introduction-blog-post","title":"Introduction blog post","authors":["thomaspoignant"],"tags":["GO Feature Flag","v0.x.x"]},"unlisted":false,"prevItem":{"title":"Automate Your Product Release Cycles Using Go Feature Flag","permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag"}}')}}]);