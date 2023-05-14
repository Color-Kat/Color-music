import React, {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import {PlayPause} from "@components/PlayPause";
import {ISong} from "@/redux/services/types";

interface TopChartCardProps {
    song: ISong | null;
    i: number;
    isPlaying: boolean;
    activeSong: ISong;
    handlePauseClick: () => void;
    handlePlayClick: () => void;
}

export const TopChartCard: React.FC<TopChartCardProps> = React.memo(({
                                                                         song,
                                                                         i,
                                                                         isPlaying,
                                                                         activeSong,
                                                                         handlePauseClick,
                                                                         handlePlayClick
                                                                     }) => {
    const navigate = useNavigate();

    const goToSong = useCallback(() => {
        navigate(`/songs/${song?.key}`);
    }, []);

    return (
        <div
            className="w-full flex flex-row items-center hover:bg-violet-200/[.2] py-2 p-4 rounded-lg cursor-pointer mb-2"
        >
            <h3 className="font-bold text-base mr-3 text-violet-400">
                {i + 1}.
            </h3>

            <div className="flex-1 flex flex-row justify-between items-center">
                <img
                    onClick={goToSong}
                    className="w-20 h-20 rounded-lg"
                    src={song?.images.coverart}
                    alt={song?.title}
                />

                <div className="flex-1 flex flex-col justify-center mx-3">
                    <p
                        className="text-xl font-bold text-violet-200"
                        onClick={goToSong}
                    >
                        {song?.title}
                    </p>

                    <Link to={`/artists/${song?.artists[0].adamid}`}>
                        <p className="text-base text-violet-300 mt-1 w-auto pr-3">{song?.subtitle}</p>
                    </Link>
                </div>
            </div>

            <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={() => handlePlayClick(song, i)}
            />
        </div>
    );
});