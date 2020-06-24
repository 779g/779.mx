module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}({"./src/app/Loading.js":
/*!****************************!*\
  !*** ./src/app/Loading.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement("h1",null,"A module is loading")};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},"./src/app/auth/components/LoginButton/LoginButton.js":
/*!************************************************************!*\
  !*** ./src/app/auth/components/LoginButton/LoginButton.js ***!
  \************************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react")),a=(n=r(/*! prop-types */"prop-types"))&&n.__esModule?n:{default:n},u=r(/*! @fwrlines/ds */"@fwrlines/ds");function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const l=({providerName:e,dataKey:t,query:r,...n})=>o.createElement(u.OLoginButton,i({},n,{simple:!1,query:r,dataKey:t,providerName:e}));l.propTypes={label:a.default.string,query:a.default.string,dataKey:a.default.string},l.defaultProps={query:"query {\n  oAuth2Google\n}\n",dataKey:"oAuth2Google"};var c=l;t.default=c},"./src/app/auth/components/LoginButton/index.js":
/*!******************************************************!*\
  !*** ./src/app/auth/components/LoginButton/index.js ***!
  \******************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoginButton",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(/*! ./LoginButton */"./src/app/auth/components/LoginButton/LoginButton.js"))&&n.__esModule?n:{default:n}},"./src/app/auth/components/Redeemer/Redeemer.js":
/*!******************************************************!*\
  !*** ./src/app/auth/components/Redeemer/Redeemer.js ***!
  \******************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react")),a=r(/*! react-router-dom */"react-router-dom"),u=(n=r(/*! graphql-tag */"graphql-tag"))&&n.__esModule?n:{default:n},s=r(/*! @apollo/client */"@apollo/client"),i=r(/*! @fwrlines/ds */"@fwrlines/ds");function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var c=e=>{const{code:t}=(0,a.useParams)(),r=(0,a.useHistory)(),[n,{data:{oAuth2Login:l}={},loading:c,error:p,called:d}]=(0,s.useMutation)((0,u.default)("mutation getJWT($code: String!) {\n  oAuth2Login(authorization_code: $code) {\n    access_token,\n    expires_in,\n    token_type\n  }\n}\n"),{variables:{code:t}});(0,o.useEffect)(()=>{!d&&t&&n()},[d,t,n]);const{setSessionCookie:f}=(0,o.useContext)(i.SessionContext);return(0,o.useEffect)(()=>{l&&(f(l.access_token,{maxAge:l.expires_in,secure:!("true"===(process&&process.env&&process.env.LOCAL||void 0))}),r.push("/"))},[r,f,l]),o.createElement(o.Fragment,null,o.createElement("h1",null,"We are redeeming a code to login"),o.createElement("pre",null,t))};t.default=c},"./src/app/auth/components/Redeemer/index.js":
/*!***************************************************!*\
  !*** ./src/app/auth/components/Redeemer/index.js ***!
  \***************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Redeemer",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(/*! ./Redeemer */"./src/app/auth/components/Redeemer/Redeemer.js"))&&n.__esModule?n:{default:n}},"./src/app/auth/components/index.js":
/*!******************************************!*\
  !*** ./src/app/auth/components/index.js ***!
  \******************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Redeemer",{enumerable:!0,get:function(){return n.Redeemer}}),Object.defineProperty(t,"LoginButton",{enumerable:!0,get:function(){return o.LoginButton}});var n=r(/*! ./Redeemer */"./src/app/auth/components/Redeemer/index.js"),o=r(/*! ./LoginButton */"./src/app/auth/components/LoginButton/index.js")},"./src/app/auth/index.js":
/*!*******************************!*\
  !*** ./src/app/auth/index.js ***!
  \*******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"routes",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"URLS",{enumerable:!0,get:function(){return o.default}});var n=a(r(/*! ./routes */"./src/app/auth/routes.js")),o=a(r(/*! ./urls */"./src/app/auth/urls.js"));function a(e){return e&&e.__esModule?e:{default:e}}},"./src/app/auth/pages/Login.js":
