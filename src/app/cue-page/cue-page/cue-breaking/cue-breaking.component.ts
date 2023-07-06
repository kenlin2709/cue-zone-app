import { Component } from '@angular/core';
import { breakCueSeriesProduct, getProductDataByProductCodes } from 'src/app/product-detail-page/product-data';

@Component({
  selector: 'app-cue-breaking',
  templateUrl: './cue-breaking.component.html',
  styleUrls: ['./cue-breaking.component.scss']
})
export class CueBreakingComponent {
  breakCueSeriesProducts = getProductDataByProductCodes(breakCueSeriesProduct);
}
