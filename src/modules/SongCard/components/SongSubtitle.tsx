import React from 'react';
import {Link} from "react-router-dom";
import {ISong} from "@/redux/services/types";

interface SongSubtitleProps {
    song: ISong;
}

export const SongSubtitle: React.FC<SongSubtitleProps> = ({song}) => {
    return (
        <p className="text-sm truncate text-violet-300 mt-1">
            <Link to={
                song.artists
                    ? `/artists/${song?.artists[0]?.adamid}`
                    : '/top-artists'
            }>
                {song.subtitle}
            </Link>
        </p>
    );
}