import { Playlist } from "../../../store/reducers/playlists.reducer";

type UpdateNameProps = {
  name: string;
  message: string;
  setName: (str: string) => void;
  updateHandler: () => void;
};

export default function UpdateName({
  name,
  message,
  setName,
  updateHandler,
}: UpdateNameProps) {
  return (
    <div className="updateNameForm">
      <form>
        <div className="formInput updateInput">
          <label>
            Change playlists name:
            <br />
            <input
              type="text"
              placeholder="playlist name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <button className="signInButton" onClick={updateHandler}>
            CHANGE
          </button>
        </div>
        <div className="errorMessage">{message}</div>
      </form>
    </div>
  );
}
