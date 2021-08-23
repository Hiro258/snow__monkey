!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e){e.exports=JSON.parse('{"name":"wp-awesome-widgets/ranking","title":"[WPAW] Ranking","description":"","category":"widgets","textdomain":"inc2734-wp-awesome-widgets","attributes":{"showThumbnail":{"type":"boolean","default":true},"showTaxonomy":{"type":"boolean","default":true},"items":{"type":"string","default":"[{\\"id\\":0,\\"title\\":\\"\\",\\"url\\":\\"\\"}]"},"clientId":{"type":"string"}},"supports":{"anchor":true,"customClassName":false}}')},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},,function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"metadata",(function(){return p})),n.d(i,"name",(function(){return g})),n.d(i,"settings",(function(){return O}));var o=n(6),r=n.n(o),s=n(7),c=n(1);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var l=n(0),u=n(5),w=Object(l.createElement)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(l.createElement)(u.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"})),p=n(3),d=n(8),m=n.n(d),b=n(4),f=n(2),g=p.name,O={icon:w,edit:function(e){var t=e.attributes,n=e.setAttributes,i=e.clientId,o=t.showThumbnail,r=t.showTaxonomy,s=t.items;s=JSON.parse(s),Object(l.useEffect)((function(){t.clientId||n({clientId:i})}),[i]);var a=s.filter((function(e){return!!e.id&&0<e.id}));return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.InspectorControls,null,Object(l.createElement)(f.PanelBody,{title:Object(c.__)("Block Settings","inc2734-wp-awesome-widgets")},Object(l.createElement)(f.ToggleControl,{label:Object(c.__)("Display thumbnail","inc2734-wp-awesome-widgets"),checked:o,onChange:function(e){return n({showThumbnail:e})}}),Object(l.createElement)(f.ToggleControl,{label:Object(c.__)("Display taxonomy","inc2734-wp-awesome-widgets"),checked:r,onChange:function(e){return n({showTasonomy:e})}}),Object(l.createElement)(f.BaseControl,{label:Object(c.__)("Search post","inc2734-wp-awesome-widgets"),id:"wp-awesome-widgets/ranking/linkcontrol",className:"wp-awesome-widgests-posts-list-linkcontrols"},s.map((function(e,t){return Object(l.createElement)("div",{className:"wp-awesome-widgests-posts-list-linkcontrols__item",key:"item-".concat(t)},Object(l.createElement)("div",{className:"wp-awesome-widgests-posts-list-linkcontrol"},Object(l.createElement)("span",{className:"wp-awesome-widgests-posts-list-linkcontrol__label"},t+1),Object(l.createElement)(f.Button,{isSecondary:!0,isSmall:!0,onClick:function(){s.splice(t,1),n({items:JSON.stringify(s)})},"aria-label":Object(c.__)("Remove this item","inc2734-wp-awesome-widgets"),className:"wp-awesome-widgests-posts-list-linkcontrol__remove-button"},"-"),Object(l.createElement)(b.__experimentalLinkControl,{settings:[],value:{url:e.url,title:e.title},onChange:function(e){s[t]={id:e.id,title:e.title,url:e.url},n({items:JSON.stringify(s)})}})))})),Object(l.createElement)("div",{className:"wp-awesome-widgests-posts-list-linkcontrols__action"},Object(l.createElement)(f.Button,{isPrimary:!0,onClick:function(){s.push({id:0,title:"",url:""}),n({items:JSON.stringify(s)})}},Object(c.__)("Add new item","inc2734-wp-awesome-widgets")))))),1>a.length?Object(l.createElement)(f.Placeholder,{icon:w,label:Object(c.__)("Ranking","inc2734-wp-awesome-widgets")},Object(c.__)("No posts found.","inc2734-wp-awesome-widgts")):Object(l.createElement)(f.Disabled,null,Object(l.createElement)(m.a,{block:"wp-awesome-widgets/ranking",attributes:t})))},save:function(){return Object(l.createElement)("div",{"data-dynamic-block":"wp-awesome-widgets/ranking","data-version":"1"})}};!function(e){if(e){var t=e.metadata,n=e.settings,i=e.name;t&&(t.title&&(t.title=Object(c.__)(t.title,"inc2734-wp-awesome-widgets"),n.title=t.title),t.description&&(t.description=Object(c.__)(t.description,"inc2734-wp-awesome-widgets"),n.description=t.description),t.keywords&&(t.keywords=Object(c.__)(t.keywords,"inc2734-wp-awesome-widgets"),n.keywords=t.keywords)),Object(s.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:i},t),n)}}(i)}]);