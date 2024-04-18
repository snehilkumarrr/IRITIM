import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username = localStorage.getItem('username');

  constructor(private router: Router,) {
    console.log(this.username)
  }
  LogoutHandler() {
    localStorage.removeItem('username')
    this.router.navigate(['']);
    window.location.reload();
  }

}
