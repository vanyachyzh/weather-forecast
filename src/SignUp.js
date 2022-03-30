import React from "react";
import { connect } from "react-redux";
import { clickSignUpButtonCreator } from './redux/actions';

const SignUp = ({ onLogInButton }) => {

    const checkConditions = () => {
        let enteredEmail = document.querySelector(".signUp__email").value;
        let enteredPassword = document.querySelector(".signUp__password").value;
        localStorage.setItem("email", enteredEmail);
        localStorage.setItem("password", enteredPassword);
        if (enteredEmail !== "" && enteredPassword !== "") {
            onLogInButton();
        }
    }

    return (
        <form className="signUp" action="#" name="inputCity">
            <input placeholder='email' className="signUp__email" type="text"></input> <br></br>
            <input placeholder='password' className="signUp__password" type="text"></input> <br></br>
            <input className="signUp__button" type="submit" value="Sign Up" onClick={checkConditions}></input>
        </form>
    )
}

const mapStateToProps = (state) => {return {}}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogInButton: () => { dispatch(clickSignUpButtonCreator()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)