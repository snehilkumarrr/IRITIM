import { Component } from '@angular/core';
import { SignupService } from './signup.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import FormsModule
import { HrmsService } from 'src/app/services/hrms.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  file: File | null = null;
  formData: FormData = new FormData();
  uploadedFileName: string = '';
  employeeId: Boolean | undefined;
  railwaysData: any
  SuccessMsg: any;
  EmployeeDetail: any;
  showOtherGroupInput = false;
  selectedGroup: string | null = null;
  grades: string[] = [];
  departments: string[] = [];
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
    organization: new FormControl(null),

    otherGroupName:new FormControl(''),
  })

  emptype: any



  constructor(private hrmsdetail: HrmsService, private signupservice: SignupService) {

  }

  getValue(hrmsIdValue: string) {
    console.log('HRMS ID:', hrmsIdValue);
    this.hrmsdetail.getEmp(hrmsIdValue).subscribe((resData: any) => {
      console.log(resData)
      this.SignupForm = new FormGroup({
        employeetype: new FormControl(this.emptype),
        hrmsid: new FormControl(resData.emp_hrms_id),
        name: new FormControl(resData.employee_name),
        usernamehindi: new FormControl(null),
        gender: new FormControl(resData.gender),
        dob: new FormControl(resData.date_of_birth),
        dateofappointment: new FormControl(resData.appointment_date),
        group: new FormControl(resData.group),
        grade: new FormControl(resData.railway_grade),
        department: new FormControl(resData.substantive_dept_name),
        emailid: new FormControl(resData.emp_email_id),
        whatsappno: new FormControl(resData.mobile_no),
        division: new FormControl(resData.railway_main_unit),
        zone: new FormControl(resData.zone_name),
        placeofposting: new FormControl(resData.railway_unit_name),
        designationinhindi: new FormControl(null),
        designationineng: new FormControl(resData.desig_desc),
        divyangjan: new FormControl(resData.handicap_flag),
        education: new FormControl(resData.highest_qualification),
        organization: new FormControl(null),
        earlierTraining: new FormControl('No'),
        remark: new FormControl(null)
      })
    })
    // You can perform further actions with the value here
  }

  onGroupChange(event: any): void {
    this.selectedGroup = event.target.value;
    this.updateGrades();
    this.updateDepartments();
  }

  updateGrades(): void {
    if (this.selectedGroup == 'groupA') {
      this.grades = ['grade 1', 'grade 2'];
    } else if (this.selectedGroup == 'groupB') {
      this.grades = ['grade 3', 'grade 4'];
    } else if (this.selectedGroup == 'groupC') {
      this.grades = ['grade 5', 'grade 6'];
    } else {
      this.grades = [];
    }
    this.SignupForm.get('grade')?.reset();
    if (this.selectedGroup != 'otherGroup') {
      this.SignupForm.get('otherGroupName')?.reset();
    }
  }

  updateDepartments(): void {
    if (this.selectedGroup == 'groupA' || this.selectedGroup == 'groupB') {
      this.departments = ['dept 1', 'dept 2'];
    } else if (this.selectedGroup == 'groupC') {
      this.departments = ['dept 3', 'dept 4'];
    } else {
      this.departments = [];
    }
    this.SignupForm.get('department')?.reset();
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileSize = file.size;
    const fileKb = fileSize / 1024; // Calculate file size in KB
  
    if (fileKb <= 50) {
      this.file = file;
    } else {
      alert('File size exceeds 50 KB');
      this.file = null;
      event.target.value = '';
    }
  }
  

  EmployeeTypeHandler(data: any) {
    console.log(data.target.value)
    this.emptype = data.target.value
  }


  signupHandler() {
    if (this.SignupForm.valid && this.file) {
      this.formData = new FormData();
      this.formData.append('employeetype', this.SignupForm.get('employeetype')?.value);
      this.formData.append('hrmsid', this.SignupForm.get('hrmsid')?.value);
      this.formData.append('name', this.SignupForm.get('name')?.value);
      this.formData.append('usernamehindi', this.SignupForm.get('usernamehindi')?.value);
  
      this.formData.append('gender', this.SignupForm.get('gender')?.value);
      this.formData.append('dob', this.SignupForm.get('dob')?.value);
      this.formData.append('dateofappointment', this.SignupForm.get('dateofappointment')?.value);
      this.formData.append('group', this.SignupForm.get('group')?.value);
  
      this.formData.append('grade', this.SignupForm.get('grade')?.value);
      this.formData.append('department', this.SignupForm.get('department')?.value);
      this.formData.append('emailid', this.SignupForm.get('emailid')?.value);
      this.formData.append('whatsappno', this.SignupForm.get('whatsappno')?.value);
  
      this.formData.append('division', this.SignupForm.get('division')?.value);
      this.formData.append('zone', this.SignupForm.get('zone')?.value);
      this.formData.append('placeofposting', this.SignupForm.get('placeofposting')?.value);
      this.formData.append('designationinhindi', this.SignupForm.get('designationinhindi')?.value);
  
      this.formData.append('designationineng', this.SignupForm.get('designationineng')?.value);
      this.formData.append('divyangjan', this.SignupForm.get('divyangjan')?.value);
      this.formData.append('education', this.SignupForm.get('education')?.value);
      this.formData.append('organization', this.SignupForm.get('organization')?.value);

      this.formData.append('earlier_attend_training', this.SignupForm.get('earlierTraining')?.value);
      this.formData.append('remark', this.SignupForm.get('organization')?.value);
      this.formData.append('file', this.file);
          this.signupservice.saveUser(this.formData).subscribe((resData) => {
        console.log(resData);
        this.SuccessMsg = resData
        // alert(this.SuccessMsg.message)
        Swal.fire({
          title: "SignUp",
          text: this.SuccessMsg.message,
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
        
      })
    }else{
      alert('Form is invalid or file not selected');
    }

  }


}
