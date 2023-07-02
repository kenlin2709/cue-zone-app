import { Component } from '@angular/core';
import { IProduct, productDetailData } from 'src/app/product-detail-page/product-data';

@Component({
  selector: 'app-cue-playing',
  templateUrl: './cue-playing.component.html',
  styleUrls: ['./cue-playing.component.scss']
})
export class CuePlayingComponent {
  eleganceSeriesProducts = Object.values(productDetailData) as IProduct[];
}
