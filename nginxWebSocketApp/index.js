const http = require('http');
const WebSocket = require('websocket').server;

const httpServer = http.createServer();
const wsServer = new WebSocket({ "httpServer": httpServer });
const PORT = process.argv[2] || 8080;

httpServer.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

let connection = null;
wsServer.on('request', (request) => {
    connection = request.accept(null, request.origin);
    connection.on('message', (data) => {
        console.log(`Hey I received a message ${data.utf8Data}`);
        connection.send(`Client! I received your message: ${data.utf8Data} on port ${PORT}`);   
    });
});