/* NekoQuest 5.9.0 — self-contained offline shell; storage is never cleared. */
const PREFIX='nekoquest-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v5.9.0';
const ASSETS=['./','./index.html','./manifest.json','./cat-192.png','./cat-512.png', './art-hero.webp', './art-tasks.webp', './art-workouts.webp', './art-food.webp', './art-finance.webp', './art-breathe.webp', './art-hydration.webp', './neko-icon.svg', './pixel-focus.svg', './pixel-journal.svg', './pixel-insights.svg', './pixel-history.svg', './pixel-cats.svg'];
const OPTIONAL_IMAGES=['assets/areas/tasks.svg','assets/areas/workouts.svg','assets/areas/food.svg','assets/areas/finance.svg','assets/areas/breathe.svg','assets/areas/hydration.svg','assets/areas/focus.svg','assets/areas/journal.svg','assets/areas/insights.svg','assets/areas/history.svg','assets/areas/cats.svg','assets/banner-inicio.svg','assets/progresso.svg','assets/neko-marca.svg','assets/companheiros/luna.svg','assets/companheiros/mochi.svg','assets/companheiros/mikan.svg','assets/companheiros/nori.svg','assets/companheiros/yuki.svg','assets/companheiros/sora.svg','art-breathe.png','art-finance.png','art-focus.png','art-food.png','art-hydration.png','art-journal.png','art-tasks.png','art-workouts.png','banner-home.png','banner-profile.png','card-motivation.png','cat-192.png','cat-512.png','empty-state.png','gato-animado.png','gato-bebendo.png','gato-comemorando.png','gato-comendo.png','gato-determinado.png','gato-dormindo.png','gato-escrevendo-1.png','gato-escrevendo-2.png','gato-estudando.png','gato-feliz.png','gato-normal.png','gato-treinando.png','gato-triste.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(['./','./index.html','./manifest.json'].map(url=>new Request(url,{cache:'reload'}))); await Promise.allSettled(OPTIONAL_IMAGES.map(url=>cache.add(new Request('./'+url,{cache:'reload'}))));
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
