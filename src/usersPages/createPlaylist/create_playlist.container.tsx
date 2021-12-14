import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { createPlaylistAction } from "./create_playlist.actions";
import CreatePlaylist from "./create_playlist.component";

export default function CreatePlaylistContainer() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const createBtnHandler = () => {
    dispatch(createPlaylistAction({ name, user: user.id }));
  };

  return (
    <CreatePlaylist
      name={name}
      setName={setName}
      createBtnHandler={createBtnHandler}
    />
  );
}
