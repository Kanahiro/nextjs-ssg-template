(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6156:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},7375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||c()}},861:function(e,t,r){var n,o=(n=r(7673))&&"object"==typeof n&&"default"in n?n.default:n,a=/https?|ftp|gopher|file/;function c(e){"string"==typeof e&&(e=g(e));var t=function(e,t,r){var n=e.auth,o=e.hostname,a=e.protocol||"",c=e.pathname||"",s=e.hash||"",u=e.query||"",i=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",e.host?i=n+e.host:o&&(i=n+(~o.indexOf(":")?"["+o+"]":o),e.port&&(i+=":"+e.port)),u&&"object"==typeof u&&(u=t.encode(u));var f=e.search||u&&"?"+u||"";return a&&":"!==a.substr(-1)&&(a+=":"),e.slashes||(!a||r.test(a))&&!1!==i?(i="//"+(i||""),c&&"/"!==c[0]&&(c="/"+c)):i||(i=""),s&&"#"!==s[0]&&(s="#"+s),f&&"?"!==f[0]&&(f="?"+f),{protocol:a,host:i,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:f=f.replace("#","%23"),hash:s}}(e,o,a);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var s="http://",u="w.w",i=s+u,f=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function l(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?c(e):e;var n=g(t),o="";r.protocol&&!r.slashes&&(o=r.protocol,e=e.replace(r.protocol,""),o+="/"===t[0]||"/"===e[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,t=t.replace(n.protocol,"")));var a=e.match(f);a&&!n.protocol&&(e=e.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^/]/.test(t)&&(o=o.slice(0,-1)));var u=new URL(e,i+"/"),l=new URL(t,u).toString().replace(i,""),h=n.protocol||r.protocol;return h+=r.slashes||n.slashes?"//":"",!o&&h?l=l.replace(s,h):o&&(l=l.replace(s,"")),p.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),o&&(l=o+("/"===l[0]?l.substr(1):l)),l}function h(){}h.prototype.parse=g,h.prototype.format=c,h.prototype.resolve=l,h.prototype.resolveObject=l;var d=/^https?|ftp|gopher|file/,v=/^(.*?)([#?].*)/,m=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,y=/^([a-z0-9.+-]*:)?\/\/\/*/i,b=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function g(e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!1),e&&"object"==typeof e&&e instanceof h)return e;var n=(e=e.trim()).match(v);e=n?n[1].replace(/\\/g,"/")+n[2]:e.replace(/\\/g,"/"),b.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(m),s=y.test(e),f="";a&&(d.test(a[1])||(f=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(s=!1,d.test(a[1])?(f=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(f=a[1],e="/"+a[3]));var p,l=(n?n[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),g=l&&l[1],O=new h,C="",w="";try{p=new URL(e)}catch(o){C=o,f||r||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(w="/",e=e.substr(1));try{p=new URL(e,i)}catch(e){return O.protocol=f,O.href=f,O}}O.slashes=s&&!w,O.host=p.host===u?"":p.host,O.hostname=p.hostname===u?"":p.hostname.replace(/(\[|\])/g,""),O.protocol=C?f||null:p.protocol,O.search=p.search.replace(/\\/g,"%5C"),O.hash=p.hash.replace(/\\/g,"%5C");var j=e.split("#");!O.search&&~j[0].indexOf("?")&&(O.search="?"),O.hash||""!==j[1]||(O.hash="#"),O.query=t?o.decode(p.search.substr(1)):O.search.substr(1),O.pathname=w+(a?function(e){return e.replace(/['^|`]/g,(function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()})).replace(/((?:%[0-9A-F]{2})+)/g,(function(e,t){try{return decodeURIComponent(t).split("").map((function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()})).join("")}catch(e){return t}}))}(p.pathname):p.pathname),"about:"===O.protocol&&"blank"===O.pathname&&(O.protocol="",O.pathname=""),C&&"/"!==e[0]&&(O.pathname=O.pathname.substr(1)),f&&!d.test(f)&&"/"!==e.slice(-1)&&"/"===O.pathname&&(O.pathname=""),O.path=O.pathname+O.search,O.auth=[p.username,p.password].map(decodeURIComponent).filter(Boolean).join(":"),O.port=p.port,g&&!O.host.endsWith(g)&&(O.host+=g,O.port=g.slice(1)),O.href=w?""+O.pathname+O.search+O.hash:c(O);var M=/^(file)/.test(O.href)?["host","hostname"]:[];return Object.keys(O).forEach((function(e){~M.indexOf(e)||(O[e]=O[e]||null)})),O}t.WU=c},1752:function(e,t,r){e.exports=r(3584)},2167:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),c=r(9414),s=r(4651),u=r(7426),i={};function f(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,o=(0,s.useRouter)(),p=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],s=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),l=p.href,h=p.as,d=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof d&&(d=a.default.createElement("a",null,d));var g=(t=a.Children.only(d))&&"object"===typeof t&&t.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),C=n(O,2),w=C[0],j=C[1],M=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=j&&r&&(0,c.isLocalURL)(l),t="undefined"!==typeof b?b:o&&o.locale,n=i[l+"%"+h+(t?"%"+t:"")];e&&!n&&f(o,l,h,{locale:t})}),[h,l,j,b,r,o]);var x={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:s}))}(e,o,l,h,v,m,y,b)},onMouseEnter:function(e){(0,c.isLocalURL)(l)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,l,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:o&&o.locale,_=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(h,k,o&&o.locales,o&&o.domainLocales);x.href=_||(0,c.addBasePath)((0,c.addLocale)(h,k,o&&o.defaultLocale))}return a.default.cloneElement(t,x)};t.default=p},7426:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,u=(0,o.useRef)(),i=(0,o.useState)(!1),f=n(i,2),p=f[0],l=f[1],h=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||p||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[r,t,p]);return(0,o.useEffect)((function(){if(!c&&!p){var e=(0,a.requestIdleCallback)((function(){return l(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[p]),[h,p]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var s=new Map},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3398);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||o&&c}},2775:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(a=r(3244))&&a.__esModule?a:{default:a},u=r(3398),i=r(1165),f=r(6393);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(h,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,i=d.length;u<i;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var p=o.props[f],l=n[f]||new Set;"name"===f&&c||!l.has(p)?(l.add(p),n[f]=l):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,c.default.cloneElement(e,s)}return c.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,r=(0,c.useContext)(u.AmpStateContext),n=(0,c.useContext)(i.HeadManagerContext);return c.default.createElement(s.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)};t.default=m},3244:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),c=(r(1506),r(2205)),s=r(8585),u=r(9754);function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(7294),p=function(e){c(r,e);var t=i(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=p},9008:function(e,t,r){e.exports=r(2775)},1664:function(e,t,r){e.exports=r(2167)},2587:function(e){"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,n,o){r=r||"&",n=n||"=";var a={};if("string"!==typeof e||0===e.length)return a;var c=/\+/g;e=e.split(r);var s=1e3;o&&"number"===typeof o.maxKeys&&(s=o.maxKeys);var u=e.length;s>0&&u>s&&(u=s);for(var i=0;i<u;++i){var f,p,l,h,d=e[i].replace(c,"%20"),v=d.indexOf(n);v>=0?(f=d.substr(0,v),p=d.substr(v+1)):(f=d,p=""),l=decodeURIComponent(f),h=decodeURIComponent(p),t(a,l)?Array.isArray(a[l])?a[l].push(h):a[l]=[a[l],h]:a[l]=h}return a}},2361:function(e){"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,n,o){return r=r||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?Object.keys(e).map((function(o){var a=encodeURIComponent(t(o))+n;return Array.isArray(e[o])?e[o].map((function(e){return a+encodeURIComponent(t(e))})).join(r):a+encodeURIComponent(t(e[o]))})).filter(Boolean).join(r):o?encodeURIComponent(t(o))+n+encodeURIComponent(t(e)):""}},7673:function(e,t,r){"use strict";t.decode=t.parse=r(2587),t.encode=t.stringify=r(2361)}}]);