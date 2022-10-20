import { Outlet, useOutletContext, useNavigate } from "react-router-dom";

const SignUpsPage = () => {
    
	const navigate = useNavigate();

	const [signUpList] = useOutletContext();
	
	return (
		<div>
			<br/>
			<h1>Sign Up</h1>
			<br/>
			<select onChange={(e) => {
				navigate(`/signup/${e.target.value}`)
			}}>
				<option></option>
				{signUpList.map((signup, index) => {
					return (
						<option key={index} value={signup.email}>
							{signup.fname}
						</option>
					)
				})}
			</select>
			<Outlet context={[signUpList]} />{" "}
		</div> 
	)
}

export default SignUpsPage;