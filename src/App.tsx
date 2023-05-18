import {useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import {Searchbar, Sidebar} from './components';
import {ArtistDetails, TopArtists, AroundYou, DiscoverPage, Search, SongDetails, TopCharts} from './pages';
import {MusicPlayer} from '@modules/MusicPlayer';
import {TopPlay} from "@modules/TopPlay";

const App = () => {
    const {activeSong} = useSelector((state: any) => state.player);

    return (
        <div className="relative flex text-gray-400 app-wrapper">
            <Sidebar/>

            <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
                <Searchbar/>

                <div
                    className="px-2 md:px-6 h-full overflow-y-scroll hide-scrollbar scroll-smooth flex xl:flex-row flex-col-reverse"
                >
                    <div className="flex-1 h-fit pb-40">
                        <Routes>
                            <Route path="/" element={<DiscoverPage/>}/>
                            <Route path="/top-artists" element={<TopArtists/>}/>
                            <Route path="/top-charts" element={<TopCharts/>}/>
                            <Route path="/around-you" element={<AroundYou/>}/>
                            <Route path="/artists/:artistId" element={<ArtistDetails/>}/>
                            <Route path="/songs/:songId" element={<SongDetails/>}/>
                            <Route path="/search/:searchTerm" element={<Search/>}/>
                        </Routes>
                    </div>
                    <div className="xl:sticky relative top-0 h-fit xl:pb-40">
                        {/*<div className="xl:sticky relative top-0 h-fit xl:overflow-y-scroll hide-scrollbar max-h-screen pb-48">*/}
                        <TopPlay/>
                    </div>
                </div>
            </div>

            {activeSong?.title && (
                <div
                    className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                    <MusicPlayer/>
                </div>
            )}
        </div>
    );
};

export default App;
