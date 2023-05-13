import { SongCard } from '@components/index';
import { Error, Loader } from '@UI/index';
import { genres } from "@assets/constants";
import { useGetTopChartsQuery } from '@/redux/services/shazam.api';
import {useDispatch, useSelector} from "react-redux";
import {useTDispatch, useTSelector} from "@hooks/redux";

const DiscoverPage = () => {
    const dispatch = useTDispatch();
    const { activeSong, isPlaying } = useTSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();

    const genreTitle = 'Pop';

    if (isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col ">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreTitle}
                </h2>

                <select
                    name=""
                    id=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                    onChange={() => { }}
                >
                    {genres.map((genre) =>
                        <option value={genre.value} key={genre.value}>{genre.title}</option>
                    )}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default DiscoverPage;
