import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  addSongAction,
  getAuthorsAction,
  getGenresAction,
} from "../admin_songs.actions";
import CreateSongComponent from "../components/createSong.component";
import { SelectChangeEvent } from "@mui/material/Select";
import { getSongsAction } from "../../../usersPages/songsList/actions";

export default function CreateSongContainer() {
  const { authors, genres } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [source, setSource] = useState("");

  const clearFields = () => {
    setGenre("");
    setAuthor("");
    setName("");
    setSource("");
  };

  const clickHandler = () => {
    dispatch(addSongAction({ name, source, genre, author }));
    clearFields();
  };

  useEffect(() => {
    dispatch(getGenresAction());
    dispatch(getAuthorsAction());
  }, []);

  return (
    <CreateSongComponent
      message={message}
      name={name}
      source={source}
      genre={genre}
      author={author}
      authors={authors}
      genres={genres}
      nameHandler={setName}
      sourceHandler={setSource}
      genreHandler={setGenre}
      authorHandler={setAuthor}
      clickHandler={clickHandler}
    />
  );
}
