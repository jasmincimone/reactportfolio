import './App.css';
// import { connect } from 'react-redux';
import logo from './89FC35E8-69D2-4F97-B2EE-18AE9FA4203F.png';
import NavBar from './Components/NavBar';


function Home() {
  return (
    <div className="App">
      <header className="App-header"> 
      <NavBar />
      </header>

        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h6>Created by Neon Daydreams Productions, LLC. </h6>
  
    </div>
  );
}

export default Home;