import logo from "./logo.svg";
import "./App.css";
import Facebook from "./components/Facebook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="" align-items="center">
          Facebook Login Authentication
        </h4>
        <p>
          <Facebook />
        </p>
      </header>
    </div>
  );
}

export default App;
