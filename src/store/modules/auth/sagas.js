import { takeLatest, call, put, all } from "redux-saga/effects";
import {} from 
import api from "~/services/api";
import { id } from "postcss-selector-parser";

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, "sessions", {
    email,
    password
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error("Usuário não é prestador");
    return;
  }

  yield put(signInSuccess);
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
