import { createAction } from "@reduxjs/toolkit";
import { DeletePayload } from "../../store/reducers/playlists.reducer";
import { withPayloadType } from "../../store/store";
import { Song } from "../songsList/types";

export const getPlaylistsSongAction = createAction(
  "GET_PLAYLISTS_SONG_REQUEST",
  withPayloadType<number>()
);

export const getPlaylistsSongSucessAction = createAction(
  "GET_PLAYLISTS_SONG_SUCCESS",
  withPayloadType<Song[]>()
);

export const getPlaylistsSongFailedAction = createAction(
  "GET_PLAYLISTS_SONG_FAILED",
  withPayloadType<Error>()
);

export const deletePlaylistAction = createAction(
  "DELETE_PLAYLIST_REQUEST",
  withPayloadType<number>()
);

export const deletePlaylistSuccessAction = createAction(
  "DELETE_PLAYLIST_SUCCESS",
  withPayloadType<DeletePayload>()
);

export const deletePlaylistFailedAction = createAction(
  "DELETE_PLAYLIST_FAILED",
  withPayloadType<Error>()
);
