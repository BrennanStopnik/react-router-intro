import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState } from "react";


const App = () => {

    const [signUpList, setSignUpList] = useState("")

    const handleAddSignUp = (fName, lName, email) => {
        let newSignUp = {
            fName: fName,
            lName: lName,
            email: email
        }
        const signUpListCopy = [...signUpList, newSignUp]
        setSignUpList(signUpListCopy)
    }

    return (
        <div className="App-header">
            <NavBar />
            <Outlet context={[signUpList, handleAddSignUp]}/>
        </div>
    )
}

export default App;