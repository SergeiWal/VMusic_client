import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getSongsAction } from "../actions";
import SongList from "../components/song_list.component";

export default function SongListContainer() {
  const { songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSongsAction());
  }, []);

  return <SongList songs={songs} />;
}
