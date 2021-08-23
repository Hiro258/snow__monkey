!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.lodash},function(e,t,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)o.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/balloon","title":"Balloon","description":"It is a block that can express a conversation.","category":"smb","attributes":{"avatarID":{"type":"number","default":0},"avatarURL":{"type":"string","source":"attribute","selector":"img","attribute":"src","default":"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},"avatarAlt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"avatarBorderColor":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"balloonName":{"type":"string","default":""},"balloonBody":{"type":"string","source":"html","selector":".smb-balloon__body","multiline":"p","default":""},"modifier":{"type":"string","default":""}},"supports":{"html":false},"example":{"attributes":{"balloonName":"Lorem","balloonBody":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>"}}}')},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t,o){"use strict";o.r(t);var r={};o.r(r),o.d(r,"metadata",(function(){return b})),o.d(r,"name",(function(){return j})),o.d(r,"settings",(function(){return g}));var n=o(3),a=o.n(n),l=o(0),c=(o(4),o(8)),s=(o(9),o(2));function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var b=o(6),u=o(5),m=o.n(u),d=o(7),p=o(1);function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var O=b.attributes,y=[{attributes:v({},O),save:function(e){var t=e.attributes,o=t.avatarID,r=t.avatarURL,n=t.avatarBorderColor,c=t.balloonName,s=t.balloonBody,i=t.modifier;return Object(l.createElement)("div",{className:m()("smb-balloon",a()({},"smb-balloon--".concat(i),!!i))},Object(l.createElement)("div",{className:"smb-balloon__person"},Object(l.createElement)("div",{className:"smb-balloon__figure",style:{borderColor:n}},Object(l.createElement)("img",{src:r,alt:"",className:"wp-image-".concat(o)})),Object(l.createElement)("div",{className:"smb-balloon__name"},c)),Object(l.createElement)("div",{className:"smb-balloon__body"},Object(l.createElement)(p.RichText.Content,{value:s})))}},{attributes:v({},O),save:function(e){var t=e.attributes,o=t.avatarURL,r=t.avatarBorderColor,n=t.balloonName,c=t.balloonBody,s=t.modifier;return Object(l.createElement)("div",{className:m()("smb-balloon",a()({},"smb-balloon--".concat(s),!!s))},Object(l.createElement)("div",{className:"smb-balloon__person"},Object(l.createElement)("div",{className:"smb-balloon__figure",style:{borderColor:r}},Object(l.createElement)("img",{src:o,alt:""})),Object(l.createElement)("div",{className:"smb-balloon__name"},n)),Object(l.createElement)("div",{className:"smb-balloon__body"},Object(l.createElement)(p.RichText.Content,{value:c})))}}],j=b.name,g={icon:{foreground:"#cd162c",src:"admin-comments"},edit:function(e){var t,o=e.attributes,r=e.setAttributes,n=e.className,c=o.avatarID,i=o.avatarAlt,b=o.avatarURL,u=o.avatarBorderColor,f=o.backgroundColor,v=o.textColor,O=o.balloonName,y=o.balloonBody,j=o.modifier,g={borderColor:u||void 0},_={backgroundColor:f||void 0,borderColor:f||void 0,color:v||void 0},w=m()("smb-balloon",(t={},a()(t,n,!!n),a()(t,"smb-balloon--".concat(j),!!j),t)),k=Object(p.useBlockProps)({className:w});return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(p.InspectorControls,null,Object(l.createElement)(d.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(l.createElement)(d.SelectControl,{label:Object(s.__)("Type","snow-monkey-blocks"),value:j,onChange:function(e){return r({modifier:e})},options:[{value:"",label:Object(s.__)("Normal Balloon","snow-monkey-blocks")},{value:"reverse",label:Object(s.__)("Reverse Balloon","snow-monkey-blocks")}]})),Object(l.createElement)(p.PanelColorSettings,{title:Object(s.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,colorSettings:[{value:u,onChange:function(e){return r({avatarBorderColor:e})},label:Object(s.__)("Avatar Border Color","snow-monkey-blocks")},{value:v,onChange:function(e){return r({textColor:e})},label:Object(s.__)("Text Color","snow-monkey-blocks")},{value:f,onChange:function(e){return r({backgroundColor:e})},label:Object(s.__)("Background Color","snow-monkey-blocks")}]},Object(l.createElement)(p.ContrastChecker,{backgroundColor:f,textColor:v}))),Object(l.createElement)("div",k,Object(l.createElement)("div",{className:"smb-balloon__person"},Object(l.createElement)("div",{className:"smb-balloon__figure",style:g},Object(l.createElement)(p.MediaUpload,{onSelect:function(e){var t=e.sizes.thumbnail?e.sizes.thumbnail.url:e.url;r({avatarURL:t,avatarID:e.id,avatarAlt:e.alt})},type:"image",value:c,render:function(e){return Object(l.createElement)(d.Button,{className:"image-button",onClick:e.open,style:{padding:0}},Object(l.createElement)("img",{src:b,alt:i,className:"wp-image-".concat(c)}))}})),Object(l.createElement)(p.RichText,{className:"smb-balloon__name",value:O,onChange:function(e){return r({balloonName:e})},placeholder:Object(s.__)("Name","snow-monkey-blocks")})),Object(l.createElement)(p.RichText,{className:"smb-balloon__body",multiline:"p",value:y,onChange:function(e){return r({balloonBody:e})},style:_})))},save:function(e){var t,o=e.attributes,r=e.className,n=o.avatarID,c=o.avatarAlt,s=o.avatarURL,i=o.avatarBorderColor,b=o.backgroundColor,u=o.textColor,d=o.balloonName,f=o.balloonBody,v=o.modifier,O={borderColor:i||void 0},y={backgroundColor:b||void 0,borderColor:b||void 0,color:u||void 0},j=m()("smb-balloon",(t={},a()(t,r,!!r),a()(t,"smb-balloon--".concat(v),!!v),t));return Object(l.createElement)("div",p.useBlockProps.save({className:j}),Object(l.createElement)("div",{className:"smb-balloon__person"},Object(l.createElement)("div",{className:"smb-balloon__figure",style:O},Object(l.createElement)("img",{src:s,alt:c,className:"wp-image-".concat(n)})),Object(l.createElement)("div",{className:"smb-balloon__name"},d)),Object(l.createElement)("div",{className:"smb-balloon__body",style:y},Object(l.createElement)(p.RichText.Content,{value:f})))},deprecated:y};!function(e){if(e){var t=e.metadata,o=e.settings,r=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),o.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),o.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),o.keywords=t.keywords)),Object(c.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({name:r},t),o)}}(r)}]);