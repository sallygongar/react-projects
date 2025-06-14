import Roulette from "./components/Roulette"
import { RouletteProvider } from "./context/roulette/RouletteProvider"
function App() {


  return (
    <>
    <RouletteProvider>
      <Roulette/>
    </RouletteProvider>
    </>
  )
}

export default App
