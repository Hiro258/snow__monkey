!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t){0<e.length&&Array.prototype.slice.call(e,0).forEach((function(e,n){t(e,n)}))};function o(){var e=document.getElementsByTagName("html");if(!(1>e.length))return e[0]}function i(){var e=document.getElementsByClassName("l-header");if(!(1>e.length))return e[0]}function u(){var e=document.getElementsByClassName("l-header__drop-nav");if(!(1>e.length))return e[0]}function l(){return document.getElementById("wpadminbar")}function a(e,t){if(e)return window.getComputedStyle(e).getPropertyValue(t)}function c(){var e=i(),t=u();return!(!e||!t)}window.addEventListener("load",(function(){var e=function(e){var t=e.querySelectorAll('.slick-dots > li, .spider__dots[data-thumbnails="true"] > .spider__dot');r(t,(function(t){t.addEventListener("click",(function(t){var n=e.getBoundingClientRect().top;if(0>n){var r=n+window.pageYOffset;window.scrollTo(0,r-function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=l(),n=0;t&&(n="fixed"===a(t,"position")?parseInt(a(o(),"margin-top")):n);var r=i();if(r){var f=a(r,"position");if("fixed"===f||"sticky"===f){var d=r.scrollHeight<window.innerHeight?r.offsetHeight:0;return d+n}var s=u();if(s){var p=!0===e.forceDropNav||c()?s.offsetHeight:0;return p+n}}return n}())}}),!1)}))},t=document.querySelectorAll(".smb-thumbnail-gallery__canvas");r(t,e);var n=document.querySelectorAll(".smb-spider-slider");r(n,e)}))}]);