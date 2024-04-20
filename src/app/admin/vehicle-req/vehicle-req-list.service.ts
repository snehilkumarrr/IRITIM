import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehicleReqListService {

  constructor(private http : HttpClient) {

  
   }
   showVehicle(){
    const url ="http://172.16.14.78:8080/Dashboard/getAllVehicleRequest"
   return this.http.get(url)
   }
}
