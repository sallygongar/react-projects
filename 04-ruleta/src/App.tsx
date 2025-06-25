import WheelPanel from "./components/WheelPanel"
import { FormProvider } from "./context/Form/FormProvider"
import { RouletteProvider } from "./context/roulette/RouletteProvider"
import { UserProvider } from "./context/User/UserProvider"
function App() {


  return (
    <>
    <RouletteProvider>
      <UserProvider>
       <FormProvider>
         <WheelPanel/>
       </FormProvider>
      </UserProvider>
    </RouletteProvider>
    </>
  )
}

export default App
