!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.lodash},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.primitives},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/items--item--standard","title":"Item (Standard)","description":"It is a child block of the items block.","category":"smb","parent":["snow-monkey-blocks/items"],"attributes":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-items__item__title","default":""},"lede":{"type":"string","source":"html","selector":".smb-items__item__lede","default":""},"summary":{"type":"string","source":"html","selector":".smb-items__item__content","default":""},"url":{"type":"string","default":""},"target":{"type":"string","default":"_self"},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"large"},"btnLabel":{"type":"string","source":"html","selector":".smb-items__item__btn > .smb-btn__label","default":""},"btnBackgroundColor":{"type":"string"},"btnTextColor":{"type":"string"},"btnSize":{"type":"string","default":""},"btnBorderRadius":{"type":"number"},"btnWrap":{"type":"boolean","default":false}},"supports":{"html":false}}')},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.richText},function(e,t,n){var r=n(14),o=n(15),i=n(16),c=n(18);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],_n=!0,c=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){c=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(c)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(17);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"metadata",(function(){return d})),n.d(r,"name",(function(){return M})),n.d(r,"settings",(function(){return H}));var o=n(4),i=n.n(o),c=n(0),l=n(5),a=n(7),s=(n(11),n(2));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){return t?Object(l.reduce)(e,(function(e,n){var r=Object(l.get)(t,["sizes",n.slug,"url"]),o=Object(l.get)(t,["media_details","sizes",n.slug,"source_url"]),c=Object(l.get)(t,["sizes",n.slug,"width"]),a=Object(l.get)(t,["media_details","sizes",n.slug,"width"]),s=Object(l.get)(t,["sizes",n.slug,"height"]),m=Object(l.get)(t,["media_details","sizes",n.slug,"height"]);return u(u({},e),{},i()({},n.slug,{url:r||o,width:c||a,height:s||m}))}),{}):{}},d=n(9),p=n(12),g=n.n(p),_=n(6),f=n.n(_),O=n(3),y=n(1),j=n(10),v=n(8),h=Object(c.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(v.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),k=Object(c.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(v.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),w=n(13),x=n.n(w),E=function(e){var t=e.id,n=e.src,r=e.allowedTypes,o=e.accept,i=e.onSelect,l=e.onSelectURL,a=e.onRemove;return Object(c.createElement)(y.BlockControls,{group:"inline"},Object(c.createElement)(y.MediaReplaceFlow,{mediaId:t,mediaURL:n,allowedTypes:r,accept:o,onSelect:i,onSelectURL:l}),!!n&&!!a&&Object(c.createElement)(O.ToolbarItem,{as:O.Button,onClick:a},Object(s.__)("Release","snow-monkey-blocks")))},C=function(e){var t=e.src,n=e.alt,r=e.id,o=e.style;return Object(c.createElement)("img",{src:t,alt:n,className:"wp-image-".concat(r),style:o})},S=function(e){var t=e.src,n=e.style;return Object(c.createElement)("video",{controls:!0,src:t,style:n})},R=Object(c.memo)((function(e){var t,n,r=e.id,o=e.src,i=e.alt,a=e.url,s=e.target,m=e.allowedTypes,u=e.accept,b=e.onSelect,d=e.onSelectURL,p=e.onRemove,g=e.mediaType,_=e.style,f=e.rel,O=e.linkClass;return"image"===g?(t=Object(c.createElement)(C,{src:o,alt:i,id:r,style:_}),n=f?Object(l.isEmpty)(f)?void 0:f:"_self"!==s&&s?"noopener noreferrer":void 0,a&&(t=Object(c.createElement)("span",{href:a,target:"_self"===s?void 0:s,rel:n,className:O},t))):"video"===g&&(t=Object(c.createElement)(S,{src:o,style:_})),Object(c.createElement)(c.Fragment,null,Object(c.createElement)(E,{id:r,src:o,allowedTypes:m,accept:u,onSelect:b,onSelectURL:d,onRemove:p}),t)}),(function(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(e[o]!==t[o])return!1}return!0})),T=function(e){var t=e.src,n=e.onSelect,r=e.onSelectURL,o=e.mediaType,i=e.allowedTypes,l=void 0===i?["image"]:i,a=!o&&t?"image":o,m=Object(s.__)("Media","snow-monkey-blocks");1===l.length&&("image"===l[0]?m=Object(s.__)("Image","snow-monkey-blocks"):"video"===l[0]&&(m=Object(s.__)("Video","snow-monkey-blocks")));var u=Object(c.useMemo)((function(){return l.map((function(e){return"".concat(e,"/*")})).join(",")}),[l]);return t?Object(c.createElement)(R,x()({},e,{accept:u,mediaType:a})):Object(c.createElement)(y.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:n,onSelectURL:r,accept:u,allowedTypes:l})},N=function(e){return"_self"!==e&&("_blank"===e||void 0)},z=function(e){var t=e.url,n=e.target,r=e.onChange;return Object(c.createElement)(y.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:t,opensInNewTab:N(n)},onChange:r})},P=function(e){var t=e.label,n=e.id,r=e.slug,o=e.onChange;if(!n)return null;var i=Object(j.useSelect)((function(e){var t=(0,e("core").getMedia)(n);if(!t)return{options:[]};var r=(0,e("core/block-editor").getSettings)().imageSizes,o=b(r,t);return{options:r.map((function(e){return!!o[e.slug]&&{value:e.slug,label:e.name}})).filter((function(e){return e}))}})).options;return 1>i.length?null:Object(c.createElement)(O.SelectControl,{label:t,value:r,options:i,onChange:o})};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d.attributes),save:function(e){var t,n=e.attributes,r=e.className,o=n.titleTagName,l=n.title,a=n.lede,s=n.summary,m=n.url,u=n.target,b=n.imageID,d=n.imageURL,p=n.imageAlt,g=n.imageWidth,_=n.imageHeight,O=n.btnLabel,j=n.btnBackgroundColor,v=n.btnTextColor,h=n.btnSize,k=n.btnBorderRadius,w=n.btnWrap,x=f()("c-row__col",r),E=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(h),!!h),i()(t,"smb-btn--wrap",w),t)),C={color:v||void 0},S={backgroundColor:j||void 0,borderRadius:void 0!==k?"".concat(k,"px"):void 0};return Object(c.createElement)("div",y.useBlockProps.save({className:x}),Object(c.createElement)("div",{className:"smb-items__item"},!!d&&Object(c.createElement)("div",{className:"smb-items__item__figure"},Object(c.createElement)("img",{src:d,alt:p,width:!!g&&g,height:!!_&&_,className:"wp-image-".concat(b)})),"none"!==o&&Object(c.createElement)(y.RichText.Content,{tagName:o,className:"smb-items__item__title",value:l}),!y.RichText.isEmpty(a)&&Object(c.createElement)("div",{className:"smb-items__item__lede"},Object(c.createElement)(y.RichText.Content,{value:a})),!y.RichText.isEmpty(s)&&Object(c.createElement)("div",{className:"smb-items__item__content"},Object(c.createElement)(y.RichText.Content,{value:s})),!y.RichText.isEmpty(O)&&!!m&&Object(c.createElement)("div",{className:"smb-items__item__action"},Object(c.createElement)("a",{className:E,href:m,style:S,target:"_self"===u?void 0:u,rel:"_self"===u?void 0:"noopener noreferrer"},Object(c.createElement)("span",{className:"smb-btn__label",style:C},Object(c.createElement)(y.RichText.Content,{value:O}))))))}}],L={to:[{type:"block",blocks:["snow-monkey-blocks/items--item--block-link"],transform:function(e){return Object(a.createBlock)("snow-monkey-blocks/items--item--block-link",e)}},{type:"block",blocks:["snow-monkey-blocks/items--banner"],transform:function(e){return Object(a.createBlock)("snow-monkey-blocks/items--banner",e)}},{type:"block",blocks:["snow-monkey-blocks/items--item--free"],transform:function(e){return Object(a.createBlock)("snow-monkey-blocks/items--item--free",{},[Object(a.createBlock)("core/paragraph",{content:e.summary})])}}]},M=d.name,H={icon:{foreground:"#cd162c",src:"screenoptions"},edit:function(e){var t,n=e.attributes,r=e.setAttributes,o=e.isSelected,a=e.className,m=n.titleTagName,u=n.title,d=n.lede,p=n.summary,_=n.url,v=n.target,w=n.imageID,x=n.imageURL,E=n.imageAlt,C=n.imageWidth,S=n.imageHeight,R=n.imageSizeSlug,N=n.btnLabel,B=n.btnBackgroundColor,I=n.btnTextColor,L=n.btnSize,M=n.btnBorderRadius,H=n.btnWrap,U=Object(c.useState)(!1),W=g()(U,2),A=W[0],D=W[1],V=!!_,F=V&&o,G=Object(j.useSelect)((function(e){if(!w)return{resizedImages:{}};var t=(0,e("core").getMedia)(w);if(!t)return{resizedImages:{}};var n=(0,e("core/block-editor").getSettings)().imageSizes;return{resizedImages:b(n,t)}})).resizedImages,J=["div","h2","h3","none"],$=f()("c-row__col",a),q=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(L),!!L),i()(t,"smb-btn--wrap",H),t)),K={color:I||void 0},Q={backgroundColor:B||void 0,borderRadius:void 0!==M?"".concat(M,"px"):void 0},X=Object(c.useRef)(),Y=Object(y.useBlockProps)({className:$,ref:X}),Z=function(e){var t=e.url,n=e.opensInNewTab;return r({url:t,target:n?"_blank":"_self"})};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(y.InspectorControls,null,Object(c.createElement)(O.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(c.createElement)(O.BaseControl,{label:Object(s.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/items--item--standard/title-tag-name"},Object(c.createElement)("div",{className:"smb-list-icon-selector"},Object(l.times)(J.length,(function(e){var t=m===J[e];return Object(c.createElement)(O.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return r({titleTagName:J[e]})},key:e},J[e])})))),Object(c.createElement)(P,{label:Object(s.__)("Images size","snow-monkey-blocks"),id:w,slug:R,onChange:function(e){var t=x;G[e]&&G[e].url&&(t=G[e].url);var n=C;G[e]&&G[e].width&&(n=G[e].width);var o=S;G[e]&&G[e].height&&(o=G[e].height),r({imageURL:t,imageWidth:n,imageHeight:o,imageSizeSlug:e})}})),Object(c.createElement)(O.PanelBody,{title:Object(s.__)("Button Settings","snow-monkey-blocks")},Object(c.createElement)(O.SelectControl,{label:Object(s.__)("Button size","snow-monkey-blocks"),value:L,onChange:function(e){return r({btnSize:e})},options:[{value:"",label:Object(s.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:Object(s.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:Object(s.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:Object(s.__)("More wider","snow-monkey-blocks")},{value:"full",label:Object(s.__)("Full size","snow-monkey-blocks")}]}),Object(c.createElement)(O.RangeControl,{label:Object(s.__)("Border radius","snow-monkey-blocks"),value:M,onChange:function(e){return r({btnBorderRadius:e})},min:"0",max:"50",initialPosition:"6",allowReset:!0}),Object(c.createElement)(O.CheckboxControl,{label:Object(s.__)("Wrap","snow-monkey-blocks"),checked:H,onChange:function(e){return r({btnWrap:e})}}),Object(c.createElement)(y.__experimentalColorGradientControl,{label:Object(s.__)("Background Color","snow-monkey-blocks"),colorValue:B,onColorChange:function(e){return r({btnBackgroundColor:e})}}),Object(c.createElement)(y.__experimentalColorGradientControl,{label:Object(s.__)("Text Color","snow-monkey-blocks"),colorValue:I,onColorChange:function(e){return r({btnTextColor:e})}}),Object(c.createElement)(y.ContrastChecker,{backgroundColor:B,textColor:I}))),Object(c.createElement)("div",Y,Object(c.createElement)("div",{className:"smb-items__item"},(!!x||o)&&Object(c.createElement)("div",{className:"smb-items__item__figure"},Object(c.createElement)(T,{src:x,id:w,alt:E,onSelect:function(e){var t=e.sizes&&e.sizes[R]?e.sizes[R].url:e.url,n=e.sizes&&e.sizes[R]?e.sizes[R].width:e.width,o=e.sizes&&e.sizes[R]?e.sizes[R].height:e.height;r({imageURL:t,imageID:e.id,imageAlt:e.alt,imageWidth:n,imageHeight:o})},onSelectURL:function(e){e!==x&&r({imageURL:e,imageID:0,imageSizeSlug:"large"})},onRemove:function(){return r({imageURL:"",imageAlt:"",imageWidth:"",imageHeight:"",imageID:0})},isSelected:o})),Object(c.createElement)("div",{className:"smb-items__item__body"},"none"!==m&&Object(c.createElement)(y.RichText,{tagName:m,className:"smb-items__item__title",placeholder:Object(s.__)("Write title…","snow-monkey-blocks"),value:u,onChange:function(e){return r({title:e})}}),(!y.RichText.isEmpty(d)||o)&&Object(c.createElement)(y.RichText,{className:"smb-items__item__lede",placeholder:Object(s.__)("Write lede…","snow-monkey-blocks"),value:d,onChange:function(e){return r({lede:e})}}),(!y.RichText.isEmpty(p)||o)&&Object(c.createElement)(y.RichText,{className:"smb-items__item__content",placeholder:Object(s.__)("Write content…","snow-monkey-blocks"),value:p,onChange:function(e){return r({summary:e})}}),(!y.RichText.isEmpty(N)||o)&&Object(c.createElement)("div",{className:"smb-items__item__action"},Object(c.createElement)("span",{className:q,href:_,style:Q,target:"_self"===v?void 0:v,rel:"_self"===v?void 0:"noopener noreferrer"},Object(c.createElement)(y.RichText,{className:"smb-btn__label",style:K,value:N,placeholder:Object(s.__)("Button","snow-monkey-blocks"),onChange:function(e){return r({btnLabel:e})},withoutInteractiveFormatting:!0})),(A||F)&&Object(c.createElement)(O.Popover,{position:"bottom center",anchorRef:X.current,onClose:function(){return D(!1)}},Object(c.createElement)(z,{url:_,target:v,onChange:Z})))))),Object(c.createElement)(y.BlockControls,{group:"block"},!V&&Object(c.createElement)(O.ToolbarButton,{icon:h,label:Object(s.__)("Link","snow-monkey-blocks"),"aria-expanded":A,onClick:function(){return D(!A)}}),F&&Object(c.createElement)(O.ToolbarButton,{isPressed:!0,icon:k,label:Object(s.__)("Unlink","snow-monkey-blocks"),onClick:function(){return Z("")}})))},save:function(e){var t,n=e.attributes,r=e.className,o=n.titleTagName,l=n.title,a=n.lede,s=n.summary,m=n.url,u=n.target,b=n.imageID,d=n.imageURL,p=n.imageAlt,g=n.imageWidth,_=n.imageHeight,O=n.btnLabel,j=n.btnBackgroundColor,v=n.btnTextColor,h=n.btnSize,k=n.btnBorderRadius,w=n.btnWrap,x=f()("c-row__col",r),E=f()("smb-items__item__btn","smb-btn",(t={},i()(t,"smb-btn--".concat(h),!!h),i()(t,"smb-btn--wrap",w),t)),C={color:v||void 0},S={backgroundColor:j||void 0,borderRadius:void 0!==k?"".concat(k,"px"):void 0};return Object(c.createElement)("div",y.useBlockProps.save({className:x}),Object(c.createElement)("div",{className:"smb-items__item"},!!d&&Object(c.createElement)("div",{className:"smb-items__item__figure"},Object(c.createElement)("img",{src:d,alt:p,width:!!g&&g,height:!!_&&_,className:"wp-image-".concat(b)})),Object(c.createElement)("div",{className:"smb-items__item__body"},"none"!==o&&Object(c.createElement)(y.RichText.Content,{tagName:o,className:"smb-items__item__title",value:l}),!y.RichText.isEmpty(a)&&Object(c.createElement)("div",{className:"smb-items__item__lede"},Object(c.createElement)(y.RichText.Content,{value:a})),!y.RichText.isEmpty(s)&&Object(c.createElement)("div",{className:"smb-items__item__content"},Object(c.createElement)(y.RichText.Content,{value:s})),!y.RichText.isEmpty(O)&&!!m&&Object(c.createElement)("div",{className:"smb-items__item__action"},Object(c.createElement)("a",{className:E,href:m,style:S,target:"_self"===u?void 0:u,rel:"_self"===u?void 0:"noopener noreferrer"},Object(c.createElement)("span",{className:"smb-btn__label",style:C},Object(c.createElement)(y.RichText.Content,{value:O})))))))},deprecated:I,transforms:L};!function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),Object(a.registerBlockType)(u({name:r},t),n)}}(r)}]);