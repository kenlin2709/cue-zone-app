import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IProduct } from 'src/app/product-detail-page/product-data';
import { ProductDetailPageComponent } from 'src/app/product-detail-page/product-detail-page.component';

@Component({
  selector: 'ui-product-card',
  templateUrl: './ui-product-card.component.html',
  styleUrls: ['./ui-product-card.component.scss']
})
export class UiProductCardComponent {

  @Input() product!: IProduct;

  constructor(
    private appComponent: AppComponent,
    private productDetailComponent: ProductDetailPageComponent,
  ){}

  onClick(){
    this.productDetailComponent.setProductItemCode(this.product.itemCode);
    this.appComponent.setPath('product-detail');
    
  }
}
