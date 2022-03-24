import React, { useState, useEffect } from 'react';
import Header from "./Header"
import Result from "./Result"
import Registration from "./Registration"
import LogIn from './LogIn';
import Greetings from './Greetings';
import Favorites from './Favorites';
import History from './History';

// <div className='item'>
//   <div className='nameOfCity'>Kyiv</div>
//   <img className='img' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'></img>
//   <div className='temp'>+56</div>
// </div>





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
  let [content, setContent] = useState(true)

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
    }
  }


  return (
  
    <div>
      <Header pressEnter={pressEnter}></Header>
      <div className='footer'>vanyachyzh</div>



      <Result cityName={cityName} nowIcon={nowIcon} nowTemp={nowTemp} todayTemp={todayTemp} tomorrowTemp={tomorrowTemp} afterTomorrowTemp={afterTomorrowTemp} realFeel={realFeel} humidity={humidity} description={description} windSpeed={windSpeed} pressure={pressure} visibility={visibility}></Result>

    </div>
  )

}

export default App;


