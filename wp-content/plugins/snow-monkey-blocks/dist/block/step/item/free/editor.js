!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.lodash},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/step--item--free","title":"Item (Free input)","description":"It is a child block of the step block.","category":"smb","parent":["snow-monkey-blocks/step"],"attributes":{"title":{"type":"string","source":"html","selector":".smb-step__item__title > span","default":""},"numberColor":{"type":"string"}},"supports":{"anchor":true}}')},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=window.wp.data},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"metadata",(function(){return u})),n.d(r,"name",(function(){return _})),n.d(r,"settings",(function(){return y}));var o=n(7),c=n.n(o),s=n(0),i=(n(2),n(4)),l=(n(8),n(3));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=n(6),p=n(5),b=n.n(p),m=n(1),f=n(9),d={to:[{type:"block",blocks:["snow-monkey-blocks/step--item"],transform:function(e){return Object(i.createBlock)("snow-monkey-blocks/step--item",e)}}]},_=u.name,y={icon:{foreground:"#cd162c",src:"editor-ol"},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,o=e.clientId,c=t.title,i=t.numberColor,a=Object(f.useSelect)((function(e){var t=(0,e("core/block-editor").getBlock)(o);return!(!t||!t.innerBlocks.length)}),[o]),u=b()("smb-step__item",r),p={backgroundColor:i||void 0},d=Object(m.useBlockProps)({className:u}),_=Object(m.__experimentalUseInnerBlocksProps)({className:"smb-step__item__summary"},{renderAppender:a?void 0:m.InnerBlocks.ButtonBlockAppender});return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(m.InspectorControls,null,Object(s.createElement)(m.PanelColorSettings,{title:Object(l.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,colorSettings:[{value:i,onChange:function(e){return n({numberColor:e})},label:Object(l.__)("Number Color","snow-monkey-blocks")}]})),Object(s.createElement)("div",d,Object(s.createElement)("div",{className:"smb-step__item__title"},Object(s.createElement)("div",{className:"smb-step__item__number",style:p}),Object(s.createElement)(m.RichText,{tagName:"span",placeholder:Object(l.__)("Write title…","snow-monkey-blocks"),value:c,multiline:!1,onChange:function(e){return n({title:e})}})),Object(s.createElement)("div",{className:"smb-step__item__body"},Object(s.createElement)("div",_))))},save:function(e){var t=e.attributes,n=e.className,r=t.title,o=t.numberColor,c=b()("smb-step__item",n),i={backgroundColor:o||void 0};return Object(s.createElement)("div",m.useBlockProps.save({className:c}),Object(s.createElement)("div",{className:"smb-step__item__title"},Object(s.createElement)("div",{className:"smb-step__item__number",style:i}),Object(s.createElement)("span",null,Object(s.createElement)(m.RichText.Content,{value:r}))),Object(s.createElement)("div",{className:"smb-step__item__body"},Object(s.createElement)("div",{className:"smb-step__item__summary"},Object(s.createElement)(m.InnerBlocks.Content,null))))},transforms:d};!function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;t&&(t.title&&(t.title=Object(l.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(l.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(l.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),Object(i.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:r},t),n)}}(r)}]);