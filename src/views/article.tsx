import * as React from 'react';
import { Article as ArticleModel } from '../models/article';

interface ArticleProps {
    article: ArticleModel
}

class Article extends React.PureComponent<ArticleProps> {
    constructor(props: ArticleProps) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <div className='article-list__article'>
                <a target='_blank' href={this.props.article.url}>{this.props.article.title}</a>
            </div>
        );
    }
}

export { Article, ArticleProps }
