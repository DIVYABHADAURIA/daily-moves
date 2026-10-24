// Offline support: cache the app shell, cache fonts the first time they load.
const CACHE="yoga-timer-v2";
const SHELL=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{
    const u=new URL(e.request.url);
    if(res.ok&&(u.origin===location.origin||u.hostname.endsWith("gstatic.com")||u.hostname.endsWith("googleapis.com"))){
      const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));
    }
    return res;
  }).catch(()=>caches.match("index.html"))));
});
