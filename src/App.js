import { useState } from "react"
import "./App.css"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import Maths from "./components/Maths"
import MyForm from "./components/MyForm"
import PropDrilling from "./components/PropDrilling"

function App() {
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="Container">
      <h1>Anu</h1>
      <PropDrilling></PropDrilling>
      <MyForm />
      <Maths />
      <Show show={show} />
      <Toggle toggleShow={toggleShow} />
    </div>
  )
}
export default App
