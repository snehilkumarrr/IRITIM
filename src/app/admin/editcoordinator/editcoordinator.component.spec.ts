import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcoordinatorComponent } from './editcoordinator.component';

describe('EditcoordinatorComponent', () => {
  let component: EditcoordinatorComponent;
  let fixture: ComponentFixture<EditcoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcoordinatorComponent]
    });
    fixture = TestBed.createComponent(EditcoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
