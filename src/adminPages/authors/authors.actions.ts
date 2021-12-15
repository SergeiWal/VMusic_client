import { createAction } from "@reduxjs/toolkit";
import { AddAuthorPayload, Author } from "../../store/reducers/authors.reducer";
import { withPayloadType } from "../../store/store";

export const addAuthorAction = createAction(
  "ADD_AUTHOR_REQUEST",
  withPayloadType<AddAuthorPayload>()
);

export const addAuthorSuccessAction = createAction(
  "ADD_AUTHOR_SUCCESS",
  withPayloadType<Author>()
);

export const addAuthorFailedAction = createAction(
  "ADD_AUTHOR_FAILED",
  withPayloadType<Error>()
);
