import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEnquiryFormComponent } from './submit-enquiry-form.component';

describe('SubmitEnquiryFormComponent', () => {
  let component: SubmitEnquiryFormComponent;
  let fixture: ComponentFixture<SubmitEnquiryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitEnquiryFormComponent]
    });
    fixture = TestBed.createComponent(SubmitEnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
