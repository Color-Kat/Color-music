import {FaPauseCircle, FaPlayCircle} from "react-icons/fa";

import React from 'react';
import {ISong} from "@/redux/services/types";

interface PlayPauseProps {
    isPlaying: boolean;
    activeSong: ISong;
    song: ISong;
    handlePause: () => void;
    handlePlay: () => void;
}

export const PlayPause: React.FC<PlayPauseProps> = ({
    isPlaying,
    activeSong,
    song,
    handlePause,
    handlePlay,
}) => {
    if(isPlaying && activeSong?.title === song.title)
        return <FaPauseCircle
            size={35}
            className="text-gray-300"
            onClick={handlePause}
        />
    else
        return <FaPlayCircle
            size={35}
            className="text-gray-300"
            onClick={handlePlay}
        />
}