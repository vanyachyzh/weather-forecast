import React, {useEffect} from "react";
import { connect } from "react-redux";

function LogIn(props){


    function handlerOnSubmit(){
        console.log(document.querySelector(".logIn__password").value)

    }

    return(
        // <form className="logIn" action="#" name="inputCity">
        //     <input placeholder='email' className="logIn__email" type="text"></input> <br></br>
        //     <input placeholder='password' className="logIn__password" type="text"></input> <br></br>
        //     <input className="logIn__button" type="submit" onClick={()=>{props.headerSwitch(); props.showGreetings()}} value="Log In"></input>
        // </form>
            <form className="logIn" action="#" name="inputCity">
                        <div>{props.item}</div>
                <input placeholder='email' className="logIn__email" type="text"></input> <br></br>
                <input placeholder='password' className="logIn__password" type="text"></input> <br></br>
                <input onClick={props.checkPassword} className="logIn__button" type="submit" value="Log In"></input>
            </form>



    )
}

function mapStateToProps(state){
    let { reducer } = state
    return{
      item: reducer[0].one
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      checkPassword: ()=>{dispatch({type: "CLICK_BUTTON"})}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)