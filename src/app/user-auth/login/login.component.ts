import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) { }
  LoginHandler(data: any) {
    // console.log(data);

    this.loginService.Login(data).subscribe((data) => {
      console.log(data)
    })

    // if (data.username == 'admin') {
    //   this.router.navigate(['adminDashboard']);
    // } else {
    //   this.router.navigate(['userDashboard']);
    // }
  }

}
