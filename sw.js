// Offline cache voor de eigen bestanden. Externe verzoeken worden niet onderschept.
const CACHE = "kostprijs-v13";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Eerst netwerk (max. 4 s), anders de opgeslagen versie.
  e.respondWith(new Promise(resolve => {
    let done = false;
    const fallback = () => caches.match(e.request).then(r => r || caches.match("./index.html")).then(r => r || fetch(e.request));
    const timer = setTimeout(() => { if (!done) { done = true; resolve(fallback()); } }, 4000);
    fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      if (!done) { done = true; clearTimeout(timer); resolve(r); }
    }).catch(() => { if (!done) { done = true; clearTimeout(timer); resolve(fallback()); } });
  }));
});
