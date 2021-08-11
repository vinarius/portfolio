import { State } from './defaultState';
import { STATEACTIONS } from './stateActions';

export interface Action {
  type: STATEACTIONS
  // payload?: any;
}

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case STATEACTIONS.toggleNavbar:
      return toggleNavbar(state);
    default:
      return state;
  }
};

const toggleNavbar = (state: State): State => ({
  ...state,
  isNavbarOpen: !state.isNavbarOpen
});

export default reducer;