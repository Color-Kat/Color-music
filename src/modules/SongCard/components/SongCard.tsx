import React from 'react';
import { ISong } from "@/redux/services/types";
import { activeSong, playPause, setActiveSong } from "@/redux/features/playerSlice";
import { PlayPause } from "@components/PlayPause";
import { SongTitle } from "@modules/SongCard/components/SongTitle";
import { SongSubtitle } from "@modules/SongCard/components/SongSubtitle";
import { useTDispatch } from "@hooks/redux";
import { usePlayPauseHandler } from "@hooks/usePlayPauseHandler";

interface SongCardProps {
    i: number;
    song: ISong;
    isPlaying: boolean;
    activeSong: ISong;
    data: ISong[];
}

export const SongCard: React.FC<SongCardProps> = React.memo(({
    song,
    isPlaying,
    activeSong,
    data,
    i
}) => {
    const {handlePauseClick, handlePlayClick} = usePlayPauseHandler({
        song,
        data,
        i
    });

    return (
        <div
            className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">

                {/* Hover Play */}
                <div className={
                    `absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
                    ${activeSong?.key === song.key ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
                >

                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />

                </div>

                <img src={song.images?.coverart} alt="song_img" />
            </div>

            <div className="mt-4 flex flex-col">
                <SongTitle song={song} />

                <SongSubtitle song={song} />
            </div>
        </div>
    );
});