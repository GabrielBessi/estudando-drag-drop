import "./App.css";
import Cards from "./components/cards/index";
import { ArrayImages } from "./services";


const map = {
    "alpha": ArrayImages,
    "beta": ArrayImages.map(element => ({...element, id: element.id + 10})),
    "gamma": ArrayImages.map(element => ({...element, id: element.id + 20})),
}
function App() {
  return (
    <div className="App">
      <Cards initial={map}/>
    </div>
  );
}

export default App;
