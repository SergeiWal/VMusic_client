import { Fragment } from "react";
import "./App.css";
import UserHeader from "./header/user.header";
import SignInContainer from "./signInUp/signIn.container";
import { useAppSelector } from "./store/store";
import "./styles.css";

type AppPropsType = {
  children: any;
};

function App({ children }: AppPropsType) {
  const {
    auth: { isAuth },
  } = useAppSelector((state) => state);

  return isAuth ? (
    <Fragment>
      <UserHeader />
      <div className="App">{children}</div>
    </Fragment>
  ) : (
    <SignInContainer />
  );
}

export default App;
