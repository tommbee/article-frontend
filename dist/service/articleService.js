"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArticleService {
    constructor(channel) {
        this.channel = channel;
    }
    async getArticles(page) {
        // Hydrate data into Article object
        return await this.channel.getRequest(`/article?page=${page}`);
    }
}
exports.ArticleService = ArticleService;
//# sourceMappingURL=articleService.js.map