import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <>
      <h1>Video con Progreso Circular</h1>
      <VideoPlayer url="https://www.youtube.com/watch?v=2aogxVYGX_I" />;
      <VideoPlayer url="https://player.vimeo.com/video/1099688197" />;
    </>
  );
}

export default App;
