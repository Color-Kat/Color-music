import React from 'react';
import {Track} from "@/redux/services/types";
import {activeSong} from "@/redux/features/playerSlice";
import PlayPause from "@components/PlayPause";

interface SongCardProps {
    i: number;
    song: Track;
}

export const SongCard: React.FC<SongCardProps> = ({
                                                      song, i
                                                  }) => {

    const activeSong = 'Test';

    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">

                {/* Hover Play */}
                <div className={
                    `absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
                    ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
                >

                    <PlayPause  />

                </div>

                <img src={song.images?.coverart} alt="song_img"/>

            </div>
        </div>
    );
}