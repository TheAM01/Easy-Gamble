export default async function socketHandler(socket, io) {

    socket.on("dashboard_data", (data) => {
        const pseudoData = {
            userName: "Abdul Mueed",
            balance: 20000,
            history: [
                {
                    name: "Amazon.com",
                    amount: 5,
                    transactionType: 0
                },
                {
                    name: "EasyGamble",
                    amount: 1000,
                    transactionType: 1
                }
            ]
        }
        io.to(socket.id).emit(`dashboard_data_4202206201`, pseudoData)
    })
}