/*!*************************************!*\
  !*** ./src/app/auth/pages/Login.js ***!
  \*************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react")),o=c(r(/*! prop-types */"prop-types")),a=r(/*! @fwrlines/ds */"@fwrlines/ds"),u=r(/*! ../components */"./src/app/auth/components/index.js"),s=r(/*! react-router-dom */"react-router-dom"),i=r(/*! react-intl */"react-intl"),l=c(r(/*! ./messages */"./src/app/auth/pages/messages.js"));function c(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}const d={subtitle:n.createElement(i.FormattedMessage,l.default.loginSubtitle),heading:n.createElement(i.FormattedMessage,l.default.loginTitle),headingAs:"h1"},f=({})=>{const{isConnected:e,dashboardHomePath:t}=(0,n.useContext)(a.SessionContext),r=(0,s.useHistory)();return(0,n.useEffect)(()=>{e&&r.push(t)},[r,t,e]),n.createElement(a.Page,{id:"page_login"},n.createElement(a.Page.Section,{head:!0,className:"p-u u2",id:"head"},n.createElement(a.Heading,d)),n.createElement(a.Page.Section,{id:"a1",className:"p-u u2"},n.createElement(u.LoginButton,null)))};f.propTypes={someprop:o.default.node};var y=f;t.default=y},"./src/app/auth/pages/Unauthorized.js":
/*!********************************************!*\
  !*** ./src/app/auth/pages/Unauthorized.js ***!
  \********************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react")),o=i(r(/*! prop-types */"prop-types")),a=r(/*! @fwrlines/ds */"@fwrlines/ds"),u=r(/*! react-intl */"react-intl"),s=i(r(/*! ./messages */"./src/app/auth/pages/messages.js"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}const c={robots:"noindex, nofollow",title:"test of the title",title_tag:"this should appear in the title tag"},p={subtitle:n.createElement(u.FormattedMessage,s.default.unauthorizedSubtitle),heading:n.createElement(u.FormattedMessage,s.default.unauthorizedTitle),headingAs:"h1",label:"Error",labelClassName:"x-red basic"},d=({})=>n.createElement(a.Page,{id:"page_unauthorized",itemType:"https://schema.org/FAQPage",HELMET:c},n.createElement(a.Page.Section,{head:!0,className:"p-u u2",id:"head"},n.createElement(a.Heading,p)),n.createElement(a.Page.Section,{id:"a1",className:"p-u u2"},n.createElement("p",null,n.createElement(u.FormattedMessage,s.default.unauthorizedExplanation)," ",n.createElement(a.SupportEmailLink,{label:n.createElement(u.FormattedMessage,s.default.unauthorizedContact)}))));d.propTypes={someprop:o.default.node};var f=d;t.default=f},"./src/app/auth/pages/messages.js":
/*!****************************************!*\
  !*** ./src/app/auth/pages/messages.js ***!
  \****************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(/*! react-intl */"react-intl").defineMessages)({loginTitle:{id:"app.auth.pages.login.title",defaultMessage:"Dashboard Access"},loginSubtitle:{id:"app.auth.pages.login.subtitle",defaultMessage:"Login below to your dashboard account"},unauthorizedTitle:{id:"app.auth.pages.unauthorized.title",defaultMessage:"Unauthorized"},unauthorizedSubtitle:{id:"app.auth.pages.unauthorized.subtitle",defaultMessage:"Your have sucessfully connected your account, but you are not allowed to log in."},unauthorizedExplanation:{id:"app.auth.pages.unauthorized.explanation",defaultMessage:"You can try to login with another account. Alternatively, if you believe this is a mistake"},unauthorizedContact:{id:"app.auth.pages.unauthorized.contact",defaultMessage:"you can contact support here."}});t.default=n},"./src/app/auth/routes.js":
/*!********************************!*\
  !*** ./src/app/auth/routes.js ***!
  \********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(/*! ../../utils */"./src/utils/index.js"),o=u(r(/*! ./urls */"./src/app/auth/urls.js")),a=r(/*! @fwrlines/ds */"@fwrlines/ds");function u(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}const l="app.auth",c=":code([0-9a-z-]{64})";var p=[{path:(0,n.urljoin)(o.default.REDEEM,c),component:(0,n.loadable)({resolved:{},chunkName:()=>"app.auth",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>i(r(/*! ./components/Redeemer/Redeemer.js */"./src/app/auth/components/Redeemer/Redeemer.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! ./components/Redeemer/Redeemer.js */
return"./src/app/auth/components/Redeemer/Redeemer.js"}})},{path:o.default.LOGIN,component:(0,n.loadable)({resolved:{},chunkName:()=>"app.auth",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>i(r(/*! ./pages/Login.js */"./src/app/auth/pages/Login.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! ./pages/Login.js */
return"./src/app/auth/pages/Login.js"}})},{path:o.default.LOGOUT,component:a.Logout,isPrivate:!0},{path:o.default.UNAUTHORIZED,component:(0,n.loadable)({resolved:{},chunkName:()=>"app.auth",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>i(r(/*! ./pages/Unauthorized.js */"./src/app/auth/pages/Unauthorized.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! ./pages/Unauthorized.js */
return"./src/app/auth/pages/Unauthorized.js"}})}];t.default=p},"./src/app/auth/urls.js":
/*!******************************!*\
  !*** ./src/app/auth/urls.js ***!
  \******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(/*! ../../utils */"./src/utils/index.js");t.default={LOGIN:"/login",REDEEM:"/redeem",LOGOUT:"/logout",UNAUTHORIZED:"/unauthorized"}},"./src/app/urls.js":
