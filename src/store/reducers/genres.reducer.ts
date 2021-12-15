import { PayloadAction } from "@reduxjs/toolkit";
import {
  getGenresFailedAction,
  getGenresSuccessAction,
} from "../../adminPages/songs/admin_songs.actions";

export type Genre = {
  id: number;
  genre: string;
};

export default function GenresReducer(
  state: Genre[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getGenresSuccessAction.type:
      return [...action.payload];
    case getGenresFailedAction.type:
      return state;
    default:
      return state;
  }
}
