import { Article } from '../models/article';
import { ChannelInterface } from '../http/channel';
import { ArticleHydratorInterface } from '../hydrator/article';
//import { ArticleListView } from '../views/articleList';

export interface ArticleServiceInterface {
    getArticles(page: number) : Promise<Article[]>
}

export class ArticleService implements ArticleServiceInterface {
    channel: ChannelInterface;
    hydrator: ArticleHydratorInterface

    constructor(channel: ChannelInterface, hydrator: ArticleHydratorInterface) {
        this.channel = channel;
        this.hydrator = hydrator;
    }

    public async getArticles(page: number) : Promise<Article[]>
    {
        return await this.channel.getRequest(`/articles?page=${page}`)
            .then(this.hydrator.hydrateList);
    }
}
