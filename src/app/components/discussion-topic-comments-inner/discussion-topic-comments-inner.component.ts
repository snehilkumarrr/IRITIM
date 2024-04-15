import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionCommentReplyModalComponent } from '../discussion-comment-reply-modal/discussion-comment-reply-modal.component';

@Component({
  selector: 'app-discussion-topic-comments-inner',
  templateUrl: './discussion-topic-comments-inner.component.html',
  styleUrls: ['./discussion-topic-comments-inner.component.css']
})
export class DiscussionTopicCommentsInnerComponent {
  @Input() public innerCommentList:any;
  @Input() public topicId:any;
  @Input() public pageNo:any;
  @Input() public open:any;
  @Output() topicCommentListModel = new EventEmitter();
  constructor(public modalService: NgbModal) {
   
  }
  replyCommentModel(topicCommentModel:any){
    var commentModel = {"discussionTopicId":this.topicId,"parentCommentId": topicCommentModel.id,"comment": topicCommentModel.comment,"createdBy": topicCommentModel.createdBy,"createdAt": topicCommentModel.createdAt}
    const modalRef = this.modalService.open(DiscussionCommentReplyModalComponent);
    modalRef.componentInstance.commentModel =commentModel;
    modalRef.componentInstance.pageNo =this.pageNo;
    modalRef.result.then((result) => {
      if (result) {
        this.topicCommentListModel.emit(result);
      }else{
        this.topicCommentListModel.emit(null);
      }
    });
    return false;
  }

  receiveTopicCommentListModel(topicCommentListModel: any) {
    if(topicCommentListModel!=null){
      this.topicCommentListModel.emit(topicCommentListModel);
    }else{
      this.topicCommentListModel.emit(null);    
    }
  }
}
