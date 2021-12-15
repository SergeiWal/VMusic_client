import { PayloadAction } from "@reduxjs/toolkit";
import { logOutAction } from "../../header/header.actions";
import {
  signInFailedAction,
  signInSuccessAction,
} from "../../signInUp/signIn.action";

export type User = {
  id: number;
  name: string;
  role: string;
};

export type AuthState = {
  status: boolean;
  isAuth: boolean;
  user: User;
};

const DEFAULT_VALUE: AuthState = {
  status: true,
  isAuth: false,
  user: null,
};

export default function AuthReducer(
  state: AuthState = DEFAULT_VALUE,
  action: PayloadAction<any>
): AuthState {
  switch (action.type) {
    case signInSuccessAction.type:
      return { status: true, isAuth: true, user: action.payload };
    case logOutAction.type:
    case signInFailedAction.type:
      return { status: false, isAuth: false, user: null };
    default:
      return state;
  }
}
