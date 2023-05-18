import React, {} from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { ISong } from "@/redux/services/types";
import { SongBar } from "@modules/RelatedSongs/components/SongBar";
import { usePlayPauseHandler } from "@hooks/usePlayPauseHandler";
import { Error } from "@/UI";

interface TopChartCardProps {
    songs: ISong[] | null;
    isPlaying: boolean;
    activeSong: ISong;
    artistId: number | null;
}

export const RelatedSongs: React.FC<TopChartCardProps> = React.memo(({
                                                                         songs,
                                                                         isPlaying,
                                                                         activeSong,
                                                                         artistId
                                                                     }) => {

    const {handlePlayClickWithArgs, handlePauseClick} = usePlayPauseHandler({data: songs});

    console.log(songs)

    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl text-violet-200">Related Songs:</h1>

            <div className="mt-6 w-full flex flex-col">
                {!songs && <p className="text-violet-300 text-lg my-3">Sorry, no related songs found!</p>}

                {songs?.map((song, i) => (
                    <SongBar
                        key={`${song.id}-${artistId}`}
                        i={i}
                        artistId={artistId}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        handlePauseClick={handlePauseClick}
                        handlePlayClick={handlePlayClickWithArgs}
                    />
                ))}
            </div>
        </div>
    );
});
