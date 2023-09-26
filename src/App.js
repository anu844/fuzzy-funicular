import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Kodutoo from "./components/EelmineKodutoo"
import Card from "./components/Card"

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      <Kodutoo></Kodutoo>
      <Card
          color="black"
          number={2}
          image="https://eidk95seyu2.exactdn.com/en/blog/wp-content/uploads/2021/03/playing-cards_header.jpg?strip=all&lossy=1&ssl=1"
          description="Minu kaart"
        />
        <br />
        <Maths></Maths>
        <Maths></Maths>
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
