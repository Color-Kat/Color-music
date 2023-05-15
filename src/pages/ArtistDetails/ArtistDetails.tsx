import { useParams } from 'react-router-dom'
import { useTSelector } from "@hooks/redux";
import { DetailsHeader } from "@components/DetailsHeader";
import { useGetArtistDetailsQuery } from "@/redux/services/shazam.api";
import { Error, Loader } from "@/UI";
import { RelatedSongs } from "@modules/RelatedSongs";
import { Lyrics } from "@pages/SongDetails/components/Lyrics";
import { SongBar } from "@modules/RelatedSongs/components/SongBar";
import React from "react";

const ArtistDetails = () => {
    const {artistId} = useParams();

    const {activeSong, isPlaying} = useTSelector((state) => state.player);

    const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery(artistId);

    console.log(artistData)

    if (isFetchingArtistDetails)
        return <Loader title="Loading artist details"/>;

    if (error) return <Error/>;

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId={artistId}
                artistData={artistData}
            />

            <div className="flex flex-col">
                <h1 className="font-bold text-3xl text-violet-200">Related Songs:</h1>

                <div className="mt-6 w-full flex flex-col">
                    <p className="text-violet-300 text-lg my-3">Sorry, but we can't get artist tracks yet!</p>
                </div>
            </div>

            {/*<RelatedSongs*/}
            {/*    artistId={artistId}*/}
            {/*    songs={artistData?.relationships?.albums?.data}*/}
            {/*    isPlaying={isPlaying}*/}
            {/*    activeSong={activeSong}*/}
            {/*/>*/}
        </div>
    );
};

export default ArtistDetails;
