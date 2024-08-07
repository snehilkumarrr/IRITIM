import { Component } from '@angular/core';
import { CoursesService } from "../../courses.service"
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-applied-course',
  templateUrl: './applied-course.component.html',
  styleUrls: ['./applied-course.component.css']
})
export class AppliedCourseComponent {
  scheduleCourse: any
  usercourses: any

  file: File | null = null;
  formData: FormData = new FormData();
  uploadedFileName: string = '';
  courseapplyform: FormGroup = new FormGroup({
    courseid: new FormControl(null),
    userid: new FormControl(localStorage.getItem('username'))
  })
  constructor(private Courses: CoursesService,) {
    this.Courses.getScheduleCourse().subscribe((resData) => {
      // console.log(resData)
      this.scheduleCourse = resData
    })

    this.Courses.UserAppliedCourse(localStorage.getItem('username')).subscribe((resData: any) => {
      // console.log(resData)
      this.usercourses = resData

    })



  }

  // courseapplyHandler() {
  //   console.log(this.courseapplyform.value)
  //   this.Courses.CourseApply(this.courseapplyform.value).subscribe((resData: any) => {
  //     console.log(resData)
  //     // alert(resData.message)
  //     Swal.fire({
  //       title: "Success",
  //       text: resData.message,
  //       icon: "success"
  //     });
  //      window.location.reload();
  //   })


  // }

  courseapplyHandler() {
    if (this.courseapplyform.valid && this.file) {
      this.formData = new FormData();
      this.formData.append('id', this.courseapplyform.get('courseid')?.value);
      this.formData.append('nominationFile', this.file);

      this.Courses.CourseApply(this.formData).subscribe((resData: any) => {
        console.log(resData);
        Swal.fire({
          title: 'Success',
          text: resData.message,
          icon: 'success'
        });
      });
    } else {
      alert('Form is invalid or file not selected');
    }
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileSize = file.size;
    const fileMb = fileSize / 1024 / 1024; // Adjusted to calculate MB correctly

    if (fileMb <= 10) {
      this.file = file;
    } else {
      alert('File size exceeds 10 MB');
      this.file = null;
    }
  }

  // editCourse(id:any){
  //   this.Courses.courseedit(id).subscribe((resData: any) => {
  //     console.log(resData)
  //     // alert(resData.message)
  //     Swal.fire({
  //       title: "Success",
  //       text: resData.message,
  //       icon: "success"
  //     });
  //      window.location.reload();
  //   })
  // }


}
