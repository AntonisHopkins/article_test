import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenterComponent } from './components/center/center.component';
import { ArticleComponent } from './components/center/article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ArticlesListComponent } from './components/center/articles-list/articles-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GenericModalComponent } from './modals/generic-modal/generic-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceholderComponent,
    FooterComponent,
    CenterComponent,
    ArticleComponent,
    ArticlesListComponent,
    GenericModalComponent
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
