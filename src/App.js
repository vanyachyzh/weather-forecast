import React, { useState, useEffect } from 'react';
import Header from "./Header"
import Result from "./Result"
import Registration from "./SignUp"
import LogIn from './LogIn';
import Greetings from './Greetings';
import Favorites from './Favorites';
import History from './History';
import SignUp from './SignUp';




let list = []
let list2 = []


function App() {
  let [urlName, setUrlName] = useState("Odesa")
  let [url, setUrl] = useState('')
  let [cityName, setCityName] = useState("")
  let [nowIcon, setNowIcon] = useState("")
  let [nowTemp, setNowTemp] = useState("")
  let [todayTemp, setTodayTemp] = useState("")
  let [tomorrowTemp, setTomorrowTemp] = useState("")
  let [afterTomorrowTemp, setAfterTomorrowTemp] = useState("")
  let [realFeel, setRealFeel] = useState("")
  let [humidity, setHumidity] = useState("")
  let [description, setDescription] = useState("")
  let [windSpeed, setWindSpeed] = useState("")
  let [pressure, setPressure] = useState("")
  let [visibility, setVisibility] = useState("")

  let [contentStatus, setContentStatus] = useState("Result")
  let [headerStatus, setHeaderStatus] = useState("Sign Up / Log In")

  useEffect(() => {
    setUrl('https://api.openweathermap.org/data/2.5/forecast?q=' + urlName + '&cnt=40&appid=2c4c38e0912721c6068d66d264ce8acb')
    fetch(url)
      .then(r => r.json())
      .then(r => {
        setCityName(r.city.name)
        setNowIcon('http://openweathermap.org/img/wn/' + r.list[0].weather[0].icon + '.png')
        setNowTemp(Math.round(r.list[0].main.temp - 273.15) + "°C")
        setTodayTemp(Math.round(r.list[0].main.temp - 273.15) + "°C")
        setTomorrowTemp(Math.round(r.list[8].main.temp - 273.15) + "°C")
        setAfterTomorrowTemp(Math.round(r.list[16].main.temp - 273.15) + "°C")
        setRealFeel(Math.round(r.list[0].main.feels_like - 273.15) + "°C")
        setHumidity(r.list[0].main.humidity + "%")
        setDescription(r.list[0].weather[0].description)
        setWindSpeed(r.list[0].wind.speed + "m/s")
        setPressure(r.list[0].main.pressure + 'mbar')
        setVisibility(r.list[0].visibility)
      })
  })

  function pressEnter(event) {

    if (event.key === 'Enter') {
      setUrlName(document.querySelector("input").value)
      list.push(document.querySelector("input").value)
      localStorage.setItem("list", list)
    }
  }
  function pressButton(){
    list2.push(cityName)
    localStorage.setItem("list2", list2)
  }

  function showFavoritesCity(){
    setUrlName("Kyiv")
  }

  const showSignUpForm = () => setContentStatus("Registration")
  const showFavorites = () => setContentStatus("Favorites")
  const showHistory = () => setContentStatus("History")
  const showLogInForm = () => setContentStatus("LogIn")
  const showResult = () => setContentStatus("Result")
  const showGreetings = () => setContentStatus("Greetings")
  const headerSwitch = () => {
    if(headerStatus==="Sign Up / Log In"){
      setHeaderStatus("Using")
    }else{
      setHeaderStatus("Sign Up / Log In")
    }
  }

  return (
    <div>

      <Header pressEnter={pressEnter} showSignUpForm={showSignUpForm} showFavorites={showFavorites} showGreetings={showGreetings} showHistory={showHistory} showLogInForm={showLogInForm} showResult={showResult} contentStatus={contentStatus} headerStatus={headerStatus} headerSwitch={headerSwitch}></Header>

      <div className='footer'>vanyachyzh</div>

      {contentStatus==="Greetings"
        ? <Greetings></Greetings>
        : contentStatus ==="Favorites" ? <Favorites ></Favorites>
        : contentStatus ==="History" ? <History ></History>
        : contentStatus ==="LogIn" ? <LogIn showGreetings={showGreetings}  headerSwitch={headerSwitch} ></LogIn>
        : contentStatus ==="Registration" ? <SignUp  headerSwitch={headerSwitch}></SignUp>
        : contentStatus ==="Result" ? <Result pressButton={pressButton} cityName={cityName} nowIcon={nowIcon} nowTemp={nowTemp} todayTemp={todayTemp} tomorrowTemp={tomorrowTemp} afterTomorrowTemp={afterTomorrowTemp} realFeel={realFeel} humidity={humidity} description={description} windSpeed={windSpeed} pressure={pressure} visibility={visibility}></Result>
        : <div> 3</div>
      }

      {/* <History></History> */}
    </div>
  )
}

export default App;


