import express from "express";
import http from "http";
import {Server} from "socket.io";
import path from "path";


import createRoutes from "./Server/routes.js";
import socketHandler from "./Server/socket-handler.js";


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const dir = path.resolve();


await createRoutes(app, dir);


io.on('connection', (socket) => {
  socketHandler(socket, io);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});