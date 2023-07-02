import { IProduct, getProductDataByProductCodes, limitedProduct, productDetailData } from './../../product-detail-page/product-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cue-discover',
  templateUrl: './cue-discover.component.html',
  styleUrls: ['./cue-discover.component.scss']
})
export class CueDiscoverComponent {

  limitedProducts = getProductDataByProductCodes(limitedProduct);
}
