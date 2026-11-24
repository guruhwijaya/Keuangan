// Service worker minimal: hanya agar Chrome mengizinkan "Instal aplikasi".
// Tidak menyimpan cache, jadi data selalu diambil langsung dari internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
