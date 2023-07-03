import { getProductDataByProductCodes, jumpCueSeriesProduct } from './../../../product-detail-page/product-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cue-jump',
  templateUrl: './cue-jump.component.html',
  styleUrls: ['./cue-jump.component.scss']
})
export class CueJumpComponent {
  jumpCueSeriesProducts = getProductDataByProductCodes(jumpCueSeriesProduct);
}
