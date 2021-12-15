import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Author } from "../../../store/reducers/authors.reducer";
import { Genre } from "../../../store/reducers/genres.reducer";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

type CreateSongComponentProps = {
  message: string;
  name: string;
  source: string;
  genre: string;
  author: string;
  authors: Author[];
  genres: Genre[];
  nameHandler: (str: string) => void;
  sourceHandler: (str: string) => void;
  clickHandler: () => void;
  genreHandler: (str: string) => void;
  authorHandler: (str: string) => void;
};

const FormInputStyle = {
  marginTop: 5,
  marginBottom: 10,
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(5),
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #009e71",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 5,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function CreateSongComponent({
  message,
  name,
  source,
  genre,
  author,
  authors,
  genres,
  nameHandler,
  sourceHandler,
  clickHandler,
  genreHandler,
  authorHandler,
}: CreateSongComponentProps) {
  return (
    <div className="createSongForm">
      <form>
        <div className="formInput">
          <label>
            Name:
            <br />
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => nameHandler(e.target.value)}
              required
            />
          </label>
          <br />
        </div>
        <div className="formInput">
          <label>
            Source:
            <br />
            <input
              type="text"
              placeholder="source"
              value={source}
              onChange={(e) => sourceHandler(e.target.value)}
              required
            />
          </label>
          <br />
        </div>
        <FormControl fullWidth style={FormInputStyle}>
          <InputLabel id="genres_select_label" style={{ color: "#009e71" }}>
            Genres
          </InputLabel>
          <Select
            labelId="genres_select_label"
            id="genres_select"
            value={genre}
            label="Genre"
            onChange={(e) => genreHandler(e.target.value)}
            input={<BootstrapInput />}
            required
          >
            {genres.map((item) => (
              <MenuItem value={item.id}>{item.genre}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={FormInputStyle}>
          <InputLabel id="authors_select_label" style={{ color: "#009e71" }}>
            Authors
          </InputLabel>
          <Select
            labelId="authors_select_label"
            id="authors_select"
            value={author}
            label="Author"
            onChange={(e) => authorHandler(e.target.value)}
            input={<BootstrapInput />}
            required
          >
            {authors.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
      <button className="signInButton" onClick={clickHandler}>
        CREATE
      </button>
      <div className="errorMessage">{message}</div>
    </div>
  );
}
