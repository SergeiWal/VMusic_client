import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import UpdatePlaylistPage from "./update_playlist.component";

export default function UpdatePlaylistContainer() {
  const params = useParams();
  const playlist_id = parseInt(params.id);

  const { playlists, songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const getPlaylist = () =>
    playlists.find((playlist) => playlist.id === playlist_id);

  const [playlist, setPlaylist] = useState(getPlaylist());
  const [name, setName] = useState("");

  const updateNameHandler = () => {};

  return (
    <UpdatePlaylistPage
      playlist={playlist}
      name={name}
      setName={setName}
      updateNameHandler={updateNameHandler}
    />
  );
}
