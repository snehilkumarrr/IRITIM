import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from './Shared/constants';
import { Utils } from './Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http : HttpClient) { }

getTestimonials(){
return   this.http.get(constants.BASE_URL + 'Dashboard/getfeedback', { headers: Utils.getHeader() })
}
postfeedback(data:any){
  return this.http.post(constants.BASE_URL+ 'Dashboard/savefeedback',data, { headers: Utils.getHeader() })
}

}
