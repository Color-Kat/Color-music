import React from 'react';
import {Link} from "react-router-dom";
import {ISong} from "@/redux/services/types";

interface SongTitleProps {
    song: ISong;
}

export const SongTitle: React.FC<SongTitleProps> = ({song}) => {
    return (
        <p className="font-semibold text-lg text-violet-100 truncate">
            <Link to={`/songs/${song?.key}`}>
                {song.title}
            </Link>
        </p>
    );
}