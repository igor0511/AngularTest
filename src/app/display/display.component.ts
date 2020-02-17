import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { State } from "../reducers/index";
import { interval } from 'rxjs'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  data = {
    firstVariable:0,
    secondVariable:0
  };

  constructor (private store:Store<State>) {
    this.store.pipe(select((store: any) => store.reducers)).subscribe((data) => {
      this.data = data;
   });
  }

  ngOnInit(): void {
  }

}
