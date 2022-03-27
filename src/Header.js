import React, { useState } from 'react';

function Header(props) {

  return (
    <div className='header'>
      <h1 className='header__logo' onClick={props.showGreetings}>Weather <br></br> Forecast</h1>

      <input placeholder='enter city' className='header__input' onKeyPress={props.pressEnter}></input>

      {props.headerStatus==="Sign Up / Log In"
        ?
        <div>
          <span className='header__signUp header__buttoms'  onClick={props.showSignUpForm}>Sign Up</span>
          <span className='header__logIn header__buttoms' onClick={props.showLogInForm}> Log In</span>
        </div>
        :
        <div>
          <span className='header__history header__buttoms' onClick={props.showHistory}>History</span>
          <span className='header__favorites header__buttoms' onClick={props.showFavorites}> Favorites</span>
          <span className='header__logOut header__buttoms' onClick={props.headerSwitch} > Log Out</span>
        </div>
      }
    </div>
  )
}

export default Header;