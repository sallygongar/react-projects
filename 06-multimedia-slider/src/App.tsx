//import VideoPlayer from "./components/VideoPlayer";
//import VideoPlayerLoading from "./components/VideoPlayerLoading";
import SwiperComponent from "./components/SwiperContent";

//'https://player.vimeo.com/video/1099688197'
//'https://player.vimeo.com/video/1099688365'

//const videoDesk = 'https://player.vimeo.com/video/1099688197'
//const videoMobie = "https://vimeo.com/video/1099688365";

function App() {
  return (
    <>
      {/* <h1>Video con Progreso Circular</h1> */}
      {/* <VideoPlayer url="https://www.youtube.com/watch?v=2aogxVYGX_I" />; */}
      {/* <VideoPlayer url="https://vimeo.com/video/1099688197" />; */}
      {/*   <VideoPlayerLoading url="https://www.youtube.com/watch?v=2aogxVYGX_I" /> */}
      {/* <VideoPlayerLoading url={videoMobie} /> */}
      <h1>Swiper</h1>
      <SwiperComponent />
    </>
  );
}

export default App;
