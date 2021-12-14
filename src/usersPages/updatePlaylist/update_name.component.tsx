import { Playlist } from "../../store/reducers/playlists.reducer";

type UpdateNameProps = {
  name: string;
  setName: (str: string) => void;
  updateHandler: () => void;
};

export default function UpdateName({
  name,
  setName,
  updateHandler,
}: UpdateNameProps) {
  return (
    <div className="updateNameForm">
      <form>
        <div className="formInput playlistInput">
          <label>
            Playlists name:
            <input
              type="text"
              placeholder="playlist"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <button className="signInButton" onClick={updateHandler}>
            CHANGE
          </button>
        </div>
      </form>
    </div>
  );
}
