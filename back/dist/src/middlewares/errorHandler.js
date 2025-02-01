"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const multer_1 = require("multer");
const HTTPError_1 = __importDefault(require("../errors/HTTPError"));
function default_1(err, req, res, next) {
    console.log(err);
    if (err instanceof multer_1.MulterError) {
        // multer errors handling
        console.log("mutlerError: ", err);
    }
    if (err instanceof HTTPError_1.default) {
        res.status(err.status).json({ status: "error", message: err.message });
    }
    else {
        console.log("error: ", err);
        res
            .status(500)
            .json({ status: "error", message: "Une erreur est survenue." });
    }
}
