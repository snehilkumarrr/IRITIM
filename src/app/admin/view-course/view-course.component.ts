import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  ItemsArray: any;
  constructor(private courseDetail: CoursesService, private router: Router) { }
  ngOnInit() {

    this.courseDetail.getCourse().subscribe((res) => {
      this.ItemsArray = res
    })

  }
  createCourses() {
    this.router.navigate(['CreateCourse']);
  }
  editCourseHandler(id: number) {
    // console.log(id);
    this.router.navigate([`/Editcourse//${id}`]);
  }
  deleteCourse(id: any) {
    console.log(id)
    this.courseDetail.CourseDelete(id).subscribe((resData: any) => {
      console.log(resData)
      alert(resData.message)
      window.location.reload();
    })
  }
  SechduleCoure() {
    this.router.navigate(['ScheduleCourse'])
  }
}

