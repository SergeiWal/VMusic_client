import { createAction } from "@reduxjs/toolkit";
import { User } from "../store/reducers/auth.reducer";
import { withPayloadType } from "../store/store";

export type SignInPayload = {
  username: string;
  password: string;
};

export const sigInAction = createAction(
  "SIGN_IN_REQUEST",
  withPayloadType<SignInPayload>()
);

export const signInSuccessAction = createAction(
  "SIGN_IN_SUCCESS",
  withPayloadType<User>()
);

export const signInFailedAction = createAction(
  "SIGN_IN_FAILED",
  withPayloadType<Error>()
);
