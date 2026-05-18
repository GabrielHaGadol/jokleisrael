const CACHE_NAME = 'jokleisrael-v1';

// Al instalar, cachea todo
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Intercepta requests y sirve desde cache si está offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cached => {
        const networked = fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => cached);
        return cached || networked;
      });
    })
  );
});
