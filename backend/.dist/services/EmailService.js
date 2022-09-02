"use strict";
//utiliza-se interface para declarar classe
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
