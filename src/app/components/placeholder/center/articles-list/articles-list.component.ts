import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle, IArticleView } from 'src/app/interfaces/IArticles';
import { Strings } from 'src/app/types/strings';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  @Input() articles: IArticleView[] = [];
  
  constructor(private router: Router) {
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  redirectToArticle(article: IArticleView){
    this.router.navigate([Strings.ArticleRoute.replace(":id",article.id.toString())]);
  }
}
