import ItemListContainer from "./components/ItemListContainer";
import Menu from "./components/NavBar";

function App() {
  return (
    <div>
      <Menu />
      <ItemListContainer greeting={"hola CoderHouse"} />
    </div>
  )
}

export default App;