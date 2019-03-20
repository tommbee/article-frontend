"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Channel {
    constructor(config) {
        this.config = config;
    }
    async getRequest(path) {
        const params = { timeout: this.config.timeout() };
        const [error, response] = await axios_1.default.get(`${this.config.host}${path}`, params)
            .then(data => [null, data])
            .catch(err => [err]);
        if (error) {
            console.log(error);
            return null;
        }
        return response.data;
    }
}
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map