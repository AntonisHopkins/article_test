
export interface IArticle {
  id: string;
  attributes: IArticleAttributes;
  relationships: IArticleRelationship;
  thumbnail: string;
}
export interface IArticleAttributes {
  title: string;
  body: string;
  created: string;
  updated: string;
}
export interface IArticleRelationship {
  author: IArticleAuthor;
}
export interface IArticleAuthor {
  data: IArticleAuthorData;
}
export interface IArticleAuthorData {
  id: string;
  type: string;
}
export interface IArticleIncluded {
  type: string;
  id: string;
  attributes: IArticleIncludedAttributes;
}
export interface IArticleIncludedAttributes
{
  name: string;
  age: number;
  gender: string;
}

export interface IArticleView extends IArticle{
  publishDateStr: string;
  writer: string;
}

export interface IGetArticlesByKeywordRequest {
  keyword: string;
}
export interface IGetArticlesByKeywordResponse {
  data: IArticle[]
  included: IArticleIncluded[];
}

export interface IGetArticlesByIdRequest {
  id: string;
}
export interface IGetArticlesByIdResponse {
  data: IArticle;
  included: IArticleIncluded[];
}
