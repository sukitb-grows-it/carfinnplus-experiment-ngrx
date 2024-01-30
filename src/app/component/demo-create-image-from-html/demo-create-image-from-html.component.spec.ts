import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCreateImageFromHtmlComponent } from './demo-create-image-from-html.component';

describe('DemoCreateImageFromHtmlComponent', () => {
  let component: DemoCreateImageFromHtmlComponent;
  let fixture: ComponentFixture<DemoCreateImageFromHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoCreateImageFromHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoCreateImageFromHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
