import { useState } from "react";
import { Playlist } from "../../../store/reducers/playlists.reducer";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { Song } from "../../songsList/types";
import SongCard from "../components/song_card.component";
import {
  addSongToPlaylistAction,
  deleteSongToPlaylistAction,
} from "../update_playlist.actions";

type SongCardContainerProps = {
  playlist: Playlist;
  song: Song;
};

export default function SongCardContainer({
  song,
  playlist,
}: SongCardContainerProps) {
  const { playlistSongs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const isExist = () => {
    const srch_song = playlistSongs.find((item) => item.id === song.id);
    return srch_song ? true : false;
  };

  const [exist, setExist] = useState(isExist());

  const clickHandler = () => {
    if (exist) {
      const index = playlistSongs.indexOf(song);
      playlistSongs.splice(index, 1);
      dispatch(
        deleteSongToPlaylistAction({
          song_id: song.id,
          playlist_id: playlist.id,
        })
      );
      setExist(false);
    } else {
      playlistSongs.push(song);
      dispatch(
        addSongToPlaylistAction({
          song_id: song.id,
          playlist_id: playlist.id,
        })
      );
      setExist(true);
    }
  };

  return <SongCard song={song} isExist={exist} clickHandler={clickHandler} />;
}
