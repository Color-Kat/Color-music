import { useParams } from 'react-router-dom'
import { useTDispatch, useTSelector } from "@hooks/redux";
import { DetailsHeader } from "@/components";
import { useGetSongDetailsQuery } from "@/redux/services/shazam.api";

const SongDetails = () => {
    const {songId} = useParams();

    const dispatch = useTDispatch();
    const {activeSong, isPlaying} = useTSelector((state) => state.player);
    const {data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songId);

    console.log(songData)

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId={""}
                songData={songData}
            />

            <div className="mb-10 mt-5">
                <h2 className="text-violet-200 text-2xl font-bold">
                    Lyrics:
                </h2>

                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS'
                        ? songData?.sections[1].text.map((line, i) => (
                            <p
                                key={i}
                                className="text-gray-400 text-base my-1"
                            >{line}</p>
                        ))
                        : <p className="text-violet-300 text-lg my-3">Sorry, no lyrics found!</p>
                    }
                </div>
            </div>
        </div>
    )
};

export default SongDetails;
