import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent {
  selectedArrivalBy: any;
  selectedDeptlBy: any;
  hostelform: FormGroup = new FormGroup({
    arrivaldatetime: new FormControl(null),
    arrivalby: new FormControl(null),
    departuredatetime: new FormControl(null),
    departureby: new FormControl(null),
    adults: new FormControl(null),
    children: new FormControl(null),
    userid: new FormControl(localStorage.getItem('username'))
  })

  ArrivalTypeHandler(data: any) {
    // console.log(data.target.value)
    this.selectedArrivalBy = data.target.value
  }
  DeptTypeHandler(data: any) {
    this.selectedDeptlBy = data.target.value
  }

  constructor(private http: HttpClient) { }


  ApplyHostelHandler() {
    console.log(this.hostelform.value)
    this.http.post('http://172.16.14.78.:8080/Dashboard/hostelRequest', this.hostelform.value).subscribe((resData: any) => {

      alert(resData.message)
    })


  }


}
