import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http : HttpClient) { }

getTestimonials(){
return   this.http.get('http://172.16.14.78:8080/Dashboard/getfeedback')
}
postfeedback(data:any){
  return this.http.post('http://172.16.14.78:8080/Dashboard/savefeedback',data)
}

}
