import React, { useState } from 'react';

function Header(props) {

  return (
    <div className='header'>
      <h1>Weather <br></br> Forecast</h1>
      <input onKeyPress={props.pressEnter}></input>
      {props.showProfile
      ?      <div> <span>History</span>   <span>| Favorites</span> <span>| Log Out</span></div>
      :      <div> <span className='login' onClick={props.pressSignUp}>Sign Up</span> <span>| Log In</span></div>

      }

    </div>
  )
}

export default Header;