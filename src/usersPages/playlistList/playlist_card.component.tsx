import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import AlbumSharpIcon from "@mui/icons-material/AlbumSharp";
import { Playlist } from "../../store/reducers/playlists.reducer";
import { Link } from "react-router-dom";

export type PlaylistCardProps = {
  playlist: Playlist;
};

export default function PlaylistCard({
  playlist: { id, name },
}: PlaylistCardProps) {
  return (
    <Link to={`/playlists/${id}`} className="buttonLink">
      <Card sx={{ maxWidth: 345 }} className="playlistCard">
        <CardActionArea>
          <AlbumSharpIcon style={{ fontSize: 48 }} />
          <CardContent>
            <div className="playlistName">{name}</div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
