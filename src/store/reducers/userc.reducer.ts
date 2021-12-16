import { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteUserFailedAction,
  deleteUserSuccessAction,
  getUsersFailedAction,
  getUsersSuccessAction,
  madeAdminFailedAction,
  madeAdminSuccessAction,
} from "../../adminPages/users/users.actions";
import {
  createUserFailedAction,
  createUserSuccessAction,
} from "../../signInUp/signIn.action";
import { User } from "./auth.reducer";

export type DeleteUpdatePAyload = {
  status: "Success" | "Failed";
};

export type CreateUserPayload = {
  name: string;
  password: string;
  role: number;
};

export default function UserReducer(
  state: User[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getUsersSuccessAction.type:
      return [...action.payload];
    case createUserSuccessAction.type:
      return action.payload.status ? state : [...state, action.payload];
    case madeAdminSuccessAction.type:
    case deleteUserSuccessAction.type:
      return [...state];
    case createUserFailedAction.type:
    case madeAdminFailedAction.type:
    case deleteUserFailedAction.type:
    case getUsersFailedAction.type:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
