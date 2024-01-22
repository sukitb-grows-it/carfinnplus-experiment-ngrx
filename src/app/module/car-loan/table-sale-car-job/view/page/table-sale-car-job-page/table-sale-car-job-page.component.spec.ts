import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSaleCarJobPageComponent } from './table-sale-car-job-page.component';

describe('TableSaleCarJobPageComponent', () => {
  let component: TableSaleCarJobPageComponent;
  let fixture: ComponentFixture<TableSaleCarJobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSaleCarJobPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSaleCarJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
