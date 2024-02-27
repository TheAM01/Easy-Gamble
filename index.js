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
  socketHandler(socket, io, dir);
});

server.listen(3000, () => {
    console.clear();
    console.log('Server live on 192.168.0.108:3000!');
});