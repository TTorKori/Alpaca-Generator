import Alpaca from "./components/Alpaca";
import Header from "./components/Header";
import OptionMenu from "./components/OptionMenu";

function App() {
  return (
    <div className="App">
        <Header />
        <Alpaca />
        <OptionMenu />
        <OptionMenu />
    </div>
  );
}

export default App;
