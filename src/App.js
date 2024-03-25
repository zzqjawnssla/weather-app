import {useState, useEffect, useCallback} from "react";
import WeatherBox from "./components/WeatherBox";
import Buttons from "./components/Buttons";
import ClipLoader from "react-spinners/ClipLoader";


    const cities = ['Jeju', 'Santorini', 'Paris', 'New York'];
    const apiKey = '64502aac4a0827f4b4e102f33b81acbe';
function App() {




    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);

    const [loading, setLoading] = useState(false);





const getCurrentWeather = useCallback(async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      let  response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
}, []);

const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getCurrentWeather(latitude, longitude);
    });
}, [getCurrentWeather]);

const getWeatherCity = useCallback(async () => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        setLoading(false);
    }
    catch (error) {
        setLoading(false);
    }
}, [city]);

useEffect(() => {
    if (city == null) {
        setLoading(true);
        getCurrentLocation();
    } else {
        setLoading(true);
        getWeatherCity();
    }
}, [city, getCurrentLocation, getWeatherCity]);


        const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };



    //1. APp이 실행되자마자 현재 위치 기반의 날씨가 보인다.(완료)
    //2. 날씨정보에는 도시, 날씨,섭씨,화씨 날씨상태(완료)
    //3. 5개의 버튼이 있음. 1 현재위치, 다른도시 4개(완료)
    //4. 도시버튼을 클릭할떄마다 도시별 날씨가 나온다.(완료)
    //5..현재위치를 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다 (완료)
    //6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

    // weartherapi key : 64502aac4a0827f4b4e102f33b81acbe

    // current api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    //city api : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

return (
    <div>
        {loading ? (
            <div className="spinner">
                <ClipLoader
                    color="#f88c6b"
                    loading={loading}
                    size={150}
                />
            </div>
        ) : (
            <div>
                <WeatherBox weather={weather}/>
            </div>
        )}
        <Buttons
            cities={cities}
            handleCityChange={handleCityChange}
            setCity={setCity}
        />
    </div>
);

}

export default App;
