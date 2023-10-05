import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/placeholder/header/header.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { FooterComponent } from './components/placeholder/footer/footer.component';
import { CenterComponent } from './components/placeholder/center/center.component';
import { ArticleComponent } from './components/placeholder/center/article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ArticlesListComponent } from './components/placeholder/center/articles-list/articles-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GenericModalComponent } from './modals/generic-modal/generic-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SafeHtmlDirective } from './directives/safe-html.directive';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceholderComponent,
    FooterComponent,
    CenterComponent,
    ArticleComponent,
    ArticlesListComponent,
    GenericModalComponent,
    SafeHtmlDirective,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
