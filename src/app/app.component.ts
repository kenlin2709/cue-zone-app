import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cue-zone-app';
  path= 'home' || 'about'

  setPath(path:string){
    this.path = path
  }
}
