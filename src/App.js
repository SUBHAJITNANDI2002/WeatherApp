import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import './App.css';

function App() {
  const apiKey="a119f8318dc8bc8afc670dba4b0aa7bc"
  const [inputCity,setInputCity]=useState("")
  const [data,setData]=useState({})
  const getWeatherDetails=(cityName)=>{
    if(!cityName) return 
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
    axios.get(apiURL).then((res)=>{
     console.log("respone",res.data)
     setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })

  }
  const handleChangeInput=(e)=>{
    setInputCity(e.target.value)
  }
  const handleSearch=()=>{
    getWeatherDetails(inputCity)
  }
//   useEffect(()=>{
// getWeatherDetails("delhi")
//   },[])

 
  return (
  <div className="col-md-12">
    <div className="wetherBg">
      <h1 className="heading">Weather App </h1>
      <div className="d-grid gap-3 col-4 mt-4">

      <input type="text" className="form-control"
        value={inputCity } onChange={handleChangeInput}/>
      <button className="btn btn-primary" type="button"
      onClick={handleSearch}
      >Search</button>
      </div>
    </div>
    {Object.keys(data).length>0 && 
    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded wetherResultBox">
        <img className="weathorIcon" src="https://freepngimg.com/thumb/weather/23793-9-weather-photos.png"></img>
        <h5 className="weathorCity">{data?.name}</h5>
        <h6 className="weathorTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>

      </div>

    </div>
}
  </div>
  );
}

export default App;
