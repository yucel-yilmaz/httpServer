"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var port = 4500;
http_1.default.createServer(function (req, res) {
    res.write("Server Started. \n");
    res.write("First Message Returned");
    res.end();
})
    .listen(port);
