if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0b14f57af9584b8c23cbd6e8acf96f23"},{url:"/_next/static/0IP1Ls4IsYstzw4v6hWlz/_buildManifest.js",revision:"9398e4c00894b940f12c9ee80d3484b4"},{url:"/_next/static/0IP1Ls4IsYstzw4v6hWlz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/403-144116b90d1d1f45.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/596-d6067a0692b78b20.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/602-0cb41b29a1c41bdf.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/672-35213b13345d17be.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/759-2258c1c026b741fa.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/accounts/page-78ee3942523cf403.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/dashboard/page-fdb25599acaca9aa.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/layout-7e5f203770f32be6.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/page-35d15e3a64ac868e.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/planner/page-23130da21eff5ea7.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/records/page-5cffd063ba90338b.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/settings/page-cbee674757310428.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/stats/page-274502e0c0128fdd.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/app/tools/page-aa556118b5467281.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/f8e4659f-ee6adda595d5599e.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/fd9d1056-f0c875f97595bc0a.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/main-app-b7e637f1b6e6957e.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/main-e6bd875fbf13e850.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-9f0fdae4786f4bc9.js",revision:"0IP1Ls4IsYstzw4v6hWlz"},{url:"/_next/static/css/e0495f4109762633.css",revision:"e0495f4109762633"},{url:"/_next/static/css/ef46db3751d8e999.css",revision:"ef46db3751d8e999"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.ico",revision:"32e3347de947e96300dd407db86dff83"},{url:"/logo-mini.png",revision:"88c45f7201cea2116dcd3e8f188d091b"},{url:"/logo.png",revision:"c33948b20130d94dc70eb46d573e4fa0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
