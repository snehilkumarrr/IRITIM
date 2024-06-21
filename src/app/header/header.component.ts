import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../user-auth/login/login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null = null;
  uname: string | null = null;
  authId: string | null = null;
  isHeader: boolean = false;
  loginStatusSub: any;

  constructor(private router: Router, private login: LoginService) {
    this.isHeader = true;
  }

  ngOnInit(): void {
    this.loadUserDetails();
    this.loginStatusSub = this.login.loginStatus.subscribe((isLoggedIn) => {
      this.loadUserDetails();
    });
  }

  loadUserDetails(): void {
    this.username = localStorage.getItem('username');
    this.uname = localStorage.getItem('uname');
    this.authId = localStorage.getItem('authID');
  }

  LogoutHandler(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('uname');
    localStorage.removeItem('authID');
    this.isHeader = false;
    this.username = null;
    this.uname = null;
    this.authId = null;
    this.router.navigate(['login']);
    this.login.emitLoginStatus(false);
  }

  ngOnDestroy(): void {
    if (this.loginStatusSub) {
      this.loginStatusSub.unsubscribe();
    }
  }
}
