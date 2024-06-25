import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http : HttpClient) { }

getTestimonials(){
return   this.http.get('https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getfeedback')
}
postfeedback(data:any){
  return this.http.post('https://testiritm.indianrailways.gov.in/IRITM/Dashboard/savefeedback',data)
}

}
