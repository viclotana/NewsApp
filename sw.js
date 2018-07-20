//const staticAssets = [
 // '/',
 // './main.css',
 // './app.js',
 // './fallback.json',
 // './Buhari1.jpg'
//];

//const wb = new WorkboxSW();

//workbox.precaching(staticAssets);
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('https://newsapi.org/(.*)'),
  workbox.strategies.networkFirst({
    // Use a custom cache for this route
    cacheName: 'dynamic-cache',
    plugins: [
     
    ]
}));



workbox.precaching.precacheAndRoute([
  './main.css',
  './app.js',
  { url: '/index.html',
    revision: '001' },
]);

workbox.skipWaiting();
workbox.clientsClaim();
