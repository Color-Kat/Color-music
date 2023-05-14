import { useParams } from 'react-router-dom'
import { useTDispatch, useTSelector } from "@hooks/redux";
import { DetailsHeader } from "./components/DetailsHeader";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "@/redux/services/shazam.api";
import { Error, Loader } from "@/UI";
import { usePlayPauseHandler } from "@hooks/usePlayPauseHandler";
import { RelatedSongs } from "@modules/RelatedSongs";

const SongDetails = () => {
    const {songId} = useParams();

    const dispatch = useTDispatch();
    const {activeSong, isPlaying} = useTSelector((state) => state.player);

    const {data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songId);
    const {data: relatedSongs, isFetching: isFetchingRelatedSongs, error} = useGetSongRelatedQuery(songId);

    const {handlePlayClickWithArgs, handlePauseClick} = usePlayPauseHandler({data: relatedSongs});

    if(isFetchingRelatedSongs || isFetchingSongDetails)
        return <Loader title="Searching song details" />;

    if(error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId={""}
                songData={songData}
                // artistData={{}}
            />

            <div className="mb-10 z-10">
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

            <RelatedSongs
                data={relatedSongs}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClickWithArgs}
            />

        </div>
    )
};

export default SongDetails;
