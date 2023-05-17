import React, { useEffect, useState } from 'react';
import { useTSelector } from "@hooks/redux";
import axios from "axios";
import { genres } from "@assets/constants";
import { SongCard } from "@modules/SongCard";
import { PageTitle } from "@UI/PageTitle";

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useTSelector(state => state.player);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_VqzJBayXItnF8KhaNrj9ErMcXaPBc`)
            .then(res => setCountry(res?.data?.location?.country))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

    return (
        <div className="flex flex-col ">
            <PageTitle>
                Around You <span className="font-black text-violet-300">{country}</span>
            </PageTitle>


            <div className="w-full flex flex-col">
                <p className="text-violet-300 text-lg my-3">Sorry, but we can't get tracks by county yet!</p>
            </div>
        </div>
    );
}

export default AroundYou;
