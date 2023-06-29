import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  slideNumber = 0;
  nextSlideCalled = false;

  imgUrls = ['url(/assets/images/peri-landing-images/xianliang.jpg)', 'url(/assets/images/peri-landing-images/4.jpg)', 'url(/assets/images/peri-landing-images/202343135458.jpg)', 'url(/assets/images/peri-landing-images/paimingsai.jpg)']

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  interval(3000).subscribe(() => this.nextSlide());
 } 

  nextSlide() {
    if(this.nextSlideCalled){
      this.nextSlideCalled=false;
      return;
    }
    if (this.slideNumber === 3) {
      this.slideNumber = 0;
    } else {
      this.slideNumber++;
    }
    this.nextSlideCalled=true;
  }
  getCurrentImgUrl(): string{
    return  this.imgUrls[this.slideNumber];
  }
  goToSlide(index:number){
    this.slideNumber=index;
  }

}
