import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Player from "../components/Player";
import {importAudioFiles} from "../utils/importAudioFiles";
import Loader from "../components/Loader";

function Artists() {
    const alphabets = ['A','B','C','D','E','F','G','H','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const [artists, setArtists] = useState([])
    const [sortedArtists, setSortedArtist] = useState([...artists])
    const [artistName, setArtistName] = useState('')
    const [albumName, setAlbumName] = useState('')
    const [showLoader, setShowLoader] = useState(false)
    const artistsRows = useRef(null)
    const featuredBlock = useRef(null)
    const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

    const audios = importAudioFiles()

    const handlePlay = (index) => {
        setCurrentPlayingIndex(index);
    };

    // FETCH - All Artists
    async function getArtistsData() {
        try {
            const res = await fetch("/config/artists.json");
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            if (data) {
                setArtists(data.artists);
                setSortedArtist(data.artists)
            }
        } catch (error) {
            console.error("Failed to fetch artists data:", error);
        }
    }

    useEffect(() => {
        getArtistsData()

        window.scrollTo(0, 0);

        window.addEventListener('scroll', function() {
            let scrollPos = window.scrollY + window.innerHeight / 1.5
            if(scrollPos >= artistsRows.current?.offsetTop) {
                artistsRows.current.classList.add('show')
            }
            if(scrollPos >= featuredBlock.current?.offsetTop) {
                featuredBlock.current.classList.add('show')
            }
        })
    }, []);

    function sortByAlphabet(evt = 'A') {
        const newAlphabet = evt.target?.getAttribute('data-id').toLowerCase();

        const filteredtems = []
        artists.forEach(item => {
            if(item.name.toLowerCase().startsWith(newAlphabet)) {
                filteredtems.unshift(item)
            } else {
                filteredtems.push(item)
            }
        })

        setSortedArtist(filteredtems)
    }

    useEffect(() => {
        setShowLoader(false)
    }, [sortedArtists]);

    function sortArtists() {
        setShowLoader(true)

        let sortedItems = [...artists]

        if(artistName) {
            sortedItems = sortedItems.filter((item) => item.name.toLowerCase().indexOf(artistName.toLowerCase()) > -1)
        }
        if(albumName) {
            sortedItems = sortedItems.filter(item => item.album.title.toLowerCase().indexOf(albumName.toLowerCase()) > -1)
        }

        setSortedArtist(sortedItems)
    }



    return (
        <div className="artists-page">
            <PageTitle image="https://preview.colorlib.com/theme/music/images/artists.jpg.webp" title="Artists"/>
            <Loader isShow={showLoader}/>

            <div className="artists-page__search">
                <div className="artists-page__artists-search">
                    <div className="artists-search__form">
                        <input
                            onChange={(e) => setArtistName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' ? sortArtists() : ''}
                            type="text" className="form-input"
                            placeholder="Artist"/>
                        <input
                            onChange={(e) => setAlbumName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' ? sortArtists() : ''}
                            type="text"
                            className="form-input"
                            placeholder="Album"/>
                        <button onClick={sortArtists}  className="ticket-button">Search</button>
                    </div>
                </div>
            </div>

            <div className="artists-page__alphabet">
                {alphabets.map((item, index) => {
                    return(
                        <button onClick={(e)=> sortByAlphabet(e)} data-id={item} key={index} className="artists-page__alphabet-btn">{item}</button>
                    )
                })}
            </div>

            <div className="artists-page__artists-rows wrapper" ref={artistsRows}>

                {sortedArtists.length > 0 ? (
                        <>
                            {
                                sortedArtists.map((artist, index) => {
                                    return (
                                        <div className="artists-page__artists-row" key={artist.id}>
                                            <div className="artists-row__image">
                                                <img src={artist.image}
                                                     alt="img"/>
                                            </div>

                                            <div className="artists-row__description">
                                                <div className="artists-row__text-content">
                                                    <Link to="/artist" state={{ data: artist }} className="artists-row__title">{artist.name}</Link>
                                                    <p className="artists-row__text">{artist.description}</p>
                                                    <div className="artists-row__share-links">
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
                                                <div className="artists-row__single-player">
                                                    <Player
                                                        audioSrc={audios[artist.audio[0].file]}
                                                        title={artist.audio[0].name}
                                                        isPlay={currentPlayingIndex === index}
                                                        onPlay={() => handlePlay(index)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <>
                            <div>No Result</div>
                        </>
                    )
                 }


            </div>

            <div className="artists-page__featured-artist">
                <div className="featured-block wrapper" ref={featuredBlock}>
                    <p className="featured-block__subtitle">Artist of the month</p>
                    <p className="featured-block__title">Jennifer Smith</p>
                    <p className="featured-block__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor
                        scelerisque, nisi nisl tincidunt enim, non aliquet diam neque sed urna. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl
                        tincidunt enim, non aliquet diam neque sed urna. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl tincidunt enim,
                        non aliquet diam neque sed urna.
                    </p>
                    <button className="featured-block__btn ticket-button">Read more</button>
                </div>
            </div>


            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Artists;