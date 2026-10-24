/* NekoQuest 5.3.0 — self-contained offline shell; storage is never cleared. */
const PREFIX='nekoquest-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v5.3.0';
const ASSETS=['./','./index.html','./manifest.json','./cat-192.png','./cat-512.png', './art-hero.webp', './art-tasks.webp', './art-workouts.webp', './art-food.webp', './art-finance.webp', './art-breathe.webp', './art-hydration.webp'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})));
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
  if(event.request.mode==='navigate'){
   try{
    const response=await fetch(event.request);
    if(!response.ok)return (await cache.match('./index.html'))||response;
    await cache.put('./index.html',response.clone());return response;
   }catch{return (await cache.match('./index.html'))||Response.error()}
  }
  const cached=await cache.match(event.request);if(cached)return cached;
  try{return await fetch(event.request)}catch{return Response.error()}
 })());
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();event.waitUntil((async()=>{
  const page=['focus','tasks','workouts'].includes(event.notification.data?.page)?event.notification.data.page:'tasks';
  const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  const client=clients.find(c=>c.url.startsWith(self.registration.scope));
  if(client){await client.focus();client.postMessage({type:'nekoquest-notification',page});return}
  await self.clients.openWindow('./?notice='+page);
 })());
});
