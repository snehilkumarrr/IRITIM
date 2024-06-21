import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent {
  id: any;
  userDetail: any = [{}];

  editcourseform: FormGroup = new FormGroup({
    coursename: new FormControl(null),
    coursecode: new FormControl(null),
    coursedescription: new FormControl(null),
  });
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`http://10.64.29.243:8080/IRITM/Dashboard/getcoursewithid/${this.id}`)
      .subscribe((resData: any) => {
        // console.log(resData);
        this.editcourseform = new FormGroup({
          coursename: new FormControl(resData.courseName),
          coursecode: new FormControl(resData.courseCode),
          coursedescription: new FormControl(resData.courseDescription),
        });
      });
  }

  editCourseHandler() {
    console.log(this.editcourseform.value);

    this.http
      .put(
        `http://10.64.29.243:8080/IRITM/Dashboard/editcourse/${this.id}`,
        this.editcourseform.value
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
  }
}
