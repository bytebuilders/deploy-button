var DbbButton=function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,o){"use strict";function c(e,t){for(var o in t)e.style[o]=t[o]}function n(e){document.querySelector(e).innerHTML='<button class="ac-bb-modal-button">Deploy with ByteBuilders</button>\n\n  <div class="ac-bb-modal">\n    <div class="ac-bb-modal-background"></div>\n    <div class="ac-bb-modal-content">\n      <div class="ac-bb-box">\n        <iframe class="ac-iframe" src="http://deploy.bb.test:5994/?product=voyager" width="100%" height="500"></iframe>\n      </div>\n    </div>\n    <button class="ac-bb-modal-close">X</button>\n  </div>';var t=document.querySelector(".ac-bb-modal-button"),o=document.querySelector(".ac-bb-modal"),n=document.querySelector(".ac-bb-modal-background"),r=document.querySelector(".ac-bb-modal-content"),i=document.querySelector(".ac-bb-box"),a=document.querySelector(".ac-bb-modal-close");!function(e,t,o){e.addEventListener("click",function(e){e.preventDefault(),c(t,{display:"flex"})}),o.addEventListener("click",function(e){e.preventDefault(),c(t,{display:"none"})}),document.addEventListener("keydown",function(e){e.preventDefault(),27===e.keyCode&&c(t,{display:"none"})})}(t,o,a),function(e,t,o,n,r,i){c(e,{backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"}),c(t,{alignItems:"center",display:"none",flexDirection:"column",justifyContent:"center",overflow:"hidden",position:"fixed",zIndex:"40",width:"100%",height:"100%",top:"0",left:"0"}),c(o,{backgroundColor:"rgba(10,10,10,.86)",bottom:"0",left:"0",position:"absolute",right:"0",top:"0"}),c(n,{margin:"0 auto",maxHeight:"calc(100vh - 80px)",width:"80%",overflow:"auto",position:"relative"}),c(r,{backgroundColor:"#fff",borderRadius:"6px",boxShadow:"0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",color:"#4a4a4a",display:"block"}),c(i,{position:"absolute",right:"40px",top:"40px",backgroundColor:"transparent",borderColor:"transparent",color:"#fff",fontSize:"22px",cursor:"pointer"})}(t,o,n,r,i,a)}o.r(t),o.d(t,"initialize",function(){return n})}]);