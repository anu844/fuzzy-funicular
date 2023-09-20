import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Maths></Maths>
        {/* <Hello name="Anu" />
        <Hello name="Liisu" />
        <Hello
          name="Juss"
          age={30}
          school="TLU"
        /> */}
      </header>
    </div>
  )
}

export default App
