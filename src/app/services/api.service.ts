import { Injectable } from '@angular/core';
import { IGetArticlesByIdRequest, IGetArticlesByIdResponse, IGetArticlesByKeywordRequest, IGetArticlesByKeywordResponse } from '../interfaces/IArticles';
import { Observable, delay, of } from 'rxjs';
import { MockArticlesResponse } from '../mockdata/mock-articles-view';
import { HttpClient } from '@angular/common/http';
import { ApiOptionsService } from './api-options.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private apiOptions: ApiOptionsService
    ) { }

  getArticlesByKeyword(request: IGetArticlesByKeywordRequest):Observable<IGetArticlesByKeywordResponse>{
    var url = this.apiOptions.endpoints.articles + this.apiOptions.articles.getArticlesByKeyword;
    return this.httpClient.post<IGetArticlesByKeywordResponse>(url,request);
    // return of(MockArticlesResponse).pipe(delay(500));
  }
  getArticlesById(request: IGetArticlesByIdRequest):Observable<IGetArticlesByIdResponse>{
    var url = this.apiOptions.endpoints.articles + this.apiOptions.articles.getArticlesById;
    return this.httpClient.post<IGetArticlesByIdResponse>(url,request);
    // return of(MockArticlesResponse).pipe(delay(500));
  }

}
