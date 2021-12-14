import { createAction } from "@reduxjs/toolkit";
import {
  CreatePayload,
  Playlist,
} from "../../store/reducers/playlists.reducer";
import { withPayloadType } from "../../store/store";

export const createPlaylistAction = createAction(
  "CREATE_PLAYLIST_REQUEST",
  withPayloadType<CreatePayload>()
);

export const createPlaylistSuccessAction = createAction(
  "CREATE_PLAYLIST_SUCCESS",
  withPayloadType<Playlist>()
);

export const createPlaylistFailedAction = createAction(
  "CREATE_PLAYLIST_FAILED",
  withPayloadType<Error>()
);
