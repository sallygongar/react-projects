import React, { useCallback, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Duration from "./Duration";
import "./progressCircular.css";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayerLoading: React.FC<VideoPlayerProps> = ({ url }) => {
  const initialState = {
    src: undefined,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    loadedSeconds: 0,
    playedSeconds: 0,
  };

  type PlayerState = Omit<typeof initialState, "src"> & {
    src?: string;
  };

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [state, setState] = useState<PlayerState>(initialState);

  const handleToogle = () => {
    setState((prev) => ({ ...prev, playing: !prev.playing }));
  };

  const handleProgress = () => {
    const player = playerRef.current;
    if (!player || state.seeking || !player.buffered?.length) return;

    setState((prevState) => ({
      ...prevState,
      loadedSeconds: player.buffered?.end(player.buffered?.length - 1),
      loaded:
        player.buffered?.end(player.buffered?.length - 1) / player.duration,
    }));
  };

  const handleDurationChange = () => {
    const player = playerRef.current;
    if (!player) return;

    setState((prevState) => ({ ...prevState, duration: player.duration }));
  };

  const handleTimeUpdate = () => {
    const player = playerRef.current;
    // We only want to update time slider if we are not currently seeking
    if (!player) return;

    console.log("onTimeUpdate", player.currentTime);

    if (!player.duration) return;

    setState((prevState) => ({
      ...prevState,
      playedSeconds: player.currentTime,
      played: player.currentTime / player.duration,
    }));
  };

  const setPlayerRef = useCallback((player: HTMLVideoElement) => {
    if (!player) return;
    playerRef.current = player;
  }, []);

  const { duration, played, playing } = state;

  const progressPercent = Math.round(played * 100);
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - played * circumference;
  console.log(progressPercent);
  return (
    <div>
      <ReactPlayer
        ref={setPlayerRef}
        playing={playing}
        src={url}
        controls={false}
        width="100%"
        height="360px"
        onProgress={handleProgress}
        onDurationChange={handleDurationChange}
        onTimeUpdate={handleTimeUpdate}
      />

      <Duration seconds={duration * (1 - played)} />

      <div className="progress-container">
        <svg width="120" height="120" className="progress-ring">
          <circle
            className="progress-ring__circle"
            stroke="red"
            strokeWidth="4"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <button className="play-pause-button" onClick={handleToogle}>
          <div className="button-icon">{playing ? "⏸️" : "▶️"}</div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerLoading;
