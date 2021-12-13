import axios from "axios";
import { SignInPayload } from "../signInUp/signIn.action";
import { User } from "./reducers/auth.reducer";

const instance = axios.create({
  baseURL: "http://localhost:3004",
});

export const getSongs = async () => {
  const response = await instance.get("/songs");
  return response.data;
};

export const signIn = async ({ username, password }: SignInPayload) => {
  const response = await instance.get(`/users/${username}/${password}`);
  return response.data;
};

export const getPlaylists = async (id: number) => {
  const response = await instance.get(`/playlists/${id}`);
  return response.data;
};

export const getPlaylistsSong = async (playlist_id: number) => {
  const response = await instance.get(`/playlists/${playlist_id}/song`);
  return response.data;
};
