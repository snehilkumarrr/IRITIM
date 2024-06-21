import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  username = localStorage.getItem('uname')
  constructor(private router: Router) { }
  createCourses() {
    this.router.navigate(['CreateCourse']);
  }
  viewCourse() {
    this.router.navigate(['ViewCourse']);
  }
  HostelRequestHandler() {
    this.router.navigate(['HostelRequest']);
  }

  VehicleRequestHandler() {
    this.router.navigate(['VehicleReq']);
  }
  CreateCoordinator() {
    this.router.navigate(['CreateCoordinator']);
  }
  ViewCoordinator() {
    this.router.navigate(['ViewCoordinator']);
  }
  Faculty(){
    this.router.navigate(['ViewFaculty'])
  }
  ViewAppliedCourse(){
    this.router.navigate(['AppliedCourse'])
  }
}

