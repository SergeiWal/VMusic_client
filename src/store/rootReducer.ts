import { combineReducers } from "redux";
import AuthReducer from "./reducers/auth.reducer";
import fetchReducer from "./reducers/fetch.reducer";
import PlayREducer from "./reducers/play.reducer";
import PlaylistsReducer from "./reducers/playlists.reducer";
import songsReducer from "./reducers/songs.reducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  isFetching: fetchReducer,
  play: PlayREducer,
  auth: AuthReducer,
  playlists: PlaylistsReducer,
});

export default rootReducer;
