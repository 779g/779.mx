!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(window,(function(){return(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{20:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(0),n=r(2),i=r.n(n),o=r(32),c=a.createContext({});function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){var t=e.children,r=e.initialTheme,n=e.config,i=Object(o.a)(r);return a.createElement(c.Provider,{value:l(l({},n),i)},t)};p.propTypes={children:i.a.node.isRequired,config:i.a.shape({SITE_NAME:i.a.string.isRequired,SITE_CANONICAL:i.a.string.isRequired,FACEBOOK:i.a.string,INSTAGRAM:i.a.string}).isRequired,initialTheme:i.a.string};var b=p},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var a=r(0),n=r(5),i=r.n(n),o=r(3),c=r(28),s=r.n(c),l=r(88);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(29).a||r.e(5).then(r.t.bind(null,89,7));var m="album",g=function(e,t){return.5-Math.random()},j=function(e,t){switch(t.type){case"SET_INITIAL_PICTURE":return f(f({},e),{},{index:t.payload||0,currentSlide:e.slides[t.payload||0]});case"MOVE_FORWARD":return f(f({},e),{},{index:(e.index+1)%e.slides.length,currentSlide:e.slides[(e.index+1)%e.slides.length]});default:return e}},y=function(e){var t=e.id,r=e.className,n=e.style,i=e.as,c=e.slides,p=e.baseUrl,b=function(e){return s.a.join(p,e)},f=Object(o.d)(),d=Object(o.f)(b("/:slideid")),y=Object(a.useMemo)((function(){return c.sort(g)}),[c]),x=u(Object(a.useReducer)(j,{slides:y,index:0,currentSlide:{}}),2),O=x[0],w=O.slides,h=O.currentSlide,v=O.index,E=x[1];return Object(a.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];E({type:"SET_INITIAL_PICTURE",payload:e})}((d?d.params.slideid:null)?w.findIndex((function(e){return e.id===d.params.slideid})):null)}),[]),Object(a.useEffect)((function(){v>0?f.push(b(h.id)):f.push(p)}),[h.id]),a.createElement(i,{className:[m,h.wrapperClassName,r].filter((function(e){return e})).join(" "),id:t,style:n},a.createElement("span",{className:"uc u-4 p-u c-on-x md-h lg-h yb",id:"rotationmsg"},"Rotate  your device to landscape for a better experience."),a.createElement("a",{className:["pointer content",h.jsx?"jsx":"picture"].filter((function(e){return e})).join(" "),onClick:function(){E({type:"MOVE_FORWARD"})}},h.jsx?h.jsx:a.createElement(l.a,{src:h.source,alt:h.alt,objectFit:"contain"},a.createElement("span",{className:"c-on-x"},h.caption))))};y.propTypes={id:i.a.string,className:i.a.string,style:i.a.object,as:i.a.oneOfType([i.a.string,i.a.object]),baseUrl:i.a.string,slides:i.a.arrayOf(i.a.shape({id:i.a.string.isRequired,source:i.a.string.isRequired,alt:i.a.string,caption:i.a.string.isRequired,wrapperClassName:i.a.string.isRequired})).isRequired},y.defaultProps={baseUrl:"/",as:"main"};var x=y},27:function(e,t,r){"use strict";(function(e){var a=r(0),n=r(16),i=r(3),o=r(17),c=r(34),s=r(31);t.a=function(t){var r=Object(i.e)();return Object(a.useEffect)((function(){o.a.initialize(e&&e.env&&e.env.GOOGLE_ANALYTICS_ID||"UA-51857966-1",{debug:"true"===(e&&e.env&&e.env.DEBUG||"true")})}),[]),Object(a.useEffect)((function(){var e=r.pathname;o.a.set({page:e}),o.a.pageview(e)}),[r.pathname]),a.createElement(n.b,{config:s.a,initialTheme:"system"},a.createElement(c.a,t))}}).call(this,r(13))},29:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var a="true"===(e&&e.env&&e.env.BACKEND||"false")}).call(this,r(13))},30:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var a="true"===(e&&e.env&&e.env.BACKEND||"false")}).call(this,r(13))},31:function(e,t,r){"use strict";t.a={SITE_NAME:"Internet 1999",SITE_CANONICAL:"https://internet1999.org",SUPPORT_EMAIL:"support@support.com",FACEBOOK:"facebook_id",INSTAGRAM:"@superaccount"}},34:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(16),o=[{id:"pasha",source:"/a01.jpg",alt:"mnt",caption:"Karelia, 2018",wrapperClassName:"x-black b-x"},{id:"karelia",source:"/a02.jpg",alt:"mnt",caption:"Karelia, 2018",wrapperClassName:"x-indigo b-x"},{id:"azadi",source:"/a03.jpg",alt:"mnt",caption:"Teheran, 2016",wrapperClassName:"x-background b-x"},{id:"hershey",source:"/a04.jpg",alt:"",caption:"Cuba, 2016",wrapperClassName:"x-olive b-x"},{id:"vfc",source:"/a05.jpg",alt:"",caption:"France, 2017",wrapperClassName:"x-white b-x"},{id:"mty",source:"/a06.jpg",alt:"",caption:"Mexico, 2016",wrapperClassName:"x-white b-x"},{id:"mazunte",source:"/a07.jpg",alt:"",caption:"Oaxaca, 2016",wrapperClassName:"x-grey b-x"},{id:"sn",source:"/a08.jpg",alt:"",caption:"Paris, 2009",wrapperClassName:"x-white b-x"},{id:"tree",source:"/a09.jpg",alt:"",caption:"Oaxaca, 2016",wrapperClassName:"x-olive b-x"},{id:"palmtrees",source:"/a10.jpg",alt:"",caption:"France, 2013",wrapperClassName:"x-white b-x"},{id:"beach",source:"/a13.jpg",alt:"",caption:"France, 2013",wrapperClassName:"x-white b-x"},{id:"brussels",source:"/a14.jpg",alt:"",caption:"France, 2013",wrapperClassName:"x-black b-x"},{id:"gc",source:"/a16.jpg",alt:"",caption:"France, 2009",wrapperClassName:"x-black b-dark-x"},{id:"manhattan",source:"/a17.jpg",alt:"",caption:"U.S.A., 2013",wrapperClassName:"x-white b-x"},{id:"korcula",source:"/a18.jpg",alt:"",caption:"Croatia, 2013",wrapperClassName:"x-blue b-dark-x"},{id:"seine2",source:"/a19.jpg",alt:"",caption:"Paris, 2009 (?)",wrapperClassName:"x-blue b-x"},{id:"playing-cards",source:"/a20.jpg",alt:"",caption:"Esfahan, 2016",wrapperClassName:"x-grey b-x"},{id:"my-leaving",source:"/a21.jpg",alt:"",caption:"France, 2013",wrapperClassName:"x-black b-x"},{id:"cheesesteak",source:"/a22.jpg",alt:"",caption:"U.S.A., 2013",wrapperClassName:"x-black b-x"},{id:"mage",source:"/a26.jpg",alt:"",caption:"France, 2010",wrapperClassName:"x-azure b-dark-x"},{id:"tunnel",source:"/a27.jpg",alt:"",caption:"France, 2011 (?)",wrapperClassName:"x-black b-x"},{id:"lou",source:"/a28.jpg",alt:"",caption:"France, 2008",wrapperClassName:"x-white b-x"},{id:"ale",source:"/a29.jpg",alt:"",caption:"France, 2010",wrapperClassName:"x-white b-x"},{id:"olympic",source:"/a30.jpg",alt:"",caption:"London, 2012",wrapperClassName:"x-olive b-x"},{id:"kyo",source:"/a32.jpg",alt:"",caption:"Japan, 2018",wrapperClassName:"x-black b-x"},{id:"kyo2",source:"/a33.jpg",alt:"",caption:"Japan, 2018",wrapperClassName:"x-black b-x"},{id:"another-sunday",source:"/a34.jpg",alt:"",caption:"Spain, 2017",wrapperClassName:"x-black b-x"},{id:"capitalism",source:"/a35.jpg",alt:"",caption:"Toronto, 2013",wrapperClassName:"x-indigo b-x"},{id:"nuria",source:"/a36.jpg",alt:"",caption:"Nuria, 2017",wrapperClassName:"x-olive b-x"},{id:"rb1",source:"/a38.jpg",alt:"",caption:"Tokyo, 2018",wrapperClassName:"x-blue b-dark-x"},{id:"shinkansen",source:"/a40.jpg",alt:"",caption:"Tokyo, 2018",wrapperClassName:"x-black b-x"},{id:"rb2",source:"/a41.jpg",alt:"",caption:"Tokyo, 2018",wrapperClassName:"x-blue b-dark-x"},{id:"seoul",source:"/a42.jpg",alt:"",caption:"Seoul, 2018",wrapperClassName:"x-blue b-dark-x"},{id:"rb3",source:"/a43.jpg",alt:"",caption:"Tokyo, 2018",wrapperClassName:"x-black b-x"},{id:"rb4",source:"/a44.jpg",alt:"",caption:"Tokyo, 2018",wrapperClassName:"x-grey b-dark-x"},{id:"nrt",source:"/a45.jpg",alt:"",caption:"Japan, 2018",wrapperClassName:"x-white b-x"},{id:"explanation",jsx:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("strong",null,"Hello. I have taken these pictures over the years.")),a.createElement("p",null,"These pictures are all raw scans of Polaroid film prints and haven't been digitally edited. Particular colors or effects come from analog manipulation and the uniqueness of every film pack.")),wrapperClassName:"x-white"},{id:"contact",jsx:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("strong",null,"Contact :",a.createElement("a",{href:"mailto:alexis.zorba@779.mx",className:"c-on-x yi",onClick:function(e){return e.stopPropagation()}},"alexis.zorba@779.mx"))),a.createElement("p",null," "),a.createElement("p",null,a.createElement("strong",null,"Source code :",a.createElement("a",{href:"https://github.com/advl/779.mx",className:"c-on-x yi",target:"_blank",onClick:function(e){return e.stopPropagation()}},"github.com/advl/779.mx"))),a.createElement("p",null," "),a.createElement("p",null,"I just want"," ",a.createElement("strike",null,"more wine")," ","to see more pictures")),wrapperClassName:"x-white"}];t.a=function(){var e=!("undefined"==typeof window);return Object(a.useEffect)((function(){e&&o.forEach((function(e){(new Image).src=e.source}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{slides:o}))}},48:function(e,t,r){e.exports=r(49)},49:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(21),i=r.n(n),o=r(14),c=r(33),s=r(27);r.e(3).then(r.t.bind(null,63,7));var l=document.getElementById("main"),u=a.createElement(o.a,null,a.createElement(s.a,null));Object(c.a)((function(){l.hasChildNodes()?i.a.hydrate(u,l):i.a.render(u,l)})),e.hot.accept()},62:function(e,t,r){"use strict";var a=r(0),n=r(2),i=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=function(e){var t=e.style,r=e.src,n=e.alt,i=e.objectFit,c=e.objectPosition,l=u(e,["style","src","alt","objectFit","objectPosition"]);return a.createElement("img",o({src:r,alt:n,style:s(s({},t),{},{objectFit:i,objectPosition:c})},l))};p.propTypes={style:i.a.object,src:i.a.string.isRequired,alt:i.a.string.isRequired,objectFit:i.a.oneOf(["fill","contain","cover","none","scale-down"]),objectPosition:i.a.string},p.defaultProps={objectFit:"cover",objectPosition:"center center"},t.a=p},88:function(e,t,r){"use strict";var a=r(0),n=r(2),i=r.n(n),o=r(62);r(30).a||r.e(6).then(r.t.bind(null,64,7));var c="figure",s=function(e){var t=e.id,r=e.className,n=e.style,i=e.children,s=e.src,l=e.alt,u=e.imgStyle,p=e.objectFit,b=e.objectPosition;return a.createElement("figure",{className:[c,r].filter((function(e){return e})).join(" "),id:t,style:n},a.createElement(o.a,{src:s,alt:l,objectFit:p,objectPosition:b,style:u}),i&&a.createElement("figcaption",null,i))};s.propTypes={id:i.a.string,className:i.a.string,style:i.a.object,children:i.a.node,src:i.a.string.isRequired,alt:i.a.string.isRequired,imgStyle:i.a.object,objectFit:i.a.oneOf(["fill","contain","cover","none","scale-down"]),objectPosition:i.a.string},s.defaultProps={objectFit:"cover"},t.a=s}},[[48,2,0,4]]])}));