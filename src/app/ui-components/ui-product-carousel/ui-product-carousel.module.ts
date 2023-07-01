import { NgModule } from "@angular/core";
import { UiProductCarouselComponent } from "./ui-product-carousel.component";
import { SwiperModule } from 'swiper/angular';
import { UiProductCardComponent } from "../ui-product-card/ui-product-card.component";



@NgModule({
    declarations: [
      UiProductCarouselComponent,
      UiProductCardComponent
    ],
    imports: [
        SwiperModule,
    ],
    providers: [],
    exports: [UiProductCarouselComponent,
              UiProductCardComponent,
    ],
  })
  export class UiProductCarouselModule { }