import { useContext } from "react"
import { GlobalContext, GlobalStorage } from "./GlobalContext"
import { Produto } from "./Produto"

function App() {

  const global = useContext(GlobalContext)

  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App
