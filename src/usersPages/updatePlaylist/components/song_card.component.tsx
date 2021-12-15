import { Button, Card, CardContent } from "@mui/material";
import { Song } from "../../songsList/types";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

type SongCardProps = {
  isExist: boolean;
  song: Song;
  clickHandler: () => void;
};

export default function SongCard({
  isExist,
  song,
  clickHandler,
}: SongCardProps) {
  return (
    <Card>
      <CardContent className="songsCard">
        <div>
          <div>{song.name}</div>
          <div>{song.author}</div>
        </div>
        <Button onClick={clickHandler} color="inherit">
          {isExist ? (
            <RemoveCircleIcon fontSize="large" sx={{ color: "#009e71" }} />
          ) : (
            <AddCircleIcon fontSize="large" sx={{ color: "#009e71" }} />
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
