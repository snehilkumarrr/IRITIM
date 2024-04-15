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
      let url = "http://172.16.14.78:8080/discussionForum/listAllTopics/"+pageNo;
      return this.http.get(url,{params: queryParams });
    }else{
      let url = "http://172.16.14.78:8080/discussionForum/listAllTopics/"+pageNo;
      return this.http.get(url);
    }
  }

  addTopic(topicModel:any){
    let url = "http://172.16.14.78:8080/discussionForum/addTopic";
    return this.http.post(url,topicModel);
  }

  getCommentsByTopic(topicId:any,pageNo:any){
    let url = "http://172.16.14.78:8080/discussionForum/getCommentsByTopic/"+topicId+"/"+pageNo;
    return this.http.get(url);
  }

  addComment(topicCommentModel:any,pageNo:any){
    let url = "http://172.16.14.78:8080/discussionForum/addComment/"+pageNo;
    return this.http.post(url,topicCommentModel);
  }

  closeTopic(topicModel:any,pageNo:any){
    let url = "http://172.16.14.78:8080/discussionForum/closeTopic/"+pageNo;
    return this.http.post(url,topicModel);
  }
  
}





