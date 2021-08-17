import logo from "./logo.svg";
import "./App.css";
import windowslogo from "./kisspng-windows-xp-logo-microsoft-windows-1-0-windows-logos-5ab719fdd15b24.0641833615219491818575.png";
import corbeille from "./kisspng-trash-computer-icons-windows-xp-recycling-computer-bin-5b17489fd13dd1.5815833615282525758571.png";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="corcontainer">
          <img className="corbeille" src={corbeille}></img>
          <p>Corbeille</p>
        </div>
      </div>

      <footer className="startmenu">
        <div className="dem">
          <img alt="logowindows" className="logostart" src={windowslogo}></img>
          <p className="demarrer">démarrer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
