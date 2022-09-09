const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const port = process.env.PORT || 8000;
const server = require("./app");
server.listen(port);
server.on("listening", function() {
    console.log("Server is running at port %s", server.address().port);
});