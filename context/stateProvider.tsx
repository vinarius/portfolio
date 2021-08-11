import React, { createContext, ReactElement, useReducer } from 'react';
import reducer from './reducer';
import DefaultState, { State } from './defaultState';
import { STATEACTIONS } from './stateActions';

const Context = createContext<State|null>(null);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const StateProvider = (props: any): ReactElement => {
  const [state, dispatch] = useReducer(reducer, DefaultState);

  const toggleNavbar = () => {
    dispatch({
      type: STATEACTIONS.toggleNavbar
    });
  };

  const providerValue = {
    ...state,
    toggleNavbar
  };

  return (
    <Context.Provider value={providerValue}>
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;