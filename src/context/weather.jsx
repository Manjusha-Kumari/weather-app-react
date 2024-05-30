import { createContext, useContext , useState} from "react";
import { getWeather, getWeatherbyLoc } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async() => {
        const response = await getWeather(searchCity);
        setData(response);
    };

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("position", position);
            getWeatherbyLoc(
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data));
        });
    };

    return <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchLocation}}>
        {props.children}
    </WeatherContext.Provider>
};