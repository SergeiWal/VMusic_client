import axios from "axios";
import { SignInPayload } from "../signInUp/signIn.action";
import { User } from "./reducers/auth.reducer";
import { CreatePayload, UpdateNamePayload } from "./reducers/playlists.reducer";
import { AddDeleteSongToPlaylistPayload } from "./reducers/playlist_songs.reducer";

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

export const deletePlaylist = async (id: number) => {
  const response = await instance.delete(`/playlists/${id}`);
  return response.data;
};

export const createPlaylist = async (body: CreatePayload) => {
  const response = await instance.post(`/playlists`, body);
  return response.data;
};

export const addSongToPlaylist = async ({
  song_id,
  playlist_id,
}: AddDeleteSongToPlaylistPayload) => {
  const response = await instance.post(
    `/playlists/${playlist_id}/song/${song_id}`
  );
  return response.data;
};

export const deleteSongFromPlaylist = async ({
  song_id,
  playlist_id,
}: AddDeleteSongToPlaylistPayload) => {
  const response = await instance.delete(
    `/playlists/${playlist_id}/song/${song_id}`
  );
  return response.data;
};

export const updatePlaylistName = async ({
  playlist_id,
  name,
}: UpdateNamePayload) => {
  const response = await instance.patch(`/playlists/${playlist_id}/${name}`);
  return response.data;
};
