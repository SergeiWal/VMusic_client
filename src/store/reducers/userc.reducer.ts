import { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteUserFailedAction,
  deleteUserSuccessAction,
  getUsersFailedAction,
  getUsersSuccessAction,
  madeAdminAction,
  madeAdminFailedAction,
  madeAdminSuccessAction,
} from "../../adminPages/users/users.actions";
import { User } from "./auth.reducer";

export type DeleteUpdatePAyload = {
  status: "Success" | "Failed";
};

export default function UserReducer(
  state: User[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getUsersSuccessAction.type:
      return [...action.payload];
    case madeAdminSuccessAction.type:
    case deleteUserSuccessAction.type:
      return [...state];
    case madeAdminFailedAction.type:
    case deleteUserFailedAction.type:
    case getUsersFailedAction.type:
      return state;
    default:
      return state;
  }
}
