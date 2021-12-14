import { Link } from "react-router-dom";

type CreatePlaylistProps = {
  name: string;
  setName: (str: string) => void;
  createBtnHandler: () => void;
};

export default function CreatePlaylist({
  name,
  setName,
  createBtnHandler,
}: CreatePlaylistProps) {
  return (
    <div className="playlistsNameForm">
      <form>
        <div className="formInput playlistInput">
          <label>
            Playlists name:
            <br />
            <input
              type="text"
              placeholder="playlist"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <Link to={"/playlists"} className="buttonLink">
            <button className="signInButton" onClick={createBtnHandler}>
              CREATE
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
