import { SwiperOptions } from 'swiper';
import { IProduct, getProductDataByProductCodes, limitedProduct, mostPopularProduct, productDetailData, jumpCueSeriesProduct, eleganceSeriesProduct, breakCueSeriesProduct } from './../../product-detail-page/product-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cue-discover',
  templateUrl: './cue-discover.component.html',
  styleUrls: ['./cue-discover.component.scss']
})
export class CueDiscoverComponent {
  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    navigation: true,
    scrollbar:{ draggable: true },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
      1271: {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
      1600:{
        slidesPerView: 4.3,
        spaceBetween: 10,
      }
    }
  }

  limitedProducts = getProductDataByProductCodes(limitedProduct);
  popularProducts = getProductDataByProductCodes(mostPopularProduct);
  breakCueSeriesProducts = getProductDataByProductCodes(breakCueSeriesProduct);
  jumpCueSeriesProducts = getProductDataByProductCodes(jumpCueSeriesProduct);
  filterKeywords: string = '';
  searchProducts!: IProduct[];

  search(){
    if(this.filterKeywords){
        this.searchProducts = Object.values(productDetailData).filter(product =>
        product.name.toLocaleLowerCase().replace(/\s+/g, '').includes(this.filterKeywords.toLocaleLowerCase().replace(/\s+/g, '')) ||
        product.itemCode.toLocaleLowerCase().replace(/\s+/g, '').includes(this.filterKeywords.toLocaleLowerCase().replace(/\s+/g, '')) ||
        product.description.toLocaleLowerCase().replace(/\s+/g, '').includes(this.filterKeywords.toLocaleLowerCase().replace(/\s+/g, '')) ||
        product.keyword.toLocaleLowerCase().replace(/\s+/g, '').includes(this.filterKeywords.toLocaleLowerCase().replace(/\s+/g, ''))
      );
    }
  }
  onKeyDownEvent(event: any){
    if(event.key === 'Enter'){
      this.search();
    }
  }
}
