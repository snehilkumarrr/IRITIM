import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from './Shared/constants';
@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http : HttpClient) { }

getTestimonials(){
return   this.http.get(constants.BASE_URL + 'Dashboard/getfeedback')
}
postfeedback(data:any){
  return this.http.post(constants.BASE_URL+ 'Dashboard/savefeedback',data)
}

}
