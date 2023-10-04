export interface IGetArticlesByKeywordRequest {

}
export interface IGetArticlesByKeywordResponse {
  articles: IArticle[];
}

export interface IArticle {
  id: number;
  title: string;
  content: string;
  publisher: string;
  publishDate: Date;
  thumbnail: string;
}

export interface IArticleView extends IArticle{

}