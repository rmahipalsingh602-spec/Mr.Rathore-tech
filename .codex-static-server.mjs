import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const root = process.cwd();
const port = Number(process.argv[2] || 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip',
  '.exe': 'application/octet-stream'
};

const resolveRequest = (urlPath) => {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const requested = resolve(root, normalize(cleanPath || 'index.html'));
  if (requested !== root && !requested.startsWith(root + sep)) return null;
  if (!existsSync(requested)) return null;
  const stats = statSync(requested);
  return stats.isDirectory() ? join(requested, 'index.html') : requested;
};

createServer((req, res) => {
  const file = resolveRequest(req.url || '/');
  if (!file || !existsSync(file)) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  res.writeHead(200, {
    'content-type': types[extname(file).toLowerCase()] || 'application/octet-stream',
    'cache-control': 'no-store'
  });
  createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => {
  console.log(`Mr. Rathore site running at http://127.0.0.1:${port}/`);
});
