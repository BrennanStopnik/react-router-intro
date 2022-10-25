import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" >Home | </Link>
            <Link to="/about" >About | </Link>
            <Link to="/contact" >Contact | </Link>
            <Link to="/signup" >Sign Up</Link>
            <hr/>
        </div>
    )
}

export default NavBar;