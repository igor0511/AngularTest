import { Component } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { State } from "./reducers/index";
import { interval } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  // init data global variable
  data = {
    firstVariable:0,
    secondVariable:0
  };
  // init subscribe for timer
  subscribe = null;
  // flag showing weather to change on decrease or increse
  evenChange :boolean= false;

  constructor (private store:Store<State>) {

    this.store.pipe(select((store: any) => store.reducers)).subscribe((data) => {
      this.data = data;
   });
console.log(this.data);
  }

/**
 * Starts timer on start butto click
 * No return value
 */
  start = (event) => {
    // create interval every 1 sec
    const source = interval(1000);

   this.subscribe = source.subscribe(val => 
    {
      // if event change is true dispatch increase
      // otherwise decrease
      if (this.evenChange){
        this.store.dispatch({ type:"Increase" });
      }
      else {
        this.store.dispatch({ type:"Decrease" });
      }
      
      // put event to oposite one
      this.evenChange = !this.evenChange;
    });
  }

  
/**
 * Calls reset reducer when reset button is clicked
 * No return value
 */
  reset = (event) => {
    this.store.dispatch({ type:"Reset" });
  }


/**
 * Stops the timer
 * No return value
 */
  stop = (event) => {
    this.subscribe.unsubscribe();
  }

}
