import React from 'react';
import { connect } from "react-redux";
import { clickSignUpCreator, clickLogInCreator, clickLogoCreator, clickLogOutCreator, clickHistoryCreator, clickFavoritesCreator } from './redux/actions';

const Header = ({ SignUpButton, LogInButton, HistoryButton, FavoritesButton, LogOutButton, onFavoritesButtonPress, onHistoryButtonPress, onLogInButtonPress, onSignUpButtonPress, onLogoButtonPress, onEnterPress, onLogOutButtonPress }) => {
  
  return (
    <div className='header'>
      <h1 className='header__logo' onClick={onLogoButtonPress} >Weather <br></br> Forecast</h1>
      <input className='header__input' placeholder='Enter city' onKeyPress={onEnterPress} ></input>
      {
        SignUpButton && LogInButton
          ? <div>
            <span className='header__signUp header__buttoms' onClick={onSignUpButtonPress} >Sign Up</span>
            <span className='header__logIn header__buttoms' onClick={onLogInButtonPress} > Log In</span>
          </div>
          : null
      }
      {
        HistoryButton && FavoritesButton && LogOutButton
          ? <div>
            <span className='header__history header__buttoms' onClick={onHistoryButtonPress}>History</span>
            <span className='header__favorites header__buttoms' onClick={onFavoritesButtonPress}> Favorites</span>
            <span className='header__logOut header__buttoms' onClick={onLogOutButtonPress} > Log Out</span>
          </div>
          : null
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const { headerReducer } = state
  return {
    SignUpButton: headerReducer.SignUpButton,
    LogInButton: headerReducer.LogInButton,
    HistoryButton: headerReducer.HistoryButton,
    FavoritesButton: headerReducer.FavoritesButton,
    LogOutButton: headerReducer.LogOutButton
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpButtonPress: () => { dispatch(clickSignUpCreator()) },
    onLogInButtonPress: () => { dispatch(clickLogInCreator()) },
    onLogoButtonPress: () => { dispatch(clickLogoCreator()) },
    onLogOutButtonPress: () => { dispatch(clickLogOutCreator()); dispatch(clickLogoCreator()) },
    onFavoritesButtonPress: () => { dispatch(clickFavoritesCreator()) },
    onHistoryButtonPress: () => { dispatch(clickHistoryCreator()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)