import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { DiscussionForum } from 'src/app/discussion.forum.service';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-discussion-topic-list-modal',
  templateUrl: './discussion-topic-list-modal.component.html',
  styleUrls: ['./discussion-topic-list-modal.component.css']
})
export class DiscussionTopicListModalComponent {
  message:any=null;
  colorClass:any;
  topicModel:any={topic:""};
 constructor(private discussionForum: DiscussionForum,public activeModal: NgbActiveModal) {
  
  }

  addTopicSubmit(form:NgForm) {
    if(this.topicModel.topic.trim()!=""){
    this.discussionForum.addTopic(this.topicModel).subscribe((data) => {
      this.activeModal.close(data);
    },
    (err: HttpErrorResponse) => {  
      this.activeModal.close(false);
    }
    
    );
  
  }else{
    this.message="Please fill mandatory field";
    this.colorClass = "text-danger";   
  }
}
  
}
