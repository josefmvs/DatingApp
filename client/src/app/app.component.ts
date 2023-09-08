import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountsService } from './_services/accounts.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dating app';

  constructor(private accountService: AccountsService){}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');

    if(!userString) return;

    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
    
  }

}
