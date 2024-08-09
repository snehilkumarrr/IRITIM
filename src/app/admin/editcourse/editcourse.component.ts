import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import * as constants from '../../Shared/constants';
import { Utils } from 'src/app/Shared/Utils';
@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent {
  id: any;
  userDetail: any = [{}];
  appliescourse: any;
  file: File | null = null;
  formData: FormData = new FormData();

  editcourseform: FormGroup = new FormGroup({
    coursename: new FormControl(null),
    coursecode: new FormControl(null),
    coursedescription: new FormControl(null),
  });
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http
      .get(constants.BASE_URL + `Dashboard/getcoursewithid/${this.id}`, { headers: Utils.getHeader() })
      .subscribe((resData: any) => {
        // console.log(resData);
        this.editcourseform = new FormGroup({
          coursename: new FormControl(resData.courseName),
          coursecode: new FormControl(resData.courseCode),
          coursedescription: new FormControl(resData.courseDescription),
        });
      });
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

  editCourseHandler() {
    if(this.file!=null){
      this.formData.append('coursename', this.editcourseform.get('coursename')?.value);
      this.formData.append('coursecode', this.editcourseform.get('coursecode')?.value);
      this.formData.append('coursedescription', this.editcourseform.get('coursedescription')?.value);
      this.formData.append('file', this.file);
      this.http
      .put(
        constants.BASE_URL + `Dashboard/editcourse1/${this.id}`,
        this.formData, { headers: Utils.getMultipartHeader() }
      )
      .subscribe((resData: any) => {
        console.log(resData);
        // alert(resData.msg);
        Swal.fire({
          title: "Success",
          text: resData.msg,
          icon: "success"
        });
      });
      this.router.navigate(['/ViewCourse']);
    }


  }
}
