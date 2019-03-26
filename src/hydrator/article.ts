import { Article } from '../models/article';

export interface ArticleHydratorInterface {
    hydrateList(data: any[]) : Promise<Article[]>
}

export class ArticleHydrator {

    public hydrateList(data: any[]) : Promise<Article[]> {
        return new Promise((resolve, reject) => {
            let articleList: Article[] = [];
            data.forEach(articleJson => {
                var a = new Article();
                a.title = articleJson.title;
                a.url = articleJson.url;
                a.publishedDate = articleJson.published;
                a.createdAtDate = articleJson.created_at;
                articleList.push(a);
            });
            resolve(articleList);
        })
    }
}
