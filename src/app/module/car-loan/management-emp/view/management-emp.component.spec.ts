import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEmpComponent } from '../view/management-emp.component';

describe('ManagementEmpComponent', () => {
  let component: ManagementEmpComponent;
  let fixture: ComponentFixture<ManagementEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementEmpComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ManagementEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
