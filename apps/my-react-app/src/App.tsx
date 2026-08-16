import './App.css'
import {Button} from "@repo/ui"
import {currencyFormat} from "@repo/utils"

function App() {
  return (
    <>
      <h1>Complete Frontend Development lifecycle</h1>
      <Button appName="My React App" onClick={() => alert(currencyFormat(12345))}>Click me</Button>
    </>
  )
}

export default App
 