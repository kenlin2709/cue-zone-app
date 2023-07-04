import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitEnquiryFormComponent } from './submit-enquiry-form/submit-enquiry-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubmitEnquiryFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubmitEnquiryFormComponent
  ]
})
export class SubmitEnquiryFormModule { }
