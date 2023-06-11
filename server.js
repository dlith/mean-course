const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

app.set('post', port)
const server = http.createServer(app);

server.listen(port);
