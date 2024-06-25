import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DiscussionForum {

  headers:any = new HttpHeaders()
  .append("Content-Type", "application/json");
  constructor(private http: HttpClient) { 

  }

  listAllTopics(searchTopic:any,pageNo:any){
    if(searchTopic!=null){
      const queryParams = new HttpParams().set('searchTopic', searchTopic);
      let url = "https://testiritm.indianrailways.gov.in/IRITM/discussionForum/listAllTopics/"+pageNo;
      return this.http.get(url,{params: queryParams });
    }else{
      let url = "https://testiritm.indianrailways.gov.in/IRITM/discussionForum/listAllTopics/"+pageNo;
      return this.http.get(url);
    }
  }

  addTopic(topicModel:any){
    let url = "https://testiritm.indianrailways.gov.in/IRITM/discussionForum/addTopic";
    return this.http.post(url,topicModel);
  }

  getCommentsByTopic(topicId:any,pageNo:any){
    let url = "https://testiritm.indianrailways.gov.in/IRITM/discussionForum/getCommentsByTopic/"+topicId+"/"+pageNo;
    return this.http.get(url);
  }

  addComment(topicCommentModel:any,pageNo:any){
    let url = "https://testiritm.indianrailways.gov.in/IRITM/discussionForum/addComment/"+pageNo;
    return this.http.post(url,topicCommentModel);
  }

  closeTopic(topicModel:any,pageNo:any){
    let url = "https://testiritm.indianrailways.gov.in/IRITM/discussionForum/closeTopic/"+pageNo;
    return this.http.post(url,topicModel);
  }
  
}





