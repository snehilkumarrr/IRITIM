import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.css']
})
export class EditFacultyComponent {
  id: any;
  facultyeditform: FormGroup = new FormGroup({

    fname: new FormControl(null),
    fempid: new FormControl(null),
    fmobileno: new FormControl(null),
    femailid: new FormControl(null)



  })
  constructor(private route: ActivatedRoute, private Faculty: FacultyService) {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.id = this.route.snapshot.paramMap.get('id');
    this.Faculty.getFacultywithId(this.id).subscribe((resData: any) => {
   console.log(resData)
      this.facultyeditform = new FormGroup({

        fname: new FormControl(resData.fname),
        fempid: new FormControl(resData.fempid),
        fmobileno: new FormControl(resData.fmobileno),
        femailid: new FormControl(resData.femailid)



      })
    })

  }
  facultyeditHandler() {
    this.Faculty.editFaculty(this.facultyeditform.value, this.id).subscribe((resData: any) => {
      console.log(resData)
    })
  }
}
