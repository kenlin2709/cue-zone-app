import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'product-carousel',
  templateUrl: './ui-product-carousel.component.html',
  styleUrls: ['./ui-product-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiProductCarouselComponent{

  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    navigation: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
      1271: {
        slidesPerView: 4.2,
        spaceBetween: 10,
      }
      
    }
  };

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
