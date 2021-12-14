import { Button } from "@mui/material";
import { Playlist } from "../../store/reducers/playlists.reducer";
import SongList from "../songsList/components/song_list.component";
import { Song } from "../songsList/types";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

type PlaylistPageProps = {
  playlist: Playlist;
  songs: Song[];
  deleteBtnHandler: () => void;
};

export default function PlaylistPage({
  playlist: { name, id },
  songs,
  deleteBtnHandler,
}: PlaylistPageProps) {
  return (
    <div className="playlistView">
      <div className="playlistHeader">
        <div>{name}</div>
        <div className="playlistsButtons">
          <Link to={"/playlists"} className="buttonLink">
            <Button color="inherit">
              <SettingsIcon fontSize="large" />
            </Button>
          </Link>
          <Link to={"/playlists"} className="buttonLink">
            <Button color="inherit" onClick={deleteBtnHandler}>
              <DeleteIcon fontSize="large" />
            </Button>
          </Link>
        </div>
      </div>
      <SongList songs={songs} />
    </div>
  );
}
