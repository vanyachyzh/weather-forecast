import React, { useState } from 'react';

function Header(props) {

  return (
    <div className='header'>
      <h1 onClick={props.showGreetings}>Weather <br></br> Forecast</h1>

      <input onKeyPress={props.pressEnter}></input>

      {props.headerStatus==="Sign Up / Log In"
        ?
        <div>
          <span onClick={props.showSignUpForm}>Sign Up</span>
          <span onClick={props.showLogInForm}>| Log In</span>
        </div>
        :
        <div>
          <span onClick={props.showHistory}>History</span>
          <span onClick={props.showFavorites}>| Favorites</span>
          <span onClick={props.headerSwitch} >| Log Out</span>
        </div>
      }
    </div>
  )
}

export default Header;