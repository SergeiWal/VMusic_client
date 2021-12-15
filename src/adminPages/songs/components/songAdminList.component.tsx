import { FixedSizeList as List } from "react-window";
import { generateSongListRows } from "../../../usersPages/songsList/components/song_list.component";
import { Song } from "../../../usersPages/songsList/types";
import SongAdminCardContainer from "../containers/songCard.admin.container";

type SongAdminListProps = {
  songs: Song[];
};

export default function SongAdminList({ songs }: SongAdminListProps) {
  const songsList = songs.map((item: Song) => (
    <SongAdminCardContainer song={item} />
  ));

  return (
    <List
      className="songsList"
      itemData={songsList}
      height={600}
      itemCount={songsList.length}
      itemSize={100}
      width={500}
    >
      {generateSongListRows}
    </List>
  );
}
