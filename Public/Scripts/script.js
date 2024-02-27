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

        history.forEach(item => {
            document.getElementById("history").appendChild(item);
        });

    });

}

function joinRoom(socket) {
    // 4202206201 is the id for theam -> sillypassword
    socket.emit("join_room", "theam");

}