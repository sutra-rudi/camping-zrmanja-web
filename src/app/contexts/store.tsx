'use client';
import React from 'react';
import { ActionTypes } from '../types/actionTypes';
import { AppState, UserLanguage } from '../types/appState';
import { AppAction } from '../types/appActions';

const appReducer: React.Reducer<AppState, AppAction> = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.SET_USER_LANG: {
      return {
        ...state,
        userLang: action.payload,
      };
    }
    default:
      return state;
  }
};

const GlobalContext = React.createContext<{ state: AppState; dispatch: React.Dispatch<AppAction> } | undefined>(
  undefined
);

export const GlobalContextProvider = ({ children }: any) => {
  const initial_state = {
    userLang: UserLanguage.hr,
  };

  const [state, dispatch] = React.useReducer(appReducer, initial_state);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useAppContext() {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
