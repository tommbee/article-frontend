import Router from 'koa-router';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { container } from '../inversify.config';
import { TYPES } from "../types";
import { ArticleServiceInterface } from '../service/articleService';
import { Index } from '../views/index';

const router = new Router();
const articleService = container.get<ArticleServiceInterface>(TYPES.ArticleServiceInterface);

router.get('/', async (ctx) => {
    ctx.body = await articleService.getArticles(1).then(articles => {
        const indexPage = React.createElement(Index, {page: 1, articles: articles});
        return ReactDOMServer.renderToString(indexPage);
    });
});

router.get('/page/:page', async (ctx) => {
    ctx.body = await articleService.getArticles(ctx.params.page).then(articles => {
        const indexPage = React.createElement(Index, {page: ctx.params.page, articles: articles});
        return ReactDOMServer.renderToString(indexPage);
    });
});

router.get('/heartbeat', async (ctx) => {
    ctx.body = 'beat';
});

export const routes = router.routes();
