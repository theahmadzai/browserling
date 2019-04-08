const http = require('http');
const list = require('../src');

const server = http.createServer((req, res) => {
    res.end(JSON.stringify(list));
});

server.listen(8000, () => {
    console.log('server started on port 8000');
});
