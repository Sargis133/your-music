import Icons from "./Icons";
import React, {useEffect, useRef, useState} from "react";
import {importAudioFiles} from "../utils/importAudioFiles";

function FeaturedAlbums() {
    const [featuredData, setFeaturedData] = useState([]);
    const audioItems = useRef([]);
    const [isPlaying, setIsPlaying] = useState([]);
    const audios = importAudioFiles();

    // FETCH - Main Page artists albums

    async function getFeaturedData() { // main page -> popular albumner-i fetch
        await fetch("/config/featured.json")
            .then(res => res.json())
            .then(data => {
                if(data) {
                    sortFeaturedArtists(data.data);
                }
            });
    }

    function sortFeaturedArtists(data) {
        data = data.sort((a, b) => +b.rating.localeCompare(+a.rating));
        if(data.length > 6) data = data.slice(0, 6);

        setFeaturedData(data);
        setIsPlaying(Array(data.length).fill(false));
    }

    useEffect(() => {
        getFeaturedData();
    }, []);

    const onPlayAudio = (index) => {
        audioItems.current.forEach((audio, i) => {
            if (i === index) {
                audio.play();
            } else {
                audio.pause();
            }
        });

        const newIsPlaying = isPlaying.map((play, i) => i === index);
        setIsPlaying(newIsPlaying);
    };

    const onStopAudio = (index) => {
        audioItems.current[index].pause();
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = false;
        setIsPlaying(newIsPlaying);
    };

    return(
        <div className="featured-albums">
            <p className="featured-albums__title">featured albums</p>
            <div className="featured-albums__featured-items">

                {featuredData.length > 0 &&
                    featuredData.map((artist, index) => (
                        <div className="featured-albums__featured-item" key={artist.id}
                             style={{backgroundImage: `url(${artist.image})`}}>
                            <div className="featured-item__description">
                                <audio src={audios[artist.file]} className="featured-item__audio-item" ref={ref => {audioItems.current[index] = ref}}></audio>
                                {
                                    !isPlaying[index] ? (
                                        <button className="play-btn" onClick={() => onPlayAudio(index)}>
                                            <Icons name="play" width="20" height="23"/>
                                        </button>
                                    ) : (
                                        <button className="stop-btn" onClick={() => onStopAudio(index)}>
                                            <Icons name="stop" width="20" height="23"/>
                                        </button>
                                    )
                                }
                                <div className="featured-item__text">
                                    <p className="featured-item__title">{artist.name}</p>
                                    <p className="featured-item__name">{artist.popularSong}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default FeaturedAlbums;
