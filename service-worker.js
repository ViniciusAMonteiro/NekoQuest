// 4.1.1 — the complete app, including artwork, lives in index.html.
const PREFIX='nekoquest-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v4.1.1-images';
const CORE=['./','./index.html'];
const OPTIONAL=['./manifest.json','./cat-192.png','./cat-512.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(CORE);
 await Promise.allSettled(OPTIONAL.map(url=>cache.add(url)));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||!event.request.url.startsWith(self.registration.scope))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  // Navigation gets current HTML online, with a complete offline fallback.
  if(event.request.mode==='navigate'){
   try{const response=await fetch(event.request);if(response.ok)await cache.put('./index.html',response.clone());return response}
   catch{return (await cache.match('./index.html'))||Response.error()}
  }
  const cached=await cache.match(event.request);
  if(cached)return cached;
  try{return await fetch(event.request)}catch{return Response.error()}
 })());
});
