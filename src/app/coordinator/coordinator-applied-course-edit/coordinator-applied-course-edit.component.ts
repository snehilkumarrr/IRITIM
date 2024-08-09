import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import { LoginService } from 'src/app/user-auth/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'coordinator-applied-course-edit',
  templateUrl: './coordinator-applied-course-edit.component.html',
  styleUrls: ['./coordinator-applied-course-edit.component.css']
})
export class CoordinatorAppliedCourseEditComponent {
  coordinatorcourses: any[] = []; // Initialize as an array
  ItemsArray: any;
  loading: boolean = false;

  constructor(private courseDetail: CoursesService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.courseDetail.getAllappliedCourse().subscribe((res) => {
      this.ItemsArray = res;
    });

    this.courseDetail.CoordinatorAppliedCourse(localStorage.getItem('username')).subscribe((resData: any) => {
      this.coordinatorcourses = resData;
    });
  }

  editApplyCourse(appliescourse: any) {
    console.log(appliescourse); // Debugging: check the object
    
    const userName = localStorage.getItem('username')|| '';

    // Show the loader
    this.loading = true;

    const payload = {
      id: appliescourse.id,
      status: appliescourse.status, // Ensure this is the numerical value as a string
      coordinatorUserId: userName,
      coordinatorMsg: appliescourse.coordinatorMsg
    };

    // Call the service to update the course
    this.courseDetail.CoordinatorAppliedCourseEdit(payload).subscribe(
      (resData: any) => {
        console.log(resData);
        Swal.fire({
          title: 'Success',
          text: resData.message,
          icon: 'success'
        });
         // Hide the loader
         this.loading = false;
    this.router.navigate(['coordinator-applied-course-new']);

      },
      // Optional: Navigate to another page after update      
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'There was an error updating the course. Please try again.',
          icon: 'error'
        });
         // Hide the loader
         this.loading = false;
      }
    );

  }
}
