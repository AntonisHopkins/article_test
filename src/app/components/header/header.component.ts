import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchWord: string = "test";
  ngOnInit(): void {
  }


  getArticles(){
    console.log(this.searchWord);
  }
}
