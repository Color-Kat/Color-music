import { useParams } from 'react-router-dom'
import { useTDispatch, useTSelector } from "@hooks/redux";
import { DetailsHeader } from "@components/DetailsHeader";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "@/redux/services/shazam.api";
import { Error, Loader } from "@/UI";
import { usePlayPauseHandler } from "@hooks/usePlayPauseHandler";
import { RelatedSongs } from "@modules/RelatedSongs";
import { Lyrics } from "@pages/SongDetails/components/Lyrics";

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
                artistId={null}
                songData={songData}
                artistData={null}
            />

            <Lyrics songData={songData} />

            <RelatedSongs
                songs={relatedSongs}
                isPlaying={isPlaying}
                activeSong={activeSong}
                artistId={null}
                handlePauseClick={handlePauseClick}
                handlePlayClickWithArgs={handlePlayClickWithArgs}
            />
        </div>
    );
};

export default SongDetails;
