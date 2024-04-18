import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import FormsModule
import { ToastrService } from 'ngx-toastr';
import { HrmsService } from 'src/app/services/hrms.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  employeeId: Boolean | undefined;
  railwaysData: any
  SuccessMsg: any;
  EmployeeDetail: any
  SignupForm!: FormGroup;

  emptype: any



  constructor(private toastr: ToastrService, private hrmsdetail: HrmsService, private signupservice: SignupService) {

  }

  getValue(hrmsIdValue: string) {
    console.log('HRMS ID:', hrmsIdValue);
    this.hrmsdetail.getEmp(hrmsIdValue).subscribe((resData) => {
      this.EmployeeDetail = resData
      console.warn(this.EmployeeDetail)

    })
    // You can perform further actions with the value here
  }



  EmployeeTypeHandler(data: any) {
    console.log(data.target.value)
    this.emptype = data.target.value
  }


  signupHandler() {
    console.log(this.SignupForm.value);
    this.signupservice.saveUser(this.SignupForm.value).subscribe((resData) => {
      console.log(resData);
      this.SuccessMsg = resData
      alert(this.SuccessMsg.message )
    })
  }

  ngOnInit() {

    this.SignupForm = new FormGroup({
      employeetype: new FormControl(this.emptype),
      hrmsid: new FormControl("", Validators.required),
      name: new FormControl(null),
      usernamehindi: new FormControl(null),
      gender: new FormControl("male"),
      dob: new FormControl(null),
      dateofappointment: new FormControl(null),
      group: new FormControl(null),
      grade: new FormControl(null),
      department: new FormControl(null),
      emailid: new FormControl(null),
      whatsappno: new FormControl(null),
      division: new FormControl(null),
      zone: new FormControl(null),
      placeofposting: new FormControl(null),
      designationinhindi: new FormControl(null),
      designationineng: new FormControl(null),
      divyangjan: new FormControl(null),
      education: new FormControl(null),
      organization: new FormControl(null)
    })

  }
}
