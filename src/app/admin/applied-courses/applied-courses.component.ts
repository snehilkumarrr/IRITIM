import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-applied-courses',
  templateUrl: './applied-courses.component.html',
  styleUrls: ['./applied-courses.component.css']
})
export class AppliedCoursesComponent {
  ItemsArray: any;
  constructor(private courseDetail: CoursesService, private router: Router) { }
  ngOnInit() {

    this.courseDetail.getAllappliedCourse().subscribe((res) => {
      this.ItemsArray = res
    })

  }

  ViewAdminDashboard() {
    this.router.navigate(['adminDashboard'])
  }
  // deleteCourse(id: any) {
  //   console.log(id)
  //   this.courseDetail.CourseDelete(id).subscribe((resData: any) => {
  //     console.log(resData)
  //     alert(resData.message)
  //     window.location.reload();
  //   })
  // }

}
