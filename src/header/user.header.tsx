import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>VMusic</Link>
      </div>
      <div className="headerItems">
        <Link to={"/songsList"}>Songs</Link>
        <Link to={"/playlists"}>Playlists</Link>
        <Link to={"/create_playlist"}>Create playlist</Link>
      </div>
    </header>
  );
}
