import { PayloadAction } from "@reduxjs/toolkit";
import { playSongChangedAction } from "../../usersPages/songsList/actions";
import { Song } from "../../usersPages/songsList/types";

export default function PlayREducer(
  state: Song = null,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case playSongChangedAction.type:
      return action.payload;
    default:
      return state;
  }
}
