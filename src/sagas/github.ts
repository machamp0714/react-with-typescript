import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/githubConstants';
import { getMembers } from '../actions/github';
import { getMembersFactory } from '../services/github/api';

function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload;

  try {
    const api = getMembersFactory();
    const users = yield call(api, companyName); // call: 外部の非同期処理関数をコールする。

    // Effect APIは必ず、yieldの中で使う必要がある。
    yield put(getMembers.succeed({ companyName }, { users })); // put: ActionCreatorを実行して、 ActionをDispatchする。
  } catch (error) {
    yield put(getMembers.fail({ companyName }, error));
  }
}

// rootSagaでこのタスクが起動し、Action.GET_MEMBERS_STARTと言うaction typeのactionが
// 渡されてこないか監視し続ける。そしてお目当てのactionを受け取ったら、runGetMembersを実行する。
export function* watchGetMembers() {
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers);
}

// rootSagaをSagaミドルウェアに渡すと、アプリ起動と同時に起動される。
// ここでforkされた分だけタスクが立ち上がりスタンバイする。
export default function* rootSaga() {
  yield all([fork(watchGetMembers)]);
}
