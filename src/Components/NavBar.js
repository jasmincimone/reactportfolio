import { Link } from 'react-router-dom';

const NavBar= ()=>{
    return(
        <nav style={container}>
            <Link to ='/' id="link">Home</Link> <br /><br />
            <Link to ='/contact' id="li">Contact</Link>
        </nav>
    )
}

const container = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        color: 'black',
    },
    img: {
        width: "400px",
        height: "300px",
    },
};

export default NavBar;