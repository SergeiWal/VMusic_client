import { createAction } from "@reduxjs/toolkit";
import { User } from "../store/reducers/auth.reducer";
import { CreateUserPayload } from "../store/reducers/userc.reducer";
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

export const createUserAction = createAction(
  "CREATE_USER_REQUEST",
  withPayloadType<CreateUserPayload>()
);

export const createUserSuccessAction = createAction(
  "CREATE_USER_SUCCESS",
  withPayloadType<User>()
);

export const createUserFailedAction = createAction(
  "CREATE_USER_FAILED",
  withPayloadType<Error>()
);
