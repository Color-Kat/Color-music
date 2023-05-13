import React, {useCallback, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/free-mode";
import { PlayPause } from "@components/PlayPause";
import { useTDispatch, useTSelector } from "@hooks/redux";
import { useGetTopChartsQuery } from "@/redux/services/shazam.api";
import { playPause, setActiveSong } from "@/redux/features/playerSlice";
import { Link, NavLink } from "react-router-dom";
import { ISong } from "@/redux/services/types";


interface TopChartCardProps {
    song: ISong | null;
    i: number;
    isPlaying: boolean;
    activeSong: ISong;
    handlePauseClick: () => void;
    handlePlayClick: () => void;
}

const TopChartCard: React.FC<TopChartCardProps> = React.memo(({
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
    },[]);

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

const TopChartHeader: React.FC<{
    title: string,
    to: string
}> = React.memo(({ title, to }) => (
    <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl text-white">
            {title}
        </h2>

        <Link
            to={to}
            className="text-gray-300 text-base cursor-pointer"
        >
            <p>See more</p>
        </Link>
    </div>
));

const TopPlay = () => {
    const dispatch = useTDispatch();
    const { activeSong, isPlaying } = useTSelector(state => state.player);
    const { data, isFetching, } = useGetTopChartsQuery();
    const divRef = useRef(null);

    const topPlays = data?.slice(0, 5);

    const handlePauseClick = () => {
        dispatch(playPause(false));
    }

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
        console.log(123)
    }

    // TODO
    useEffect(() => {
        divRef.current.scrollIntoView({ bahavior: 'smooth' });
    });

    return (
        <div
            ref={divRef}
            className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
        >

            {/* Top Charts */}
            <div className="w-full flex flex-col">

                <TopChartHeader title="Top Charts" to="/top-charts" />

                <div className="mt-4 flex flex-col gap-1">
                    {topPlays?.map((song, i) => (
                        <TopChartCard
                            key={song.key}
                            song={song}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            handlePauseClick={handlePauseClick}
                            handlePlayClick={handlePlayClick}
                        />
                    ))}
                </div>

            </div>

            {/* Top Artists */}
            <div className="w-full flex flex-col mt-8">

                <TopChartHeader title="Top Artists" to="/top-artists" />

                <Swiper
                    slidesPerView="auto"
                    spaceBetween={15}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4"
                >
                    {topPlays?.map((song, i) => (
                        <SwiperSlide
                            key={song?.key}
                            style={{ width: '25%', height: 'auto' }}
                            className="shadow-lg rounded-full animate-sliderrigh"
                        >
                            <Link to={`/artists/${song?.artists[0].adamId}`}>
                                <img
                                    src={song?.images.background}
                                    alt="name"
                                    className="rounded-full w-full object-cover"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </div>
    );
}

export default TopPlay;
