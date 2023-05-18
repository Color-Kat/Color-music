import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import { useTDispatch, useTSelector } from "@hooks/redux";
import { useGetTopChartsQuery } from "@/redux/services/shazam.api";
import { Link } from "react-router-dom";
import { TopChartHeader } from "./TopChartHeader";
import { TopChartCard } from "./TopChartCard";
import { usePlayPauseHandler } from "@hooks/usePlayPauseHandler";

export const TopPlay = React.memo(() => {
    const dispatch = useTDispatch();
    const {activeSong, isPlaying} = useTSelector(state => state.player);
    const {data, isFetching,} = useGetTopChartsQuery();

    const topPlays = data?.slice(0, 5);

    const {handlePauseClick, handlePlayClickWithArgs} = usePlayPauseHandler({data});

    // TODO
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({bahavior: 'smooth'});
    });

    return (
        <div
            ref={divRef}
            className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
        >

            {/* Top Charts */}
            <div className="w-full flex flex-col">

                <TopChartHeader title="Top Charts" to="/top-charts"/>

                <div className="mt-4 flex flex-col gap-1">
                    {topPlays?.map((song, i) => (
                        <TopChartCard
                            key={song.key}
                            song={song}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            handlePauseClick={handlePauseClick}
                            handlePlayClick={handlePlayClickWithArgs}
                        />
                    ))}

                    {!topPlays && <p className="text-gray-400">Loading...</p>}
                </div>

            </div>

            {/* Top Artists */}
            <div className="w-full flex flex-col mt-8">

                <TopChartHeader title="Top Artists" to="/top-artists"/>

                <Swiper
                    slidesPerView="auto"
                    spaceBetween={15}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4"
                >
                    {/*<SwiperSlide*/}
                    {/*    style={{width: '25%', height: 'auto'}}*/}
                    {/*    className="shadow-lg rounded-full animate-sliderrigh"*/}
                    {/*>*/}
                    {/*    <a href="https://vk.com/dan1kkkkkkk" target="_blank">*/}
                    {/*        <img*/}
                    {/*            src="https://sun9-27.userapi.com/impg/af5nCDEkDmt2ULYpduaI83sODxQa_gtMpPGiHQ/oSRv2hb4RGo.jpg?size=2560x2560&quality=95&sign=1a2a5d31ccbe143450a17b6fabe2d1b6&type=album"*/}
                    {/*            alt="Dasha"*/}
                    {/*            className="rounded-full w-full object-cover"*/}
                    {/*        />*/}
                    {/*    </a>*/}
                    {/*</SwiperSlide>*/}

                    {topPlays?.map((song, i) => (
                        <SwiperSlide
                            key={song?.key}
                            style={{width: '25%', height: 'auto'}}
                            className="shadow-lg rounded-full animate-sliderrigh"
                        >
                            <Link to={`/artists/${song?.artists[0].adamid}`}>
                                <img
                                    src={song?.images.background}
                                    alt="name"
                                    className="rounded-full w-full object-cover"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}

                    {/*{!topPlays && <p className="text-gray-400">Loading...</p>}*/}
                </Swiper>
            </div>

        </div>
    );
});
