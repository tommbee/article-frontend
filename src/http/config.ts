export interface ChannelConfigInterface {
    host() : string;
    timeout() : number;
}

export class ArticleChannelConfig implements ChannelConfigInterface{
    public host() : string {
        return process.env.ARTICLE_API_HOST || 'http://localhost:8080';
    }
    public timeout() : number {
        if (process.env.ARTICLE_API_TIMEOUT) {
            return parseInt(process.env.ARTICLE_API_TIMEOUT)
        }
        return 500;
    }
}
