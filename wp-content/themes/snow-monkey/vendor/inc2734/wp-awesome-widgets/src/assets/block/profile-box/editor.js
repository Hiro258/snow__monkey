!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e){e.exports=JSON.parse('{"name":"wp-awesome-widgets/profile-box","title":"[WPAW] Profile box","description":"","category":"widgets","textdomain":"inc2734-wp-awesome-widgets","attributes":{"clientId":{"type":"string"}},"supports":{"anchor":true,"customClassName":false}}')},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.components},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"metadata",(function(){return d})),r.d(n,"name",(function(){return m})),r.d(n,"settings",(function(){return O}));var o=r(4),i=r.n(o),c=r(5),s=r(1);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var a=r(0),p=r(3),l=Object(a.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(p.Path,{d:"M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"})),d=r(2),f=r(6),w=r.n(f),b=r(7),m=d.name,O={icon:l,edit:function(e){var t=e.setAttributes,r=e.attributes,n=e.clientId;return Object(a.useEffect)((function(){r.clientId||t({clientId:n})}),[n]),Object(a.createElement)(b.Disabled,null,Object(a.createElement)(w.a,{block:"wp-awesome-widgets/profile-box",attributes:r}))},save:function(){return Object(a.createElement)("div",{"data-dynamic-block":"wp-awesome-widgets/profile-box","data-version":"1"})}};!function(e){if(e){var t=e.metadata,r=e.settings,n=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"inc2734-wp-awesome-widgets"),r.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"inc2734-wp-awesome-widgets"),r.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"inc2734-wp-awesome-widgets"),r.keywords=t.keywords)),Object(c.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({name:n},t),r)}}(n)}]);