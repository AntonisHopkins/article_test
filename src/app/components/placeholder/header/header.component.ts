import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Strings } from 'src/app/types/strings';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor(private router: Router) {
    
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    
  }

  redirectToLogin(){
    this.router.navigate([Strings.LoginRoute])
  }
  
}
