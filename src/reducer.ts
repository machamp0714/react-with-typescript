import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { GithubAction } from './actions/github';
import * as ActionType from './actions/githubConstants';
import { User } from './services/github/models';

export interface GithubState { // initStateの型を定義する
  users: User[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initState: GithubState = {
  users: [],
  isLoading: false
};

const githubReducer: Reducer<GithubState, GithubAction> = (
  state: GithubState = initState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case ActionType.GET_MEMBERS_START:
      return {
        ...state,
        users: [],
        isLoading: true,
      }
    case ActionType.GET_MEMBERS_SUCCESS:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false
      }
    case ActionType.GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default githubReducer;
