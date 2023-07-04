import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiProductCarouselModule } from './ui-components/ui-product-carousel/ui-product-carousel.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { CuePageComponent } from './cue-page/cue-page.component';
import { CueDiscoverComponent } from './cue-page/cue-discover/cue-discover.component';
import { CueRoutingModule } from './cue-page/cue-routing/cue-routing.module';
import { CuePageModule } from './cue-page/cue-page.module';
import { SubmitEnquiryFormModule } from './ui-components/submit-enquiry-form/submit-enquiry-form.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutMeComponent,
    ProductDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiProductCarouselModule,
    BrowserModule,
    CuePageModule,
    SubmitEnquiryFormModule,
  ],
  providers: [ProductDetailPageComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
