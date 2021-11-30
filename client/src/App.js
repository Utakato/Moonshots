import CardContainer from "./components/CardContainer";
import Paginate from "./components/Paginate"
function App() {
  return (
    <div className="App">
    <CardContainer></CardContainer>
    <Paginate itemsPerPage={20}/>
    </div>
  );
}

export default App;
