import{N as d,s as w}from"./index.2909a02b.js";const u=[];function p(e,t=d){let n;const s=new Set;function r(o){if(w(e,o)&&(e=o,n)){const f=!u.length;for(const i of s)i[1](),u.push(i,e);if(f){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function a(o){r(o(e))}function l(o,f=d){const i=[o,f];return s.add(i),s.size===1&&(n=t(r)||d),o(e),()=>{s.delete(i),s.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:l}}var v;const A=((v=globalThis.__sveltekit_7arnv5)==null?void 0:v.base)??"";var S;(S=globalThis.__sveltekit_7arnv5)==null||S.assets;const N="sveltekit:snapshot",O="sveltekit:scroll",T="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function U(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}const b=new WeakSet,g={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","off"],noscroll:["","off"],reload:["","off"],replacestate:["","off"]};function c(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return R(e,t,n),n}function R(e,t,n){n!==null&&!b.has(e)&&!g[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${g[t].map(s=>JSON.stringify(s)).join(", ")}`,e),b.add(e))}const h={..._,"":_.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function P(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function V(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||I(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),a=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:s,download:a}}function Y(e){let t=null,n=null,s=null,r=null,a=null,l=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=c(o,"preload-code")),r===null&&(r=c(o,"preload-data")),t===null&&(t=c(o,"keepfocus")),n===null&&(n=c(o,"noscroll")),a===null&&(a=c(o,"reload")),l===null&&(l=c(o,"replacestate")),o=E(o);return{preload_code:h[s??"off"],preload_data:h[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:a==="off"?!1:a===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function k(e){const t=p(e);let n=!0;function s(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function a(l){let o;return t.subscribe(f=>{(o===void 0||n&&f!==o)&&l(o=f)})}return{notify:s,set:r,subscribe:a}}function y(){const{set:e,subscribe:t}=p(!1);async function n(){return!1}return{subscribe:t,check:n}}function I(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function q(e){e.client}const K={url:k({}),page:k({}),navigating:p(null),updated:y()};export{T as I,_ as P,O as S,N as a,V as b,Y as c,L as d,A as e,P as f,U as g,q as h,I as i,K as s};
