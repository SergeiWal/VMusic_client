import { combineReducers } from "redux";
import AuthReducer from "./reducers/auth.reducer";
import AuthorsReducer from "./reducers/authors.reducer";
import fetchReducer from "./reducers/fetch.reducer";
import GenresReducer from "./reducers/genres.reducer";
import PlayREducer from "./reducers/play.reducer";
import PlaylistsReducer from "./reducers/playlists.reducer";
import PlaylistSongReducer from "./reducers/playlist_songs.reducer";
import songsReducer from "./reducers/songs.reducer";
import UserReducer from "./reducers/userc.reducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  isFetching: fetchReducer,
  play: PlayREducer,
  auth: AuthReducer,
  playlists: PlaylistsReducer,
  playlistSongs: PlaylistSongReducer,
  users: UserReducer,
  genres: GenresReducer,
  authors: AuthorsReducer,
});

export default rootReducer;
