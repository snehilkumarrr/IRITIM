import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {



  constructor(private http: HttpClient) { }
  getzoneType(data: any) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/getzonebytype/${data}`;
    return this.http.get(url)
  }
  getDivision(data: any) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/getdivision/${data}`
    return this.http.get(url)
  }

}
