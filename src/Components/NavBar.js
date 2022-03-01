import { Link } from 'react-router-dom';

const NavBar= ()=>{
    return(
        <div>
            <nav className='container'>
                <Link to='/' id="link">Home</Link>
                <Link to='/resume' id='link4'>Resume</Link> 
                <Link to='/designportfolio' id="link3">Design Portfolio</Link>
                <Link to='/contact' id="link2">Contact</Link>

            </nav>
        </div>
    )
}

export default NavBar;