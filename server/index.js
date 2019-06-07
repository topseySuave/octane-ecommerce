const next = require('next');
const routes = require('../lib/routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handle = routes.getRequestHandler(app);
const {createServer} = require('http');

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer(handle).listen(PORT, (err) => {
    if (err) throw err;
    process.stdout.write(`> Ready on http://localhost:${PORT}`);
  });
});
