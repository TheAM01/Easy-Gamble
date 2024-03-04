import fs from "fs";

export default async function socketHandler(socket, io, dir) {

    socket.on("dashboard_data", (data) => {
        const userData = fs.readFileSync(`${dir}/Public/Data/Users/${data}.json`)
        io.to(socket.id).emit(`dashboard_data_${data}`, JSON.parse(userData).userData);
    });

    socket.on("join_room", (username) => {

        const rooms = fs.readdirSync(`${dir}/Public/Data/Rooms/`);

        if (!rooms[0]) return console.log("NO ROOMS CREATED!!");

        let room = JSON.parse(fs.readFileSync(`${dir}/Public/Data/Rooms/${rooms[0]}`));

        if (room.members.includes(username)) return;

        socket.join(room.id);
        room.members.push("theam");

        fs.writeFileSync(`${dir}/Public/Data/Rooms/${rooms[0]}`, JSON.stringify(room));

        io.to(socket.id).emit(`room_join_${username}`, room);

    });

}

