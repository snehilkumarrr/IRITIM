import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {



  constructor(private http: HttpClient) { }
  getzoneType(data: any) {
    const url = constants.BASE_URL + `Dashboard/getzonebytype/${data}`;
    return this.http.get(url)
  }
  getDivision(data: any) {
    const url = constants.BASE_URL + `Dashboard/getdivision/${data}`
    return this.http.get(url)
  }

}
