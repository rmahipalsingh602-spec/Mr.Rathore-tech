/**
 * scripts/ping_search_engines.js
 * Automatically notifies Google, Bing, Brave Search and IndexNow to index https://mrrathore-tech.vercel.app/
 */

const https = require('https');

const SITEMAP_URL = encodeURIComponent('https://mrrathore-tech.vercel.app/sitemap.xml');
const TARGET_URL = 'https://mrrathore-tech.vercel.app/';

const pingUrls = [
  `https://www.google.com/ping?sitemap=${SITEMAP_URL}`,
  `https://www.bing.com/ping?sitemap=${SITEMAP_URL}`
];

console.log('[Search Engine Pinger] Notifying search engines of sitemap updates...');

pingUrls.forEach(url => {
  https.get(url, (res) => {
    console.log(`✓ Pinged: ${url.split('?')[0]} -> Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.warn(`! Ping warning for ${url.split('?')[0]}: ${err.message}`);
  });
});

// IndexNow Notification (Supported by Brave Search, Bing, Yandex, Seznam)
const indexNowPayload = JSON.stringify({
  host: 'mrrathore-tech.vercel.app',
  key: '4860d1111a5d4572b51610f530c51885',
  keyLocation: 'https://mrrathore-tech.vercel.app/4860d1111a5d4572b51610f530c51885.txt',
  urlList: [
    'https://mrrathore-tech.vercel.app/'
  ]
});

const req = https.request('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(indexNowPayload)
  }
}, (res) => {
  console.log(`✓ IndexNow (Brave & Bing) notified -> Status: ${res.statusCode}`);
});

req.on('error', (err) => {
  console.warn(`! IndexNow notice: ${err.message}`);
});

req.write(indexNowPayload);
req.end();
