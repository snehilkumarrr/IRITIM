import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {



  constructor(private http: HttpClient) { }
  getzoneType(data: any) {
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getzonebytype/${data}`;
    return this.http.get(url)
  }
  getDivision(data: any) {
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getdivision/${data}`
    return this.http.get(url)
  }

}
