import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

const routes: Routes = [
  {path: 'home', redirectTo:''},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'product-detail/:id', component: ProductDetailPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
