import React from 'react';
import { connect } from "react-redux";
import { clickSignUpCreator, clickLogInCreator, clickLogoCreator, clickLogOutCreator, clickHistoryCreator, clickFavoritesCreator, pressEnterCreator } from './redux/actions';




function Header(props) {
  return (
    <div className='header'>
      <h1 className='header__logo' onClick={props.onLogo} >Weather <br></br> Forecast</h1>
      <input placeholder='enter city' className='header__input' onKeyPress={props.pressEnter} ></input>
      {
        props.SignUpButton && props.LogInButton
          ? <div>
            <span className='header__signUp header__buttoms' onClick={props.onSignUp} >Sign Up</span>
            <span className='header__logIn header__buttoms' onClick={props.onLogIn} > Log In</span>
          </div>
          : null
      }

      {
        props.HistoryButton && props.FavoritesButton && props.LogOutButton
          ? <div>
            <span className='header__history header__buttoms' onClick={props.onHistory}>History</span>
            <span className='header__favorites header__buttoms' onClick={props.onFavorites}> Favorites</span>
            <span className='header__logOut header__buttoms' onClick={props.onLogOut} > Log Out</span>
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
function mapDispatchToProps(dispatch) {
  return {
    onSignUp: () => { dispatch(clickSignUpCreator()) },
    onLogIn: () => { dispatch(clickLogInCreator()) },
    onLogo: () => { dispatch(clickLogoCreator()) },
    onLogOut: () => { dispatch(clickLogOutCreator()); dispatch(clickLogoCreator()) },
    onFavorites: () => { dispatch(clickFavoritesCreator()) },
    onHistory: () => { dispatch(clickHistoryCreator()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)