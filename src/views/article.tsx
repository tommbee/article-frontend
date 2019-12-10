import * as React from 'react';
import { Article as ArticleModel } from '../models/article';
import * as Styles from './site-styles';
import Moment from 'react-moment';

interface ArticleProps {
    article: ArticleModel
}

class Article extends React.PureComponent<ArticleProps> {
    constructor(props: ArticleProps) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <article style={Styles.article} className='article-list__article'>
                {/* <em>{this.props.article.publishedDate}</em> */}
                <a style={Styles.link} target='_blank' href={this.props.article.url}><Moment style={Styles.date} format="ddd D MMM YYYY" date={this.props.article.publishedDate} /> {this.props.article.title}</a>
            </article>
        );
    }
}

export { Article, ArticleProps }
