import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'event-binding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'event-binding';
  handleSave(){
    console.log('ahahaha')
  }
}
