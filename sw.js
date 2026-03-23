const CACHE_NAME = 'sandbox-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png' // Make sure you have an icon with this name!
];

// 1. Install: Save files to the phone's memory
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Fetch: Use the saved files if there's no internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
