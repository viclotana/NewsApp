//cache all ststic assets
const staticAssets = [
  '/',
  './main.css',
  './app.js'
];

self.addEventListener('install', async e => {
    //console.log(`install`);
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
    //console.log(`fetch`);
    const req = e.request;
    e.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}