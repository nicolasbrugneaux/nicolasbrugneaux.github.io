const $CACHE_STORE = "nicolasbrugneaux.me/cache";
const $FILES = [
  "/assets/js/main.min.js",
  "/assets/css/main.css",
  "/assets/css/fonts/data-woff.css",
  "/assets/css/fonts/data-woff2.css",
  "/assets/css/fonts/data-ttf.css",
  "/projects/",
  "/projects/index.html",
  "/about/",
  "/about/index.html",
  "/",
  "/index.html"
];

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(request) {
      return request || fetch(event.request);
    })
  );
});

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open($CACHE_STORE).then(function(cache) {
      return cache.addAll($FILES);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key, i) {
          if (key !== $CACHE_STORE) {
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
