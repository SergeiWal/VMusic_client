import { Playlist } from "../../../store/reducers/playlists.reducer";
import { Song } from "../../songsList/types";
import SongList from "./song_list.component";
import UpdateName from "./update_name.component";

type UpdatePlaylistProps = {
  name: string;
  message: string;
  playlist: Playlist;
  songs: Song[];
  setName: (str: string) => void;
  updateNameHandler: () => void;
};

export default function UpdatePlaylistPage({
  playlist,
  name,
  songs,
  message,
  setName,
  updateNameHandler,
}: UpdatePlaylistProps) {
  return (
    <div className="updatePage">
      <div className="updateHeader">{playlist.name}</div>
      <UpdateName
        name={name}
        message={message}
        setName={setName}
        updateHandler={updateNameHandler}
      />
      <SongList songs={songs} playlist={playlist} />
    </div>
  );
}
