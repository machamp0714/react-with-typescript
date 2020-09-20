import { AxiosError } from 'axios';
import { User } from '../services/github/models';
import * as ActionType from './githubConstants';


// ActionCreator(役割はactionを発行することのみ)
// どんな型のparamを受け取り、どんな型のresultを返すのか予め決めて、定義しておく。

interface GetMembersParams {
  companyName: string;
}
interface GetMemberResult {
  users: User[];
}

export const getMembers = {
  start: (params: GetMembersParams) => ({
    // type: ActionType.GET_MEMBERS_STARTとすると、typeは文字列`GET_MEMBERS_START` と認識されてしまうので、
    // as typeof~として、文字列リテラルと教えてあげることで、reducerで型推論が効く様になる。
    type: ActionType.GET_MEMBERS_START as typeof ActionType.GET_MEMBERS_START,
    payload: params
  }),

  succeed: (params: GetMembersParams, result: GetMemberResult) => ({
    type: ActionType.GET_MEMBERS_SUCCESS as typeof ActionType.GET_MEMBERS_SUCCESS,
    payload: { params, result }
    // payload: {
    //  params: GetMembersParams,
    //  result: GetMemberResult
    // } と同じこと
  }),

  fail: (params: GetMembersParams, error: AxiosError) => ({
    type: ActionType.GET_MEMBERS_FAIL as typeof ActionType.GET_MEMBERS_FAIL,
    payload: { params, error },
    error: true
  })
};

// ReturnType: 関数の返り値を型に変換する
export type GithubAction =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>;
