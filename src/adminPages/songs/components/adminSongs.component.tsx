import CreateSongContainer from "../containers/createSong.container";
import SongAdminListContainer from "../containers/songAdminList.container";

export default function AdminSongs() {
  return (
    <div className="songAdminBox">
      <SongAdminListContainer />
      <CreateSongContainer />
    </div>
  );
}
