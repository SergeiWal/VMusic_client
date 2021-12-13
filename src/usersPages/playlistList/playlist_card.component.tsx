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
    <Link to={`/playlists/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <AlbumSharpIcon fontSize="large" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
