import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginMsg: any
  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl('')

  });
  constructor(private router: Router, private loginService: LoginService) { }



  LoginHandler() {
    // console.log(this.loginForm.value);
    this.loginService.Login(this.loginForm.value).subscribe((resData) => {
      // console.log(resData)
      this.loginMsg = resData
      if (this.loginMsg.roleId == 4) {
        localStorage.setItem('username', this.loginMsg.username)
        this.router.navigate(['userDashboard']);
      } else  {
        this.router.navigate(['adminDashboard']);
      }
    })

  }


}


