import CardContainer from "./components/CardContainer";
import Paginate from "./components/Paginate"
import Header from "./components/Header"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
    <CardContainer></CardContainer>
    <Paginate itemsPerPage={20}/>
    <Footer/>
    </div>
  );
}

export default App;
