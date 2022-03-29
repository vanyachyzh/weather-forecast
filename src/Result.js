import React from 'react';
import { connect } from "react-redux";
import { clickButtonAddToFavoritesCreator } from './redux/actions';


function Result(props) {

  function check() {
    console.log(props.Favorites)
    let emailStorage = localStorage.getItem("email")
    let passwordStorage = localStorage.getItem("password")
    if (emailStorage!==null&& passwordStorage!==null ) {
      props.pressButton()
    }else{
      props.showResult()
    }
    
  }
  return (
    <div className='result'>

      <div className='mainInfo'>
        <div className='mainInfo__cityName'>{props.cityName}</div>
        <img className='mainInfo__nowIcon' src={props.nowIcon}></img>
        <div className='mainInfo__nowDescription'>{props.nowDescription}</div>
        <div className='mainInfo__nowTemp'>{props.nowTemp}</div>
        <button className='mainInfo__addToFavorites' onClick={check}>Add to favorites</button>
      </div>

      <div className='additionalInfo'>
        <div className='additionalInfo__todayTemp currentItems'>Today: {props.todayTemp}</div>
        <div className='additionalInfo__tomorrowTemp currentItems'>Tomorrow: {props.tomorrowTemp}</div>
        <div className='additionalInfo__afterTomorrowTemp currentItems'> {props.thirdDay}: {props.afterTomorrowTemp}</div>
        <div className='additionalInfo__realFeel currentItems'>Real feel: {props.realFeel}</div>
        <div className='additionalInfo__humidity currentItems'> Humidity: {props.description}</div>
        <div className='additionalInfo__description currentItems'> Description: {props.humidity}</div>
        <div className='additionalInfo__windSpeed currentItems'> Wind speed: {props.windSpeed}</div>
        <div className='additionalInfo__pressure currentItems'>Pressure: {props.pressure}</div>
        <div className='additionalInfo__visibility currentItems'>Visibility: {props.visibility}</div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  const { headerReducer } = state
  return {
    Favorites: headerReducer.FavoritesButton
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showResult: ()=>{ dispatch(clickButtonAddToFavoritesCreator())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result)