function test() {
    console.log("Hello, World!");
    return "Hello, World!"
}

function buildDashboard(socket) {
    const userId = 4202206201;
    socket.emit("dashboard_data", {});

    socket.on(`dashboard_data_${userId}`, (data) => {
        console.log(data);
        const balance = element("div", "balanceAmount", {}, `Rs ${data.balance}/-`);
        document.getElementById("balance").appendChild(balance);
    });

}