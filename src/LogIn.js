import React from "react";
import { connect } from "react-redux";
import { clickLogInButtonCreator } from './redux/actions';

const LogIn = ({onLogInButton}) => {

  const checkConditions = () => {
    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");
    let enteredEmail = document.querySelector(".logIn__email").value;
    let enteredPassword = document.querySelector(".logIn__password").value;
    if (savedEmail === enteredEmail && savedPassword === enteredPassword && enteredEmail !== "" && enteredPassword !== "") {
      onLogInButton();
    }
  }

  return (
    <form className="logIn" action="#" name="inputCity">
      <input placeholder='email' className="logIn__email" type="text"></input> <br></br>
      <input placeholder='password' className="logIn__password" type="text"></input> <br></br>
      <input className="logIn__button" type="submit" value="Log In" onClick={checkConditions}></input>
    </form>
  )
}

const mapStateToProps = (state) => {return {}}
const mapDispatchToProps = (dispatch) => {
  return { onLogInButton: () => { dispatch(clickLogInButtonCreator()) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)