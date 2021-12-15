import { createAction } from "@reduxjs/toolkit";
import { User } from "../../store/reducers/auth.reducer";
import { DeletePayload } from "../../store/reducers/playlists.reducer";
import { DeleteUpdatePAyload } from "../../store/reducers/userc.reducer";
import { withPayloadType } from "../../store/store";

export const getUsersAction = createAction("GET_USERS_REQUEST");

export const getUsersSuccessAction = createAction(
  "GET_USERS_SUCCESS",
  withPayloadType<User[]>()
);

export const getUsersFailedAction = createAction(
  "GET_USERS_FAILED",
  withPayloadType<Error>()
);

export const deleteUserAction = createAction(
  "DELETE_USER_REQUEST",
  withPayloadType<number>()
);

export const deleteUserSuccessAction = createAction(
  "DELETE_USER_SUCCESS",
  withPayloadType<DeleteUpdatePAyload>()
);

export const deleteUserFailedAction = createAction(
  "DELETE_USER_FAILED",
  withPayloadType<Error>()
);

export const madeAdminAction = createAction(
  "MAKE_ADMIN_REQUEST",
  withPayloadType<number>()
);

export const madeAdminSuccessAction = createAction(
  "MAKE_ADMIN_SUCCESS",
  withPayloadType<DeleteUpdatePAyload>()
);

export const madeAdminFailedAction = createAction(
  "MAKE_ADMIN_FAILED",
  withPayloadType<Error>()
);
