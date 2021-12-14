import { PayloadAction } from "@reduxjs/toolkit";
import {
  getPlaylistsSongFailedAction,
  getPlaylistsSongSucessAction,
} from "../../usersPages/playlist/playlist_page.action";
import { Song } from "../../usersPages/songsList/types";
import {
  addSongToPlaylistFailedAction,
  addSongToPlaylistSuccessAction,
  deleteSongToPlaylistFailedAction,
  deleteSongToPlaylistSuccessAction,
} from "../../usersPages/updatePlaylist/update_playlist.actions";

export type AddDeleteSongToPlaylistPayload = {
  song_id: number;
  playlist_id: number;
};

export default function PlaylistSongReducer(
  state: Song[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getPlaylistsSongSucessAction.type:
      return [...action.payload];
    case deleteSongToPlaylistSuccessAction.type:
    case addSongToPlaylistSuccessAction.type:
      return [...state];
    case deleteSongToPlaylistFailedAction.type:
    case addSongToPlaylistFailedAction.type:
    case getPlaylistsSongFailedAction.type:
      return state;
    default:
      return state;
  }
}
