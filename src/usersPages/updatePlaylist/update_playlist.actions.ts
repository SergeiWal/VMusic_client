import { createAction } from "@reduxjs/toolkit";
import { UpdateNamePayload } from "../../store/reducers/playlists.reducer";
import { AddDeleteSongToPlaylistPayload } from "../../store/reducers/playlist_songs.reducer";
import { withPayloadType } from "../../store/store";

export const addSongToPlaylistAction = createAction(
  "ADD_SONG_TO_PLAYLIST_REQUEST",
  withPayloadType<AddDeleteSongToPlaylistPayload>()
);

export const addSongToPlaylistSuccessAction = createAction(
  "ADD_SONG_TO_PLAYLIST_SUCCESS"
);

export const addSongToPlaylistFailedAction = createAction(
  "ADD_SONG_TO_PLAYLIST_FAILED",
  withPayloadType<Error>()
);

export const deleteSongToPlaylistAction = createAction(
  "DELETE_SONG_FROM_PLAYLIST_REQUEST",
  withPayloadType<AddDeleteSongToPlaylistPayload>()
);

export const deleteSongToPlaylistSuccessAction = createAction(
  "DELETE_SONG_FROM_PLAYLIST_SUCCESS"
);

export const deleteSongToPlaylistFailedAction = createAction(
  "DELETE_SONG_FROM_PLAYLIST_FAILED",
  withPayloadType<Error>()
);

export const updateNameAction = createAction(
  "UPDATE_PLAYLIST_NAME_REQUEST",
  withPayloadType<UpdateNamePayload>()
);

export const updateNameSuccessAction = createAction(
  "UPDATE_PLAYLIST_NAME_SUCCESS"
);

export const updateNameFailedAction = createAction(
  "UPDATE_PLAYLIST_NAME_FAILED",
  withPayloadType<Error>()
);
