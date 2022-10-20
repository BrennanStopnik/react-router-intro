import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";


const ContactPage = () => {

	const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [signUpList, handleAddSignUp] = useOutletContext();
	const navigate = useNavigate()

	const redirectToHomePage = () => {
			navigate("/")
	}

	return (
		<div>
			<br/>
			<h2>Contact</h2>
			{errorMessage && <p>{errorMessage}</p>}
			<input 
				type={"text"} 
				className="fName" 
				placeholder="First Name" 
				value={fName} 
				onChange={(e) => {
          setFName(e.target.value);
        }}
			/>
			<br/>
			
			<input 
				type={"text"} 
				className="lName" 
				placeholder="Last Name" 
				value={lName}
				onChange={(e) => {
          setLName(e.target.value);
        }}
			/>
			<br/>
			<input 
				type={"email"} 
				className="email" 
				placeholder="Email" 
				value={email}
				onChange={(e) => {
          setEmail(e.target.value);
        }}
			/>
			<br/>
			<button 
				// type="submit" 
				className="button" 
				onClick={()=>{
					
					if (lName === "" || fName === "") {
            setErrorMessage("Please verify your name");
            return;
          }

          if (email === "" || email.includes("@") !== true) {
            setErrorMessage("Please verify your email");
            return;
          }
					handleAddSignUp(fName, lName, email);
					redirectToHomePage()
			}}>Submit</button>
		</div>
	)
}

export default ContactPage;