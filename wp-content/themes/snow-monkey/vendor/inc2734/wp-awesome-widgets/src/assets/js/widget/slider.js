!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=window.jQuery},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(0);var r=function(t,e){0<t.length&&Array.prototype.slice.call(t,0).forEach((function(t,n){e(t,n)}))},i=function(){return-1!==navigator.userAgent.indexOf("Trident")},o=function(t){r(t,(function(t){t.style.minHeight="",i()&&(t.style.height="")}));var e=function(){var e=0;return r(t,(function(t){var n=t.offsetHeight,r=.5625*t.offsetWidth;(e<n||e<r)&&(e=r<n?n:r)})),e}();r(t,(function(t){i()&&(t.style.height="".concat(e,"px")),t.style.minHeight="".concat(e,"px")}))}},,,function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(1);i()(".wpaw-slider__canvas").each((function(t,e){!function(t){var e=document.documentElement.clientWidth,n=!1;i()(t).on("init",(function(e,n){setTimeout((function(){var e=t.querySelectorAll(".wpaw-slider__item");Object(o.a)(e)}),0)})),i()(t).on("setPosition",(function(r,i){if(i.windowWidth!==e||i.slideWidth!==n){var a=t.querySelectorAll(".wpaw-slider__item");Object(o.a)(a),e=i.windowWidth,n=i.slideWidth}}));var r=i()(t).closest(".wpaw-slider");i()(t).slick({speed:parseInt(r.attr("data-wpaw-slider-duration")),autoplaySpeed:parseInt(r.attr("data-wpaw-slider-interval")),slidesToShow:parseInt(r.attr("data-wpaw-slider-slides-to-show")),slidesToScroll:parseInt(r.attr("data-wpaw-slider-slides-to-scroll")),autoplay:!0,fade:"true"===r.attr("data-wpaw-slider-fade"),dots:!0,infinite:!0,arrows:!1,rows:0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]})}(e)}))}]);