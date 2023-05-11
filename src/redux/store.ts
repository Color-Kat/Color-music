import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import {shazamApi} from "@/redux/services/shazam.api";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        [shazamApi.reducerPath]: shazamApi.reducer
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware)
});
