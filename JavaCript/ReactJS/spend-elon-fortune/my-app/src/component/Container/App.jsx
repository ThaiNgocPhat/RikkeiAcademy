import './App.css'
import Header from "../Header"
import ListItem from "../Presentation/ListItem"
import Button from  "../Button"

function App() {
  return (
    <>
    <Header />
    <ListItem />
    <Button background="red"
            color="white"
            text="Mình bị mất gốc"/>
    </>
  )
}

export default App
