const mqtt = require("mqtt");
const mqtt_addr = process.env.MQTT_ADDR;
const client = mqtt.connect(mqtt_addr);

client.on("connect", function(connect) {
    // console.log(connect);
    client.subscribe("presence", function(err) {
        // console.log(err);
        // if (!err) {
        //     client.publish("presence", "Hello mqtt");
        // }
    });
    client.subscribe("DCU_Info", (err) => {
        // console.log(err);
    });
    client.subscribe("8C:CE:4E:26:B4:2C/Infor", (err) => {
        // console.log(err);
    });
    client.subscribe("collect_dcu", (err) => {
        // console.log(err);
    });
});
client.on("disconnect", function(packet) {
    console.log(packet);
});
client.on("close", function() {
    console.log("close");
});
client.on("reconnect", function() {
    console.log("reconnect");
});
client.on("offline", function() {
    console.log("offline");
});
client.on("error", function(error) {
    console.log(error);
});
client.on("end", function() {
    console.log("connected");
});

client.on("message", (topic, message) => {
    if (topic === "DCU_Info") {
        try {
            const dcuInfo = JSON.parse(message.toString());
            const channels = JSON.parse(localStorage.getItem("channel"));
            const found = channels.find((item) => item.dcu_id == dcuInfo.dcu_id);
            if (!found) {
                channels.push(dcuInfo);
                localStorage.setItem("channel", JSON.stringify(channels));
            }
            console.log("channels: ", channels);
            global.io.sockets.emit("collect_dcu", channels);
        } catch (error) {
            localStorage.setItem("channel", "[]");
            console.log(error);
        }
    }
    console.log("topic: ", topic);
    console.log("message: ", JSON.parse(message.toString()));
});

module.exports = client;