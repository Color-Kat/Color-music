import React from "react";
import { ISongDetails } from "@/redux/services/types";
import { Link } from "react-router-dom";

interface DetailHeaderProps {
    artistId: number;
    artistData: any;
    songData: ISongDetails
}

export const DetailsHeader: React.FC<DetailHeaderProps> = ({
                                                               artistId,
                                                               artistData,
                                                               songData
                                                           }) => {

    const artist = artistData?.artists[artistId]?.attributes;

    return (
        <div className="relative w-full flex flex-col">
            <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-l-full"/>

            <div className="absolute inset-0 flex items-center">
                <img
                    src={artistId
                        ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
                        : songData?.images?.coverart
                    }
                    alt="art"
                    className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 border-violet-400 shadow-xl shadow-black"
                />
                
                <div className="ml-5">
                    <p className="font-bold sm:text-3xl text-xl text-violet-200">
                        {artistId
                            ? artist?.name
                            : songData?.title
                        }
                    </p>

                    {!artistId && (
                        <Link to={`/artists/${songData?.artists[0].adamid}`}>
                            <p className="text-base text-violet-300 mt-2">
                                {songData?.subtitle}
                            </p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
