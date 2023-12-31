import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiOptionsService {
  endpoints= {
    articles: "articles/",
    users: "users/",
  };

  articles = {
    getArticlesByKeyword: "getArticlesByKeyword",
    getArticleById: "getArticleById",
    getArticles: "getArticles",
  }

  constructor() { }

}
