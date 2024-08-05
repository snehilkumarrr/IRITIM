import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css'],
})
export class CreatecourseComponent {

    file: File | null = null;
  formData: FormData = new FormData();
  uploadedFileName: string = '';

  createcourseform: FormGroup = new FormGroup({
    coursename: new FormControl(null, Validators.required),
    coursecode: new FormControl(null, Validators.required),
    coursedescription: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    advertisement: new FormControl(null),
    file: new FormControl(null, Validators.required)
  });

  constructor(private crcourse: CoursesService,private router: Router) { }

  createCourseHandler() {
    if (this.createcourseform.valid && this.file) {
      this.formData = new FormData();
      this.formData.append('coursename', this.createcourseform.get('coursename')?.value);
      this.formData.append('coursecode', this.createcourseform.get('coursecode')?.value);
      this.formData.append('coursedescription', this.createcourseform.get('coursedescription')?.value);
      this.formData.append('advertisement', this.createcourseform.get('advertisement')?.value);
      this.formData.append('file', this.file);

      this.crcourse.createcourse(this.formData).subscribe((resData: any) => {
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
  ViewCourseHandler() {
    this.router.navigate(['ViewCourse'])
  }
}
