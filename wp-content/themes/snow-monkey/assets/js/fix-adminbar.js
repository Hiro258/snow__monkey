!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";function r(){var t=document.getElementsByTagName("html");if(!(1>t.length))return t[0]}function i(){return document.getElementById("body")}function o(){return document.getElementById("footer-sticky-nav")}function u(){var t=document.getElementsByClassName("l-header");if(!(1>t.length))return t[0]}function c(){var t=document.getElementsByClassName("l-header__drop-nav");if(!(1>t.length))return t[0]}function d(){return document.getElementById("wpadminbar")}function a(){return document.getElementById("drawer-nav")}function f(t,e){if(t)return window.getComputedStyle(t).getPropertyValue(e)}function s(t,e,n){t.style[e]=n}function l(){var t=u(),e=c();return!(!t||!e)}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=d(),n=0;e&&(n="fixed"===f(e,"position")?parseInt(f(r(),"margin-top")):n);var i=u();if(i){var o=f(i,"position");if("fixed"===o||"sticky"===o){var a=i.scrollHeight<window.innerHeight?i.offsetHeight:0;return a+n}var s=c();if(s){var v=!0===t.forceDropNav||l()?s.offsetHeight:0;return v+n}}return n}function w(t){t.setAttribute("aria-hidden","true")}function g(t){t.setAttribute("aria-hidden","false")}function h(t,e){var n=arguments,r=this,i=Date.now();return function(){i+e-Date.now()<0&&(t.apply(r,n),i=Date.now())}}function m(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}function p(){var t=window.location.hash;if(!t)return 0;var e=document.querySelector(t);return e?window.pageYOffset+e.getBoundingClientRect().top:0}n.d(e,"g",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return a})),n.d(e,"i",(function(){return f})),n.d(e,"m",(function(){return s})),n.d(e,"h",(function(){return v})),n.d(e,"k",(function(){return w})),n.d(e,"n",(function(){return g})),n.d(e,"o",(function(){return h})),n.d(e,"l",(function(){return m})),n.d(e,"j",(function(){return p})),n(2)},,function(t,e,n){"use strict";e.a=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{n=new CustomEvent(e,{bubbles:i,cancelable:o,detail:r})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,i,o,r)}t.dispatchEvent(n)}},function(t,e,n){"use strict";var r,i=function(t,e){var n;try{n=new CustomEvent(e)}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!1,null)}t.dispatchEvent(n)},o=window.innerWidth,u=window.innerHeight;r="inc2734/dispatch-custom-resize-event/dispatch",Boolean(sessionStorage.getItem(r))||window.addEventListener("resize",(function(){window.innerWidth!==o?(i(window,"resize:width"),o=window.innerWidth,u=window.innerHeight):function(){if(i(window,"resize:height"),window.innerHeight===u)i(window,"resize:height:undo");else{i(window,"resize:height:update");var t=/iP(hone|(o|a)d)/.test(navigator.userAgent);49<Math.abs(window.innerHeight-u)&&t&&i(window,"resize:height:ios")}}()}),!1),sessionStorage.setItem(r,!0),window.addEventListener("beforeunload",(function(){return sessionStorage.removeItem(r)}),!1)},,,,,,,function(t,e,n){"use strict";n.r(e),n(3);var r=n(0);document.addEventListener("DOMContentLoaded",(function(){var t=Object(r.f)(),e=Object(r.a)();t&&e&&(!function(t,e){var n=function(e){Object(r.m)(t,"position",e)},i=function(e){e=null!==e?"".concat(parseInt(e),"px"):e,Object(r.m)(t,"top",e)},o=function(){window.pageYOffset>e.offsetHeight?(n(null),i(0)):(n("absolute"),i(null))},u=Object(r.g)(),c=function(){var c=Object(r.i)(t,"position");"fixed"!==Object(r.i)(e,"position")&&"fixed"===c&&t.scrollHeight<u.offsetHeight?window.addEventListener("scroll",o,!1):(window.removeEventListener("scroll",o,!1),i(null),n(null))};c(),window.addEventListener("resize:width",c,!1)}(t,e),addEventListener("scroll",(function t(){removeEventListener("scroll",t,!1);var n=Math.floor(Object(r.j)());if(e){var i=Math.floor(e.offsetHeight),o=Math.floor(e.getBoundingClientRect().top+window.pageYOffset),u=Math.floor(o+i);n>=o&&n<u&&window.scrollTo(0,pageYOffset-i)}}),!1))}),!1)}]);