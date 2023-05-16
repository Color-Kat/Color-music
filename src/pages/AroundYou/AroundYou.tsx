import React, { useEffect, useState } from 'react';
import { useTSelector } from "@hooks/redux";
import axios from "axios";
import { genres } from "@assets/constants";
import { SongCard } from "@modules/SongCard";

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useTSelector(state => state.player);

    console.log(country);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_VqzJBayXItnF8KhaNrj9ErMcXaPBc`)
            .then(res => setCountry(res?.data?.location?.country))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

    return (
        <div className="flex flex-col ">
            <h2 className="font-bold text-3xl text-violet-200 text-left mt-4 mb-10">
                Around You <span className="font-black text-violet-300">{country}</span>
            </h2>

            <div className="w-full flex flex-col">
                <p className="text-violet-300 text-lg my-3">Sorry, but we can't get tracks by county yet!</p>
            </div>
        </div>
    );
}

export default AroundYou;
