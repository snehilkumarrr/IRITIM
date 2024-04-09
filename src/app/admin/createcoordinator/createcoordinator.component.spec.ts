import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecoordinatorComponent } from './createcoordinator.component';

describe('CreatecoordinatorComponent', () => {
  let component: CreatecoordinatorComponent;
  let fixture: ComponentFixture<CreatecoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecoordinatorComponent]
    });
    fixture = TestBed.createComponent(CreatecoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
