import { Article } from '../models/article';
import { ChannelInterface } from '../http/channel';

export interface ArticleServiceInterface {
    getArticles(page: number) : Promise<Article[]>
}

export class ArticleService implements ArticleServiceInterface {
    channel: ChannelInterface;

    constructor(channel: ChannelInterface) {
        this.channel = channel;
    }

    public async getArticles(page: number) : Promise<Article[]>
    {
        return await this.channel.getRequest(`/article?page=${page}`);
    }
}
