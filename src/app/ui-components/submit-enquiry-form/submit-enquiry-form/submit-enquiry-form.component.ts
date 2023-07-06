import { ProductDetailPageComponent } from 'src/app/product-detail-page/product-detail-page.component';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { IProduct } from 'src/app/product-detail-page/product-data';

@Component({
  selector: 'submit-enquiry-form',
  templateUrl: './submit-enquiry-form.component.html',
  styleUrls: ['./submit-enquiry-form.component.scss']
})
export class SubmitEnquiryFormComponent implements OnInit{

  @Input() product!: IProduct;
  enquiryFormControl!: FormGroup;
  submitClicked = false;
  messageSent = false;
  submitting = false;

  constructor( @Inject(PLATFORM_ID) platformId: Object,
              private productDetailPageComponent: ProductDetailPageComponent){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.enquiryFormControl = new FormGroup({
      name: new FormControl('' , Validators.required),
      email: new FormControl('', Validators.email),
      message: new FormControl('', Validators.required),
      suburb: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
    })
    
  }
    closeSubmitForm(){
      this.productDetailPageComponent.closeShowSubmitForm();
    }

    onSubmit(){
      this.submitClicked = true;
      if(this.enquiryFormControl.valid){
        this.submitting = true;
        this.sendEmail().then((result: EmailJSResponseStatus) => {
          this.messageSent = true;
          this.submitting = false;
        }, (error) => {
         if(isPlatformBrowser(PLATFORM_ID)){ window.alert('Message failed to send, please add our social media to enquiry.')}
        });;
      }
    }
    public sendEmail() {
      console.log('email sent');
      return emailjs.send('service_ryvvalr', 'template_x5zup26',{
        message: this.enquiryFormControl.value.message,
        postcode: this.enquiryFormControl.value.postcode,
        suburb: this.enquiryFormControl.value.suburb,
        userEmail: this.enquiryFormControl.value.email,
        userFullName: this.enquiryFormControl.value.name,
        to_name:'Ken',
        item_code: this.product?.itemCode,
        product_name: this.product?.name,
      }, '8yqlWse9GookHXJLY')
    }
}
