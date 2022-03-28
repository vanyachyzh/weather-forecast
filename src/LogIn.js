import React, { useEffect } from "react";
import { connect } from "react-redux";
import {clickLogInButtonCreator}  from './redux/actions';

function LogIn(props) {




  function check(){
    let emailStorage = localStorage.getItem("email")
    let passwordStorage = localStorage.getItem("password")
    let email = document.querySelector(".logIn__email").value
    let password = document.querySelector(".logIn__password").value
    if(emailStorage===email && passwordStorage===password){
      props.onLogInButton()
    }else{
      console.log("wrong password or email")
    }
  }
  return (
    <form className="logIn" action="#" name="inputCity">
      <input placeholder='email' className="logIn__email" type="text"></input> <br></br>
      <input placeholder='password' className="logIn__password" type="text"></input> <br></br>
      <input onClick={check} className="logIn__button" type="submit" value="Log In"></input>
    </form>
  )
}

const mapStateToProps = (state) => {
  const { mainContentReducer } = state
  return {
      signUp: mainContentReducer.SignUp
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onLogInButton: () => { dispatch(clickLogInButtonCreator()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)