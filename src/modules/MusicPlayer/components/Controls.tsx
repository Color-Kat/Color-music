import React, {useCallback, useEffect} from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({
    isPlaying,
    repeat,
    setRepeat,
    shuffle,
    setShuffle,
    currentSongs,
    handlePlayPause,
    handlePrevSong,
    handleNextSong
}) => {
    const spacePause = useCallback((e) => {
        if(e.key === " ") {
            handlePlayPause();
        }
    }, [handlePlayPause]);

    useEffect(() => {
        window.addEventListener('keyup', spacePause);

        return () => window.removeEventListener('keyup', spacePause);
    });

    return (
        <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
            <BsArrowRepeat
                size={20}
                onClick={() => setRepeat((prev) => !prev)}
                className={`hidden sm:block cursor-pointer ${repeat ? 'text-violet-500' : 'text-white'}`}
            />

            {currentSongs?.length &&
            <MdSkipPrevious
                size={30}
                className="cursor-pointer text-violet-200 hover:text-violet-300"
                onClick={handlePrevSong}
            />
            }

            {isPlaying ? (
                <BsFillPauseFill size={45} onClick={handlePlayPause} className="cursor-pointer text-violet-200 hover:text-violet-400" />
            ) : (
                <BsFillPlayFill size={45} onClick={handlePlayPause} className="cursor-pointer text-violet-200 hover:text-violet-400" />
            )}

            {currentSongs?.length &&
                <MdSkipNext size={30} className="cursor-pointer text-violet-200 hover:text-violet-300" onClick={handleNextSong} />
            }

            <BsShuffle size={20} onClick={() => setShuffle((prev) => !prev)}
                       className={`hidden sm:block cursor-pointer ${shuffle ? 'text-violet-500' : 'text-white'}`} />
        </div>
    );
}

export default React.memo(Controls);
