import './App.css';
import { Switch, Route } from 'react-router-dom'
import logo from './89FC35E8-69D2-4F97-B2EE-18AE9FA4203F.png';
import GDdata from './Components/GDdata';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">

      <header className="App-header"> 
      <NavBar />
      <h1>Jasmin Cimone Portfolio</h1> 
      <img src={logo} className="App-logo" alt="logo" />
      </header>
        <br />
        <br />

        <div className='Body'>
          <Switch>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path='/designportfolio'>
              <GDdata />
            </Route>
            <Route path='/contact'>
              <Form />
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
          </Switch>
        </div>

        <br />
        <br />
        <h6> &copy;Copyright {new Date().getFullYear()} | Created with &hearts; by Neon Daydreams Productions, LLC. </h6>
    </div>
  );
}

export default App;
