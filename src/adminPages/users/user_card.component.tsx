import { Button, Card, CardContent } from "@mui/material";
import { User } from "../../store/reducers/auth.reducer";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Fragment } from "react";

type UserCardProps = {
  user: User;
  setInAdmin: () => void;
  deleteHandler: () => void;
};

export default function UserCard({
  user: { name, role },
  setInAdmin,
  deleteHandler,
}: UserCardProps) {
  return (
    <Card>
      <CardContent className="songsCard">
        <div>
          <div>{name}</div>
          <div>{role}</div>
        </div>
        <div>
          {role === "client" ? (
            <Fragment>
              <Button color="inherit" onClick={setInAdmin}>
                <AddCircleRoundedIcon
                  fontSize="large"
                  sx={{ color: "#009e71" }}
                />
              </Button>
              <Button color="inherit" onClick={deleteHandler}>
                <DeleteIcon fontSize="large" sx={{ color: "#009e71" }} />
              </Button>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </CardContent>
    </Card>
  );
}
