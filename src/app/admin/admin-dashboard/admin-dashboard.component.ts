import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
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
  CreateCoordinator() {
    this.router.navigate(['CreateCoordinator']);
  }
  ViewCoordinator(){
    this.router.navigate(['ViewCoordinator']);
  }
}
