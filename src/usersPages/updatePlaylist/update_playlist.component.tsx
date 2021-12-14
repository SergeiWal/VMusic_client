import { Playlist } from "../../store/reducers/playlists.reducer";
import UpdateName from "./update_name.component";

type UpdatePlaylistProps = {
  name: string;
  playlist: Playlist;
  setName: (str: string) => void;
  updateNameHandler: () => void;
};

export default function UpdatePlaylistPage({
  playlist,
  name,
  setName,
  updateNameHandler,
}: UpdatePlaylistProps) {
  return (
    <div>
      <div className="updateHeader">{playlist.name}</div>
      <UpdateName
        name={name}
        setName={setName}
        updateHandler={updateNameHandler}
      />
    </div>
  );
}
