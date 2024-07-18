import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from './Shared/constants';
@Injectable({
  providedIn: 'root'
})
export class CommonContentService {

  
  constructor(private http: HttpClient) { }

  getContent(data:any){
    const url =constants.BASE_URL + `Dashboard/getcontent/${data}`
    return this.http.get(url,data)
  }


}





