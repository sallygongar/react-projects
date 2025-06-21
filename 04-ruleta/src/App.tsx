import Roulette from "./components/Roulette"
import { RouletteProvider } from "./context/roulette/RouletteProvider"
import { UserProvider } from "./context/User/UserProvider"
function App() {


  return (
    <>
    <RouletteProvider>
      <UserProvider>
        <Roulette/>
      </UserProvider>
    </RouletteProvider>
    </>
  )
}

export default App
