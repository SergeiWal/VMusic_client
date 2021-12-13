import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>VMusic</Link>
      </div>
      <div className="headerItems">
        <Link to="/songs">Songs</Link>
        <Link to="/users">Users</Link>
        <Link to="/authors">Authors</Link>
      </div>
    </header>
  );
}
