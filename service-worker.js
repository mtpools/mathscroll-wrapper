self.addEventListener('install', event => {
  self.skipWaiting(); // Activate immediately
});

self.addEventListener('fetch', event => {
  // Just let the browser handle all requests
});
