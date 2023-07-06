import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { CuePageComponent } from './cue-page/cue-page.component';
import { AccessoriesPageComponent } from './accessories-page/accessories-page.component';

const routes: Routes = [
  {path: 'home', redirectTo:''},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'product-detail/:id', component: ProductDetailPageComponent},
  {path: 'cues', loadChildren: () => import('./cue-page/cue-page.module').then(m => m.CuePageModule),},
  {path: 'accessories', component: AccessoriesPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
