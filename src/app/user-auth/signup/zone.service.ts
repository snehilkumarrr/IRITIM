import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {



  constructor(private http: HttpClient) { }
  getzoneType(data: any) {
    const url = `http://172.16.14.78:8080/Dashboard/getzonebytype/${data}`;
    return this.http.get(url)
  }
  getDivision(data: any) {
    const url = `http://172.16.14.78:8080/Dashboard/getdivision/${data}`
    return this.http.get(url)
  }

}
