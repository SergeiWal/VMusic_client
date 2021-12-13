import { Playlist } from "../../store/reducers/playlists.reducer";
import SongList from "../songsList/components/song_list.component";
import { Song } from "../songsList/types";

type PlaylistPageProps = {
  playlist: Playlist;
  songs: Song[];
};

export default function PlaylistPage({
  playlist: { name },
  songs,
}: PlaylistPageProps) {
  return (
    <div className="playlistView">
      <div className="playlistHeader">
        <h5>{name}</h5>
      </div>
      <SongList songs={songs} />
    </div>
  );
}
