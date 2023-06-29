import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  navActive = false;
  constructor(
    private app: AppComponent,
  ){

  }

  navIconClick(){
    this.navActive = !this.navActive;
  }

  setPath(path:string){
    this.app.setPath(path);
    this.navActive = false;
  }
  

}
