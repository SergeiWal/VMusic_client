import { User } from "../../store/reducers/auth.reducer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { deleteUserAction, madeAdminAction } from "./users.actions";
import UserCard from "./user_card.component";

type UserContainerProps = {
  user: User;
};

export default function UserCardContainer({ user }: UserContainerProps) {
  const { users } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const setInAdmin = () => {
    user.role = "admin";
    dispatch(madeAdminAction(user.id));
  };
  const deleteHandler = () => {
    const index = users.indexOf(user);
    users.splice(index, 1);
    dispatch(deleteUserAction(user.id));
  };

  return (
    <UserCard
      user={user}
      setInAdmin={setInAdmin}
      deleteHandler={deleteHandler}
    />
  );
}
