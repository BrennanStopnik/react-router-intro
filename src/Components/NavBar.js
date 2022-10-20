import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link to="/" className="navbar">Home | </Link>
            <Link to="/about" className="navbar">About | </Link>
            <Link to="/contact" className="navbar">Contact | </Link>
            <Link to="/signup" className="navbar">Sign Up</Link>
            <hr/>
        </div>
    )
}

export default NavBar;