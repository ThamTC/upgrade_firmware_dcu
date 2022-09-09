const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(require("./routes"));
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

const server = require("http").Server(app);

global.io = require("socket.io")(server, {
    cors: {
        credentials: true,
        origin: "*",
        methods: ["GET", "POST"],
    },
});

require("./socketIO")(global.io);
require("./mqtt");

module.exports = server;