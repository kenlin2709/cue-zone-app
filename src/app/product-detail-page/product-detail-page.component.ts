import { Component } from '@angular/core';
import { productDetailData } from './product-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  productDescriptionActive = false;
  products = productDetailData;
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.pipe()
  }

  toggle() {
    this.productDescriptionActive = !this.productDescriptionActive;
  }
}
