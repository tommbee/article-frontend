"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Article {
    get url() {
        return this._url;
    }
    set url(newUrl) {
        this._url = newUrl;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    get publishedDate() {
        return this._publishedDate;
    }
    set publishedDate(newDate) {
        this._publishedDate = newDate;
    }
    get createdAtDate() {
        return this._createdAtDate;
    }
    set createdAtDate(newDate) {
        this._createdAtDate = newDate;
    }
}
exports.Article = Article;
//# sourceMappingURL=article.js.map