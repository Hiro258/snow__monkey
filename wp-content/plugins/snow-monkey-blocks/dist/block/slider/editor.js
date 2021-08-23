!function(e){var t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(r,l,function(t){return e[t]}.bind(null,l));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.lodash},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var n=l.apply(null,r);n&&e.push(n)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)o.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/slider","title":"Slider (Deprecated)","description":"Show attractive images as beautiful sliders. This block is being retained for backwards compatibility and is not recommended for use. Its use may slow down the page display.","category":"smb-deprecated","attributes":{"slidesToShow":{"type":"number","default":1},"slidesToScroll":{"type":"number","default":1},"mdSlidesToShow":{"type":"number","default":1},"mdSlidesToScroll":{"type":"number","default":1},"smSlidesToShow":{"type":"number","default":1},"smSlidesToScroll":{"type":"number","default":1},"dots":{"type":"boolean","default":false},"arrows":{"type":"boolean","default":true},"speed":{"type":"number","default":300},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":0},"fade":{"type":"boolean","default":false},"rtl":{"type":"boolean","default":false},"aspectRatio":{"type":"string","default":""}},"supports":{"align":["wide","full"]}}')},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,o.apply(this,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){"use strict";o.r(t);var r={};o.r(r),o.d(r,"metadata",(function(){return u})),o.d(r,"name",(function(){return E})),o.d(r,"settings",(function(){return x}));var l=o(6),s=o.n(l),n=o(0),a=o(1),i=o(9),c=(o(10),o(2));function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==o&&e>o&&(e=o),e},u=o(8),b=o(11),p=o.n(b),f=o(5),S=o.n(f),y=o(3),w=o(4),O=function(e){var t=e.desktop,o=e.tablet,r=e.mobile,l=[];return t&&l.push({name:"desktop",title:Object(n.createElement)(y.Dashicon,{icon:"desktop"})}),o&&l.push({name:"tablet",title:Object(n.createElement)(y.Dashicon,{icon:"tablet"})}),r&&l.push({name:"mobile",title:Object(n.createElement)(y.Dashicon,{icon:"smartphone"})}),Object(n.createElement)(y.TabPanel,{className:"smb-inspector-tabs",tabs:l},(function(e){if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return o();if("mobile"===e.name)return r()}}))},g=["snow-monkey-blocks/slider--item"],j=[["snow-monkey-blocks/slider--item"]],_=function(e){return{slidesToShow:e.slidesToShow,slidesToScroll:e.slidesToScroll,mdSlidesToShow:e.mdSlidesToShow,mdSlidesToScroll:e.mdSlidesToScroll,smSlidesToShow:e.smSlidesToShow,smSlidesToScroll:e.smSlidesToScroll,dots:e.dots,arrows:e.arrows,speed:e.speed,autoplay:e.autoplay,autoplaySpeed:e.autoplaySpeed,fade:e.fade,rtl:e.rtl}};function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){s()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var T=u.attributes,k=[{attributes:v({},T),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,o=e.className,r=t.slidesToShow,l=t.slidesToScroll,s=t.dots,i=t.arrows,c=t.speed,d=t.autoplay,m=t.autoplaySpeed,u=t.fade,b=t.rtl,p=Object(a.omit)(_({slidesToShow:r,slidesToScroll:l,dots:s,arrows:i,speed:c,autoplay:d,autoplaySpeed:1e3*m,fade:u,rtl:b}),["mdSlidesToShow","mdSlidesToScroll","smSlidesToShow","smSlidesToScroll"]),f=S()("smb-slider",o),y=!0===p.rtl?"rtl":"ltr";return Object(n.createElement)("div",{className:f},Object(n.createElement)("div",{className:"smb-slider__canvas",dir:y,"data-smb-slider":JSON.stringify(p)},Object(n.createElement)(w.InnerBlocks.Content,null)))}},{attributes:v({},T),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,o=e.className,r=t.slidesToShow,l=t.slidesToScroll,s=t.dots,i=t.arrows,c=t.speed,d=t.autoplay,m=t.autoplaySpeed,u=t.rtl,b=Object(a.omit)(_({slidesToShow:r,slidesToScroll:l,dots:s,arrows:i,speed:c,autoplay:d,autoplaySpeed:1e3*m,rtl:u}),["mdSlidesToShow","mdSlidesToScroll","smSlidesToShow","smSlidesToScroll","fade"]),p=S()("smb-slider",o),f=!0===b.rtl?"rtl":"ltr";return Object(n.createElement)("div",{className:p},Object(n.createElement)("div",{className:"smb-slider__canvas",dir:f,"data-smb-slider":JSON.stringify(b)},Object(n.createElement)(w.InnerBlocks.Content,null)))}},{attributes:v(v({},T),{},{content:{type:"array",source:"query",selector:".smb-slider__item",default:[],query:{imageID:{type:"number",source:"attribute",selector:".smb-slider__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-slider__item__figure > img",attribute:"src",default:""},caption:{source:"html",selector:".smb-slider__item__caption"}}},items:{type:"number",default:2}}),supports:{align:["wide","full"]},migrate:function(e){var t;return[{slidesToShow:e.slidesToShow,slidesToScroll:e.slidesToScroll,dots:e.dots,arrows:e.arrows,speed:e.speed,autoplay:e.autoplay,autoplaySpeed:e.autoplaySpeed,rtl:e.rtl},(t=void 0===e.content?0:e.content.length,Object(a.times)(t,(function(t){var o=Object(a.get)(e.content,[t,"imageID"],0),r=Object(a.get)(e.content,[t,"imageURL"],""),l=Object(a.get)(e.content,[t,"caption"],"");return Object(i.createBlock)("snow-monkey-blocks/slider--item",{imageID:Number(o),imageURL:r,caption:l})})))]},save:function(e){var t=e.attributes,o=e.className,r=t.slidesToShow,l=t.slidesToScroll,s=t.dots,i=t.arrows,c=t.content,d=t.speed,m=t.autoplay,u=t.autoplaySpeed,b=t.rtl,p=void 0===c?0:c.length,f=Object(a.omit)(_({slidesToShow:r,slidesToScroll:l,dots:s,arrows:i,speed:d,autoplay:m,autoplaySpeed:1e3*u,rtl:b}),["mdSlidesToShow","mdSlidesToScroll","smSlidesToShow","smSlidesToScroll","fade"]),y=S()("smb-slider",o),O=!0===f.rtl?"rtl":"ltr";return Object(n.createElement)("div",{className:y},Object(n.createElement)("div",{className:"smb-slider__canvas",dir:O,"data-smb-slider":JSON.stringify(f)},Object(a.times)(p,(function(e){var t=Object(a.get)(c,[e,"imageID"],0),o=Object(a.get)(c,[e,"imageURL"],""),r=Object(a.get)(c,[e,"caption"],"");return Object(n.createElement)(n.Fragment,null,!!t&&Object(n.createElement)("div",{className:"smb-slider__item"},Object(n.createElement)("div",{className:"smb-slider__item__figure"},Object(n.createElement)("img",{src:o,alt:"",className:"wp-image-".concat(t),"data-image-id":t})),!w.RichText.isEmpty(r)&&Object(n.createElement)("div",{className:"smb-slider__item__caption"},Object(n.createElement)(w.RichText.Content,{value:r}))))}))))}},{attributes:v(v({},T),{},{content:{type:"array",source:"query",selector:".smb-slider__item",default:[],query:{imageID:{type:"number",source:"attribute",selector:".smb-slider__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-slider__item__figure > img",attribute:"src",default:""},caption:{source:"html",selector:".smb-slider__item__caption"}}},items:{type:"number",default:2}}),save:function(e){var t=e.attributes,o=t.slidesToShow,r=t.slidesToScroll,l=t.dots,s=t.arrows,i=t.items,c=t.content,d=t.speed,m=t.autoplay,u=t.autoplaySpeed,b=t.rtl,p=Object(a.omit)(_({slidesToShow:o,slidesToScroll:r,dots:l,arrows:s,speed:d,autoplay:m,autoplaySpeed:1e3*u,rtl:b}),["mdSlidesToShow","mdSlidesToScroll","smSlidesToShow","smSlidesToScroll","fade"]);return Object(n.createElement)("div",{className:"smb-slider"},Object(n.createElement)("div",{className:"smb-slider__canvas",dir:!0===p.rtl?"rtl":"ltr","data-smb-slider":JSON.stringify(p)},Object(a.times)(i,(function(e){var t=Object(a.get)(c,[e,"imageID"],0),o=Object(a.get)(c,[e,"imageURL"],""),r=Object(a.get)(c,[e,"caption"],"");return Object(n.createElement)(n.Fragment,null,!!t&&Object(n.createElement)("div",{className:"smb-slider__item"},Object(n.createElement)("div",{className:"smb-slider__item__figure"},Object(n.createElement)("img",{src:o,alt:"",className:"wp-image-".concat(t),"data-image-id":t})),!w.RichText.isEmpty(r)&&Object(n.createElement)("div",{className:"smb-slider__item__caption"},Object(n.createElement)(w.RichText.Content,{value:r}))))}))))}},{attributes:v(v({},T),{},{content:{type:"array",source:"query",selector:".smb-slider__item",default:[],query:{imageID:{type:"number",source:"attribute",selector:".smb-slider__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-slider__item__figure > img",attribute:"src",default:""},caption:{source:"html",selector:".smb-slider__item__caption"}}},items:{type:"number",default:2}}),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,o=t.slidesToShow,r=t.slidesToScroll,l=t.dots,s=t.arrows,i=t.items,c=t.content,d=t.speed,m=t.autoplay,u=t.autoplaySpeed,b=t.rtl,p=Object(a.omit)(_({slidesToShow:o,slidesToScroll:r,dots:l,arrows:s,speed:d,autoplay:m,autoplaySpeed:1e3*u,rtl:b}),["mdSlidesToShow","mdSlidesToScroll","smSlidesToShow","smSlidesToScroll","fade"]);return Object(n.createElement)("div",{className:"smb-slider"},Object(n.createElement)("div",{className:"smb-slider__canvas",dir:!0===p.rtl?"rtl":"ltr","data-smb-slider":JSON.stringify(p)},Object(a.times)(i,(function(e){var t=Object(a.get)(c,[e,"imageID"],0),o=Object(a.get)(c,[e,"imageURL"],""),r=Object(a.get)(c,[e,"caption"],"");return Object(n.createElement)(n.Fragment,null,!!t&&Object(n.createElement)("div",{className:"smb-slider__item"},Object(n.createElement)("div",{className:"smb-slider__item__figure"},Object(n.createElement)("img",{src:o,alt:"","data-image-id":t})),!w.RichText.isEmpty(r)&&Object(n.createElement)("div",{className:"smb-slider__item__caption"},Object(n.createElement)(w.RichText.Content,{value:r}))))}))))}}],E=u.name,x={icon:{foreground:"#cd162c",src:"format-gallery"},edit:function(e){var t=e.attributes,o=e.setAttributes,r=e.className,l=t.slidesToShow,s=t.slidesToScroll,a=t.mdSlidesToShow,i=t.mdSlidesToScroll,d=t.smSlidesToShow,u=t.smSlidesToScroll,b=t.dots,f=t.arrows,_=t.speed,h=t.autoplaySpeed,v=t.fade,T=t.rtl,k=t.aspectRatio,E=S()("smb-slider",r),x=Object(w.useBlockProps)({className:E}),N=Object(w.__experimentalUseInnerBlocksProps)({className:["c-row","c-row--margin"]},{allowedBlocks:g,template:j,templateLock:!1,renderAppender:w.InnerBlocks.ButtonBlockAppender}),C=[{value:"",label:Object(c.__)("Default","snow-monkey-blocks")},{value:"16to9",label:Object(c.__)("16:9","snow-monkey-blocks")},{value:"4to3",label:Object(c.__)("4:3","snow-monkey-blocks")}],P=function(e){return o({slidesToShow:m(e,1,6)})},R=function(e){return o({slidesToScroll:m(e,1,6)})},D=function(e){return o({mdSlidesToShow:m(e,1,6)})},I=function(e){return o({mdSlidesToScroll:m(e,1,6)})},B=function(e){return o({smSlidesToShow:m(e,1,6)})},L=function(e){return o({smSlidesToScroll:m(e,1,6)})};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(w.InspectorControls,null,Object(n.createElement)(y.PanelBody,{title:Object(c.__)("Block Settings","snow-monkey-blocks")},Object(n.createElement)(y.ToggleControl,{label:Object(c.__)("Show dot indicators","snow-monkey-blocks"),checked:b,onChange:function(e){return o({dots:e})}}),Object(n.createElement)(y.ToggleControl,{label:Object(c.__)("Prev/Next Arrows","snow-monkey-blocks"),checked:f,onChange:function(e){return o({arrows:e})}}),Object(n.createElement)(y.RangeControl,{label:Object(c.__)("Slide animation speed in milliseconds","snow-monkey-blocks"),value:_,onChange:function(e){return o({speed:m(e,100,1e3)})},min:"100",max:"1000",step:"100"}),Object(n.createElement)(y.RangeControl,{label:Object(c.__)("Autoplay Speed in seconds","snow-monkey-blocks"),value:h,onChange:function(e){var t=m(e,0,10);o({autoplaySpeed:t}),o(0<t?{autoplay:!0}:{autoplay:!1})},min:"0",max:"10"}),Object(n.createElement)(y.ToggleControl,{label:Object(c.__)("Enable fade","snow-monkey-blocks"),checked:v,onChange:function(e){return o({fade:e})}}),Object(n.createElement)(y.ToggleControl,{label:Object(c.__)("Change the slider's direction to become right-to-left","snow-monkey-blocks"),checked:T,onChange:function(e){return o({rtl:e})}}),Object(n.createElement)(y.SelectControl,{label:Object(c.__)("Aspect ratio","snow-monkey-blocks"),value:k,onChange:function(e){return o({aspectRatio:e})},options:C}),Object(n.createElement)(O,{desktop:function(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(y.RangeControl,{label:Object(c.__)("# of slides to show (Large window)","snow-monkey-blocks"),value:l,onChange:P,min:"1",max:"6"}),Object(n.createElement)(y.RangeControl,{label:Object(c.__)("# of slides to scroll (Large window)","snow-monkey-blocks"),value:s,onChange:R,min:"1",max:"6"}))},tablet:function(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(y.RangeControl,{label:Object(c.__)("# of slides to show (Medium window)","snow-monkey-blocks"),value:a,onChange:D,min:"1",max:"6"}),Object(n.createElement)(y.RangeControl,{label:Object(c.__)("# of slides to scroll (Medium window)","snow-monkey-blocks"),value:i,onChange:I,min:"1",max:"6"}))},mobile:function(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(y.RangeControl,{label:Object(c.__)("# of slides to show (Small window)","snow-monkey-blocks"),value:d,onChange:B,min:"1",max:"6"}),Object(n.createElement)(y.RangeControl,{label:Object(c.__)("# of slides to scroll (Small window)","snow-monkey-blocks"),value:u,onChange:L,min:"1",max:"6"}))}}))),Object(n.createElement)("div",x,Object(n.createElement)("div",p()({},N,{"data-columns":"2"}))))},save:function(e){var t=e.attributes,o=e.className,r=t.slidesToShow,l=t.slidesToScroll,a=t.mdSlidesToShow,i=t.mdSlidesToScroll,c=t.smSlidesToShow,d=t.smSlidesToScroll,m=t.dots,u=t.arrows,b=t.speed,p=t.autoplay,f=t.autoplaySpeed,y=t.fade,O=t.rtl,g=t.aspectRatio,j=_({slidesToShow:r,slidesToScroll:l,mdSlidesToShow:a,mdSlidesToScroll:i,smSlidesToShow:c,smSlidesToScroll:d,dots:m,arrows:u,speed:b,autoplay:p,autoplaySpeed:1e3*f,fade:y,rtl:O}),h=S()("smb-slider",o,s()({},"smb-slider--".concat(g),!!g)),v=!0===j.rtl?"rtl":"ltr";return Object(n.createElement)("div",w.useBlockProps.save({className:h}),Object(n.createElement)("div",{className:"smb-slider__canvas",dir:v,"data-smb-slider":JSON.stringify(j)},Object(n.createElement)(w.InnerBlocks.Content,null)))},deprecated:k};!function(e){if(e){var t=e.metadata,o=e.settings,r=e.name;t&&(t.title&&(t.title=Object(c.__)(t.title,"snow-monkey-blocks"),o.title=t.title),t.description&&(t.description=Object(c.__)(t.description,"snow-monkey-blocks"),o.description=t.description),t.keywords&&(t.keywords=Object(c.__)(t.keywords,"snow-monkey-blocks"),o.keywords=t.keywords)),Object(i.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){s()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({name:r},t),o)}}(r)}]);