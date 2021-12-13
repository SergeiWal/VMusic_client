import { createAction } from "@reduxjs/toolkit";
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
