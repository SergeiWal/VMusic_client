import { PayloadAction } from "@reduxjs/toolkit";
import {
  createPlaylistFailedAction,
  createPlaylistSuccessAction,
} from "../../usersPages/createPlaylist/create_playlist.actions";
import {
  deletePlaylistAction,
  deletePlaylistFailedAction,
  deletePlaylistSuccessAction,
} from "../../usersPages/playlist/playlist_page.action";
import {
  getPlaylistsFailedAction,
  getPlaylistsSuccessAction,
} from "../../usersPages/playlistList/playlists.action";
import {
  updateNameFailedAction,
  updateNameSuccessAction,
} from "../../usersPages/updatePlaylist/update_playlist.actions";

export type Playlist = {
  id: number;
  name: string;
};

export type DeletePayload = {
  status: "Success" | "Failed";
};

export type CreatePayload = {
  name: string;
  user: number;
};

export type UpdateNamePayload = {
  playlist_id: number;
  name: string;
};

let playlistsBackup: Playlist[] = [];

export default function PlaylistsReducer(
  state: Playlist[] = [],
  action: PayloadAction<any>
): Playlist[] {
  switch (action.type) {
    case getPlaylistsSuccessAction.type:
      return [...action.payload];
    case createPlaylistSuccessAction.type:
      return [...state, action.payload];
    case updateNameSuccessAction.type:
    case deletePlaylistAction.type:
      playlistsBackup = [...state];
      return [...state];
    case deletePlaylistSuccessAction.type:
      return action.payload.status === "Success" ? state : [...playlistsBackup];
    case updateNameFailedAction.type:
    case createPlaylistFailedAction.type:
    case deletePlaylistFailedAction.type:
    case getPlaylistsFailedAction.type:
      return state;
    default:
      return state;
  }
}
