import{w as u}from"./index.6a5fbb9f.js";var b;const w=((b=globalThis.__sveltekit_xepkmx)==null?void 0:b.base)??"";var h;(h=globalThis.__sveltekit_xepkmx)==null||h.assets;const R="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",c={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const o=e.getElementsByTagName("base");t=o.length?o[0].href:e.URL}return t}function T(){return{x:pageXOffset,y:pageYOffset}}const d=new WeakSet,p={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function f(e,t){const o=e.getAttribute(`data-sveltekit-${t}`);return x(e,t,o),o}function x(e,t,o){o!==null&&!d.has(e)&&!p[t].includes(o)&&(console.error(`Unexpected value for ${t} — should be one of ${p[t].map(s=>JSON.stringify(s)).join(", ")}`,e),d.add(e))}const _={...c,"":c.hover};function k(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function U(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=k(e)}}function N(e,t){let o;try{o=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,l=!o||!!s||S(o,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(o==null?void 0:o.origin)===location.origin&&e.hasAttribute("download");return{url:o,external:l,target:s,download:r}}function L(e){let t=null,o=null,s=null,l=null,r=null,a=null,n=e;for(;n&&n!==document.documentElement;)s===null&&(s=f(n,"preload-code")),l===null&&(l=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),o===null&&(o=f(n,"noscroll")),r===null&&(r=f(n,"reload")),a===null&&(a=f(n,"replacestate")),n=k(n);function i(v){switch(v){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[s??"off"],preload_data:_[l??"off"],keep_focus:i(t),noscroll:i(o),reload:i(r),replace_state:i(a)}}function g(e){const t=u(e);let o=!0;function s(){o=!0,t.update(a=>a)}function l(a){o=!1,t.set(a)}function r(a){let n;return t.subscribe(i=>{(n===void 0||o&&i!==n)&&a(n=i)})}return{notify:s,set:l,subscribe:r}}function E(){const{set:e,subscribe:t}=u(!1);return{subscribe:t,check:async()=>!1}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const V={url:g({}),page:g({}),navigating:u(null),updated:E()};export{I,c as P,y as S,R as a,N as b,L as c,V as d,w as e,U as f,O as g,P as h,S as i,T as s};
