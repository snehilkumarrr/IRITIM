import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RailwayTypeService {
  url = 'http://172.16.14.78:8080/Dashboard/getzonebytype/';

  constructor(private http: HttpClient) { }

  getPoP() {
    // Create a HttpParams object and append your parameters
    let params = new HttpParams();
    params = params.append('type', 'fruits');
    params = params.append('fields', '_all');

    // Pass the params object to the get method
    return this.http.get(this.url, { params });
  }
}
