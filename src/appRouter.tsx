import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SongListContainer from "./usersPages/songsList/containers/song_list.container";
import PlaylistsColectionContainer from "./usersPages/playlistList/playlist_collection.container";
import PlaylistPageContainer from "./usersPages/playlist/playlist_page.container";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App>
              <SongListContainer />
            </App>
          }
        />
        <Route
          path="/songsList"
          element={
            <App>
              <SongListContainer />
            </App>
          }
        />
        <Route
          path="/playlists"
          element={
            <App>
              <PlaylistsColectionContainer />
            </App>
          }
        >
          <Route
            path=":id"
            element={
              <App>
                <PlaylistPageContainer />
              </App>
            }
          />
        </Route>
        <Route path="/create_playlist" element={<SongListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
