import { Song } from "../types";
import { FixedSizeList as List } from "react-window";
import SongItemContainer from "../containers/songItem.container";
export const WINDOW_HEIGHT: number = window.innerHeight;

type SongListProps = {
  songs: Song[];
};

type ListGeneratorParams = {
  data: JSX.Element[];
  index: number;
  style: React.CSSProperties;
};

export const generateSongListRows = ({
  data,
  index,
  style,
}: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function SongList({ songs }: SongListProps) {
  const songsList = songs.map((item: Song) => (
    <SongItemContainer song={item} />
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
