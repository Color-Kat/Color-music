import React from 'react';
import { useTSelector } from "@hooks/redux";
import { SongCard } from "@modules/SongCard";
import { useGetSongsBySearchQuery, useGetTopChartsQuery } from "@/redux/services/shazam.api";
import { Error, Loader } from "@/UI";
import { PageTitle } from "@UI/PageTitle";
import { useParams } from "react-router-dom";

const Search = () => {
    const { searchTerm } = useParams();

    const { activeSong, isPlaying } = useTSelector((state) => state.player);
    const { data: songs, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

    if (isFetching) return <Loader title="Loading..." />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col ">
            <PageTitle>
                Showing results for <span className="font-black">{searchTerm}</span>
            </PageTitle>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {songs?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={songs}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Search;
