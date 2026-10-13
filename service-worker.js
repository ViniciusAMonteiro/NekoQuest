const PREFIX='nekoquest-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v4.1.0';
const ASSETS=['./','./index.html','./style.css','./core.js','./app.js','./manifest.json','./cat-192.png','./cat-512.png','./icon.svg','./assets/luna.svg','./assets/mochi.svg','./assets/mikan.svg','./assets/nori.svg','./assets/yuki.svg','./assets/sora.svg','./assets/sleep.svg','./assets/garden.svg','./assets/sunset.svg','./assets/rain.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||!event.request.url.startsWith(self.registration.scope))return;event.respondWith(caches.open(CACHE).then(async cache=>{const cached=await cache.match(event.request);if(cached)return cached;try{return await fetch(event.request)}catch{return event.request.mode==='navigate'?(await cache.match('./index.html')):Response.error()}}))});
