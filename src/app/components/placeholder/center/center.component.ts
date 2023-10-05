import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, delay } from 'rxjs';
import { IGetArticlesByKeywordRequest, IArticle, IArticleView } from 'src/app/interfaces/IArticles';
import MockArticlesView, { MockError } from 'src/app/mockdata/mock-articles-view';
import { GenericModalComponent } from 'src/app/modals/generic-modal/generic-modal.component';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Strings } from 'src/app/types/strings';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit, OnDestroy {
  search$: Subject<string> = new Subject<string>();
  subscription$: Subscription = new Subscription();
  articles: IArticleView[] = MockArticlesView;
  keyword: string = "";
  loading: boolean = true;
  routeIsActive: boolean = false;



  constructor(
    private apiService: ApiService,
    private _modalService: NgbModal,
    private router: Router
  ) 
  {
      this.subscription$.add(this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Update a flag based on the route activation
          this.routeIsActive = this.isRouteActive(event.url);
        }
      }));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription$.add(this.setUpSearch());
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
    this.subscription$.add(this.apiService.getArticlesByKeyword(this.getArticlesByKeywordRequest()).subscribe({
      next: res => {
        console.log("res", res);
        if(res && res.data)
          this.transformToView(res.data);
        this.loading = false;
      },
      error: (error) => {
        if(Strings.DEV_ENV)
          this.openModal();
        else
          this.openModal(error.title, error.detail);
        this.loading = false;
      }
    }));
  }
  
  openModal(title:string = Strings.ArticlesErrorTitle, body:string = Strings.ArticlesErrorBody){
    const modalRef = this._modalService.open(GenericModalComponent, {  });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;
    modalRef.result.then(
      (res:boolean) => {
        console.log("modal res",res);
      }
    )
  }
  

  searchArticles(){
    this.search$.next(this.keyword);
  }

  getArticlesByKeywordRequest():IGetArticlesByKeywordRequest{
    let request: IGetArticlesByKeywordRequest = {
      keyword: this.keyword
    };
    return request;
  }

  transformToView(articles:IArticle[]): void{
    let articlesView: IArticleView[] = []
    //any transform 

    this.articles = articlesView;
  }

  isRouteActive(url: string): boolean {
    console.log(url);
    return url != Strings.NoRoute;
  }
}
