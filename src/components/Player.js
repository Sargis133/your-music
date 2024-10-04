import React, {useEffect, useRef, useState} from 'react';
import Icons from './Icons';
import formatAudioTime from "../utils/formatAudioTime";

const Player = ({ audioSrc, title, isPlay, onPlay }) => {
    const audioRef = useRef(null);
    const [audioCurrTime, setAudioCurrTime] = useState("00:00");
    const [audioDuration, setAudioDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const playerBlock = useRef(null)

    const setDuration = () => {
        setAudioDuration(formatAudioTime(audioRef.current.duration));
    }

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play();
        } else {
            handleStop()
        }
    }, [isPlay]);

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
        setAudioCurrTime(audioRef.current.currentTime);
        if(onPlay) onPlay()
    };

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const changeCurrentTime = () => {
        setAudioCurrTime(formatAudioTime(audioRef.current.currentTime));
    }

    const handleInputChange = (e) => {
        setAudioCurrTime(Number(e.target.value));
        audioRef.current.currentTime = +e.target.value
    };

    const onMuteVolume = () => {
        audioRef.current.muted ? setMuted(false) : setMuted(true)
        audioRef.current.muted = !audioRef.current.muted
    }

    const changeVolume = (e) => {
        audioRef.current.volume = e.target.value / 100
    }


    return (
        <div className="single-player" ref={playerBlock}>
            <audio ref={audioRef} src={audioSrc} onPlay={handlePlay} onEnded={handleStop} onLoadedData={setDuration} onTimeUpdate={changeCurrentTime}/>
            <div className="single-player-block">
                <div className="single-player-buttons">
                    {
                        !isPlaying ? (
                            <>
                                <button className="play-btn" onClick={handlePlay}>
                                    <Icons name="play" width="15" height="15"/>
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="pause-btn" onClick={handlePause}>
                                    <Icons name="pause" width="20" height="23"/>
                                </button>
                            </>
                        )
                    }
                    <button className="stop-btn" onClick={handleStop}>
                        <Icons name="stop" width="20" height="23" />
                    </button>
                </div>

                <div className="single-player-config">
                    <p className="single-player-title">{title}</p>
                    <div className="single-player-bg-line">
                        <input
                            type="range"
                            min="0"
                            max={audioRef.current?.duration || 0}
                            value={audioRef.current?.currentTime || 0}
                            onChange={handleInputChange}
                            className="player-range"
                        />
                    </div>
                    <div className="single-player__time">
                        <div className="single-player__curr-time">{audioCurrTime}</div>
                        <div className="single-player__full-time">{audioDuration}</div>
                    </div>
                </div>

                <div className="single-player__volume">

                    <button className="single-player__mute-btn" onClick={onMuteVolume}>
                        {
                            !muted &&
                            <Icons name="voice" width="25" height="25"/>
                        }
                        {
                            muted &&
                            <Icons name="mute" width="25" height="25"/>
                        }
                    </button>
                    <input type="range"
                        min="0"
                        max={100}
                           defaultValue={100}
                           onChange={changeVolume}
                           className="volume-range"
                    />
                </div>
            </div>
        </div>
    );
};

export default Player