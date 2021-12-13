import { PayloadAction } from "@reduxjs/toolkit";
import {
  getPlaylistsSongFailedAction,
  getPlaylistsSongSucessAction,
} from "../../usersPages/playlist/playlist_page.action";
import {
  getSongsFailedAction,
  getSongsSuccessAction,
} from "../../usersPages/songsList/actions";
import { Song } from "../../usersPages/songsList/types";

export default function songsReducer(
  state: Song[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getPlaylistsSongSucessAction.type:
    case getSongsSuccessAction.type:
      return [...action.payload];
    case getPlaylistsSongFailedAction.type:
    case getSongsFailedAction.type:
      return state;
    default:
      return state;
  }
}
