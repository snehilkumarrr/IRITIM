import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
@Injectable({
  providedIn: 'root'
})
export class ApplyVehicleService {

  constructor(private http: HttpClient) {





  }
  getVehicle() {
   return this.http.get(constants.BASE_URL + 'Dashboard/getVehicleRequest/ya0146')
  }
  VehicleRequest(data: any) {
    const url = constants.BASE_URL + 'Dashboard/VehicleRequest'
    return this.http.post(url, data)


  }

}
