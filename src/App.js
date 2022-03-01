import './App.css';
import { Switch, Route } from 'react-router-dom'
// import logo from './89FC35E8-69D2-4F97-B2EE-18AE9FA4203F.png';
import GDdata from './Components/GDdata';
import NavBar from './Components/NavBar';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <h1>Jasmin Cimone Portfolio</h1> 
      <NavBar />
      </header>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br /> */}

        <div className='Body'>
          <Switch>
            <Route path='/designportfolio'>
              <GDdata />
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
          </Switch>
        </div>

        <br />
        <br />
        <br />
        <h6>Created by Neon Daydreams Productions, LLC. </h6>
    </div>
  );
}

export default App;
