import { Article } from '../models/article';
import { Action } from 'redux';

export interface ActionArticlesFetchInterface extends Action {
    type: 'ARTICLES_FETCH'
}

export interface ActionArticlesFetchSuccessInterface extends Action {
    type: 'ARTICLES_FETCH_SUCCESS',
    notes: Article[]
}

export interface ActionArticlesFetchErrorInterface extends Action {
    type: 'ARTICLES_FETCH_ERROR',
    errorMessage: string
}

export type ArticleActions = ActionArticlesFetchInterface | ActionArticlesFetchSuccessInterface | ActionArticlesFetchErrorInterface;
