import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehicleReqListService {

  constructor(private http : HttpClient) {

  
   }
   showVehicle(){
    const url ="http://10.64.29.243:8080/IRITM/Dashboard/getAllVehicleRequest"
   return this.http.get(url)
   }
}
