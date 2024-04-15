import { Component } from '@angular/core';
import { DiscussionForum } from 'src/app/discussion.forum.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionTopicListModalComponent } from '../discussion-topic-list-modal/discussion-topic-list-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-discussion-topic-list',
  templateUrl: './discussion-topic-list.component.html',
  styleUrls: ['./discussion-topic-list.component.css']
})
export class DiscussionTopicListComponent {
  searchTopic:any=null;
  topicModel:any;
  message:any=null;
  pageNo:any=1;
  colorClass:any;
  constructor(private route: ActivatedRoute,private discussionForum: DiscussionForum,public modalService: NgbModal,private router : Router) {

  }
  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.pageNo=params['pageNo'];
    this.discussionForum.listAllTopics(this.searchTopic,this.pageNo).subscribe((data) => {
      this.topicModel = data;
    });
  });
  const navigation = this.router.getCurrentNavigation();
  if(navigation!=null){
    const state = navigation.extras.state as {searchTopic: string};
    this.searchTopic = (state!=null)?state.searchTopic:null;
  }
}
  addTopicModal() {
    const modalRef = this.modalService.open(DiscussionTopicListModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.topicModel=result;
        this.pageNo=1;
        this.searchTopic="";
        this.message="Topic Added Successfully";
        this.colorClass = "text-success";
      }else{
        this.message="Some error occured";
        this.colorClass = "text-danger";      
      }
    });
  }

  closeTopic(topicId:any){
    const topicModel = {"id":topicId,"searchTopic":this.searchTopic};
    this.discussionForum.closeTopic(topicModel,this.pageNo).subscribe((data) => {
      this.topicModel = data;
      this.message="Topic Closed Successfully";
      this.colorClass = "text-success";
    },
    (err: HttpErrorResponse) => {  
      this.message="Some error occured";
        this.colorClass = "text-danger";  
    }
    
    );
    return false;
  }

  searchTopicFromList(){
    if(this.searchTopic.trim()!=""){
      this.discussionForum.listAllTopics(this.searchTopic,this.pageNo).subscribe((data) => {
        this.topicModel = data;
      });
    }else{
      this.message="Please fill the search box";
      this.colorClass = "text-danger"; 
    }

  }

  clearSearch(){
    this.searchTopic=null;
    this.discussionForum.listAllTopics(this.searchTopic,this.pageNo).subscribe((data) => {
      this.topicModel = data;
    });
  }
}
