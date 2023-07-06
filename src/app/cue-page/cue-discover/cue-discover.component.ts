import { IProduct, getProductDataByProductCodes, limitedProduct, mostPopularProduct, productDetailData, jumpCueSeriesProduct, eleganceSeriesProduct, breakCueSeriesProduct } from './../../product-detail-page/product-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cue-discover',
  templateUrl: './cue-discover.component.html',
  styleUrls: ['./cue-discover.component.scss']
})
export class CueDiscoverComponent {

  limitedProducts = getProductDataByProductCodes(limitedProduct);
  popularProducts = getProductDataByProductCodes(eleganceSeriesProduct);
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
