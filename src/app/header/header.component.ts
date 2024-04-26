import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../user-auth/login/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username = localStorage.getItem('username');
  uname = localStorage.getItem('uname')
  authId = localStorage.getItem('authID')
  isHeader: boolean = false;



  constructor(private router: Router, private login: LoginService) {
    // console.log(this.username)
    this.isHeader = true;



  }

  LogoutHandler() {
    localStorage.removeItem('username')
    localStorage.removeItem('uname')
    this.isHeader = false;
    this.router.navigate(['']);
  }

}
