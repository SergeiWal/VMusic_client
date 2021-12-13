import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPlaylistsAction } from "./playlists.action";
import PlaylistCollection from "./playlist_collection.component";

export default function PlaylistsColectionContainer() {
  const {
    playlists,
    auth: { user },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlaylistsAction(user.id));
  }, []);

  return <PlaylistCollection playlists={playlists} />;
}
