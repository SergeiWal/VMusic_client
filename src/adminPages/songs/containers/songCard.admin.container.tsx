import { useAppDispatch, useAppSelector } from "../../../store/store";
import { Song } from "../../../usersPages/songsList/types";
import { deleteSongAction } from "../admin_songs.actions";
import SongAdminCard from "../components/songCars.admin";

type SongAdminCardContainerProps = {
  song: Song;
};

export default function SongAdminCardContainer({
  song,
}: SongAdminCardContainerProps) {
  const { songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    const index = songs.indexOf(song);
    songs.splice(index, 1);
    dispatch(deleteSongAction(song.id));
  };

  return <SongAdminCard song={song} deleteHandler={deleteHandler} />;
}
