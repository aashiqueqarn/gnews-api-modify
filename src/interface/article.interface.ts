import { ISource } from "./source.interface";

export interface IArticle {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: ISource;
}

export interface IArticleAPIResponse {
    totalArticles: number;
    articles: IArticle[];
}