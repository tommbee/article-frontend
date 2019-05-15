import * as React from 'react';
import { Article } from '../models/article';
import { Article as ArticleView } from './article';

interface ArticleListProps {
    page: number;
    articles: Article[]
}

class ArticleList extends React.PureComponent<ArticleListProps> {
    constructor(props: ArticleListProps) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <div className='article-list'>
                {this.props.articles.map((article) => {
                    return <ArticleView article={article}></ArticleView>
                })}
            </div>
        );
    }
}

export { ArticleList, ArticleListProps }
