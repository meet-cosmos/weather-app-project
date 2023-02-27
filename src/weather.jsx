import { useState } from "react"
import './weather.css'
const Weather = () => {
    const [city, setCity] = useState([])
    const [data, setData] = useState([])
    const [name, setName] = useState([])
    const [cityArr, setCityArr] = useState([])
    // const [err, setErr] = useState([])
    const updateWeather = async () => {
         await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50adc09477fc733df0250494c3278d16&units=metric`).then((res) => {
            return res.json()
        }).then((weather_data) => {
            console.log(weather_data)
            if(city.length !== 0){
                setName(weather_data.name)
                setData(weather_data.main)
                setCityArr([...cityArr, weather_data.name])
            }
            
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            console.log("finally")
        })
        console.log(city.length)
        console.log(cityArr)
    }
    // let new_arr = []
    // for(let i = cityArr.length - 1; i>cityArr.length; i++){
    //     if(cityArr[i] !== undefined){
    //         new_arr.push(cityArr[i])
    //     }
    // }
    // console.log(new_arr)
 
    return (
        <section id="container">
            <div id="heading">
                <h1>Weather App</h1>
            </div>
            <div id="city-input-div">
                <input type="text" placeholder="Enter City Name" onChange={(e) => setCity(e.target.value)} />
                <button onClick={updateWeather} disabled={city.length === 0 ? true : false}>Search</button>
            </div>
            {
                city.length === 0 ? null : 
                     !name  ? <div id="error-div"><h1 id="error-msg">Enter Valid City Name</h1></div> : <div id="weather-div">
                        <div> <h3>Weather Details of City : {name}</h3> </div>
                        <div> <h3>Current Temperature : {data.temp} °C</h3> </div>
                        <div> <h3>Temperature Range : {data.temp_min} °C to {data.temp_max} °C</h3> </div>
                        <div> <h3>Humidity : {data.humidity}</h3> </div>
                        <div> <h3>Sea Level : 1002</h3> </div>
                        <div> <h3>Ground Level : 963</h3></div>
                    </div> 

            }
            {/* {
                new_arr.map((val, index)=>{
                    return(
                        <div>{val}</div>
                    )
                    
                })
            } */}
        </section>
    )
}

export default Weather;

