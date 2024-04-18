import { ActionTypes } from './actionTypes';
import { UserLanguage } from './appState';

export type AppAction = { type: ActionTypes.SET_USER_LANG; payload: UserLanguage };
