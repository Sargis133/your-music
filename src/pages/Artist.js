import PageTitle from "../components/PageTitle";
import {Link, useLocation} from "react-router-dom";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Player from "../components/Player";
import {importAudioFiles} from "../utils/importAudioFiles";
import Header from "../components/Header";
import {useEffect, useState} from "react";

function Artist() {
    const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
    const location = useLocation()
    const {data} = location.state

    const audios = importAudioFiles()

    const handlePlay = (index) => {
        setCurrentPlayingIndex(index);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <div className="artist-page">
            <PageTitle title="Artist" image="https://preview.colorlib.com/theme/music/images/artists.jpg.webp"/>

            <div className="artist-page__info-block wrapper">
                <div className="artist-page__images">
                    <img className="artist-page__image" src={data.image} alt=""/>
                    <img className="artist-page__bg-image" src="https://preview.colorlib.com/theme/music/images/artist_back.jpg.webp" alt=""/>
                </div>

                <div className="artist-page__text-content">
                    <p className="artist-page__name">{data.name}</p>
                    <p className="artist-page__category">{data.category}</p>
                    <p className="artist-page__dates"><span>Born:</span> {data.born}</p>
                    <p className="artist-page__dates"><span>First release:</span> {data.firstRelease}</p>
                    <p className="artist-page__dates"><span>First Album:</span>{data.firstAlbum}</p>
                    <p className="artist-page__desription">{data.description}</p>
                </div>
            </div>

            <div className="artist-page__album wrapper" >
                <div className="artist-page__album-info">
                    <p className="artist-page__album-title">{data.album?.title}</p>
                    <p className="artist-page__album-description">{data.album?.description}</p>
                    <div className="artist-page__album-links">
                        <Link to="https://www.apple.com/app-store/" target="_blank">
                            <img
                                src="https://preview.colorlib.com/theme/music/images/appstore.png.webp"
                                className="share-image" alt=""/>
                        </Link>
                        <Link to="https://play.google.com/store/apps" target="_blank">
                            <img
                                src="https://preview.colorlib.com/theme/music/images/googleplay.png.webp"
                                className="share-image" alt=""/>
                        </Link>
                    </div>

                </div>

                <div className="artist-page__album-audios">
                    {
                        data.album?.audios.map((audio, index) => {
                            return(
                                <Player
                                    audioSrc={audios[audio.file]}
                                    title={audio.name}
                                    key={index}
                                    isPlay={currentPlayingIndex === index}
                                    onPlay={() => handlePlay(index)}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <Subscribe/>
            <Footer/>
        </div>
    )
}
export default Artist