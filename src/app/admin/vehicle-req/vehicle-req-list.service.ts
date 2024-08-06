import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
import { Utils } from 'src/app/Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class VehicleReqListService {

  constructor(private http : HttpClient) {

  
   }
   showVehicle(){
    const url =constants.BASE_URL + 'Dashboard/getAllVehicleRequest'
   return this.http.get(url, { headers: Utils.getHeader() })
   }
}
