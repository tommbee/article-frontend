import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { Article } from '../models/article';
import { ChannelInterface } from '../http/channel';
import { ArticleHydratorInterface } from '../hydrator/article';

interface ArticleServiceInterface {
    getArticles(page: number) : Promise<Article[]>
}

@injectable()
class ArticleService implements ArticleServiceInterface {
    
    private _channel: ChannelInterface;
    private _hydrator: ArticleHydratorInterface

    constructor(
        @inject(TYPES.ChannelInterface) _channel: ChannelInterface,
        @inject(TYPES.ArticleHydratorInterface) _hydrator: ArticleHydratorInterface,
    ) {
        this._channel = _channel;
        this._hydrator = _hydrator;
    }

    public async getArticles(page: number) : Promise<Article[]>
    {
        return await this._channel.getRequest(`/articles?page=${page}`)
            .then(this._hydrator.hydrateList);
    }
}

export { ArticleService, ArticleServiceInterface }
