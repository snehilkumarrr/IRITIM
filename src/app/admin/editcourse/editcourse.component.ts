import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent {
  id: any;
  userDetail: any = [{}];

  editcourseform: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getCourse();
  }

  getCourse() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`https://dummyjson.com/users/${this.id}`)
      .subscribe((resData: any) => {
        this.editcourseform = new FormGroup({
          firstname: new FormControl(resData.firstName),
          lastname: new FormControl(resData.lastName),
        });
      });
  }
  editCourseHandler() {
    console.log(this.editcourseform.value);
  }
}
