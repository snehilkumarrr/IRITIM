import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-applied-course',
  templateUrl: './edit-applied-course.component.html',
  styleUrls: ['./edit-applied-course.component.css']
})
export class EditAppliedCourseComponent implements OnInit {
  appliescourse: any;
  file: File | null = null;
  formData: FormData = new FormData();

  constructor(private route: ActivatedRoute, private Courses: CoursesService,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['appliescourse']) {
        this.appliescourse = JSON.parse(params['appliescourse']);
      }
    });
    console.log("----" + JSON.stringify(this.appliescourse))
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

  editApply(){
    if(this.file!=null){
      this.formData.append('nominationFile', this.file);
      this.formData.append('id', this.appliescourse.id);
      this.Courses.EditAppliedCourse(this.formData).subscribe((resData: any) => {
        console.log(resData)
        // alert(resData.message)
        Swal.fire({
          title: "Success",
          text: resData.message,
          icon: "success"
        });
      })
      this.router.navigate(['/ApplyCourse']);
    }

  }
}
