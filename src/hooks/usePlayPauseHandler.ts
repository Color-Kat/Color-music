import { playPause, setActiveSong } from "@/redux/features/playerSlice";
import { useTDispatch } from "@hooks/redux";
import { ISong } from "@/redux/services/types";
import { useCallback } from "react";

interface IParams {
    i?: number;
    song?: ISong;
    data: ISong[];
}

export const usePlayPauseHandler = ({ song, data, i }: IParams): {
    handlePauseClick: () => void,
    handlePlayClick: () => void,
    handlePlayClickWithArgs: (songArg: ISong, iArg: number) => void
} => {
    const dispatch = useTDispatch();

    const handlePauseClick = useCallback(() => {
        dispatch(playPause(false));
    }, []);

    const handlePlayClick =  useCallback(() => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    }, [data]);

    const handlePlayClickWithArgs =  useCallback((songArg, iArg) => {
        dispatch(setActiveSong({
            song: songArg,
            data,
            i: iArg
        }));
        dispatch(playPause(true));
    }, [data]);

    // const handlePlayClick = (song, i) => {
    //     dispatch(setActiveSong({song, data, i}));
    //     dispatch(playPause(true));
    // }

    return {handlePauseClick, handlePlayClick, handlePlayClickWithArgs};
}