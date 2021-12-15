import { PayloadAction } from "@reduxjs/toolkit";
import {
  addSongSuccessAction,
  addSongFailedAction,
  deleteSongFailedAction,
  deleteSongSuccessAction,
} from "../../adminPages/songs/admin_songs.actions";
import {
  getSongsFailedAction,
  getSongsSuccessAction,
} from "../../usersPages/songsList/actions";
import { Song } from "../../usersPages/songsList/types";

export type AddSongPayload = {
  name: string;
  source: string;
  genre: string;
  author: string;
};

export default function songsReducer(
  state: Song[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getSongsSuccessAction.type:
      return [...action.payload];
    case addSongSuccessAction.type:
      return [...state, action.payload];
    case deleteSongSuccessAction.type:
      return [...state];
    case addSongFailedAction.type:
    case deleteSongFailedAction.type:
    case getSongsFailedAction.type:
      return state;
    default:
      return state;
  }
}
