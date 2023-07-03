import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CuePageComponent } from '../cue-page.component';
import { CueDiscoverComponent } from '../cue-discover/cue-discover.component';
import { CuePlayingComponent } from '../cue-page/cue-playing/cue-playing.component';
import { CueBreakingComponent } from '../cue-page/cue-breaking/cue-breaking.component';
import { CueJumpComponent } from '../cue-page/cue-jump/cue-jump.component';

const routes: Routes = [
  {
    path:'', component: CuePageComponent,
    children: [
      {path:'discover', component: CueDiscoverComponent,},
      {path:'playing', component: CuePlayingComponent,},
      {path:'breaking', component: CueBreakingComponent,},
      {path:'jump', component: CueJumpComponent,}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class CueRoutingModule { }
