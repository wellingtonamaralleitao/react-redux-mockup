import { put, takeEvery, call } from 'redux-saga/effects'
import { signService } from 'services/auth'

export function* signin (action) {
  if(!action) return
  console.log('generator', action.payload)
  const user = yield call(signService, action.payload)
  yield put({ type: 'AUTH/LOGIN_SUCCESS', user: user.data.data['user-name']})
}

export function* watchSignin() {
  yield takeEvery('AUTH/LOGIN_REQUEST', signin)
}