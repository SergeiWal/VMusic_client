import { Link } from "react-router-dom";

export type SignUpProps = {
  status: string;
  username: string;
  password: string;
  repeatePass: string;
  setUsername: (str: string) => void;
  setPassword: (str: string) => void;
  setRepeatePassword: (str: string) => void;
  signUpHandler: () => void;
};

export default function SignUp({
  status,
  username,
  password,
  repeatePass,
  setUsername,
  setPassword,
  signUpHandler,
  setRepeatePassword,
}: SignUpProps) {
  return (
    <div className="fromWrapper">
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
            <br />
            <label>
              Repeat password:
              <br />
              <input
                type="password"
                placeholder="Password"
                value={repeatePass}
                onChange={(e) => setRepeatePassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="formButton">
            <button className="signInButton" onClick={signUpHandler}>
              SIGN UP
            </button>
          </div>
          <div className="formLink">
            <Link to="/" className="linkButton">
              SIGN IN
            </Link>
          </div>
        </form>
        <div className="errorMessage">{status}</div>
      </div>
    </div>
  );
}
