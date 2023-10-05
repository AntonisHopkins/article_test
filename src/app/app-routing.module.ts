import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ArticleComponent } from './components/center/article/article.component';
import { Strings } from './types/strings';

const routes: Routes = [
  { path: Strings.ArticleRoute, component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
