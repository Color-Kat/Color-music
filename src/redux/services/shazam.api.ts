import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISongDetails, RootObject } from "@/redux/services/types";
import { ISong } from "@/redux/services/types";
import { IArtist } from "@/redux/services/artistTypes";

export const shazamApi = createApi({
    reducerPath: 'shazam/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_RAPID_API_KEY);
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query<ISong[], any>({
            query: () => '/charts/track',
            transformResponse: (response: RootObject) => response.tracks
        }),
        getSongDetails: builder.query<ISongDetails, number>({
            query: (songId) => `/songs/get-details?key=${songId}`
        }),
        getSongRelated: builder.query<any, number>({
            query: (songId) => `/songs/list-recommendations?key=${songId}&locale=en-US`,
            transformResponse: (response) => response.tracks
        }),
        getArtistDetailsWithSongs: builder.query<any, number>({
            query: (artistId) => `/artists/get-summary?id=${artistId}`,
            transformResponse: (response) => response.resources
        }),
        getArtistDetails: builder.query<IArtist, number>({
            query: (artistId) => `/artists/get-details?id=${artistId}&l:en-US`,
            transformResponse: (response) => response.data[0]
        }),
        getSongsBySearch: builder.query<ISong, string>({
            query: (searchTerm) => `/search?term=${searchTerm}`,
            transformResponse: (response) => response?.tracks?.hits?.map(song => song.track)
        }),
    })
});

export const {
                 useGetTopChartsQuery,
                 useGetSongDetailsQuery,
                 useGetSongRelatedQuery,
                 useGetArtistDetailsQuery,
                 useGetArtistDetailsWithSongsQuery,
                 useGetSongsByCountryQuery,
                 useGetSongsBySearchQuery
             } = shazamApi;