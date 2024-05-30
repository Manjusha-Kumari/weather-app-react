const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=4ee687d69f7c432887a191820242905';

export const getWeather = async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`, {method: "GET",});
    return await response.json();
}

export const getWeatherbyLoc = async (lat, lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`, {method: "GET",});
    return await response.json();
};