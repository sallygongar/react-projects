import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerLoading from "./components/VideoPlayerLoading";

function App() {
  return (
    <>
      <h1>Video con Progreso Circular</h1>
      <VideoPlayer url="https://www.youtube.com/watch?v=2aogxVYGX_I" />;
      <VideoPlayer url="https://vimeo.com/video/1099688197" />;
      <VideoPlayerLoading url="https://www.youtube.com/watch?v=2aogxVYGX_I" />
    </>
  );
}

export default App;
