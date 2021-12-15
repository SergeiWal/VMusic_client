import { User } from "../../store/reducers/auth.reducer";
import { FixedSizeList as List } from "react-window";
import UserCardContainer from "./user_card.container";
import { generateSongListRows } from "../../usersPages/songsList/components/song_list.component";

type UsersListProps = {
  users: User[];
};

export default function UsersList({ users }: UsersListProps) {
  const usersList = users.map((item: User) => (
    <UserCardContainer user={item} />
  ));

  return (
    <List
      className="songsList"
      itemData={usersList}
      height={700}
      itemCount={usersList.length}
      itemSize={100}
      width={500}
    >
      {generateSongListRows}
    </List>
  );
}
