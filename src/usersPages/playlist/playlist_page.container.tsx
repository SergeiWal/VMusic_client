import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPlaylistsSongAction } from "./playlist_page.action";
import PlaylistPage from "./playlist_page.component";

type PlaylistPageContainerProps = {
  playlist_id: number;
};

export default function PlaylistPageContainer() {
  const params = useParams();
  const playlist_id = parseInt(params.id);
  const { playlists, songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [playlist, setPlaylist] = useState(null);

  const getPlaylist = () =>
    playlists.find((playlist) => playlist.id === playlist_id);

  useEffect(() => {
    dispatch(getPlaylistsSongAction(playlist_id));
    setPlaylist(getPlaylist());
  }, []);

  return <PlaylistPage playlist={playlist} songs={songs} />;
}
