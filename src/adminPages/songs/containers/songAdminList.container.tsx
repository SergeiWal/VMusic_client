import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getSongsAction } from "../../../usersPages/songsList/actions";
import SongAdminList from "../components/songAdminList.component";

export default function SongAdminListContainer() {
  const { songs } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSongsAction());
  }, []);

  return <SongAdminList songs={songs} />;
}
