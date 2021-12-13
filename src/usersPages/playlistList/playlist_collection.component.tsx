import { Playlist } from "../../store/reducers/playlists.reducer";
import PlaylistCard from "./playlist_card.component";

type PlaylistCollectionProps = {
  playlists: Playlist[];
};

export default function PlaylistCollection({
  playlists,
}: PlaylistCollectionProps) {
  return (
    <div className="playlistsCollection">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}
