import { Button, Card, CardContent } from "@mui/material";
import { Song } from "../../../usersPages/songsList/types";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

type SongAdminCardProps = {
  song: Song;
  deleteHandler: () => void;
};

export default function SongAdminCard({
  song,
  deleteHandler,
}: SongAdminCardProps) {
  return (
    <Card>
      <CardContent className="songsCard">
        <div>
          <div>{song.name}</div>
          <div>{song.author}</div>
        </div>
        <div>
          <Button color="inherit" onClick={deleteHandler}>
            <DeleteIcon fontSize="large" sx={{ color: "#009e71" }} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
