if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let l={};const o=e=>i(e,t),f={module:{uri:t},exports:l,require:o};n[t]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-d1517f8a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"4354d00cbe1037da197dc96608f8e25f"},{url:"install.bundle.js",revision:"99cf1aa284710618431ce88a989163f9"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"473d92e37f88d83e6941897c17954bca"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.css",revision:"55000d38b02080fb4cbf975ce66bb3a4"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:2})]}),"GET")}));
