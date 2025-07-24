import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./CircularProgress.css";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const seek = (secs: number) => {
    const current = playerRef.current?.getCurrentTime() ?? 0;
    console.log("CUrrent:", current);
    playerRef.current?.seekTo(current + secs, "seconds");
  };
  const restart = () => {
    playerRef.current?.seekTo(0, "seconds");
    setPlaying(true);
  };

  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    setPlayed(state.played);
  };

  const handleDuration = (dur: number) => {
    setDuration(dur);
  };

  return (
    <div className="video-wrapper">
      <ReactPlayer
        ref={playerRef}
        playing={playing}
        src={url}
        controls={false}
        width="100%"
        height="360px"
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className="controls">
        <button onClick={play}>▶️ Reproducir</button>
        <button onClick={pause}>⏸️ Pausar</button>
        <button onClick={() => seek(10)}>⏩ +10 s</button>
        <button onClick={restart}>🔁 Reiniciar</button>
      </div>
      <div className="time-info">
        {(played * duration) | 0}s / {duration | 0}s
      </div>
    </div>
  );
};

export default VideoPlayer;
