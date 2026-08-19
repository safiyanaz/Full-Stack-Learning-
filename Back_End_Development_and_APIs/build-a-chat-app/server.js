import http from 'http';
import fs from 'fs';
import { WebSocketServer } from 'ws';

const PORT = 3001;

const server = http.createServer((req, res) => {
  fs.readFile("./public/index.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

const wss = new WebSocketServer({ server });

function broadcast(message) {
  const data = JSON.stringify(message);
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(data);
    }
  });
}

wss.on("connection", (socket, req) => {
  const username = new URL(req.url, "http://localhost").searchParams.get("username");

  broadcast({ type: "system", text: `${username} joined` });

  socket.on("message", (data) => {
    const { username, text } = JSON.parse(data.toString());
    broadcast({ type: "chat", username, text });
  });

  socket.on("close", () => {
    broadcast({ type: "system", text: `${username} left` });
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});