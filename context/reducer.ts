import { State } from './defaultState';
import { STATEACTIONS } from './stateActions';

export interface Action {
  type: STATEACTIONS
  // payload?: any;
}

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case STATEACTIONS.openOverlay:
      return openOverlay(state);
    default:
    case STATEACTIONS.closeOverlay:
      return closeOverlay(state);
  }
};

const openOverlay = (state: State): State => ({
  ...state,
  isOverlayOpen: true
});

const closeOverlay = (state: State): State => ({
  ...state,
  isOverlayOpen: false
});

export default reducer;