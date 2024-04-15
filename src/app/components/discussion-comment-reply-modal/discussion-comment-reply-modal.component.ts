import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionForum } from 'src/app/discussion.forum.service';
@Component({
  selector: 'app-discussion-comment-reply-modal',
  templateUrl: './discussion-comment-reply-modal.component.html',
  styleUrls: ['./discussion-comment-reply-modal.component.css']
})
export class DiscussionCommentReplyModalComponent {
  @Input() public commentModel:any;
  @Input() public pageNo:any;
  message:any=null;
  colorClass:any;
  topicCommentModel:any;
  constructor(private discussionForum: DiscussionForum,public activeModal: NgbActiveModal) {
  
  }
ngOnInit()
{
  this.topicCommentModel={"discussionTopicId":this.commentModel.discussionTopicId,"parentCommentId":this.commentModel.parentCommentId,"comment":""}
}
  replyCommentSubmit(form:NgForm){
    if(this.topicCommentModel.comment.trim()!=""){
      this.discussionForum.addComment(this.topicCommentModel,this.pageNo).subscribe((data) => {
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
