import Header from "./components/Header/Header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
      <div>
        <Header />
        <ItemListContainer mensaje=" Los mejores muebles a medida! "/>
      </div>
  )
}

export default App