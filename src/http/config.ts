export interface ChannelConfigInterface {
    host() : string;
    timeout() : number;
}

export class ChannelConfig implements ChannelConfigInterface{
    public host() : string {
        return process.env.ARTICLE_API_HOST || '/';
    }
    public timeout() : number {
        if (process.env.ARTICLE_API_TIMEOUT) {
            return parseInt(process.env.ARTICLE_API_TIMEOUT)
        }
        return 500;
    }
}
