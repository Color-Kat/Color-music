import React from 'react';
import { ISongDetails } from "@/redux/services/types";

interface LyricsProps {
    songData: ISongDetails | null;
}

export const Lyrics: React.FC<LyricsProps> = ({songData}) => {
    return (
        <div className="mb-10 z-10">
            <h2 className="text-violet-200 text-2xl font-bold">
                Lyrics:
            </h2>

            <div className="mt-5">
                {songData?.sections[1]?.type === 'LYRICS'
                    ? songData?.sections[1]?.text.map((line, i) => (
                        <p
                            key={i}
                            className="text-gray-400 text-base my-1"
                        >{line}</p>
                    ))
                    : <p className="text-violet-300 text-lg my-3">Sorry, no lyrics found!</p>
                }
            </div>
        </div>
    );
}