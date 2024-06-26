import Button from './component/button';
import Card from './component/card';
import Input from './component/input';
import { useWeather } from './context/weather';
import './App.css';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchLocation()
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData()} value='Search'/>
      <Card />
      <Button value='Refresh'/>
    </div>
  );
}

export default App;
