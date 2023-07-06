import { getProductDataByProductCodes, shaftProduct } from './../product-detail-page/product-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shaft-page',
  templateUrl: './shaft-page.component.html',
  styleUrls: ['./shaft-page.component.scss']
})
export class ShaftPageComponent {

  shaftProducts = getProductDataByProductCodes(shaftProduct);
}
