import express from "express";
import http from "http";
import {Server} from "socket.io";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fs from "fs";

import createRoutes from "./Server/routes.js";
import socketHandler from "./Server/socket-handler.js";


const app = express();
const server = http.createServer(app);
const dir = path.resolve();
const io = new Server(server);


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


await createRoutes(app, dir);


io.on('connection', (socket) => {
  socketHandler(socket, io, dir);
});

server.listen(3000, () => {
    console.clear();
    console.log('Server live on 192.168.0.108:3000!');
});