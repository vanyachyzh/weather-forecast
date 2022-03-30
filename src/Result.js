import React from 'react';
import { connect } from "react-redux";
import { clickButtonAddToFavoritesCreator } from './redux/actions';
import PropTypes from 'prop-types';





const Result = ({ cityName, nowIcon, nowDescription, nowTemp, todayTemp, tomorrowTemp, afterTomorrowTemp, thirdDay, realFeel, description, humidity, windSpeed, pressure, visibility, FavoritesButton, thenLogIn, onAddToFavoritesButtonPress }) => {


  let checkConditions = () => {
    let email = localStorage.getItem("email")
    let password = localStorage.getItem("password")
    if (email !== null && password !== null && FavoritesButton) {
      onAddToFavoritesButtonPress()
    } else {
      thenLogIn()
    }
  }

  return (
    <div className='result'>

      <div className='mainInfo'>
        <div className='mainInfo__cityName'>{cityName}</div>
        <img className='mainInfo__nowIcon' src={nowIcon}></img>
        <div className='mainInfo__nowDescription'>{nowDescription}</div>
        <div className='mainInfo__nowTemp'>{nowTemp}</div>
        <button className='mainInfo__addToFavorites' onClick={checkConditions}>Add to favorites</button>
      </div>

      <div className='additionalInfo'>
        <div className='additionalInfo__todayTemp currentItems'>Today: {todayTemp}</div>
        <div className='additionalInfo__tomorrowTemp currentItems'>Tomorrow: {tomorrowTemp}</div>
        <div className='additionalInfo__afterTomorrowTemp currentItems'> {thirdDay}: {afterTomorrowTemp}</div>
        <div className='additionalInfo__realFeel currentItems'>Real feel: {realFeel}</div>
        <div className='additionalInfo__humidity currentItems'> Humidity: {description}</div>
        <div className='additionalInfo__description currentItems'> Description: {humidity}</div>
        <div className='additionalInfo__windSpeed currentItems'> Wind speed: {windSpeed}</div>
        <div className='additionalInfo__pressure currentItems'>Pressure: {pressure}</div>
        <div className='additionalInfo__visibility currentItems'>Visibility: {visibility}</div>
      </div>

    </div>
  )
}

Result.propTypes ={
  cityName: PropTypes.string,
  nowIcon: PropTypes.string,
  nowDescription: PropTypes.string,
  nowTemp: PropTypes.string,
  todayTemp: PropTypes.string,
  tomorrowTemp: PropTypes.string,
  afterTomorrowTemp: PropTypes.string,
  thirdDay: PropTypes.string,
  realFeel: PropTypes.string,
  description: PropTypes.string,
  humidity: PropTypes.string,
  windSpeed: PropTypes.string,
  pressure: PropTypes.string,
  visibility: PropTypes.number,
  FavoritesButton: PropTypes.bool,
  thenLogIn: PropTypes.func,
  onAddToFavoritesButtonPress: PropTypes.func
}

const mapStateToProps = (state) => {
  const { headerReducer } = state
  return {
    FavoritesButton: headerReducer.FavoritesButton
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    thenLogIn: () => { dispatch(clickButtonAddToFavoritesCreator()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result)