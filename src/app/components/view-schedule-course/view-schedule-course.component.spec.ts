import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScheduleCourseComponent } from './view-schedule-course.component';

describe('ViewScheduleCourseComponent', () => {
  let component: ViewScheduleCourseComponent;
  let fixture: ComponentFixture<ViewScheduleCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewScheduleCourseComponent]
    });
    fixture = TestBed.createComponent(ViewScheduleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
