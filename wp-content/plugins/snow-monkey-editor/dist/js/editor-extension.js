!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},,function(e,t){e.exports=window.lodash},function(e,t){e.exports=window.wp.hooks},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);const r=Object(o.createElement)("svg",{role:"img",focusable:"false",width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},Object(o.createElement)("path",{d:"M13.982,16.711c-0.744,1.441 -2.248,2.428 -3.982,2.428c-1.735,0 -3.238,-0.986 -3.983,-2.428c0.909,-1.213 2.355,-2.002 3.983,-2.002c1.629,0 3.074,0.789 3.982,2.002Zm-0.748,-7.657c-0.314,2.56 1.248,2.919 1.248,5.603c0,0.467 -0.072,0.918 -0.205,1.344c-1.037,-1.203 -2.57,-1.967 -4.277,-1.967c-1.708,0 -3.24,0.764 -4.277,1.967c-0.133,-0.426 -0.205,-0.877 -0.205,-1.344c0,-2.684 1.563,-3.043 1.247,-5.603c-0.362,-2.928 -4.315,-2.465 -4.315,-5.334c0,-1.579 1.279,-2.858 2.858,-2.858c1.709,0 2.765,1.558 4.692,1.558c1.926,0 2.982,-1.558 4.691,-1.558c1.578,0 2.857,1.279 2.857,2.858c0.001,2.869 -3.952,2.406 -4.314,5.334Zm-4.677,-4.947l-0.708,0c0,0.498 -0.403,0.9 -0.901,0.9c-0.498,0 -0.901,-0.402 -0.901,-0.9l-0.708,0c0,0.889 0.72,1.609 1.609,1.609c0.889,0 1.609,-0.72 1.609,-1.609Zm0.979,7.141c0,-0.312 -0.253,-0.568 -0.566,-0.568c-0.313,0 -0.567,0.256 -0.567,0.568c0,0.312 0.254,0.566 0.567,0.566c0.313,0 0.566,-0.253 0.566,-0.566Zm2.062,0c0,-0.312 -0.254,-0.568 -0.568,-0.568c-0.312,0 -0.566,0.256 -0.566,0.568c0,0.312 0.254,0.566 0.566,0.566c0.314,0 0.568,-0.253 0.568,-0.566Zm3.062,-7.141l-0.707,0c0,0.498 -0.404,0.9 -0.9,0.9c-0.498,0 -0.902,-0.402 -0.902,-0.9l-0.707,0c0,0.889 0.721,1.609 1.609,1.609c0.886,0.001 1.607,-0.72 1.607,-1.609Z"}))},function(e,t){e.exports=window.wp.compose},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=["sme-animation-bounce-in","sme-animation-bounce-down","sme-animation-fade-in","sme-animation-fade-in-up","sme-animation-fade-in-down"]},function(e,t,n){var o;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var n=t.length,o=0;o<n;++o)r(e,t[o])}e.prototype=Object.create(null);var n={}.hasOwnProperty,o=/\s+/;function r(e,r){if(r){var i=typeof r;"string"===i?function(e,t){for(var n=t.split(o),r=n.length,i=0;i<r;++i)e[n[i]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===i?function(e,t){if(t.toString===Object.prototype.toString)for(var o in t)n.call(t,o)&&(e[o]=!!t[o]);else e[t.toString()]=!0}(e,r):"number"===i&&function(e,t){e[t]=!0}(e,r)}}return function(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var i=new e;t(i,o);var s=[];for(var c in i)i[c]&&s.push(c);return s.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},function(e,t){e.exports=window.wp.dataControls},,,,,function(e){e.exports=JSON.parse('{"smeIsHiddenSm":{"type":"boolean","default":false},"smeIsHiddenMd":{"type":"boolean","default":false},"smeIsHiddenLg":{"type":"boolean","default":false}}')},function(e){e.exports=JSON.parse('{"smeIsHiddenRoles":{"type":"array","default":[]}}')},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&e.push(s)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e){e.exports=JSON.parse('{"smeAnimation":{"type":"string"},"smeAnimationDelay":{"type":"number","default":0},"smeAnimationDuration":{"type":"number"}}')},function(e){e.exports=JSON.parse('{"smeStartDateTime":{"type":"string"},"smeEndDateTime":{"type":"string"}}')},function(e,t){e.exports=window.wp.date},function(e){e.exports=JSON.parse('{"smeIsEditingLockRoles":{"type":"array","default":[]}}')},,function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(5),i=n(12),s=n.n(i),c=n(8),a=n(3),l=n(2),d=n(10),m=n(6),u=n(1),b=n(9);function p(e,t){return 0<function(e){return Object(m.applyFilters)("SnowMonkeyEditor.extension.allowedNameSpaces",["core","snow-monkey-blocks"],e)}(t).filter(t=>0===e.indexOf(t)).length}function O(e,t){if(!e||!Object.keys(e).length)return!1;const n=function(e){return Object(m.applyFilters)("SnowMonkeyEditor.extension.allowedRoles",["administrator","editor","author","contributor"],e)}(t);return 0<e.roles.filter(e=>-1<n.indexOf(e)).length}var y=n(18);Object(m.addFilter)("blocks.registerBlockType","snow-monkey-editor/hidden-by-size/attributes",e=>O(snowmonkeyeditor.currentUser,"hidden-by-size")&&p(e.name,"hidden-by-size")?(e.attributes={...e.attributes,...y},e):e);const f=Object(d.createHigherOrderComponent)(e=>t=>{const{attributes:n,setAttributes:i,name:d}=t,{smeIsHiddenSm:m,smeIsHiddenMd:y,smeIsHiddenLg:f,className:j}=n;if(!O(snowmonkeyeditor.currentUser,"hidden-by-size"))return Object(o.createElement)(e,t);if(!p(d,"hidden-by-size"))return Object(o.createElement)(e,t);if(void 0===m||void 0===y||void 0===f)return Object(o.createElement)(e,t);const k=Object(c.getBlockType)(d);if(!k)return Object(o.createElement)(e,t);if(!Object(c.hasBlockSupport)(k,"customClassName",!0))return Object(o.createElement)(e,t);const w=0<Object(r.compact)([m,y,f]).length?"sme-extension-panel sme-extension-panel--enabled":"sme-extension-panel";return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(e,t),Object(o.createElement)(a.InspectorControls,null,Object(o.createElement)(l.PanelBody,{title:Object(u.__)("Display setting (By window size)","snow-monkey-editor"),initialOpen:!1,icon:b.a,className:w},Object(o.createElement)(l.ToggleControl,{label:Object(u.__)("Hide on smartphone size","snow-monkey-editor"),checked:m,onChange:e=>{i({smeIsHiddenSm:e,className:s()(j,{"sme-hidden-sm":e})})}}),Object(o.createElement)(l.ToggleControl,{label:Object(u.__)("Hide on tablet size","snow-monkey-editor"),checked:y,onChange:e=>{i({smeIsHiddenMd:e,className:s()(j,{"sme-hidden-md":e})})}}),Object(o.createElement)(l.ToggleControl,{label:Object(u.__)("Hide on PC size","snow-monkey-editor"),checked:f,onChange:e=>{i({smeIsHiddenLg:e,className:s()(j,{"sme-hidden-lg-up":e})})}}))))},"withSnowMonkeyEditorHiddenBySizeBlockEdit");Object(m.addFilter)("editor.BlockEdit","snow-monkey-editor/hidden-by-size/block-edit",f);var j=n(7),k=n(19),w=n(13);const g={roles:{}},E={setRoles:e=>({type:"SET_ROLES",roles:e}),*fetchRoles(){const e=yield Object(w.apiFetch)({path:"/snow-monkey-editor/v1/roles"});return E.setRoles(e)}},h={*getRoles(){yield E.fetchRoles()}},v=Object(j.createReduxStore)("snow-monkey-editor/roles",{reducer:(e=g,t)=>{switch(t.type){case"SET_ROLES":return{...e,roles:t.roles}}return e},actions:E,selectors:{getRoles:e=>e.roles},controls:w.controls,resolvers:h});Object(j.register)(v),Object(m.addFilter)("blocks.registerBlockType","snow-monkey-editor/hidden-by-role/attributes",e=>O(snowmonkeyeditor.currentUser,"hidden-by-role")&&p(e.name,"hidden-by-role")?(e.attributes={...e.attributes,...k},e):e);const x=Object(d.createHigherOrderComponent)(e=>t=>{const{attributes:n,setAttributes:i,name:s}=t,{smeIsHiddenRoles:d}=n,m=Object(j.useSelect)(e=>{const t={...e(v).getRoles()};return{"sme-guest":{name:Object(u.__)("user is not logged in","snow-monkey-editor")},...t}},[]);if(!O(snowmonkeyeditor.currentUser,"hidden-by-role"))return Object(o.createElement)(e,t);if(!p(s,"hidden-by-role"))return Object(o.createElement)(e,t);if(!Object(c.getBlockType)(s))return Object(o.createElement)(e,t);const y=!d||0<d.length?"sme-extension-panel sme-extension-panel--enabled":"sme-extension-panel";return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(e,t),Object(o.createElement)(a.InspectorControls,null,Object(o.createElement)(l.PanelBody,{title:Object(u.__)("Display setting (By roles)","snow-monkey-editor"),initialOpen:!1,icon:b.a,className:y},Object.keys(m).map(e=>{const t=Object(u.sprintf)(// translators: %1$s: The role name
Object(u.__)("Hide if %1$s","snow-monkey-editor"),m[e].name),n="object"==typeof d&&d.includes(e);return Object(o.createElement)(l.ToggleControl,{key:"sme-hidden-role-"+e,label:t,checked:n,onChange:t=>{const n=((e,t)=>{let n=[...d];return!0===t?n.push(e):n=n.filter(t=>e!==t),Object(r.uniq)(n)})(e,t);i({smeIsHiddenRoles:n})}})}))))},"withSnowMonkeyEditorHiddenByRoleBlockEdit");Object(m.addFilter)("editor.BlockEdit","snow-monkey-editor/hidden-by-role/block-edit",x);var _=n(20),S=n.n(_),B=n(11),C=n(21);Object(m.addFilter)("blocks.registerBlockType","snow-monkey-editor/animation/attributes",e=>O(snowmonkeyeditor.currentUser,"animation")&&p(e.name,"animation")?(e.attributes={...e.attributes,...C},e):e);const A=Object(d.createHigherOrderComponent)(e=>t=>{const{attributes:n,setAttributes:i,name:s}=t,{smeAnimation:d,smeAnimationDelay:m,smeAnimationDuration:y,className:f}=n;if(!O(snowmonkeyeditor.currentUser,"animation"))return Object(o.createElement)(e,t);if(!p(s,"animation"))return Object(o.createElement)(e,t);const j=Object(c.getBlockType)(s);if(!j)return Object(o.createElement)(e,t);if(!Object(c.hasBlockSupport)(j,"customClassName",!0))return Object(o.createElement)(e,t);const k=[{label:"",value:void 0},{label:Object(u.__)("bounce-in","snow-monkey-editor"),value:"bounce-in"},{label:Object(u.__)("bounce-down","snow-monkey-editor"),value:"bounce-down"},{label:Object(u.__)("fade-in","snow-monkey-editor"),value:"fade-in"},{label:Object(u.__)("fade-in-up","snow-monkey-editor"),value:"fade-in-up"},{label:Object(u.__)("fade-in-down","snow-monkey-editor"),value:"fade-in-down"}],w=d?"sme-extension-panel sme-extension-panel--enabled":"sme-extension-panel";return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(e,t),Object(o.createElement)(a.InspectorControls,null,Object(o.createElement)(l.PanelBody,{title:Object(u.__)("Animation","snow-monkey-editor"),initialOpen:!1,icon:b.a,className:w},Object(o.createElement)(l.SelectControl,{label:Object(u.__)("Animation","snow-monkey-editor"),value:d||void 0,options:k,onChange:e=>{i({smeAnimation:e}),e||i({smeAnimationDelay:void 0});const t=B.a.filter(t=>"sme-animation-"+e!==t);i({className:Object(r.difference)(S()(f,{["sme-animation-"+e]:!!e}).split(" "),t).join(" ")})}}),Object(o.createElement)(l.RangeControl,{label:Object(u.__)("Delay","snow-monkey-editor"),value:m||0,onChange:e=>{i({smeAnimationDelay:e})},allowReset:!0,min:0,max:5,step:.1}),Object(o.createElement)(l.RangeControl,{label:Object(u.__)("Duration","snow-monkey-editor"),value:y||void 0,onChange:e=>{i({smeAnimationDuration:e})},allowReset:!0,min:0,max:5,step:.1}))))},"withSnowMonkeyEditorAnimationBlockEdit");Object(m.addFilter)("editor.BlockEdit","snow-monkey-editor/animation/block-edit",A);var T=n(22),R=n(23),D=function({currentDate:e,onChange:t,onReset:n}){const r=Object(R.__experimentalGetSettings)(),i=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return Object(o.createElement)("div",{className:"sme-date-time-picker"},Object(o.createElement)(l.DateTimePicker,{currentDate:e,onChange:t,is12Hour:i}),Object(o.createElement)("div",{className:"sme-date-time-picker__action"},Object(o.createElement)("div",null,e),Object(o.createElement)(l.Button,{isSmall:!0,onClick:n},Object(u.__)("Clear","snow-monkey-editor"))))};Object(m.addFilter)("blocks.registerBlockType","snow-monkey-editor/date-time/attributes",e=>O(snowmonkeyeditor.currentUser,"date-time")&&p(e.name,"date-time")?(e.attributes={...e.attributes,...T},e):e);const H=Object(d.createHigherOrderComponent)(e=>t=>{const{attributes:n,setAttributes:r,name:i}=t,{smeStartDateTime:s,smeEndDateTime:d}=n;if(!O(snowmonkeyeditor.currentUser,"date-time"))return Object(o.createElement)(e,t);if(!p(i,"date-time"))return Object(o.createElement)(e,t);if(!Object(c.getBlockType)(i))return Object(o.createElement)(e,t);const m=s?"sme-extension-panel sme-extension-panel--enabled":"sme-extension-panel",y=d?"sme-extension-panel sme-extension-panel--enabled":"sme-extension-panel";return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(e,t),Object(o.createElement)(a.InspectorControls,null,Object(o.createElement)(l.PanelBody,{title:Object(u.__)("Publish setting","snow-monkey-editor"),initialOpen:!1,icon:b.a,className:m},Object(o.createElement)(D,{currentDate:s,onChange:e=>r({smeStartDateTime:e}),onReset:()=>r({smeStartDateTime:void 0})})),Object(o.createElement)(l.PanelBody,{title:Object(u.__)("Unpublish setting","snow-monkey-editor"),initialOpen:!1,icon:b.a,className:y},Object(o.createElement)(D,{currentDate:d,onChange:e=>r({smeEndDateTime:e}),onReset:()=>r({smeEndDateTime:void 0})}))))},"withSnowMonkeyEditorDateTimeBlockEdit");Object(m.addFilter)("editor.BlockEdit","snow-monkey-editor/date-time/block-edit",H);var I=n(24);Object(m.addFilter)("blocks.registerBlockType","snow-monkey-editor/editing-lock/attributes",e=>O(snowmonkeyeditor.currentUser,"editing-lock")&&p(e.name,"editing-lock")?(e.attributes={...e.attributes,...I},e):e);const N=Object(d.createHigherOrderComponent)(e=>t=>{const{attributes:n,setAttributes:i,name:s,clientId:d}=t,{smeIsEditingLockRoles:m}=n,y=Object(j.useSelect)(e=>{const t={...e(v).getRoles()};return delete t.administrator,Object.keys(t).forEach(e=>{!0!==t[e].capabilities.edit_posts&&delete t[e]}),t},[]);if(!O(snowmonkeyeditor.currentUser,"editing-lock"))return Object(o.createElement)(e,t);if(!p(s,"editing-lock"))return Object(o.createElement)(e,t);if(!Object(c.getBlockType)(s))return Object(o.createElement)(e,t);const f=0<Object(r.intersection)(m,snowmonkeyeditor.currentUser.roles).length,k=document.getElementById("block-"+d);if(k)if(f){const e=k.getAttribute("tabindex");e&&(k.setAttribute("data-sme-tabindex",e),k.setAttribute("tabindex",-1))}else{const e=k.getAttribute("tabindex"),t=k.getAttribute("data-sme-tabindex");e&&t&&(k.setAttribute("tabindex",t),k.removeAttribute("data-sme-tabindex"))}const w=Object(r.includes)(snowmonkeyeditor.currentUser.roles,"administrator"),g=!m||0<m.length?"sme-extension-panel sme-extension-panel--enabled":"sme-extension-panel";return Object(o.createElement)(o.Fragment,null,f?Object(o.createElement)(l.Disabled,null,Object(o.createElement)(e,t)):Object(o.createElement)(e,t),w&&Object(o.createElement)(a.InspectorControls,null,Object(o.createElement)(l.PanelBody,{title:Object(u.__)("Editing lock (By roles)","snow-monkey-editor"),initialOpen:!1,icon:b.a,className:g},Object.keys(y).map(e=>{const t=Object(u.sprintf)(// translators: %1$s: The role name
Object(u.__)("Edit lock if %1$s","snow-monkey-editor"),y[e].name),n="object"==typeof m&&m.includes(e);return Object(o.createElement)(l.ToggleControl,{key:"sme-editing-lock-role-"+e,label:t,checked:n,onChange:t=>{const n=((e,t)=>{let n=[...m];return!0===t?n.push(e):n=n.filter(t=>e!==t),Object(r.uniq)(n)})(e,t);i({smeIsEditingLockRoles:n})}})}))))},"withSnowMonkeyEditorEditingLockByRoleBlockEdit");Object(m.addFilter)("editor.BlockEdit","snow-monkey-editor/editing-lock/block-edit",N)}]);