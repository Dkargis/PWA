if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let t={};const f=e=>i(e,d),l={module:{uri:d},exports:t,require:f};s[d]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-d1517f8a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./src-sw.js",revision:"7e5156e947d8b46f3cacf666d01c8050"},{url:"index.html",revision:"8ddf22353ed25c4b6bf2d907e454dc98"},{url:"install.bundle.js",revision:"8c518f6364c4be6fd8e1d7cdd8a0a7c4"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"9a29ea8e24fa21b45dd232f62af7885e"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.css",revision:"55000d38b02080fb4cbf975ce66bb3a4"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:2})]}),"GET")}));
