import { limitedProduct } from './../../../product-detail-page/product-data';
import { Component } from '@angular/core';
import { IProduct, eleganceSeriesProduct, getProductDataByProductCodes, productDetailData } from 'src/app/product-detail-page/product-data';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-cue-playing',
  templateUrl: './cue-playing.component.html',
  styleUrls: ['./cue-playing.component.scss']
})
export class CuePlayingComponent {
  eleganceSeriesProducts = getProductDataByProductCodes(eleganceSeriesProduct);
  limitedProducts = getProductDataByProductCodes(limitedProduct);

}
