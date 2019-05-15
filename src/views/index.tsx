import * as React from 'react';
import { Article } from '../models/article';
import { ArticleList, ArticleListProps } from './articleList';
import { Pagination } from './pagination';

interface IndexProps {
    page: number;
    articles: Article[]
}

class Index extends React.PureComponent<IndexProps, {}> {
    constructor(props: IndexProps) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <div className='container'>
                <ArticleList page={this.props.page} articles={this.props.articles}></ArticleList>
                <Pagination page={this.props.page}></Pagination>
            </div>
        );
    }
}

export { IndexProps, Index }
