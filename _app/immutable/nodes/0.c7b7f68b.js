import{s as d,e as _,u as p,g as m,f as h}from"../chunks/scheduler.612d632e.js";import{S as v,i as $,d as f,v as g,s as y,z as S,g as r,c as w,a as b,f as L,t as k}from"../chunks/index.e8c10baa.js";function u(a){let o,n;const i=a[1].default,e=_(i,a,a[0],null),l={c:function(){o=y(),e&&e.c(),this.h()},l:function(t){S("svelte-1tcpd42",document.head).forEach(r),o=w(t),e&&e.l(t),this.h()},h:function(){document.title="Stardust Stakes"},m:function(t,c){b(t,o,c),e&&e.m(t,c),n=!0},p:function(t,[c]){e&&e.p&&(!n||c&1)&&p(e,i,t,t[0],n?h(i,t[0],c,null):m(t[0]),null)},i:function(t){n||(L(e,t),n=!0)},o:function(t){k(e,t),n=!1},d:function(t){t&&r(o),e&&e.d(t)}};return f("SvelteRegisterBlock",{block:l,id:u.name,type:"component",source:"",ctx:a}),l}function C(a,o,n){let{$$slots:i={},$$scope:e}=o;g("Layout",i,["default"]);const l=[];return Object.keys(o).forEach(s=>{!~l.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Layout> was created with unknown prop '${s}'`)}),a.$$set=s=>{"$$scope"in s&&n(0,e=s.$$scope)},[e,i]}class R extends v{constructor(o){super(o),$(this,o,C,u,d,{}),f("SvelteRegisterComponent",{component:this,tagName:"Layout",options:o,id:u.name})}}export{R as component};