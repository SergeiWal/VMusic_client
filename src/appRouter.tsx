import App from "./App";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import SongListContainer from "./usersPages/songsList/containers/song_list.container";
import PlaylistsColectionContainer from "./usersPages/playlistList/playlist_collection.container";
import PlaylistPageContainer from "./usersPages/playlist/playlist_page.container";
import CreatePlaylistContainer from "./usersPages/createPlaylist/create_playlist.container";
import UpdatePlaylistContainer from "./usersPages/updatePlaylist/containers/update_playlist.container";
import { useAppSelector } from "./store/store";
import SongAdminListContainer from "./adminPages/songs/containers/songAdminList.container";
import AdminSongs from "./adminPages/songs/components/adminSongs.component";
import AddAuthorContainer from "./adminPages/authors/addAuthor.container";
import UsersListContainer from "./adminPages/users/userList.container";

export default function AppRouter() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App>
              {user && user.role === "admin" ? (
                <AdminSongs />
              ) : (
                <SongListContainer />
              )}
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
        />
        <Route
          path="/playlists/:id"
          element={
            <App>
              <PlaylistPageContainer />
            </App>
          }
        />
        <Route
          path="/playlists/update/:id"
          element={
            <App>
              <UpdatePlaylistContainer />
            </App>
          }
        />
        <Route
          path="/create_playlist"
          element={
            <App>
              <CreatePlaylistContainer />
            </App>
          }
        />
        <Route
          path="/songs"
          element={
            <App>
              <AdminSongs />
            </App>
          }
        />
        <Route
          path="/users"
          element={
            <App>
              <UsersListContainer />
            </App>
          }
        />
        <Route
          path="/authors"
          element={
            <App>
              <AddAuthorContainer />
            </App>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
