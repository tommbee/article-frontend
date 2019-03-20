"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const articleService_1 = require("../service/articleService");
const config_1 = require("../http/config");
const channel_1 = require("../http/channel");
const router = new koa_router_1.default();
const articleChannelConfig = new config_1.ArticleChannelConfig();
const channel = new channel_1.Channel(articleChannelConfig);
const articleService = new articleService_1.ArticleService(channel);
router.get('/', async (ctx) => {
    ctx.body = await articleService.getArticles(1);
});
router.get('/page/:page', async (ctx) => {
    ctx.body = await articleService.getArticles(ctx.params.page);
});
router.get('/heartbeat', async (ctx) => {
    ctx.body = 'beat';
});
exports.routes = router.routes();
//# sourceMappingURL=article.js.map