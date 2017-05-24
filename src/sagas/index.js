import { all } from 'redux-saga/effects'
import { signin, watchSignin } from './auth'

export default function* rootSaga() {
  yield all([
    signin(),
    watchSignin()
  ])
}