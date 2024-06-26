import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
@Component({
  selector: 'app-hostel-reqts',
  templateUrl: './hostel-reqts.component.html',
  styleUrls: ['./hostel-reqts.component.css']
})
export class HostelReqtsComponent {
  HostelRequest: any

  constructor(private http: HttpClient) {

    this.http.get(constants.BASE_URL + 'Dashboard/getAllHostelRequest').subscribe((resData) => {
      console.log(resData)
      this.HostelRequest = resData
    })

  }

}
