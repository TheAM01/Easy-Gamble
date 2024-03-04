function test() {
    console.log("Hello, World!");
    return "Hello, World!"
}

function buildDashboard(socket) {

    const userId = "zocmo";
    socket.emit("dashboard_data", userId);

    socket.on(`dashboard_data_${userId}`, (data) => {
        
        document.getElementById("balance-amount").innerText = data.balance;

        const history = [];

        data.history.forEach(item => {

            const transactionParent = element("div", "transaction-parent");
            const transactionName = element("div", "transaction-name", {}, item.name);
            const transactionAmount = element("div", `transaction-amount ${!!item.transactionType ? "gain" : "loss"}`, {}, item.amount);

            appendChildren(transactionParent, [transactionName, transactionAmount]);

            history.push(transactionParent);

        });
        if (!data.history[0]) {
            history[0] = element("div", "stray", {}, "No transaction history yet.");
        }

        history.forEach(item => {
            document.getElementById("history").appendChild(item);
        });


    });

}

function joinRoom(socket) {
    const username = "theam";

    socket.emit("join_room", username);

    socket.on(`room_join_${username}`, (room) => {
        buildRoom(socket, room);
    })

}

function buildRoom(socket, room) {


}