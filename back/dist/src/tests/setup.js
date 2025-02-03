"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let server;
const index_1 = __importDefault(require("../index"));
beforeAll(() => {
    server = index_1.default.listen(5001);
});
afterAll((done) => {
    server.close(done);
});
