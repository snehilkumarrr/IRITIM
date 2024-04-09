import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { SignupService } from "./signup.service"
import { ZoneService } from './zone.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  coursesData: any;
  selected: string = "Railways";
  employeeId: Boolean | undefined;
  selectGroup: string = "groupA";
  selectedPersonType: string = 'self'; // Initialize with a default value
  placeofposting: string = ''
  railwaydivisions: string | undefined;
  rlydivision :any
  cugNumber: number | undefined;
  sameNumberChecked: boolean = false;
  Msg: any;
  railwaysData: any

  constructor(private courseDetail: CoursesService, private userData: SignupService, private railwayType: ZoneService) {
    courseDetail.getCourse().subscribe((courseResponse) => {
      // console.log(data)
      this.coursesData = courseResponse;
    });
  }
  selectOption(value: string): void {
    this.selected = value; // Update the variable with the selected value
    // console.log(this.selected);
    if (this.selected == 'Railways') {
      this.employeeId = false;
      // console.log(this.employeeId)
    } else {
      this.employeeId = true;
    }
  }

  selectpop(value: string): void {
    // console.log(value)
    this.railwayType.getzoneType(value).subscribe((respData) => {
      // console.log(respData)
      this.railwaysData = respData
    })

  }

  selectDivision(value: string) {
    console.log(value)
    this.railwayType.getDivision(value).subscribe((resData)=>{
      console.log(resData)
      this.rlydivision =resData
    })
  }



  selectEmpGrp(value: string): void { }

  signupHandler(data: any) {
    // console.log(data);
    this.userData.saveUser(data).subscribe((jsonResp) => {
      console.log(jsonResp)
      this.Msg = jsonResp
      alert(this.Msg.msg)
    })
  }

  ngOnInit(): void { }
}
