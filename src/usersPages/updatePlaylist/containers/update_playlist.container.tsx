import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getPlaylistsSongAction } from "../../playlist/playlist_page.action";
import UpdatePlaylistPage from "../components/update_playlist.component";
import { updateNameAction } from "../update_playlist.actions";

export default function UpdatePlaylistContainer() {
  const params = useParams();
  const playlist_id = parseInt(params.id);

  const { playlists, songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const getPlaylist = () =>
    playlists.find((playlist) => playlist.id === playlist_id);

  const [playlist, setPlaylist] = useState(getPlaylist());
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getPlaylistsSongAction(playlist_id));
  }, []);

  useEffect(() => {
    setPlaylist(getPlaylist());
  }, [playlists]);

  const updateNameHandler = () => {
    if (name && name.length > 4) {
      playlist.name = name;
      dispatch(updateNameAction({ playlist_id, name }));
      setMessage("");
    } else {
      setMessage("Name is not valid");
    }

    setName("");
  };

  return (
    <UpdatePlaylistPage
      playlist={playlist}
      songs={songs}
      name={name}
      message={message}
      setName={setName}
      updateNameHandler={updateNameHandler}
    />
  );
}
