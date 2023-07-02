import { Component } from '@angular/core';
import { IProduct, productDetailData } from './product-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  productDescriptionActive = false;
  products = productDetailData;
  product!: IProduct;
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.route.snapshot.params['id']);
    console.log(this.products);
    this.product = this.products[this.route.snapshot.params['id']];
  }

  toggle() {
    this.productDescriptionActive = !this.productDescriptionActive;
  }
}
