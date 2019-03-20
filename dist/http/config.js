"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArticleChannelConfig {
    host() {
        return process.env.ARTICLE_API_HOST || 'http://localhost:8080';
    }
    timeout() {
        if (process.env.ARTICLE_API_TIMEOUT) {
            return parseInt(process.env.ARTICLE_API_TIMEOUT);
        }
        return 500;
    }
}
exports.ArticleChannelConfig = ArticleChannelConfig;
//# sourceMappingURL=config.js.map