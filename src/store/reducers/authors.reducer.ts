import { PayloadAction } from "@reduxjs/toolkit";
import {
  addAuthorFailedAction,
  addAuthorSuccessAction,
} from "../../adminPages/authors/authors.actions";
import {
  getAuthorsFailedAction,
  getAuthorsSuccessAction,
} from "../../adminPages/songs/admin_songs.actions";

export type Author = {
  id: number;
  name: string;
};

export type AddAuthorPayload = {
  name: string;
};

export default function AuthorsReducer(
  state: Author[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getAuthorsSuccessAction.type:
      return [...action.payload];
    case addAuthorSuccessAction.type:
      return [...state, action.payload];
    case addAuthorFailedAction.type:
    case getAuthorsFailedAction.type:
      return state;
    default:
      return state;
  }
}
