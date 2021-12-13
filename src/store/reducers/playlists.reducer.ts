import { PayloadAction } from "@reduxjs/toolkit";
import {
  getPlaylistsFailedAction,
  getPlaylistsSuccessAction,
} from "../../usersPages/playlistList/playlists.action";

export type Playlist = {
  id: number;
  name: string;
};

export default function PlaylistsReducer(
  state: Playlist[] = [],
  action: PayloadAction<any>
): Playlist[] {
  switch (action.type) {
    case getPlaylistsSuccessAction.type:
      return [...action.payload];
    case getPlaylistsFailedAction.type:
      return state;
    default:
      return state;
  }
}
