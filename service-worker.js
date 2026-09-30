const CACHE = "tgv-max-marion-v3";
const STATIC = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./fond-violon-portrait.jpg","./fond-violon-paysage.jpg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if(u.hostname === "ressources.data.sncf.com") return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});