/*!*************************!*\
  !*** ./src/app/urls.js ***!
  \*************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AUTH",{enumerable:!0,get:function(){return n.URLS}}),t.STATIC=void 0;var n=r(/*! ./auth */"./src/app/auth/index.js");t.STATIC={HOME:"",ANOTHERPAGE:"longer/url/for/sitemap"}},"./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={SITE:{NAME:"",CANONICAL:"http://site.com",GA:""},BUSINESS:{NAME:"",ADDRESS:"",ADDRESS_2:"",CITY:"",POSTCODE:""},SOCIAL_MEDIA:{FACEBOOK:"",TWITTER:"",INSTAGRAM:""}}},"./src/sitemap/renderer.js":
/*!*********************************!*\
  !*** ./src/sitemap/renderer.js ***!
  \*********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(/*! ../config */"./src/config/index.js"))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(/*! ../app/urls */"./src/app/urls.js")),u=r(/*! date-fns */"date-fns"),s=r(/*! ../utils */"./src/utils/index.js");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}console.log("RDR");const l={HOME:{changefreq:"yearly",priority:.5,lastmod:new Date("2019-10-02")},ANOTHERPAGE:{changefreq:"daily",priority:.5,lastmod:new Date("2019-09-12")}};t.default=async(e,t)=>{new Date;const r=[];return Object.keys(a.STATIC).forEach(e=>{const{changefreq:t,priority:n,lastmod:o}=l[e],u=a.STATIC[e];r.push({loc:u,lastmod:o,changefreq:t,priority:n})}),t.setHeader("Content-Type","text/xml"),t.send('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset> \n'.replace("</urlset>",r.reduce((e,{loc:t,lastmod:r,changefreq:n,priority:a})=>(process&&process.env&&process.env.COMPILE,e+`\n    <url>\n      <loc>${t.length?(0,s.urljoin)(o.default.SITE.CANONICAL,t):o.default.SITE.CANONICAL}</loc>\n      <lastmod>${(0,u.format)(r,"yyyy-MM-dd")}</lastmod>\n      ${n?"<changefreq>"+n+"</changefreq>":""}\n      <priority>${a}</priority>\n   </url>`),"")+"</urlset>"))}},"./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"loadable",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"urljoin",{enumerable:!0,get:function(){return o.default}});var n=a(r(/*! ./loadable */"./src/utils/loadable.js")),o=a(r(/*! ./urljoin */"./src/utils/urljoin.js"));function a(e){return e&&e.__esModule?e:{default:e}}},"./src/utils/loadable.js":
/*!*******************************!*\
  !*** ./src/utils/loadable.js ***!
  \*******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)(e,{fallback:n.default.createElement(a.default,null)})};var n=u(r(/*! react */"react")),o=u(r(/*! @loadable/component */"@loadable/component")),a=u(r(/*! ../app/Loading */"./src/app/Loading.js"));function u(e){return e&&e.__esModule?e:{default:e}}},"./src/utils/urljoin.js":
/*!******************************!*\
  !*** ./src/utils/urljoin.js ***!
  \******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(...e){let t,r;return r="*"!=e[-1]||e[-1].endsWith("/")?"/":"",t=e[0].startsWith("http")||e[0].startsWith("/")?"":"/",t+e.join("/")+r};t.default=n},0:
/*!***************************************!*\
  !*** multi ./src/sitemap/renderer.js ***!
  \***************************************/
/*! no static exports found */function(e,t,r){e.exports=r(/*! /home/adrian_villa/code/fwrlines/template-react-ssr/src/sitemap/renderer.js */"./src/sitemap/renderer.js")},"@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */function(e,t){e.exports=require("@apollo/client")},"@fwrlines/ds":
/*!*******************************!*\
  !*** external "@fwrlines/ds" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("@fwrlines/ds")},"@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/component")},"date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=require("date-fns")},"graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("graphql-tag")},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("prop-types")},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=require("react")},"react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("react-intl")},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("react-router-dom")}});