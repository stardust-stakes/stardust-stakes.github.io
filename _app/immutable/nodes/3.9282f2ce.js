import{H as Oe}from"../chunks/control.f5b05b5f.js";import{c as qe}from"../chunks/characters.e172332d.js";import{s as ze,v as Me,d as b,n as he,l as Je,c as Ke,k as Pe,r as We,j as Se}from"../chunks/scheduler.612d632e.js";import{S as Xe,i as Ye,d as q,v as Ze,j as w,s as S,k as x,l as j,c as V,D as ve,g as I,m,a as X,A as r,t as ne,b as Ne,f as le,h as Ve,B as je,r as Qe,o as L,u as Be,p as A,w as $e,x as Ge,q as O,y as He,E as Re,F as Te,e as Ue,C as et}from"../chunks/index.e8c10baa.js";import{w as tt}from"../chunks/index.6a5fbb9f.js";function st(t,e){if(isNaN(t)||t<400||t>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${t} is invalid`);return new Oe(t,e)}new TextEncoder;const nt=!0,lt=({params:t})=>{const e=qe.find(s=>s.path===t.slug);if(e)return e;throw st(404,"Not found")},dt=Object.freeze(Object.defineProperty({__proto__:null,load:lt,prerender:nt},Symbol.toStringTag,{value:"Module"}));var de={};function ot(t){return t==="local"?localStorage:sessionStorage}function De(t,e,s){const n=(s==null?void 0:s.serializer)??JSON,u=(s==null?void 0:s.storage)??"local",c=typeof window<"u"&&typeof document<"u",a=c?ot(u):null;function h(o,f){a==null||a.setItem(o,n.stringify(f))}if(!de[t]){const o=tt(e,v=>{const g=a==null?void 0:a.getItem(t);if(g?v(n.parse(g)):h(t,e),c){const _=p=>{p.key===t&&v(p.newValue?n.parse(p.newValue):null)};return window.addEventListener("storage",_),()=>window.removeEventListener("storage",_)}}),{subscribe:f,set:l}=o;de[t]={set(v){h(t,v),l(v)},update(v){return o.update(g=>{const _=v(g);return h(t,_),_})},subscribe:f}}return de[t]}const y="src/routes/player/[slug]/+page.svelte";function Fe(t,e,s){const n=t.slice();return n[8]=e[s],n}function Le(t){let e,s,n=t[0].actor+"",u,c,a,h,o,f,l,v,g,_=t[0].character+"",p,C,i,B,k,U=t[0].subtitle+"",H,Y,oe,z,ae,F,M=t[0].blurb+"",Z,re,$,ie,D,ge="Costume Suggestion",ce,N,J=t[0].costume+"",ee,ue,te,K,fe,W,G;var Q=t[0].icon;function be(R,E){return{props:{class:"w-24 h-24 mx-3 "+R[0].tailwindColor},$$inline:!0}}Q&&(l=Ve(Q,be(t)));let P=t[0].images&&me(t);const we={c:function(){e=w("article"),s=w("h1"),u=L(n),c=L(" is..."),a=S(),h=w("div"),o=w("div"),f=w("div"),l&&Be(l.$$.fragment),v=S(),g=w("h1"),p=L(_),C=S(),i=w("hr"),B=S(),k=w("h2"),H=L(U),oe=S(),z=w("hr"),ae=S(),F=w("p"),Z=L(M),re=S(),$=w("hr"),ie=S(),D=w("h2"),D.textContent=ge,ce=S(),N=w("p"),ee=L(J),ue=S(),P&&P.c(),te=S(),K=w("hr"),fe=S(),W=w("hr"),this.h()},l:function(E){e=x(E,"ARTICLE",{class:!0});var d=j(e);s=x(d,"H1",{class:!0});var T=j(s);u=A(T,n),c=A(T," is..."),T.forEach(I),a=V(d),h=x(d,"DIV",{class:!0});var xe=j(h);o=x(xe,"DIV",{class:!0});var se=j(o);f=x(se,"DIV",{});var ye=j(f);l&&$e(l.$$.fragment,ye),ye.forEach(I),v=V(se),g=x(se,"H1",{class:!0});var Ee=j(g);p=A(Ee,_),Ee.forEach(I),se.forEach(I),xe.forEach(I),C=V(d),i=x(d,"HR",{class:!0}),B=V(d),k=x(d,"H2",{class:!0});var ke=j(k);H=A(ke,U),ke.forEach(I),oe=V(d),z=x(d,"HR",{class:!0}),ae=V(d),F=x(d,"P",{class:!0});var Ie=j(F);Z=A(Ie,M),Ie.forEach(I),re=V(d),$=x(d,"HR",{}),ie=V(d),D=x(d,"H2",{class:!0,"data-svelte-h":!0}),ve(D)!=="svelte-1hfnyxc"&&(D.textContent=ge),ce=V(d),N=x(d,"P",{class:!0});var Ce=j(N);ee=A(Ce,J),Ce.forEach(I),ue=V(d),P&&P.l(d),te=V(d),K=x(d,"HR",{class:!0}),fe=V(d),W=x(d,"HR",{class:!0}),d.forEach(I),this.h()},h:function(){m(s,"class","text-xl text-center s-1Uo7VeIxBFQG"),b(s,y,47,8,1505),b(f,y,50,12,1680),m(g,"class","text-5xl !mb-0 min-content w-min s-1Uo7VeIxBFQG"),b(g,y,56,12,1862),m(o,"class","flex flex-row w-min mr-6"),b(o,y,49,10,1629),m(h,"class","w-full flex flex-row justify-center"),b(h,y,48,8,1569),m(i,"class","mt-6 mb-4"),b(i,y,59,8,1969),m(k,"class",Y=Pe("text-3xl text-center !mt-1 mb-2 "+t[0].tailwindColor)+" s-1Uo7VeIxBFQG"),b(k,y,60,8,2002),m(z,"class","mt-6 mb-6"),b(z,y,63,8,2119),m(F,"class","text-2xl s-1Uo7VeIxBFQG"),b(F,y,64,8,2152),b($,y,65,8,2197),m(D,"class","text-3xl font-bold text-center uppercase"),b(D,y,66,8,2211),m(N,"class","text-2xl s-1Uo7VeIxBFQG"),b(N,y,67,8,2298),m(K,"class","mb-4"),b(K,y,73,8,2503),m(W,"class",""),b(W,y,74,8,2531),m(e,"class","prose prose-slate dark:prose-invert"),b(e,y,44,4,1418)},m:function(E,d){X(E,e,d),r(e,s),r(s,u),r(s,c),r(e,a),r(e,h),r(h,o),r(o,f),l&&Ge(l,f,null),r(o,v),r(o,g),r(g,p),r(e,C),r(e,i),r(e,B),r(e,k),r(k,H),r(e,oe),r(e,z),r(e,ae),r(e,F),r(F,Z),r(e,re),r(e,$),r(e,ie),r(e,D),r(e,ce),r(e,N),r(N,ee),r(e,ue),P&&P.m(e,null),r(e,te),r(e,K),r(e,fe),r(e,W),G=!0},p:function(E,d){if((!G||d&1)&&n!==(n=E[0].actor+"")&&O(u,n),d&1&&Q!==(Q=E[0].icon)){if(l){Qe();const T=l;ne(T.$$.fragment,1,0,()=>{He(T,1)}),Ne()}Q?(l=Ve(Q,be(E)),Be(l.$$.fragment),le(l.$$.fragment,1),Ge(l,f,null)):l=null}else if(Q){const T={};d&1&&(T.class="w-24 h-24 mx-3 "+E[0].tailwindColor),l.$set(T)}(!G||d&1)&&_!==(_=E[0].character+"")&&O(p,_),(!G||d&1)&&U!==(U=E[0].subtitle+"")&&O(H,U),(!G||d&1&&Y!==(Y=Pe("text-3xl text-center !mt-1 mb-2 "+E[0].tailwindColor)+" s-1Uo7VeIxBFQG"))&&m(k,"class",Y),(!G||d&1)&&M!==(M=E[0].blurb+"")&&O(Z,M),(!G||d&1)&&J!==(J=E[0].costume+"")&&O(ee,J),E[0].images?P?P.p(E,d):(P=me(E),P.c(),P.m(e,te)):P&&(P.d(1),P=null)},i:function(E){G||(l&&le(l.$$.fragment,E),G=!0)},o:function(E){l&&ne(l.$$.fragment,E),G=!1},d:function(E){E&&I(e),l&&He(l),P&&P.d()}};return q("SvelteRegisterBlock",{block:we,id:Le.name,type:"else",source:"(41:6) {:else}",ctx:t}),we}function Ae(t){let e,s,n="Riddle",u,c,a=t[0].riddle+"",h,o,f,l,v,g,_,p;const C={c:function(){e=w("div"),s=w("h1"),s.textContent=n,u=S(),c=w("p"),h=L(a),o=S(),f=w("div"),l=w("input"),v=S(),g=w("input"),this.h()},l:function(B){e=x(B,"DIV",{class:!0});var k=j(e);s=x(k,"H1",{class:!0,"data-svelte-h":!0}),ve(s)!=="svelte-1wr8478"&&(s.textContent=n),u=V(k),c=x(k,"P",{class:!0});var U=j(c);h=A(U,a),U.forEach(I),o=V(k),f=x(k,"DIV",{class:!0});var H=j(f);l=x(H,"INPUT",{type:!0,class:!0,placeholder:!0}),v=V(H),g=x(H,"INPUT",{type:!0,class:!0}),H.forEach(I),k.forEach(I),this.h()},h:function(){m(s,"class","text-center text-4xl uppercase mb-6 s-1Uo7VeIxBFQG"),b(s,y,14,10,407),m(c,"class","text-2xl mb-8 max-w-lg s-1Uo7VeIxBFQG"),b(c,y,15,10,477),m(l,"type","text"),m(l,"class","input join-item"),m(l,"placeholder","Answer here..."),b(l,y,19,12,617),m(g,"type","submit"),m(g,"class","btn join-item"),b(g,y,25,12,794),m(f,"class","join"),b(f,y,18,10,563),m(e,"class","w-full h-full flex flex-col justify-center items-center py-12"),b(e,y,13,8,321)},m:function(B,k){X(B,e,k),r(e,s),r(e,u),r(e,c),r(c,h),r(e,o),r(e,f),r(f,l),Re(l,t[2]),r(f,v),r(f,g),t[7](f),_||(p=[Te(l,"input",t[5]),Te(g,"click",t[6],!1,!1,!1,!1)],_=!0)},p:function(B,k){k&1&&a!==(a=B[0].riddle+"")&&O(h,a),k&4&&l.value!==B[2]&&Re(l,B[2])},i:he,o:he,d:function(B){B&&I(e),t[7](null),_=!1,We(p)}};return q("SvelteRegisterBlock",{block:C,id:Ae.name,type:"if",source:"(10:4) {#if !$solved}",ctx:t}),C}function me(t){let e,s=je(t[0].images),n=[];for(let c=0;c<s.length;c+=1)n[c]=_e(Fe(t,s,c));const u={c:function(){for(let a=0;a<n.length;a+=1)n[a].c();e=Ue()},l:function(a){for(let h=0;h<n.length;h+=1)n[h].l(a);e=Ue()},m:function(a,h){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(a,h);X(a,e,h)},p:function(a,h){if(h&1){s=je(a[0].images);let o;for(o=0;o<s.length;o+=1){const f=Fe(a,s,o);n[o]?n[o].p(f,h):(n[o]=_e(f),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=s.length}},d:function(a){a&&I(e),et(n,a)}};return q("SvelteRegisterBlock",{block:u,id:me.name,type:"if",source:"(66:8) {#if data.images}",ctx:t}),u}function _e(t){let e,s;const n={c:function(){e=w("img"),this.h()},l:function(c){e=x(c,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h:function(){Se(e.src,s=t[8])||m(e,"src",s),m(e,"class","w-full"),m(e,"alt","DALL-E example"),b(e,y,70,10,2410)},m:function(c,a){X(c,e,a)},p:function(c,a){a&1&&!Se(e.src,s=c[8])&&m(e,"src",s)},d:function(c){c&&I(e)}};return q("SvelteRegisterBlock",{block:n,id:_e.name,type:"each",source:"(67:8) {#each data.images as image}",ctx:t}),n}function pe(t){let e,s,n,u,c,a,h=" ",o;const f=[Ae,Le],l=[];function v(_,p){return _[4]?1:0}n=v(t),u=l[n]=f[n](t);const g={c:function(){e=w("div"),s=w("div"),u.c(),c=S(),a=w("span"),a.textContent=h,this.h()},l:function(p){e=x(p,"DIV",{class:!0});var C=j(e);s=x(C,"DIV",{class:!0});var i=j(s);u.l(i),c=V(i),a=x(i,"SPAN",{class:!0,"data-svelte-h":!0}),ve(a)!=="svelte-1inqz6h"&&(a.textContent=h),i.forEach(I),C.forEach(I),this.h()},h:function(){m(a,"class","shake s-1Uo7VeIxBFQG"),b(a,y,78,4,2636),m(s,"class","mx-30 m-8"),b(s,y,11,2,270),m(e,"class","w-full h-full flex flex-col items-center py-12 pb-32"),b(e,y,10,0,201)},m:function(p,C){X(p,e,C),r(e,s),l[n].m(s,null),r(s,c),r(s,a),o=!0},p:function(p,[C]){let i=n;n=v(p),n===i?l[n].p(p,C):(Qe(),ne(l[i],1,1,()=>{l[i]=null}),Ne(),u=l[n],u?u.p(p,C):(u=l[n]=f[n](p),u.c()),le(u,1),u.m(s,c))},i:function(p){o||(le(u),o=!0)},o:function(p){ne(u),o=!1},d:function(p){p&&I(e),l[n].d()}};return q("SvelteRegisterBlock",{block:g,id:pe.name,type:"component",source:"",ctx:t}),g}function at(t,e,s){let n,u=he,c=()=>(u(),u=Je(l,i=>s(4,n=i)),l);t.$$.on_destroy.push(()=>u());let{$$slots:a={},$$scope:h}=e;Ze("Page",a,[]);let{data:o}=e,f="";const l=De("solved-"+o.actor,!1);Me(l,"solved"),c();let v;t.$$.on_mount.push(function(){o===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const g=["data"];Object.keys(e).forEach(i=>{!~g.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)});function _(){f=this.value,s(2,f)}const p=()=>{f.toLowerCase().includes(o.answer)?(l.set(!0),document.body.scrollTop=document.documentElement.scrollTop=0):(s(2,f=""),v.classList.add("shake"),setTimeout(()=>{v.classList.remove("shake")},400))};function C(i){Ke[i?"unshift":"push"](()=>{v=i,s(3,v)})}return t.$$set=i=>{"data"in i&&s(0,o=i.data)},t.$capture_state=()=>({persisted:De,data:o,response:f,solved:l,inputGroup:v,$solved:n}),t.$inject_state=i=>{"data"in i&&s(0,o=i.data),"response"in i&&s(2,f=i.response),"inputGroup"in i&&s(3,v=i.inputGroup)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,l,f,v,n,_,p,C]}class ht extends Xe{constructor(e){super(e),Ye(this,e,at,pe,ze,{data:0,solved:1}),q("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:pe.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get solved(){return this.$$.ctx[1]}set solved(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ht as component,dt as universal};