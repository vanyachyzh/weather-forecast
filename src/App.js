import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Result from "./Result";
import LogIn from './LogIn';
import Greetings from './Greetings';
import Favorites from './Favorites';
import History from './History';
import SignUp from './SignUp';
import Footer from './Footer';
import { connect } from "react-redux";
import { clickButtonCreator, pressEnterCreator } from './redux/actions';



let historyList = [];
let favoritesList = []
function App(props) {
  let [urlCityName, setUrlName] = useState("odesa")
  let [url, setUrl] = useState('')
  let [cityName, setCityName] = useState("")
  let [nowIcon, setNowIcon] = useState("")
  let [nowTemp, setNowTemp] = useState("")
  let [nowDescription, setNowDescription] = useState("")
  let [todayTemp, setTodayTemp] = useState("")
  let [tomorrowTemp, setTomorrowTemp] = useState("")
  let [afterTomorrowTemp, setAfterTomorrowTemp] = useState("")
  let [realFeel, setRealFeel] = useState("")
  let [humidity, setHumidity] = useState("")
  let [description, setDescription] = useState("")
  let [windSpeed, setWindSpeed] = useState("")
  let [pressure, setPressure] = useState("")
  let [visibility, setVisibility] = useState("")
  let [thirdDay, setThirdDay] = useState("")

  useEffect(() => {
    setUrl('https://api.openweathermap.org/data/2.5/forecast?q=' + urlCityName + '&cnt=40&appid=2c4c38e0912721c6068d66d264ce8acb')
    fetch(url)
      .then(r => r.json())
      .then(r => {
        setCityName(r.city.name)
        setNowIcon('http://openweathermap.org/img/wn/' + r.list[0].weather[0].icon + '.png')
        setNowTemp(Math.round(r.list[0].main.temp - 273.15) + "°C")
        setNowDescription(r.list[0].weather[0].description)
        setTodayTemp(Math.round(r.list[0].main.temp - 273.15) + "°C")
        setTomorrowTemp(Math.round(r.list[9].main.temp - 273.15) + "°C")
        setAfterTomorrowTemp(Math.round(r.list[18].main.temp - 273.15) + "°C")
        setRealFeel(Math.round(r.list[0].main.feels_like - 273.15) + "°C")
        setHumidity(r.list[0].main.humidity + "%")
        setDescription(r.list[0].weather[0].description)
        setWindSpeed(r.list[0].wind.speed + "m/s")
        setPressure(r.list[0].main.pressure + 'mbar')
        setVisibility(r.list[0].visibility)
        setThirdDay(new Date(r.list[18].dt*1000).toLocaleString('ua-Ua', {day:'numeric', month:'numeric'}))
      })
  })

  function pressEnter(event) {
    if (event.key === 'Enter') {
      setUrlName(document.querySelector("input").value)
      historyList.push(document.querySelector("input").value)
      localStorage.setItem("historyList", historyList)
      props.onKeyEnter()
    }
  }
  function pressCityButton(e) {
    console.log(e.target.textContent)
    setUrlName(e.target.textContent)
    props.onButton()
  }

  function pressButton() {
    favoritesList.push(cityName)
    localStorage.setItem("favoritesList", favoritesList)
  }

  return (
    <div>
      <Header pressEnter={pressEnter}></Header>
      <Footer></Footer>

      {props.SignUp
        ? <SignUp></SignUp>
        : null
      }
      {props.LogIn
        ? <LogIn></LogIn>
        : null
      }
      {props.Greetings
        ? <Greetings></Greetings>
        : null
      }
      {props.Result
        ? <Result cityName={cityName} nowIcon={nowIcon} nowTemp={nowTemp} nowDescription={nowDescription} todayTemp={todayTemp} tomorrowTemp={tomorrowTemp} afterTomorrowTemp={afterTomorrowTemp} realFeel={realFeel} humidity={humidity} description={description} windSpeed={windSpeed} pressure={pressure} visibility={visibility} thirdDay={thirdDay} pressButton={pressButton}></Result>
        : null
      }
      {props.Favorites
        ? <Favorites pressCityButton={pressCityButton}></Favorites>
        : null
      }
      {props.History
        ? <History pressCityButton={pressCityButton}></History>
        : null
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const { mainContentReducer } = state
  return {
    SignUp: mainContentReducer.SignUp,
    LogIn: mainContentReducer.LogIn,
    Greetings: mainContentReducer.Greetings,
    Result: mainContentReducer.Result,
    Favorites: mainContentReducer.Favorites,
    History: mainContentReducer.History
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onButton: () => { dispatch(clickButtonCreator()) },
    onKeyEnter: () => { dispatch(pressEnterCreator()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)








  // function pressButton(){
  //   list2.push(cityName)
  //   localStorage.setItem("list2", list2)
  // }



  // const showSignUpForm = () => setContentStatus("Registration")
  // const showFavorites = () => setContentStatus("Favorites")
  // const showHistory = () => setContentStatus("History")
  // const showLogInForm = () => setContentStatus("LogIn")
  // const showResult = () => setContentStatus("Result")
  // const showGreetings = () => setContentStatus("Greetings")
  // const headerSwitch = () => {
  //   if(headerStatus==="Sign Up / Log In"){
  //     setHeaderStatus("Using")
  //   }else{
  //     setHeaderStatus("Sign Up / Log In")
  //   }
  // }




