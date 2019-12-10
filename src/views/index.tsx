import * as React from 'react';
import { Article } from '../models/article';
import { ArticleList, ArticleListProps } from './articleList';
import { Pagination } from './pagination';
import * as Styles from './site-styles';
 
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
            <body style={Styles.body}>
                <div style={Styles.app} id="app">
                    <header style={Styles.header}>
                        <h1 style={Styles.logo}>The Daily Crossword Archive</h1>
                        <span style={Styles.border}></span>
                    </header>
                    <section>
                        <h1 style={Styles.logo}></h1>
                        <ArticleList page={this.props.page} articles={this.props.articles}></ArticleList>
                        <Pagination page={this.props.page}></Pagination>
                        <div>&nbsp;</div>
                    </section>
                </div>
            </body>
        );
    }
}

export { IndexProps, Index }
