import { Button, Card, CardContent } from "@mui/material";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import PauseCircleFilledOutlinedIcon from "@mui/icons-material/PauseCircleFilledOutlined";
import { Song } from "../types";

export type SongItemProps = {
  song: Song;
  isPlay: boolean;
  playHandler: () => void;
};

export default function SongItem({ song, isPlay, playHandler }: SongItemProps) {
  return (
    <Card>
      <CardContent className="songsCard">
        <div>
          <div>{song.name}</div>
          <div>{song.author}</div>
        </div>
        <Button onClick={playHandler} color="inherit">
          {isPlay ? (
            <PauseCircleFilledOutlinedIcon
              fontSize="large"
              sx={{ color: "#009e71" }}
            />
          ) : (
            <PlayCircleFilledOutlinedIcon
              fontSize="large"
              sx={{ color: "#009e71" }}
            />
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
