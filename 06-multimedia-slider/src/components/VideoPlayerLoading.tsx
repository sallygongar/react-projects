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
    setState((prevState) => ({ ...prevState, playing: !prevState.playing }));
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

  return (
    <div className="video-wrapper">
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
      <button
        className="play-pause-button"
        onClick={handleToogle}
        style={{
          background: `conic-gradient(#00bcd4) ${progressPercent}%, #ddd ${progressPercent}% 100%`,
        }}
      >
        <div className="button-icon">{playing ? "parar" : "seguir"}</div>
      </button>
    </div>
  );
};

export default VideoPlayerLoading;
