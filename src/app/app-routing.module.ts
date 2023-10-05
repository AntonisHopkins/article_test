import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/placeholder/center/article/article.component';
import { Strings } from './types/strings';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: Strings.ArticleRoute, component: ArticleComponent },
  { path: Strings.LoginRoute, component: LoginComponent },
  { path: Strings.NotFoundRoute, component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
