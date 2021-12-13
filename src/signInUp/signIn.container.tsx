import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { sigInAction } from "./signIn.action";
import SignIn from "./signIn.component";

export default function SignInContainer() {
  const {
    auth: { status },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clearField = () => {
    setUsername("");
    setPassword("");
  };

  const signInHandler = () => {
    dispatch(sigInAction({ username, password }));
    clearField();
  };

  return (
    <SignIn
      status={status}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      signInHandler={signInHandler}
    />
  );
}
