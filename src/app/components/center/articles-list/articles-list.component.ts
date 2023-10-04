import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IArticle, IArticleView } from 'src/app/interfaces/IArticles';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  @Input() articles: IArticleView[] = [];
  
  constructor() {
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }
}
