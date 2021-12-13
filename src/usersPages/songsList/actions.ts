import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../store/store";
import { Song } from "./types";

export const getSongsAction = createAction("GET_SONGS_REQUEST");
export const getSongsSuccessAction = createAction(
  "GET_SONGS_SUCCESS",
  withPayloadType<Song[]>()
);
export const getSongsFailedAction = createAction(
  "GET_SONGS_FAILED",
  withPayloadType<Error>()
);

export const playSongChangedAction = createAction(
  "PLAY_SONG_CHANGED",
  withPayloadType<Song>()
);
