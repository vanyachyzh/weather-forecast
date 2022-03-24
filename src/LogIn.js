import React, {useEffect} from "react";

function LogIn(props){


    // function handlerOnSubmit(){
    //     console.log()
    //     localStorage.setItem('email', document.querySelector(".signUp__email").value);
    //     localStorage.setItem("password", document.querySelector(".signUp__password").value)
    //     props.onSignUp()
    // }

    return(
        <form className="logIn" action="#" name="inputCity">
            <input className="logIn__email" type="text"></input> <br></br>
            <input className="logIn__password" type="text"></input> <br></br>
            <input className="logIn__button" type="submit" onClick={props.pressSignUp2} value="Log In"></input>
        </form>
    )
}

export default LogIn;