import React from 'react';
import { useTSelector } from "@hooks/redux";
import { SongCard } from "@modules/SongCard";
import { useGetTopChartsQuery } from "@/redux/services/shazam.api";
import { Error, Loader } from "@/UI";
import { ArtistCard } from "@/components";
import { PageTitle } from "@UI/PageTitle";

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top charts" />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col ">
            <PageTitle>
                Top Artists
            </PageTitle>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((track) => (
                    <ArtistCard
                        key={track.key}
                        track={track}
                    />
                ))}
            </div>
        </div>
    );
}

export default TopArtists;
