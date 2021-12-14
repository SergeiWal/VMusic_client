import { Playlist } from "../../../store/reducers/playlists.reducer";
import { Song } from "../../songsList/types";
import SongCardContainer from "../containers/song_card.container";
import { FixedSizeList as List } from "react-window";
import { generateSongListRows } from "../../songsList/components/song_list.component";

type SongListProps = {
  songs: Song[];
  playlist: Playlist;
};

export default function SongList({ songs, playlist }: SongListProps) {
  const songsList = songs.map((item: Song) => (
    <SongCardContainer song={item} playlist={playlist} />
  ));

  return (
    <List
      className="songsPlaylistList"
      itemData={songsList}
      height={400}
      itemCount={songsList.length}
      itemSize={100}
      width={500}
    >
      {generateSongListRows}
    </List>
  );
}
