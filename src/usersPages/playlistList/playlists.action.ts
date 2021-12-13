import { createAction } from "@reduxjs/toolkit";
import { User } from "../../store/reducers/auth.reducer";
import { Playlist } from "../../store/reducers/playlists.reducer";
import { withPayloadType } from "../../store/store";

export const getPlaylistsAction = createAction(
  "GET_PLAYLISTS_REQUEST",
  withPayloadType<number>()
);

export const getPlaylistsSuccessAction = createAction(
  "GET_PLAYLISTS_SUCCESS",
  withPayloadType<Playlist[]>()
);

export const getPlaylistsFailedAction = createAction(
  "GET_PLAYLISTS_FAILED",
  withPayloadType<Error>()
);
