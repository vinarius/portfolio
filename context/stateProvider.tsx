import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  Reducer,
  Dispatch
} from 'react';
import reducer from './reducer';
import DefaultState from './defaultState';

function createCtx<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState;
  const context = createContext({
    state: initialState,
    dispatch: defaultDispatch
  });
  function Provider(props: PropsWithChildren<unknown>){
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(reducer, initialState);
    return <context.Provider value={{ state, dispatch }} {...props} />;
  }

  return [context, Provider] as const;
}

const [context, ContextProvider] = createCtx(reducer, DefaultState);

export const myContext = context;
export const MyProvider = ContextProvider;