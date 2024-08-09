import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coordinator-dashboard-new',
  templateUrl: './coordinator-dashboard-new.component.html',
  styleUrls: ['./coordinator-dashboard-new.component.css']
})
export class CoordinatorDashboardNewComponent {
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
    this.router.navigate(['coordinator-applied-course-new'])
  }
  hostelManagement(){
    this.router.navigate(['HostelManagement'])
  }

  isButtonDisabled(button: string): boolean {
    return button !== 'AppliedCourse';
  }

}
