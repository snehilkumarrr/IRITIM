import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import * as constants from '../../Shared/constants';
import { Utils } from 'src/app/Shared/Utils';
@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent {
  selectedArrivalBy: any;
  selectedDeptlBy: any;
  showChidren: any;
  userid = localStorage.getItem('username')
  hostelReq :any
  hostelform: FormGroup = new FormGroup({
    arrivaldatetime: new FormControl(null),
    arrivalby: new FormControl(null),
    departuredatetime: new FormControl(null),
    departureby: new FormControl(null),
    adults: new FormControl(null),
    children: new FormControl(null),
    userid: new FormControl(localStorage.getItem("username")),
    username: new FormControl(localStorage.getItem("uname"))
  })

  ArrivalTypeHandler(data: any) {
    // console.log(data.target.value)
    this.selectedArrivalBy = data.target.value
  }
  DeptTypeHandler(data: any) {
    this.selectedDeptlBy = data.target.value
  }

  constructor(private http: HttpClient) {

    if (localStorage.getItem('officertype') === "GAZETTED") {
      this.showChidren = true
    }
    this.http.get(constants.BASE_URL + `Dashboard/getHostelRequest/${this.userid}`, { headers: Utils.getHeader() }).subscribe((resData) => {
      console.log(resData)
      this.hostelReq = resData

    })

  }


  ApplyHostelHandler() {
    console.log(this.hostelform.value)
    this.http.post(constants.BASE_URL + 'Dashboard/hostelRequest', this.hostelform.value, { headers: Utils.getHeader() }).subscribe((resData: any) => {

      // alert(resData.message)

      Swal.fire({
        title: "Success",
        text: resData.message,
        icon: "success"
      });

    })


  }


}
