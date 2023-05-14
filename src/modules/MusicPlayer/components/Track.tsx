import React from 'react';

const Track = ({isPlaying, isActive, activeSong}) => (
    <div className="flex-1 flex items-center justify-start">
        <div
            className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite] hover:animate-none' : ''} hidden sm:block h-16 w-16 mr-4`}
        >
            <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full"/>
        </div>

        <div className="w-max">
            <p className="truncate lg:max-w-full max-w-[300px] text-violet-200 hover:text-violet-400 cursor-pointer font-bold text-lg">
                {activeSong?.title ? activeSong?.title : 'No active Song'}
            </p>
            <p className="truncate text-violet-400 cursor-pointer">
                {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
            </p>
        </div>
    </div>
);

export default React.memo(Track);
