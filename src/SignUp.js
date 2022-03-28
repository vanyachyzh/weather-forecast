import React from "react";
import { connect } from "react-redux"
import { clickSignUpButtonCreator } from './redux/actions';

function SignUp(props) {
    function signUp(){
        console.log(document.querySelector(".signUp__email").value)
        localStorage.setItem("email",document.querySelector(".signUp__email").value);
        localStorage.setItem("password",document.querySelector(".signUp__password").value )
    }
    return (
        <form className="signUp" action="#" name="inputCity">
            <input placeholder='email' className="signUp__email" type="text"></input> <br></br>
            <input placeholder='password' className="signUp__password" type="text"></input> <br></br>
            <input className="signUp__button" type="submit" value="Sign Up" onClick={()=>{props.onLogInButton(); signUp()}}></input>
        </form>
    )
}

const mapStateToProps = (state) => {
    const { mainContentReducer } = state
    return {
        signUp: mainContentReducer.SignUp,

    }
}

function mapDispatchToProps(dispatch){
    return{
      onLogInButton: ()=>{dispatch(clickSignUpButtonCreator())}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)