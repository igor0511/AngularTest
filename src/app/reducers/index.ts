import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  Action,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  firstVariable:number,
  secondVariable:number
}

export const reducers: ActionReducer<State> =
  (state = intitialState, action: Action) => {
  console.log('Action came in! ' + action.type);
    switch (action.type) {
      case "Increase": {
        console.log('Increase');
        return {
          ...state,
          firstVariable:++state.firstVariable,
        }
      }
      case "Decrease": {
        console.log('Decrease!');
        return {
           ...state,
           secondVariable:--state.secondVariable,
        }
      }
      case "Reset": {
        console.log('Reset!');
        return intitialState;
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

export const intitialState: State = {
  firstVariable:-5,
  secondVariable:10
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
