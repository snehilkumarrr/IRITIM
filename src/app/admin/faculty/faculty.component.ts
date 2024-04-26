import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {

  createFacultyForm: FormGroup = new FormGroup({

    fname: new FormControl(null),
    fempid: new FormControl(null),
    fmobileno: new FormControl(null),
    femailid: new FormControl(null)

  })


  constructor(private  Faculty : FacultyService){}



  FacultyHandler() {
    console.log(this.createFacultyForm.value)
    this.Faculty.addFaculty(this.createFacultyForm.value).subscribe((resData:any)=>{
      console.log(resData)
    })
  }
}
