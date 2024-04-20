import { Component } from '@angular/core';
import { SignupService } from './signup.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import FormsModule
import { HrmsService } from 'src/app/services/hrms.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  employeeId: Boolean | undefined;
  railwaysData: any
  SuccessMsg: any;
  EmployeeDetail: any
  SignupForm: FormGroup = new FormGroup({
    employeetype: new FormControl(null),
    hrmsid: new FormControl("",),
    name: new FormControl(null),
    usernamehindi: new FormControl(null),
    gender: new FormControl(null),
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

  emptype: any



  constructor(private hrmsdetail: HrmsService, private signupservice: SignupService) {

  }

  getValue(hrmsIdValue: string) {
    console.log('HRMS ID:', hrmsIdValue);
    this.hrmsdetail.getEmp(hrmsIdValue).subscribe((resData: any) => {
      console.log(resData)
      this.SignupForm = new FormGroup({
        employeetype: new FormControl(null),
        hrmsid: new FormControl(resData.emp_hrms_id),
        name: new FormControl(resData.employee_name),
        usernamehindi: new FormControl(null),
        // gender: new FormControl(resData.gender),
        // dob: new FormControl(resData.dob),
        // dateofappointment: new FormControl(resData.dateofappointment),
        // group: new FormControl(resData.group),
        // grade: new FormControl(resData.grade),
        // department: new FormControl(resData.railway_unit_name),
        emailid: new FormControl(resData.email),
        whatsappno: new FormControl(resData.mobile_no),
        division: new FormControl(resData.railway_main_unit),
        zone: new FormControl(resData.zone),
        placeofposting: new FormControl(resData.railway_unit_name),
        designationinhindi: new FormControl(null),
        designationineng: new FormControl(resData.designation),
        divyangjan: new FormControl(null),
        education: new FormControl(null),
        organization: new FormControl(null)
      })
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
      alert(this.SuccessMsg.message)
    })
  }


}
