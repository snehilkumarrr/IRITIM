import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hostel-reqts',
  templateUrl: './hostel-reqts.component.html',
  styleUrls: ['./hostel-reqts.component.css']
})
export class HostelReqtsComponent {
  HostelRequest: any

  constructor(private http: HttpClient) {

    this.http.get('https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getAllHostelRequest').subscribe((resData) => {
      console.log(resData)
      this.HostelRequest = resData
    })

  }

}
