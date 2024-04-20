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
  statucode: number = 400
  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl('')

  });
  constructor(private router: Router, private loginService: LoginService) { }



  LoginHandler() {
    this.loginService.Login(this.loginForm.value).subscribe((resData: any) => {

      if (resData.statucode === 400) { alert("Please Enter Valid Username and Password") } else {
        if (resData.roleId == 4) {
          localStorage.setItem('username', resData.username)
          localStorage.setItem('officertype', resData.officertype)
          this.router.navigate(['userDashboard']);
        } else if (resData.roleId == 1) {
          localStorage.setItem('username', resData.username)
          localStorage.setItem('officertype', resData.officertype)
          this.router.navigate(['adminDashboard']);
        } else {
          alert("Please Enter Valid Username and Password")
        }
      }







    })



  }


}


