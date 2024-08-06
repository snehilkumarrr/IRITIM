import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import * as constants from './Shared/constants';
import { Utils } from './Shared/Utils';
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
      let url = constants.BASE_URL + 'discussionForum/listAllTopics/"+pageNo';
      return this.http.get(url,{params: queryParams,  headers: Utils.getHeader() });
    }else{
      let url = constants.BASE_URL + 'discussionForum/listAllTopics/"+pageNo';
      return this.http.get(url, { headers: Utils.getHeader() });
    }
  }

  addTopic(topicModel:any){
    let url = constants.BASE_URL + 'discussionForum/addTopic"';
    return this.http.post(url,topicModel, { headers: Utils.getHeader() });
  }

  getCommentsByTopic(topicId:any,pageNo:any){
    let url = constants.BASE_URL + 'discussionForum/getCommentsByTopic/"+topicId+"/"+pageNo';
    return this.http.get(url, { headers: Utils.getHeader() });
  }

  addComment(topicCommentModel:any,pageNo:any){
    let url = constants.BASE_URL + 'discussionForum/addComment/"+pageNo';
    return this.http.post(url,topicCommentModel, { headers: Utils.getHeader() });
  }

  closeTopic(topicModel:any,pageNo:any){
    let url = constants.BASE_URL + 'discussionForum/closeTopic/"+pageNo';
    return this.http.post(url,topicModel, { headers: Utils.getHeader() });
  }
  
}





