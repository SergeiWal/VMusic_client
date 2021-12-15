import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import AddAuthor from "./addAuthors.component";
import { addAuthorAction } from "./authors.actions";

export default function AddAuthorContainer() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const clickHandler = () => {
    if (name && name.length > 1) {
      dispatch(addAuthorAction({ name }));
      setMessage("Success");
    } else {
      setMessage("Name is not valid");
    }
    setName("");
  };

  return (
    <AddAuthor
      name={name}
      nameHandler={setName}
      clickHandler={clickHandler}
      message={message}
    />
  );
}
