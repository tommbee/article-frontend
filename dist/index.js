"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const config_1 = require("./config");
const article_1 = require("./routes/article");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const app = new koa_1.default();
app.use(koa_bodyparser_1.default());
app.use(article_1.routes);
app.listen(config_1.config.port);
console.log(`Server running on port ${config_1.config.port}`);
//# sourceMappingURL=index.js.map