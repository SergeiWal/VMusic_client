export type SignInProps = {
  status: boolean;
  username: string;
  password: string;
  setUsername: (str: string) => void;
  setPassword: (str: string) => void;
  signInHandler: () => void;
};

export default function SignIn({
  status,
  username,
  password,
  setPassword,
  setUsername,
  signInHandler,
}: SignInProps) {
  return (
    <div className="signInForm">
      <form>
        <div className="formInput">
          <label>
            Username:
            <br />
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="signInButton" onClick={signInHandler}>
          SIGN IN
        </button>
      </form>
      <div className="errorMessage">
        {status ? "" : "Username or password is not valid"}
      </div>
    </div>
  );
}
