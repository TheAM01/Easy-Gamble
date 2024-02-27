import fs from "fs";

export default async function socketHandler(socket, io, dir) {

    socket.on("dashboard_data", (data) => {
        const userData = fs.readFileSync(`${dir}/Public/Data/Users/${data}.json`)
        io.to(socket.id).emit(`dashboard_data_${data}`, JSON.parse(userData).userData);
    });

    socket.on("join_room", (username) => {

        let room = {
            id: "placeholder_room_id",
            members: [],
            roomData: {
                pot: 0,
            }
        };

        socket.join(room.id);

    });

    socket.on("recrec", (data) => {
        io.to("placeholder_room_id").emit("print", "balls");
    })

}

