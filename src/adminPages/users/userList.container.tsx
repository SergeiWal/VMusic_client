import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getUsersAction } from "./users.actions";
import UsersList from "./usersList.component";

export default function UsersListContainer() {
  const { users } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return <UsersList users={users} />;
}
