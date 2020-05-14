//JavaScript by Captinpast
var cacheName = "v0.0.1"
var resoures = [
  "/",
  "index.html",
  "data/main.js",
  "data/main.css",
  "data/icons/cpa.png",
]

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(resoures);
    })
  )
})

self.addEventListener("fetch", function(event) {
  event.respondWith(caches.match(event.request).then(function(cachedResponse) {
    return cachedResponse || fetch(event.request);
  }))
})
