import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
};

type stateType = typeof initialState;

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state: stateType , action) => {
            state.activeSong = action.payload.song;

            if (action.payload?.data?.tracks?.hits) {
                state.currentSongs = action.payload.data.tracks.hits;
            } else if (action.payload?.data?.properties) {
                state.currentSongs = action.payload?.data?.tracks;
            } else {
                state.currentSongs = action.payload.data;
            }

            state.currentIndex = action.payload.i;
            state.isActive = true;
        },

        nextSong: (state: stateType, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state: stateType, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state: stateType, action) => {
            state.isPlaying = action.payload;
        },

        selectGenreListId: (state: stateType, action) => {
            state.genreListId = action.payload;
        },
    },
});

export const {activeSong, setActiveSong, currentIndex, nextSong, prevSong, playPause, selectGenreListId} = playerSlice.actions;

export default playerSlice.reducer;
