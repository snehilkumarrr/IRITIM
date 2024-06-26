import { Component } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent {

  FacultyDetails: any
  constructor(private router: Router, private Faculty: FacultyService) {

    this.Faculty.getFaculty().subscribe((resData: any) => {
      // console.log(resData)
      this.FacultyDetails = resData
    })
  }


  createfaculty() {
    this.router.navigate(['CreateFaculty']);
  }
  // deleteFaculty(id: number) {
  //   console.log(id)
  //   this.Faculty.facultydelete(id).subscribe((resData:any) => {
  //     console.log(resData)
  //   })
  // }

  editfaculty(id:number){
    this.router.navigate([`/EditFaculty//${id}`]);
  }


}
