import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar"

const ContactPage = () => {

    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate("/")
    }

    return (
        <div>
            <Navbar />
            <hr/>
            <br/>
            <h2>Contact</h2>
            <input type={"text"} className="fName" placeholder="First Name"></input>
            <br/>
            
            <input type={"text"} className="lName" placeholder="Last Name"></input>
            <br/>
            <input type={"email"} className="email" placeholder="Email"></input>
            <br/>
            <button type="submit" className="button" onClick={()=>{
                redirectToHomePage()
            }}>Submit</button>
        </div>
    )
}

export default ContactPage;