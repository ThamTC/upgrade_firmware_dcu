const clientMQTT = require("./mqtt");
const localStorage = require("./loacalstorage");
var users = [];

const socket = (io) => {
    io.on("connection", function(socket) {
        console.log(socket.id);
        socket.on("disconnect", function(data) {
            const username = users[socket.id];
            delete users[socket.id];
            console.log(users);
            const usersLogin = Object.values(users);
            const userfound = usersLogin.findIndex((ele) => ele === username);
            if (userfound < 0) {
                console.log(username + " da thoat khoi trinh duyet");
                if (username != undefined) {
                    io.emit("userLogout", { currentLogout: username, usersLogin: usersLogin });
                }
            }
        });
        socket.on("collect_dcu", function(data) {
            console.log(data);
            try {
                // console.log(data);
                // const channels = JSON.parse(localStorage.getItem("channel"));
                // const filtered = channels.filter((item, idx, arr) => arr.findIndex((i) => i.channel === item.channel) === idx);
                // filtered.forEach((item) => {
                //     clientMQTT.publish(`${item.channel}_CMD`, JSON.stringify({ cmd: "ReadInfo" }));
                // });
                localStorage.setItem("channel", "[]");
                clientMQTT.publish("collect_dcu", JSON.stringify({ cmd: "collect_dcu" }));
            } catch (error) {
                console.log(error);
            }
            // localStorage.setItem("channel", "ThamTC6891");
            // console.log(localStorage.getItem("channel"));
        });
        socket.on("dcu_upload", function(data) {
            console.log(data);
            try {
                clientMQTT.publish(
                    data.dcu_info.channel + "_CMD",
                    JSON.stringify({ dcu_id: data.dcu_info.dcu_id, cmd: "Reset" })
                );
                clientMQTT.publish(
                    "ThamTC_CMD",
                    JSON.stringify({
                        dcu_id: "8C:AA:B5:C6:BF:13",
                        cmd: "Write",
                        value: "ON",
                    })
                );
            } catch (error) {
                console.log(error);
            }
        });
    });
};

module.exports = socket;