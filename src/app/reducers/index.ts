import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  Action,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

// state consists of two numbers
export interface State {
  firstVariable:number,
  secondVariable:number
}

export const reducers: ActionReducer<State> =
  (state = intitialState, action: Action) => {
    // depending on the action, do increase, decrease, change or reset
    switch (action.type) {
      case "Increase": {
        // increase first variable and put to state
        // + return whole state
        return {
          ...state,
          firstVariable:++state.firstVariable,
        }
      }
      case "Decrease": {
        // decrease second variable and put to state
        // + return whole state
        return {
           ...state,
           secondVariable:--state.secondVariable,
        }
      }
      case "Reset": {
        // reset values
        return {
          firstVariable:-5,
          secondVariable:10,
       };
      }
      case "change": {
        console.log('This action does nothing!');
        return state;
      }
      default: {
        return state;
      }
    }
  };

// initial values
export const intitialState: State = {
  firstVariable:-5,
  secondVariable:10
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
