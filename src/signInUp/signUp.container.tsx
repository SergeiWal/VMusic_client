import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { createUserAction } from "./signIn.action";
import SignUp from "./signUp.component";

export default function SignUpContainer() {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [status, setStatus] = useState("");

  const clearFields = () => {
    setUsername("");
    setPassword("");
    setRepeatPass("");
  };

  const signUpHandler = () => {
    if (username.length > 4 && password.length >= 8 && repeatPass == password) {
      dispatch(
        createUserAction({ name: username, password: password, role: 1 })
      );
      setStatus("Success");
    } else {
      setStatus("Failed");
    }
    clearFields();
  };

  return (
    <SignUp
      username={username}
      password={password}
      repeatePass={repeatPass}
      status={status}
      setUsername={setUsername}
      setPassword={setPassword}
      setRepeatePassword={setRepeatPass}
      signUpHandler={signUpHandler}
    />
  );
}
