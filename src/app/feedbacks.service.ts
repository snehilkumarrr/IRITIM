import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http : HttpClient) { }

getTestimonials(){
return   this.http.get('http://10.64.29.243:8080/IRITM/Dashboard/getfeedback')
}
postfeedback(data:any){
  return this.http.post('http://10.64.29.243:8080/IRITM/Dashboard/savefeedback',data)
}

}
