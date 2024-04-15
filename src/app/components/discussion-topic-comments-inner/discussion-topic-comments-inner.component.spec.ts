import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionTopicCommentsInnerComponent } from './discussion-topic-comments-inner.component';

describe('DiscussionTopicCommentsInnerComponent', () => {
  let component: DiscussionTopicCommentsInnerComponent;
  let fixture: ComponentFixture<DiscussionTopicCommentsInnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionTopicCommentsInnerComponent]
    });
    fixture = TestBed.createComponent(DiscussionTopicCommentsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
