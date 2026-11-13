// Kill switch for the service worker the old Create React App site registered
// at this URL. Browsers keep running a registered worker even after its script
// 404s, so returning visitors were stuck on the cached old index.html whose
// assets no longer exist. When a browser checks this script for an update it
// installs this version, which clears the old caches, unregisters itself and
// reloads open tabs onto the live site. The new site registers no worker.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const client of clients) client.navigate(client.url)
    })(),
  )
})
