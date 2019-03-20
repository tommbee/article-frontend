import Router from 'koa-router';
import { ArticleService } from '../service/articleService';
import { ArticleChannelConfig } from '../http/config';
import { Channel } from '../http/channel';

const router = new Router();
const articleChannelConfig = new ArticleChannelConfig();
const channel = new Channel(articleChannelConfig);
const articleService = new ArticleService(channel);

router.get('/', async (ctx) => {
    ctx.body = await articleService.getArticles(1)
});

router.get('/page/:page', async (ctx) => {
    ctx.body = await articleService.getArticles(ctx.params.page)
});

router.get('/heartbeat', async (ctx) => {
    ctx.body = 'beat';
});

export const routes = router.routes();
