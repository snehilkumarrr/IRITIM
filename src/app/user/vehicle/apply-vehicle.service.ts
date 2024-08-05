import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
import { Utils } from 'src/app/Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class ApplyVehicleService {

  constructor(private http: HttpClient) {





  }
  getVehicle() {
   return this.http.get(constants.BASE_URL + 'Dashboard/getVehicleRequest/ya0146', { headers: Utils.getHeader() })
  }
  VehicleRequest(data: any) {
    const url = constants.BASE_URL + 'Dashboard/VehicleRequest'
    return this.http.post(url, data, { headers: Utils.getHeader() })


  }

}
