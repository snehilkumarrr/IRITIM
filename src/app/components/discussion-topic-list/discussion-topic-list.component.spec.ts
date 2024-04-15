import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionTopicListComponent } from './discussion-topic-list.component';

describe('DiscussionTopicListComponent', () => {
  let component: DiscussionTopicListComponent;
  let fixture: ComponentFixture<DiscussionTopicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionTopicListComponent]
    });
    fixture = TestBed.createComponent(DiscussionTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
