!function(e){var t={};function n(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(i,c,function(t){return e[t]}.bind(null,c));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var a=c.apply(null,i);a&&e.push(a)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(i=function(){return c}.apply(t,[]))||(e.exports=i)}()},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.lodash},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/section-with-bgvideo","title":"Section (with background YouTube video)","description":"It is a section with a background YouTube video.","category":"smb-section","attributes":{"titleTagName":{"type":"string","default":"h2"},"title":{"type":"string","source":"html","selector":".smb-section__title","default":""},"subtitle":{"type":"string","source":"html","selector":".smb-section__subtitle","default":""},"lede":{"type":"string","source":"html","selector":".smb-section__lede","default":""},"videoURL":{"type":"string","default":""},"videoWidth":{"type":"number","default":640},"videoHeight":{"type":"number","default":360},"height":{"type":"string","default":"fit"},"contentsAlignment":{"type":"string","default":"left"},"maskColor":{"type":"string"},"maskGradientColor":{"type":"string"},"maskOpacity":{"type":"number","default":1},"textColor":{"type":"string"},"contentsWidth":{"type":"boolean","default":false},"isSlim":{"type":"boolean","default":false}},"supports":{"align":["wide","full"],"anchor":true}}')},function(e,t,n){"use strict";var i=function(e){return parseInt(e,16)};e.exports=function(e,t){var n,c;return function(e,t){var n,i=e.r,c=e.g,o=e.b,a=e.a,s=(n=t,!isNaN(parseFloat(n))&&isFinite(n)?t:a);return"rgba(".concat(i,", ").concat(c,", ").concat(o,", ").concat(s,")")}(function(e){var t=e.g,n=e.b,c=e.a;return{r:i(e.r),g:i(t),b:i(n),a:+(i(c)/255).toFixed(2)}}({r:(c=3===(n=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e)).length||4===n.length)?"".concat(n.slice(0,1)).concat(n.slice(0,1)):n.slice(0,2),g:c?"".concat(n.slice(1,2)).concat(n.slice(1,2)):n.slice(2,4),b:c?"".concat(n.slice(2,3)).concat(n.slice(2,3)):n.slice(4,6),a:(c?"".concat(n.slice(3,4)).concat(n.slice(3,4)):n.slice(6,8))||"ff"}),t)}},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=window.wp.data},function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"metadata",(function(){return u})),n.d(i,"name",(function(){return E})),n.d(i,"settings",(function(){return N}));var c=n(4),o=n.n(c),a=n(0),s=n(6),l=n(9),r=(n(10),n(3));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},u=n(7),d=n(2),g=n.n(d),p=n(5),h=n(1),y=n(11),v=function(e){var t=e.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/);if(t)return t[1]},O=n(8),w=n.n(O);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=u.attributes,k=[{attributes:_({},f),supports:{align:["wide","full"]},save:function(e){var t,n=e.attributes,i=e.className,c=n.titleTagName,s=n.title,l=n.subtitle,r=n.lede,m=n.videoURL,b=n.videoWidth,u=n.videoHeight,d=n.height,p=n.contentsAlignment,y=n.maskColor,O=n.maskGradientColor,w=n.maskOpacity,j=n.textColor,_=n.isSlim,f=g()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo",i,(t={},o()(t,"smb-section--".concat(p),!!p),o()(t,"smb-section--".concat(d),!!d),t)),k=g()("smb-section-with-bgimage__bgimage"),E=g()("c-container",{"u-slim-width":!!_}),N=!h.RichText.isEmpty(s)&&"none"!==c,C=!h.RichText.isEmpty(l),x=!h.RichText.isEmpty(r),T={color:j||void 0},R={};(y||O)&&(R.backgroundColor=y,R.backgroundImage=O);var B={opacity:w};return Object(a.createElement)("div",h.useBlockProps.save({className:f,style:T}),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:R}),Object(a.createElement)("div",{className:k,style:B},m&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(m),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(m),"&playsinline=1&modestbranding=1&mute=1"),width:b,height:u,frameBorder:"0",title:m}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(m),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:E},N&&C&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__subtitle",value:l}),N&&Object(a.createElement)(h.RichText.Content,{tagName:c,className:"smb-section__title",value:s}),N&&x&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__lede",value:r}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}},{attributes:_({},f),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,i=t.titleTagName,c=t.title,o=t.subtitle,s=t.lede,l=t.videoURL,r=t.videoWidth,m=t.videoHeight,b=t.height,u=t.contentsAlignment,d=t.maskColor,p=t.maskGradientColor,y=t.maskOpacity,O=t.textColor,w=t.isSlim,j=g()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo","smb-section-with-bgimage--".concat(u),"smb-section-with-bgimage--".concat(b),n),_=g()("smb-section-with-bgimage__bgimage"),f=g()("c-container",{"u-slim-width":!!w}),k=!h.RichText.isEmpty(c)&&"none"!==i,E=!h.RichText.isEmpty(o),N=!h.RichText.isEmpty(s),C={color:O||void 0},x={};(d||p)&&(x.backgroundColor=d,x.backgroundImage=p);var T={opacity:y};return Object(a.createElement)("div",h.useBlockProps.save({className:j,style:C}),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:x}),Object(a.createElement)("div",{className:_,style:T},l&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(l),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(l),"&playsinline=1&modestbranding=1&mute=1"),width:r,height:m,frameBorder:"0",title:l}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(l),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:f},k&&E&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__subtitle",value:o}),k&&Object(a.createElement)(h.RichText.Content,{tagName:i,className:"smb-section__title",value:c}),k&&N&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__lede",value:s}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}},{attributes:_({},f),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,i=t.titleTagName,c=t.title,o=t.subtitle,s=t.lede,l=t.videoURL,r=t.videoWidth,m=t.videoHeight,b=t.height,u=t.contentsAlignment,d=t.maskColor,p=t.maskColor2,y=t.maskColorAngle,O=t.maskOpacity,w=t.textColor,j=t.isSlim,_=g()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo","smb-section-with-bgimage--".concat(u),"smb-section-with-bgimage--".concat(b),n),f=g()("smb-section-with-bgimage__bgimage"),k=g()("c-container",{"u-slim-width":!!j}),E={color:w||void 0},N={};d&&(N.backgroundColor=d,p&&(N.backgroundImage="linear-gradient(".concat(y,"deg, ").concat(d," 0%, ").concat(p," 100%)")));var C={opacity:O};return Object(a.createElement)("div",h.useBlockProps.save({className:_,style:E}),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:N}),Object(a.createElement)("div",{className:f,style:C},l&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(l),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(l),"&playsinline=1&modestbranding=1&mute=1"),width:r,height:m,frameBorder:"0",title:l}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(l),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:k},!h.RichText.isEmpty(c)&&!h.RichText.isEmpty(o)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__subtitle",value:o}),!h.RichText.isEmpty(c)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:i,className:"smb-section__title",value:c}),!h.RichText.isEmpty(c)&&!h.RichText.isEmpty(s)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__lede",value:s}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}},{attributes:_(_({},f),{},{maskColor2:{type:"string"},maskColorAngle:{type:"number",default:0}}),migrate:function(e){var t;return e.maskColor2&&(t="linear-gradient(".concat(e.maskColorAngle,"deg, ").concat(w()(e.maskColor)," 0%, ").concat(w()(e.maskColor2)," 100%)"),e.maskColor=void 0),_(_({},e),{},{maskGradientColor:t})},supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,i=t.titleTagName,c=t.title,o=t.subtitle,s=t.lede,l=t.videoURL,r=t.videoWidth,m=t.videoHeight,b=t.height,u=t.contentsAlignment,d=t.maskColor,p=t.maskColor2,y=t.maskColorAngle,O=t.maskOpacity,w=t.textColor,j=t.isSlim,_=g()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo","smb-section-with-bgimage--".concat(u),"smb-section-with-bgimage--".concat(b),n),f=g()("smb-section-with-bgimage__bgimage"),k=g()("c-container",{"u-slim-width":!!j}),E={color:w||void 0},N={};d&&(N.backgroundColor=d,p&&(N.backgroundImage="linear-gradient(".concat(y,"deg, ").concat(d," 0%, ").concat(p," 100%)")));var C={opacity:O};return Object(a.createElement)("div",h.useBlockProps.save({className:_,style:E}),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:N}),Object(a.createElement)("div",{className:f,style:C},l&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(l),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(l),"&playsinline=1&modestbranding=1&mute=1"),width:r,height:m,frameBorder:"0",title:l}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(l),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:k},!h.RichText.isEmpty(c)&&!h.RichText.isEmpty(o)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__subtitle",value:o}),!h.RichText.isEmpty(c)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:i,className:"smb-section__title",value:c}),!h.RichText.isEmpty(c)&&!h.RichText.isEmpty(s)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__lede",value:s}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}},{attributes:_({},f),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,i=t.titleTagName,c=t.title,o=t.videoURL,s=t.videoWidth,l=t.videoHeight,r=t.height,m=t.contentsAlignment,b=t.maskColor,u=t.maskOpacity,d=t.textColor,p=t.isSlim,y=g()("smb-section","smb-section-with-bgvideo","smb-section-with-bgimage","smb-section-with-bgimage--".concat(m),"smb-section-with-bgimage--".concat(r),n),O=g()("smb-section-with-bgimage__bgimage"),w=g()("c-container",{"u-slim-width":!!p}),j={color:d||void 0},_={backgroundColor:b||void 0,opacity:1-u};return Object(a.createElement)("div",{className:y,style:j},Object(a.createElement)("div",{className:O},o&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(o),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(o),"&playsinline=1&modestbranding=1"),width:s,height:l,frameBorder:"0",title:o}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(o),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:_}),Object(a.createElement)("div",{className:w},!h.RichText.isEmpty(c)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:i,className:"smb-section__title",value:c}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}},{attributes:_({},f),supports:{align:["wide","full"]},migrate:function(e){var t=!!e.contentsWidth;return _(_({},e),{},{isSlim:t})},save:function(e){var t=e.attributes,n=e.className,i=t.titleTagName,c=t.title,o=t.videoURL,s=t.videoWidth,l=t.videoHeight,r=t.height,m=t.contentsAlignment,b=t.maskColor,u=t.maskOpacity,d=t.textColor,p=t.contentsWidth,y=g()("smb-section","smb-section-with-bgvideo","smb-section-with-bgimage","smb-section-with-bgimage--".concat(m),"smb-section-with-bgimage--".concat(r),n),O=g()("smb-section-with-bgimage__bgimage"),w=g()("c-container",{"u-slim-width":!!p}),j={color:d||void 0},_={backgroundColor:b||void 0,opacity:1-u};return Object(a.createElement)("div",{className:y,style:j},Object(a.createElement)("div",{className:O},o&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(o),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(o),"&playsinline=1&modestbranding=1"),width:s,height:l,frameBorder:"0",title:o}),Object(a.createElement)("img",{src:"http://i.ytimg.com/vi/".concat(v(o),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:_}),Object(a.createElement)("div",{className:w},!h.RichText.isEmpty(c)&&"none"!==i&&Object(a.createElement)(h.RichText.Content,{tagName:i,className:"smb-section__title",value:c}),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}},{attributes:_({},f),supports:{align:["wide","full"]},save:function(e){var t=e.attributes,n=e.className,i=t.title,c=t.videoURL,o=t.videoWidth,s=t.videoHeight,l=t.height,r=t.contentsAlignment,m=t.maskColor,b=t.maskOpacity,u=t.textColor,d=g()("smb-section","smb-section-with-bgvideo","smb-section-with-bgimage","smb-section-with-bgimage--".concat(r),"smb-section-with-bgimage--".concat(l),n),p=g()("smb-section-with-bgimage__bgimage"),y={color:u||void 0},O={backgroundColor:m||void 0,opacity:1-b};return Object(a.createElement)("div",{className:d,style:y},Object(a.createElement)("div",{className:p},c&&Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(c),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(c),"&playsinline=1&modestbranding=1"),width:o,height:s,frameBorder:"0",title:c})),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:O}),Object(a.createElement)("div",{className:"c-container"},!h.RichText.isEmpty(i)&&Object(a.createElement)("h2",{className:"smb-section__title"},Object(a.createElement)(h.RichText.Content,{value:i})),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null))))}}],E=u.name,N={icon:{foreground:"#cd162c",src:"text"},edit:function(e){var t,n=e.attributes,i=e.setAttributes,c=e.isSelected,l=e.className,m=e.clientId,u=n.titleTagName,d=n.title,O=n.subtitle,w=n.lede,j=n.videoURL,_=n.videoWidth,f=n.videoHeight,k=n.height,E=n.contentsAlignment,N=n.maskColor,C=n.maskGradientColor,x=n.maskOpacity,T=n.textColor,R=n.isSlim,B=Object(y.useSelect)((function(e){var t=(0,e("core/block-editor").getBlock)(m);return!(!t||!t.innerBlocks.length)}),[m]),P=["h1","h2","h3","none"],S=g()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo",l,(t={},o()(t,"smb-section--".concat(E),!!E),o()(t,"smb-section--".concat(k),!!k),t)),A=g()("smb-section-with-bgimage__bgimage"),I=g()("c-container",{"u-slim-width":!!R}),W=!h.RichText.isEmpty(d)&&"none"!==u,L=!h.RichText.isEmpty(O),U=!h.RichText.isEmpty(w),F={color:T||void 0},H={};(N||C)&&(H.backgroundColor=N,H.backgroundImage=C);var G={opacity:x},D=Object(h.useBlockProps)({className:S,style:F}),M=Object(h.__experimentalUseInnerBlocksProps)({className:["smb-section__body"]},{renderAppender:B?void 0:h.InnerBlocks.ButtonBlockAppender});return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(h.InspectorControls,null,Object(a.createElement)(p.PanelBody,{title:Object(r.__)("Block Settings","snow-monkey-blocks")},Object(a.createElement)(p.BaseControl,{label:Object(r.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/section-with-bgvideo/title-tag-name"},Object(a.createElement)("div",{className:"smb-list-icon-selector"},Object(s.times)(P.length,(function(e){var t=u===P[e];return Object(a.createElement)(p.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return i({titleTagName:P[e]})},key:e},P[e])})))),Object(a.createElement)(p.BaseControl,{label:Object(r.__)("YouTube URL","snow-monkey-blocks"),id:"snow-monkey-blocks/section-with-bgvideo/video-url"},Object(a.createElement)(p.TextControl,{value:j,onChange:function(e){return i({videoURL:e})}})),Object(a.createElement)(p.RangeControl,{label:Object(r.__)("Video width","snow-monkey-blocks"),value:_,onChange:function(e){return i({videoWidth:b(e,1,960)})},min:"1",max:"960"}),Object(a.createElement)(p.RangeControl,{label:Object(r.__)("Video height","snow-monkey-blocks"),value:f,onChange:function(e){return i({videoHeight:b(e,1,960)})},min:"1",max:"960"}),Object(a.createElement)(p.SelectControl,{label:Object(r.__)("Height","snow-monkey-blocks"),value:k,options:[{value:"fit",label:Object(r.__)("Fit","snow-monkey-blocks")},{value:"wide",label:Object(r.__)("Wide","snow-monkey-blocks")}],onChange:function(e){return i({height:e})}}),Object(a.createElement)(p.SelectControl,{label:Object(r.__)("Contents alignment","snow-monkey-blocks"),value:E,options:[{value:"",label:Object(r.__)("Normal","snow-monkey-blocks")},{value:"left",label:Object(r.__)("Left side","snow-monkey-blocks")},{value:"center",label:Object(r.__)("Center","snow-monkey-blocks")},{value:"right",label:Object(r.__)("Right side","snow-monkey-blocks")}],onChange:function(e){return i({contentsAlignment:e})}}),Object(a.createElement)(p.ToggleControl,{label:Object(r.__)("Make the content width slim","snow-monkey-blocks"),checked:R,onChange:function(e){return i({isSlim:e})}})),Object(a.createElement)(p.PanelBody,{title:Object(r.__)("Mask Settings","snow-monkey-blocks"),initialOpen:!1},Object(a.createElement)(h.__experimentalColorGradientControl,{label:Object(r.__)("Color","snow-monkey-blocks"),colorValue:N,gradientValue:C,onColorChange:function(e){return i({maskColor:e})},onGradientChange:function(e){return i({maskGradientColor:e})}}),Object(a.createElement)(p.RangeControl,{label:Object(r.__)("Opacity","snow-monkey-blocks"),value:Number((1-x).toFixed(1)),onChange:function(e){return i({maskOpacity:b((1-e).toFixed(1),0,1)})},min:0,max:1,step:.1})),Object(a.createElement)(h.__experimentalPanelColorGradientSettings,{title:Object(r.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:T,onColorChange:function(e){return i({textColor:e})},label:Object(r.__)("Text Color","snow-monkey-blocks")}]})),Object(a.createElement)("div",D,Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:H}),Object(a.createElement)("div",{className:A,style:G},j&&Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(j),"/maxresdefault.jpg"),alt:""})),Object(a.createElement)("div",{className:"smb-section__inner"},Object(a.createElement)("div",{className:I},W&&(L||c)&&Object(a.createElement)(h.RichText,{className:"smb-section__subtitle",value:O,onChange:function(e){return i({subtitle:e})},placeholder:Object(r.__)("Write subtitle…","snow-monkey-blocks")}),(W||c&&"none"!==u)&&Object(a.createElement)(h.RichText,{className:"smb-section__title",tagName:u,value:d,onChange:function(e){return i({title:e})},placeholder:Object(r.__)("Write title…","snow-monkey-blocks")}),W&&(U||c)&&Object(a.createElement)("div",{className:"smb-section__lede-wrapper"},Object(a.createElement)(h.RichText,{className:"smb-section__lede",value:w,onChange:function(e){return i({lede:e})},placeholder:Object(r.__)("Write lede…","snow-monkey-blocks")})),Object(a.createElement)("div",M)))))},save:function(e){var t,n=e.attributes,i=e.className,c=n.titleTagName,s=n.title,l=n.subtitle,r=n.lede,m=n.videoURL,b=n.videoWidth,u=n.videoHeight,d=n.height,p=n.contentsAlignment,y=n.maskColor,O=n.maskGradientColor,w=n.maskOpacity,j=n.textColor,_=n.isSlim,f=g()("smb-section","smb-section-with-bgimage","smb-section-with-bgvideo",i,(t={},o()(t,"smb-section--".concat(p),!!p),o()(t,"smb-section--".concat(d),!!d),t)),k=g()("smb-section-with-bgimage__bgimage"),E=g()("c-container",{"u-slim-width":!!_}),N=!h.RichText.isEmpty(s)&&"none"!==c,C=!h.RichText.isEmpty(l),x=!h.RichText.isEmpty(r),T={color:j||void 0},R={};(y||O)&&(R.backgroundColor=y,R.backgroundImage=O);var B={opacity:w};return Object(a.createElement)("div",h.useBlockProps.save({className:f,style:T}),Object(a.createElement)("div",{className:"smb-section-with-bgimage__mask",style:R}),Object(a.createElement)("div",{className:k,style:B},m&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/".concat(v(m),"?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=").concat(v(m),"&playsinline=1&modestbranding=1&mute=1"),width:b,height:u,frameBorder:"0",title:m}),Object(a.createElement)("img",{src:"https://i.ytimg.com/vi/".concat(v(m),"/maxresdefault.jpg"),alt:""}))),Object(a.createElement)("div",{className:"smb-section__inner"},Object(a.createElement)("div",{className:E},N&&C&&Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__subtitle",value:l}),N&&Object(a.createElement)(h.RichText.Content,{tagName:c,className:"smb-section__title",value:s}),N&&x&&Object(a.createElement)("div",{className:"smb-section__lede-wrapper"},Object(a.createElement)(h.RichText.Content,{tagName:"div",className:"smb-section__lede",value:r})),Object(a.createElement)("div",{className:"smb-section__body"},Object(a.createElement)(h.InnerBlocks.Content,null)))))},deprecated:k,example:{attributes:{title:"Lorem ipsum dolor sit amet",videoURL:"https://www.youtube.com/watch?v=rAnZPQRUTv0",maskColor:"#000",maskOpacity:.7},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]}};!function(e){if(e){var t=e.metadata,n=e.settings,i=e.name;t&&(t.title&&(t.title=Object(r.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(r.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(r.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),Object(l.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:i},t),n)}}(i)}]);