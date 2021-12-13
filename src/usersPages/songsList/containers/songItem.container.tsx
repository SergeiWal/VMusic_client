import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { playSongChangedAction } from "../actions";
import SongItem from "../components/songItem.component";
import { Song } from "../types";

type SongItemContainerProps = {
  song: Song;
};

export default function SongItemContainer({ song }: SongItemContainerProps) {
  const { play } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    if (play && (play as Song).id !== song.id) {
      setPlay(false);
    }
  }, [play]);

  const playHandler = () => {
    dispatch(playSongChangedAction(song));
    setPlay((value) => !value);
  };

  return <SongItem isPlay={isPlay} song={song} playHandler={playHandler} />;
}
