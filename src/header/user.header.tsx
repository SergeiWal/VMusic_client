import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import { useAppDispatch } from "../store/store";
import { logOutAction } from "./header.actions";

export default function UserHeader() {
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(logOutAction());
  };

  return (
    <header className="header">
      <div className="header__menu">
        <div className="logo">
          <Link to={"/"}>VMusic</Link>
        </div>
        <div className="headerItems">
          <Link to={"/songsList"}>Songs</Link>
          <Link to={"/playlists"}>Playlists</Link>
          <Link to={"/create_playlist"}>Create playlist</Link>
        </div>
      </div>
      <div className="logOut">
        <Link to="/" className="linkButton">
          <Button onClick={logOut}>
            <InputOutlinedIcon fontSize="medium" sx={{ color: "#fff" }} />
          </Button>
        </Link>
      </div>
    </header>
  );
}
