self[`appKey`] = `e40a0039414550e9242ba50921a6c797`;
self[`hostUrl`] = `https://cdn.gravitec.net/sw`;
self.importScripts(`${self[`hostUrl`]}/worker.js`);
// uncomment and set path to your service worker
// if you have one with precaching functionality (has oninstall, onactivate event listeners)
// self.importScripts('path-to-your-sw-with-precaching')
