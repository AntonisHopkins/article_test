import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { IGetArticlesByKeywordRequest, IArticle, IArticleView } from 'src/app/interfaces/IArticles';
import MockArticlesView from 'src/app/mockdata/mock-articles-view';
import { GenericModalComponent } from 'src/app/modals/generic-modal/generic-modal.component';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Strings } from 'src/app/types/strings';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit, OnDestroy {
  search$: Subject<string> = new Subject<string>();
  subscription$: Subscription = new Subscription();
  articles: IArticleView[] = MockArticlesView;
  keyword: string = "Test";
  loading: boolean = true;



  constructor(
    private apiService: ApiService,
    private _modalService: NgbModal
    ) {
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription$ = this.setUpSearch();
    this.loading = false;
  }

  setUpSearch():Subscription{
    return this.search$.pipe(
      debounceTime(700),
    ).subscribe((keyword) => {
      console.log(keyword);
      this.getArticles();
    })
  }

  getArticles():void{
    this.loading = true;
    this.apiService.getArticlesByKeyword(this.getArticlesByKeywordRequest()).subscribe({
      next: res => {
        console.log("res", res);
        if(res && res.articles)
          this.transformToView(res.articles);
        this.loading = false;
      },
      error: (error) => {
        this.openModal();
        this.loading = false;
      }
    });
  }
  
  openModal(){
    const modalRef = this._modalService.open(GenericModalComponent, {  });
    modalRef.componentInstance.title = Strings.ArticlesErrorTitle;
    modalRef.componentInstance.body = Strings.ArticlesErrorBody;
    modalRef.result.then(
      (res) => {
        console.log("modal res",res);
      }
    )
  }
  

  searchArticles(){
    this.search$.next(this.keyword);
  }

  getArticlesByKeywordRequest():IGetArticlesByKeywordRequest{
    let request: IGetArticlesByKeywordRequest = {

    };
    return request;
  }

  transformToView(articles:IArticle[]): void{
    // perhaps i need transformation to some data or fill articles properties from other requests too;
    // ...
    this.articles = articles;
  }
}
