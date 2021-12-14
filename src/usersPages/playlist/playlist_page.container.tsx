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

  const { playlists, songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const getPlaylist = () =>
    playlists.find((playlist) => playlist.id === playlist_id);

  const [playlist, setPlaylist] = useState(getPlaylist());

  useEffect(() => {
    dispatch(getPlaylistsSongAction(playlist_id));
  }, []);

  const deleteBtnHandler = () => {
    console.log("Delete");
    let playlist_index = -1;

    playlists.forEach((playlist, index) => {
      if (playlist.id === playlist_id) {
        playlist_index = index;
      }
    });

    if (playlist_index != -1) {
      playlists.splice(playlist_index, 1);
    }

    dispatch(deletePlaylistAction(playlist_id));
  };

  return (
    <PlaylistPage
      playlist={playlist}
      songs={songs}
      deleteBtnHandler={deleteBtnHandler}
    />
  );
}
