import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscussionForum } from 'src/app/discussion.forum.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionCommentReplyModalComponent } from '../discussion-comment-reply-modal/discussion-comment-reply-modal.component';

@Component({
  selector: 'app-discussion-topic-comments',
  templateUrl: './discussion-topic-comments.component.html',
  styleUrls: ['./discussion-topic-comments.component.css']
})
export class DiscussionTopicCommentsComponent {
  topicId:any;
  pageNo:any;
  message:any=null;
  colorClass:any;
  topicCommentListModel:any;
  constructor(private route: ActivatedRoute,private discussionForum: DiscussionForum,public modalService: NgbModal) {
   
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topicId=params['topicId'];
      this.pageNo=params['pageNo'];
      this.discussionForum.getCommentsByTopic(this.topicId,this.pageNo).subscribe((data) => {
        this.topicCommentListModel=data;
      });
    });
  }
  replyCommentModel(topicModel:any){
    var commentModel = {"discussionTopicId":topicModel.id,"parentCommentId": null,"comment": topicModel.topic,"createdBy": topicModel.createdBy,"createdAt": topicModel.createdAt}
    const modalRef = this.modalService.open(DiscussionCommentReplyModalComponent);
    modalRef.componentInstance.commentModel =commentModel;
    modalRef.componentInstance.pageNo =1;
    modalRef.result.then((result) => {
      if (result) {
        this.topicCommentListModel=result;
        this.pageNo = 1;
        this.message="Commented Successfully";
        this.colorClass = "text-success";
      }else{
        this.message="Some error occured";
        this.colorClass = "text-danger";      
      }
    });
    return false;
  }

  receiveTopicCommentListModel(topicCommentListModel: any) {
    if(topicCommentListModel!=null){
      this.topicCommentListModel = topicCommentListModel;
      this.message="Commented Successfully";
      this.colorClass = "text-success";
    }else{
      this.message="Some error occured";
      this.colorClass = "text-danger";      
    }
  }
}
