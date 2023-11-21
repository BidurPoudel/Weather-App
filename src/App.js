import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import cloudbg from './img/cloud.jpg'


const Weather = () => {
  const apiKey = "2d5cd0ae8de0427c208ed0f228623544"

  const [inputCity, setCity] = useState("");
  const [data, setData] = useState({});


  const getApi = () => {
    // if (!cityName) return
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`;
    axios.get(apiURL)
    .then((response) => {
      console.log(response.data)
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  

  const changeInput = (e) => {
    setCity(e.target.value)
    // console.log(e.target.value)
  }
  const searchPlace = () => {
    getApi(inputCity)
  }

  useEffect(() => {
    getApi(inputCity)
  }, [])
  return (
    <>
      <div className="header">

        <h1>Weather App</h1>
        <input type="text" placeholder='Search your area' size={50}
          onChange={changeInput}
          value={inputCity}
        />
        <br />
        <button className='search'
          onClick={searchPlace}  
        >Search</button>
      </div>
      <div className="shadow rounded weatherResult">
        <img src= {cloudbg} alt='logo' className='cloudBg'/>
        <h5 className="city">City Name: {data.name}</h5>
        <h2 className="temp"> temp is: {data.temp_min} </h2> 
        {/*  */}


      </div>
    </>
  )
}

export default Weather;
