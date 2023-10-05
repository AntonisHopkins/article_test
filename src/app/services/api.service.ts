import { Injectable } from '@angular/core';
import { IGetArticlesByIdRequest, IGetArticlesByIdResponse, IGetArticlesByKeywordRequest, IGetArticlesByKeywordResponse } from '../interfaces/IArticles';
import { Observable, delay, of, switchMap } from 'rxjs';
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
    // url creation depends if the endpoint follows crud logic i need to add in uri the :id for example
    var url = this.apiOptions.endpoints.articles + this.apiOptions.articles.getArticlesByKeyword;
    // add some delay, for dev test
    return of(null).pipe(
      delay(500), // Adjust the delay time as needed (in milliseconds)
      switchMap(() => this.httpClient.post<IGetArticlesByKeywordResponse>(url,request))
    );
    // return of(MockArticlesResponse).pipe(delay(500));
  }
  getArticlesById(request: IGetArticlesByIdRequest):Observable<IGetArticlesByIdResponse>{
    // url creation depends if the endpoint follows crud logic i need to add in uri the :id for example
    var url = this.apiOptions.endpoints.articles + this.apiOptions.articles.getArticleById;
    // add some delay, for dev test
    return of(null).pipe(
      delay(500),
      switchMap(() => this.httpClient.post<IGetArticlesByIdResponse>(url,request))
    );
    // return of(MockArticlesResponse).pipe(delay(500));
  }

}
