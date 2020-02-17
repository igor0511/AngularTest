import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { State, intialState } from "./reducers/index";
import { select } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'testProject';

  items = [1,2,3,4];
  data = '';

  constructor (private store:Store<State>) {
    console.log(store.select("reducers"));
    this.store.select('reducers').subscribe(data => {
     this.data=data;
    })

    console.log(this.data);
    this.store.dispatch({ type:"Increase" });

    console.log(this.data);
  }

  start = (event) => {
    this.store.dispatch({ type:"Increase" });
  }

  reset = (event) => {
    this.store.dispatch({ type:"Reset" });
  }

  stop = (event) => {
    this.store.dispatch({ type:"Decrease" });
  }

  ngAfterViewInit() {
    console.log("View init");
    console.log(this.data);
  }

}
