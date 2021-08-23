!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e){e.exports=JSON.parse('{"name":"wp-awesome-widgets/recent-posts","title":"[WPAW] Recent posts","description":"","category":"widgets","textdomain":"inc2734-wp-awesome-widgets","attributes":{"postType":{"type":"string","default":"post"},"postsPerPage":{"type":"number","default":6},"showThumbnail":{"type":"boolean","default":true},"showTaxonomy":{"type":"boolean","default":true},"clientId":{"type":"string"}},"supports":{"anchor":true,"customClassName":false}}')},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.data},,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"metadata",(function(){return d})),n.d(r,"name",(function(){return y})),n.d(r,"settings",(function(){return j}));var o=n(5),c=n.n(o),i=n(6),s=n(1);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},u=n(0),p=n(4),w=Object(u.createElement)(p.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(u.createElement)(p.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"})),d=n(3),b=n(7),f=n.n(b),m=n(8),g=n(9),O=n(2),y=d.name,j={icon:w,edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.clientId,o=t.postType,c=t.postsPerPage,i=t.showThumbnail,a=t.showTaxonomy;Object(u.useEffect)((function(){t.clientId||n({clientId:r})}),[r]);var p=Object(g.useSelect)((function(e){return(0,e("core").getPostTypes)({per_page:-1})||[]}),[]),d=Object(u.useMemo)((function(){return p.filter((function(e){return e.viewable&&!e.hierarchical&&"media"!==e.rest_base}))}),[p]);return Object(u.createElement)(u.Fragment,null,Object(u.createElement)(m.InspectorControls,null,Object(u.createElement)(O.PanelBody,{title:Object(s.__)("Block Settings","inc2734-wp-awesome-widgets")},Object(u.createElement)(O.SelectControl,{label:Object(s.__)("Post Type","inc2734-wp-awesome-widgets"),value:o,onChange:function(e){return n({postType:e})},options:d.map((function(e){return{label:e.name,value:e.slug}}))}),Object(u.createElement)(O.RangeControl,{label:Object(s.__)("Number of posts","inc2734-wp-awesome-widgets"),value:c,onChange:function(e){return n({postsPerPage:l(e,1,12)})},min:"1",max:"12"}),Object(u.createElement)(O.ToggleControl,{label:Object(s.__)("Display thumbnail","inc2734-wp-awesome-widgets"),checked:i,onChange:function(e){return n({showThumbnail:e})}}),Object(u.createElement)(O.ToggleControl,{label:Object(s.__)("Display taxonomy","inc2734-wp-awesome-widgets"),checked:a,onChange:function(e){return n({showTasonomy:e})}}))),p?Object(u.createElement)(O.Disabled,null,Object(u.createElement)(f.a,{block:"wp-awesome-widgets/recent-posts",attributes:t})):Object(u.createElement)(O.Placeholder,{icon:w,label:Object(s.__)("Recent posts","inc2734-wp-awesome-widgets")},Object(u.createElement)(O.Spinner,null)))},save:function(){return Object(u.createElement)("div",{"data-dynamic-block":"wp-awesome-widgets/recent-posts","data-version":"1"})}};!function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"inc2734-wp-awesome-widgets"),n.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"inc2734-wp-awesome-widgets"),n.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"inc2734-wp-awesome-widgets"),n.keywords=t.keywords)),Object(i.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:r},t),n)}}(r)}]);