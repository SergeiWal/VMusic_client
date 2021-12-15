import { createAction } from "@reduxjs/toolkit";
import { Author } from "../../store/reducers/authors.reducer";
import { Genre } from "../../store/reducers/genres.reducer";
import { DeletePayload } from "../../store/reducers/playlists.reducer";
import { AddSongPayload } from "../../store/reducers/songs.reducer";
import { withPayloadType } from "../../store/store";
import { Song } from "../../usersPages/songsList/types";

export const getGenresAction = createAction("GET_GENRES_REQUEST");

export const getGenresSuccessAction = createAction(
  "GET_GENRES_SUCCESS",
  withPayloadType<Genre[]>()
);

export const getGenresFailedAction = createAction(
  "GET_GENRES_FAILED",
  withPayloadType<Error>()
);

export const getAuthorsAction = createAction("GET_AUTHORS_REQUEST");

export const getAuthorsSuccessAction = createAction(
  "GET_AUTHORS_SUCCESS",
  withPayloadType<Author[]>()
);

export const getAuthorsFailedAction = createAction(
  "GET_AUTHORS_FAILED",
  withPayloadType<Error>()
);

export const deleteSongAction = createAction(
  "DELETE_SONG_REQUEST",
  withPayloadType<number>()
);

export const deleteSongSuccessAction = createAction(
  "DELETE_SONG_SUCCESS",
  withPayloadType<DeletePayload>()
);

export const deleteSongFailedAction = createAction(
  "DELETE_SONG_FAILED",
  withPayloadType<DeletePayload>()
);

export const addSongAction = createAction(
  "ADD_SONG_REQUEST",
  withPayloadType<AddSongPayload>()
);

export const addSongSuccessAction = createAction(
  "ADD_SONG_SUCCESS",
  withPayloadType<Song>()
);

export const addSongFailedAction = createAction(
  "ADD_SONG_FAILED",
  withPayloadType<Error>()
);
