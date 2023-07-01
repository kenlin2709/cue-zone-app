import { Component } from '@angular/core';
import { productDetailData } from './product-data';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  productDescriptionActive = false;
  products = productDetailData;
  productItemCode = 'PSX-01';

  toggle() {
    this.productDescriptionActive = !this.productDescriptionActive;
  }
  setProductItemCode(itemCode: string) {
    this.productItemCode = itemCode;
  }
}
