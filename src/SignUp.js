import React, {useEffect} from "react";

function SignUp(props){

    // function handlerOnSubmit(){
    //     console.log()
    //     localStorage.setItem('email', document.querySelector(".signUp__email").value);
    //     localStorage.setItem("password", document.querySelector(".signUp__password").value)
    //     props.onSignUp()
    // }

    return(
        <form className="signUp" action="#" name="inputCity">
            <input placeholder='email' className="signUp__email" type="text"></input> <br></br>
            <input placeholder='password' className="signUp__password" type="text"></input> <br></br>
            <input className="signUp__button" type="submit" onClick={props.showSignUp} value="Sign Up"></input>
        </form>
    )
}

export default SignUp;