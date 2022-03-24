import React, {useEffect} from "react";

function Registration(props){

    // function handlerOnSubmit(){
    //     console.log()
    //     localStorage.setItem('email', document.querySelector(".signUp__email").value);
    //     localStorage.setItem("password", document.querySelector(".signUp__password").value)
    //     props.onSignUp()
    // }

    return(
        <form className="registration" action="#" name="inputCity">
            <input className="registration__email" type="text"></input> <br></br>
            <input className="registration__password" type="text"></input> <br></br>
            <input className="registration__button" type="submit" onClick={props.pressSignUpButton} value="Sign Up"></input>
        </form>
    )
}

export default Registration;