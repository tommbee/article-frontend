import * as React from 'react';
import { Article } from '../models/article';
import { Article as ArticleView } from './article';
import * as Styles from './site-styles';

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
            <div className='article-list-container clearfix'>
                <div style={Styles.articleList} className='article-list'>
                    {this.props.articles.map((article) => {
                        return <ArticleView article={article}></ArticleView>
                    })}
                </div>
            </div>
        );
    }
}

export { ArticleList, ArticleListProps }
