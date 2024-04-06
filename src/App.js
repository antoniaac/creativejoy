import "./App.css";
import CatNav from "./components/CatNav";

import TopNav from "./components/TopNav";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
