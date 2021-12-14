import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  deletePlaylistAction,
  getPlaylistsSongAction,
} from "./playlist_page.action";
import PlaylistPage from "./playlist_page.component";

export default function PlaylistPageContainer() {
  const params = useParams();
  const playlist_id = parseInt(params.id);

  const { playlists, playlistSongs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const getPlaylist = () =>
    playlists.find((playlist) => playlist.id === playlist_id);

  const [playlist, setPlaylist] = useState(getPlaylist());

  useEffect(() => {
    dispatch(getPlaylistsSongAction(playlist_id));
  }, []);

  const deleteBtnHandler = () => {
    let playlist_index = playlists.indexOf(playlist);
    playlists.splice(playlist_index, 1);

    dispatch(deletePlaylistAction(playlist_id));
  };

  return (
    <PlaylistPage
      playlist={playlist}
      songs={playlistSongs}
      deleteBtnHandler={deleteBtnHandler}
    />
  );
}
