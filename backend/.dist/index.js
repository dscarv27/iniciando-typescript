"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(routes_1.default);
// function getUsername(): string{
//     return 'dscarv27'
// }
// const username = getUsername() //inferência de tipos, não é necessário declarar que, nesse caso, é uma string
app.listen(3333);
