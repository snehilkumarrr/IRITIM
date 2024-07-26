import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class CreateFacultyComponent {

  Sucessmsg: any
  createFacultyForm: FormGroup = new FormGroup({

    fname: new FormControl(null),
    fempid: new FormControl(null),
    fmobileno: new FormControl(null),
    femailid: new FormControl(null)

  })


  constructor(private  Faculty : FacultyService, private router: Router){}



  FacultyHandler() {
    
    console.log(this.createFacultyForm.value)
    this.Faculty.addFaculty(this.createFacultyForm.value).subscribe((resData:any)=>{
      console.log(resData)
      if (resData.statuscode == 400) {
        Swal.fire({
          title: "Warning",
          text: resData.message,
          icon: "warning"
        });
      }
      else {
        Swal.fire({
          title: "Success",
          text: resData.message,
          icon: "success"
        });
      }
    })
    
  }
  ViewFaculty() {
    this.router.navigate(['ViewFaculty'])
  }






}
