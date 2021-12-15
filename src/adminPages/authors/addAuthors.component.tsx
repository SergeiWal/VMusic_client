type AddAuthorProps = {
  message: string;
  name: string;
  nameHandler: (str: string) => void;
  clickHandler: () => void;
};

export default function AddAuthor({
  message,
  name,
  nameHandler,
  clickHandler,
}: AddAuthorProps) {
  return (
    <div className="FormWrapper">
      <div className="addAuthorForm">
        <form>
          <div className="formInput">
            <label>
              Name:
              <br />
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => nameHandler(e.target.value)}
              />
            </label>
            <br />
          </div>
          <button className="signInButton" onClick={clickHandler}>
            ADD
          </button>
        </form>
        <div className="errorMessage">{message}</div>
      </div>
    </div>
  );
}
