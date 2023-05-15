import React, {memo} from 'react';
import {BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill} from 'react-icons/bs';

const VolumeBar = ({value, min, max, onChange, setVolume}) => {
    return (
        <div className="hidden lg:flex flex-1 items-center justify-end">
            {value <= 1 && value > 0.5 &&
            <BsFillVolumeUpFill
                size={25}
                className="text-violet-300 hover:text-violet-400 cursor-pointer"
                onClick={() => setVolume(0)}
            />
            }

            {value <= 0.5 && value > 0 &&
            <BsVolumeDownFill
                size={25}
                className="text-violet-300 hover:text-violet-400 cursor-pointer"
                onClick={() => setVolume(0)}
            />
            }

            {value == 0 &&
                <BsFillVolumeMuteFill
                    size={25}
                    className="text-violet-300 hover:text-violet-400 cursor-pointer"
                    onClick={() => setVolume(0.3)}
                />
            }

            <input
                type="range"
                step="any"
                value={value}
                min={min}
                max={max}
                onChange={onChange}
                className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2 accent-violet-500"
            />
        </div>
    );
}

export default memo(VolumeBar);
