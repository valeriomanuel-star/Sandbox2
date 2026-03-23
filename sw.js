const CACHE_NAME = 'sandbox-v3'; // Incremented to v3
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
];

// 1. Install: Save files to the phone's memory
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Activate: Clean up old versions (v2, v1, etc.)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    })
  );
});

// 3. Fetch: Handle regular requests AND "Share" snapshots
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // If this is a share request, redirect it to index.html with the data
  if (event.request.method === 'POST' && url.pathname.includes('index.html')) {
    event.respondWith(Response.redirect('./index.html', 303));
    return;
  }

  // Standard cache-first logic for regular files
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
