import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuePageComponent } from './cue-page.component';
import { CueDiscoverComponent } from './cue-discover/cue-discover.component';
import { CueRoutingModule } from './cue-routing/cue-routing.module';
import { UiProductCarouselModule } from '../ui-components/ui-product-carousel/ui-product-carousel.module';
import { CuePlayingComponent } from './cue-page/cue-playing/cue-playing.component';
import { CueBreakingComponent } from './cue-page/cue-breaking/cue-breaking.component';
import { CueJumpComponent } from './cue-page/cue-jump/cue-jump.component';



@NgModule({
  declarations: [
    CuePageComponent,
    CueDiscoverComponent,
    CuePlayingComponent,
    CueBreakingComponent,
    CueJumpComponent,
  ],
  imports: [
    CommonModule,
    CueRoutingModule,
    UiProductCarouselModule,
    
  ],
  exports: [
    CuePageComponent,
    CueDiscoverComponent,
    
  ]
})
export class CuePageModule { }
