import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IArticle, IArticleView, IGetArticlesByIdRequest, IGetArticlesByIdResponse } from 'src/app/interfaces/IArticles';
import { MockArticleByIdResponse, MockArticlesResponse, MockError } from 'src/app/mockdata/mock-articles-view';
import { GenericModalComponent } from 'src/app/modals/generic-modal/generic-modal.component';
import { ApiService } from 'src/app/services/api.service';
import { Strings } from 'src/app/types/strings';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  articleId: string = "";
  subscription$: Subscription = new Subscription();
  loading: boolean = true;
  article: IArticleView | null = null;
  DEV_ENV: boolean = Strings.DEV_ENV;
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private _modalService: NgbModal

  ) 
  {
    this.subscription$.add(this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.articleId = id ? id : "";
      // Now, this.articleId contains the value of the 'id' parameter from the route
    }));
  }
  ngOnInit(): void {
    console.log(this.articleId);
    if(this.articleId)
      this.getArticleById();
    else  
      this.loading = false;
  }
  ngOnDestroy(): void {
      this.subscription$.unsubscribe();
  }
  getArticleById():void{
    this.subscription$.add(this.apiService.getArticlesById(this.getArticlesByIdRequest()).subscribe({
      next: res => {
        console.log("res", res);
        if(res && res.data && res.included)
          this.transformToView(res);
        this.loading = false;
      },
      error: (error) => {
        if(this.DEV_ENV){
          this.transformToView(MockArticleByIdResponse);
          this.openModal();
        }else
          this.openModal(error.title, error.details);
        this.loading = false;
      }
    }))
  }

  getArticlesByIdRequest(): IGetArticlesByIdRequest{
    let request: IGetArticlesByIdRequest = {
      id: this.articleId
    }
    return request;
  }

  transformToView(res: IGetArticlesByIdResponse): void{
    let article: IArticleView = {
      ...res.data,
      publishDateStr: new Date(res.data.attributes.created).toLocaleString(),
      writer: ""
    }
    res.included.forEach(x => article.writer += `${x.attributes.name} / ` )
    article.writer = article.writer.slice(0, -3) 
    this.article = article;
  }

  openModal(title:string = Strings.ArticlesErrorTitle, body:string = Strings.ArticlesErrorBody){
    const modalRef = this._modalService.open(GenericModalComponent, {  });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;
    modalRef.result.then(
      (res: boolean) => {
        console.log("modal res",res);
      }
    )
  }
}
