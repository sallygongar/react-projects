import WheelPanel from "./components/WheelPanel"
import { FormProvider } from "./context/Form/FormProvider"
import { RouletteProvider } from "./context/roulette/RouletteProvider"
function App() {


  return (
    <>
    <RouletteProvider>
      <FormProvider>
        <WheelPanel/>
      </FormProvider>
    </RouletteProvider>
    </>
  )
}

export default App
