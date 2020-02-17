import { Component } from '@angular/core';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'testProject';

  items = [1,2,3,4];

  ngAfterViewInit() {
    console.log("View init")
  }

}
