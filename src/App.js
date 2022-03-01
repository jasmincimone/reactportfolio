import logo from './89FC35E8-69D2-4F97-B2EE-18AE9FA4203F.png';
import './App.css';
import GDdata from './Components/GDdata';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Jasmin C. Smith<br />
        Professional Portfolio<br />
        </p>
        <br />
        <br />
        <GDdata />
        <br />
        <br />
        <br />
        <h6>Created by Neon Daydreams Productions, LLC. </h6>
      </header>
    </div>
  );
}

export default App;
