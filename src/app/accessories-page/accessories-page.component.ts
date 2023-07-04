import { Component } from '@angular/core';
import { accessoryProduct, getProductDataByProductCodes } from '../product-detail-page/product-data';

@Component({
  selector: 'app-accessories-page',
  templateUrl: './accessories-page.component.html',
  styleUrls: ['./accessories-page.component.scss']
})
export class AccessoriesPageComponent {

  accessoriesProducts = getProductDataByProductCodes(accessoryProduct);

}
