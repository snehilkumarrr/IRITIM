import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

username = localStorage.getItem("uname")
  constructor(private router: Router) {

  }


  ApplyCourse() {
    this.router.navigate(['ApplyCourse'])
  }
  vehicle() {
    this.router.navigate(['Vehicle'])
  }
  Hostel() { this.router.navigate(['Hostel']) }
  feedback() {
    this.router.navigate(['FeedBack'])
  }
}
