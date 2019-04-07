const http = require('http');
const list = require("../src");

const server = http.createServer(function (req, res) {
    res.end(JSON.stringify(list));
});

server.listen(8000, function () {
    console.log('server started on port 8000');
});
