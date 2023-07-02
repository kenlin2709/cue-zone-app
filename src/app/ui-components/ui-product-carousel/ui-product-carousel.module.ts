import { NgModule } from "@angular/core";
import { UiProductCarouselComponent } from "./ui-product-carousel.component";
import { SwiperModule } from 'swiper/angular';
import { UiProductCardComponent } from "../ui-product-card/ui-product-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
      UiProductCarouselComponent,
      UiProductCardComponent
    ],
    imports: [
        SwiperModule,
        BrowserModule,
        RouterModule,
    ],
    providers: [],
    exports: [UiProductCarouselComponent,
              UiProductCardComponent,
              RouterModule,
    ],
  })
  export class UiProductCarouselModule { }