var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,d=Math.max,s=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var r,o,i,a,f,u,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-c>=i}function O(){var e=v();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return m?s(n,i-(e-c)):n}(e))}function T(e){return f=void 0,b&&r?y(e):(r=o=void 0,a)}function h(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(m)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(m="maxWait"in n)?d(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:T(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),j={};b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),e.currentTarget.reset(),console.log(j)})),b.addEventListener("input",t((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),localStorage.getItem("feedback-form-state")&&("undefined"===y.value&&(y.value=""),y.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,"undefined"===S.value&&(S.value=""),S.value=JSON.parse(localStorage.getItem("feedback-form-state")).message);
//# sourceMappingURL=03-feedback.33134eb2.js.map
