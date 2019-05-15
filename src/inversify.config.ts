import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { ChannelConfigInterface, ArticleChannelConfig } from "./http/config";
import { ChannelInterface, Channel } from "./http/channel";
import { ArticleHydratorInterface, ArticleHydrator } from './hydrator/article';
import { ArticleServiceInterface, ArticleService } from './service/articleService';

const container = new Container();
container.bind<ChannelConfigInterface>(TYPES.ChannelConfigInterface).to(ArticleChannelConfig);
container.bind<ChannelInterface>(TYPES.ChannelInterface).to(Channel);
container.bind<ArticleHydratorInterface>(TYPES.ArticleHydratorInterface).to(ArticleHydrator);
container.bind<ArticleServiceInterface>(TYPES.ArticleServiceInterface).to(ArticleService);

export { container }
