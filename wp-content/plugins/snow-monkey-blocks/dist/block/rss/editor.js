!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.lodash},function(e){e.exports=JSON.parse('{"name":"snow-monkey-blocks/rss","title":"RSS","description":"Display entries from any RSS or Atom feed.","category":"smb","attributes":{"feedURL":{"type":"string","default":""},"postsPerPage":{"type":"number","default":6},"layout":{"type":"string","default":"rich-media"},"smCols":{"type":"number","default":0},"noPostsText":{"type":"string","default":""},"itemTitleTagName":{"type":"string","default":"h3"},"arrows":{"type":"boolean","default":false},"dots":{"type":"boolean","default":true},"interval":{"type":"number","default":0},"anchor":{"type":"string","default":""}},"supports":{"anchor":true}}')},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t,n){var o=n(11),r=n(12),l=n(13),c=n(15);e.exports=function(e,t){return o(e)||r(e,t)||l(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,l=[],_n=!0,c=!1;try{for(n=n.call(e);!(_n=(o=n.next()).done)&&(l.push(o.value),!t||l.length!==t);_n=!0);}catch(e){c=!0,r=e}finally{try{_n||null==n.return||n.return()}finally{if(c)throw r}}return l}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(14);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"metadata",(function(){return p})),n.d(o,"name",(function(){return g})),n.d(o,"settings",(function(){return v}));var r=n(5),l=n.n(r),c=n(0),s=n(3),a=n(7),i=(n(8),n(1));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},p=n(4),f=n(9),m=n.n(f),d=n(10),y=n.n(d),O=n(2),j=n(6);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=[{attributes:w(w({},p.attributes),{myAnchor:{type:"string",default:""}}),migrate:function(e){return e.anchor=e.myAnchor,e},save:function(){return null}}],g=p.name,v={icon:{foreground:"#cd162c",src:"rss"},edit:function(e){var t=e.attributes,n=e.setAttributes,o=Object(c.useState)(!t.feedURL),r=m()(o,2),l=r[0],a=r[1],u=t.feedURL,p=t.postsPerPage,f=t.layout,d=t.smCols,k=t.noPostsText,w=t.itemTitleTagName,_=t.arrows,g=t.dots,v=t.interval,h=["h2","h3","h4"];return l?Object(c.createElement)(O.Placeholder,{icon:"rss",label:"RSS"},Object(c.createElement)("form",{onSubmit:function(e){e.preventDefault(),u&&a(!1)},className:"wp-block-rss__placeholder-form"},Object(c.createElement)(O.TextControl,{placeholder:Object(i.__)("Enter URL here…","snow-monkey-blocks"),value:u,onChange:function(e){return n({feedURL:e})},className:"wp-block-rss__placeholder-input"}),Object(c.createElement)(O.Button,{isPrimary:!0,type:"submit"},Object(i.__)("Use URL","snow-monkey-blocks")))):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(j.BlockControls,{group:"block"},Object(c.createElement)(O.ToolbarButton,{icon:"edit",title:Object(i.__)("Edit RSS URL","snow-monkey-blocks"),onClick:function(){return a(!0)}})),Object(c.createElement)(j.InspectorControls,null,Object(c.createElement)(O.PanelBody,{title:Object(i.__)("Block Settings","snow-monkey-blocks")},Object(c.createElement)(O.RangeControl,{label:Object(i.__)("Number of posts","snow-monkey-blocks"),value:p,onChange:function(e){return n({postsPerPage:b(e,1,12)})},min:"1",max:"12"}),Object(c.createElement)(O.SelectControl,{label:Object(i.__)("Layout","snow-monkey-blocks"),value:f,onChange:function(e){return n({layout:e})},options:[{value:"rich-media",label:Object(i.__)("Rich media","snow-monkey-blocks")},{value:"simple",label:Object(i.__)("Simple","snow-monkey-blocks")},{value:"text",label:Object(i.__)("Text","snow-monkey-blocks")},{value:"text2",label:Object(i.__)("Text 2","snow-monkey-blocks")},{value:"panel",label:Object(i.__)("Panels","snow-monkey-blocks")},{value:"carousel",label:Object(i.sprintf)(// translators: %1$s: Layout
Object(i.__)("Carousel (%1$s)","snow-monkey-blocks"),Object(i.__)("Rich media","snow-monkey-blocks"))}]}),"carousel"===f&&Object(c.createElement)(c.Fragment,null,Object(c.createElement)(O.ToggleControl,{label:Object(i.__)("Display arrows","snow-monkey-blocks"),checked:_,onChange:function(e){return n({arrows:e})}}),Object(c.createElement)(O.ToggleControl,{label:Object(i.__)("Display dots","snow-monkey-blocks"),checked:g,onChange:function(e){return n({dots:e})}}),Object(c.createElement)(O.RangeControl,{label:Object(i.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:Object(i.__)('If "0", no scroll.',"snow-monkey-blocks"),value:v,onChange:function(e){return n({interval:b(e,0,10)})},min:"0",max:"10"})),Object(c.createElement)(O.BaseControl,{label:Object(i.__)("Title Tag of each items","snow-monkey-blocks"),id:"snow-monkey-blocks/rss/item-title-tag-name"},Object(c.createElement)("div",{className:"smb-list-icon-selector"},Object(s.times)(h.length,(function(e){var t=w===h[e];return Object(c.createElement)(O.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return n({itemTitleTagName:h[e]})},key:e},h[e])})))),("rich-media"===f||"panel"===f)&&Object(c.createElement)(O.SelectControl,{label:Object(i.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),value:d,onChange:function(e){return n({smCols:b(e)})},options:[{value:0,label:Object(i.__)("Default","snow-monkey-blocks")},{value:1,label:Object(i.__)("1 column","snow-monkey-blocks")},{value:2,label:Object(i.__)("2 columns","snow-monkey-blocks")}]}),Object(c.createElement)(O.TextareaControl,{label:Object(i.__)("Text if no posts matched","snow-monkey-blocks"),help:Object(i.__)("Allow HTML","snow-monkey-blocks"),value:k||"",onChange:function(e){return n({noPostsText:e})}}))),Object(c.createElement)(O.Disabled,null,Object(c.createElement)(y.a,{block:"snow-monkey-blocks/rss",attributes:t})))},save:function(){return Object(c.createElement)("div",{"data-dynamic-block":"snow-monkey-blocks/rss","data-version":"2"})},deprecated:_};!function(e){if(e){var t=e.metadata,n=e.settings,o=e.name;t&&(t.title&&(t.title=Object(i.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(i.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(i.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),Object(a.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:o},t),n)}}(o)}]);