"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var url_1 = require("url");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1.default.dirname(__filename);
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
app.get('*', function (_req, res) {
    res.sendFile(path_1.default.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
