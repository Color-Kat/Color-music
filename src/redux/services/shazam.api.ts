import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RootObject } from "@/redux/services/types";
import { Track } from "@/redux/services/types";

export const shazamApi = createApi({
    reducerPath: 'shazam/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '36269222fcmshe1e863675254b57p150e25jsn55a96dd36ce6');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query<Track[], any>({
            query: () => '/charts/track',
            transformResponse: (response: RootObject) => response.tracks
        })
    })
});

export const {
    useGetTopChartsQuery
} = shazamApi;