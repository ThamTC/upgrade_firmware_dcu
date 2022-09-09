const express = require("express");
const router = express.Router();

const url = require("url");
const fs = require("fs");
const crypto = require("crypto");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./firmwares");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const originalname = file.originalname;
        const isMatch = originalname.match(/firmware_[0-9].[0-9].bin/);
        if (!isMatch) {
            return cb(new Error("Format Error"));
        }
        cb(null, true);
    },
    limits: {
        fileSize: 1044464,
    },
}).single("file");

router
    .route("/update")
    .get((req, res, next) => {
        console.log("header: ", req.headers);
        const uriData = url.parse(req.url);
        const espVersion = req.headers["x-esp8266-version"];
        console.log("espVersion: ", espVersion);
        var dataFile = fs.readFileSync("./versions/version.txt");
        const verFW = dataFile.toString();
        console.log("verFW: ", verFW);
        if (espVersion != undefined && espVersion !== verFW) {
            fs.readFile(`./firmwares/firmware_${verFW}.bin`, (err, data) => {
                if (err) {
                    return res.status(401).json(err);
                }
                console.log("length: ", Buffer.byteLength(data));
                res.writeHead(200, {
                    "Content-Type": "bin",
                    "Content-Length": Buffer.byteLength(data),
                    "x-MD5": crypto.createHash("md5").update(data).digest("hex"),
                    "Firmware-Version": verFW,
                });
                return res.end(data);
            });
        } else {
            return res.status(304).end();
        }
    })
    .post((req, res, next) => {});
router.route("/update/:version").get((req, res, next) => {
    const verFirmware = req.params.version;
    console.log(verFirmware);
    fs.readFile(`./firmwares/${verFirmware}`, (err, data) => {
        if (err) {
            return res.status(401).json(err);
        }
        console.log("length: ", Buffer.byteLength(data));
        res.writeHead(200, {
            "Content-Type": "bin",
            "Content-Length": Buffer.byteLength(data),
            "x-MD5": crypto.createHash("md5").update(data).digest("hex"),
            "Firmware-Version": verFirmware.replace(/(firmware_|.bin)/g, ""),
        });
        return res.end(data);
    });
});
router
    .route("/")
    .get((req, res, next) => {
        try {
            const listFile = fs.readdirSync("./firmwares");
            var listFileInfo = [];
            if (listFile.length) {
                listFileInfo = listFile.map((item) => {
                    const data = fs.readFileSync(`./firmwares/${item}`);
                    return {
                        filename: item,
                        size: Buffer.byteLength(data),
                    };
                });
            }
            return res.status(200).json(listFileInfo);
        } catch (error) {
            return res.status(304).json({ error: error });
        }
    })
    .post(upload, (req, res) => {
        var dataFile = fs.readFileSync("./versions/version.txt");
        const verFW = dataFile.toString();
        const originalname = req.file.originalname;
        const ret = originalname.match(/firmware_[0-9].[0-9].bin/);
        console.log("ret: ", ret);
        const ver = originalname.replace(/(firmware_|.bin)/g, "");
        fs.writeFileSync("./versions/version.txt", ver);
        return res.status(200).json(req.file);
    })
    .delete((req, res, next) => {
        const filename = req.body.filename;
        try {
            fs.unlinkSync(`./firmwares/${filename}`);
            return res.status(200).json("success");
        } catch (error) {
            return res.status(502).json(error);
        }
    });

module.exports = router;