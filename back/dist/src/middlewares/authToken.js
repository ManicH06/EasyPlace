"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) {
        res.sendStatus(401);
        return;
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        res.sendStatus(500);
        return;
    }
    jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = decoded;
        next();
    });
};
exports.authToken = authToken;
