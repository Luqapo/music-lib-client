/* eslint-disable import/prefer-default-export */
import {
  reactive, readonly, provide, inject,
} from 'vue';

export const stateSymbol = Symbol('state');

export const useState = () => inject(stateSymbol);

export const createStore = () => {
  const state = reactive({ user_id: null, playlists: [], selectedPlaylistId: null });
  const setUserId = (userId) => {
    state.user_id = userId;
    state.playlists.length = 0;
  };
  const addPlaylist = (playlist) => {
    state.playlists.push(playlist);
  };
  const setPlaylists = (playlists) => {
    state.playlists.push(...playlists);
  };
  const setSelectedPlaylist = (playlistId) => {
    state.selectedPlaylistId = playlistId;
  };
  return {
    setUserId, addPlaylist, setPlaylists, setSelectedPlaylist, state: readonly(state),
  };
};

export const provideState = () => provide(
  stateSymbol,
  createStore(),
);
