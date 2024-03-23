import {useState, useEffect} from "react";
import WeatherBox from "./components/WeatherBox";
import Buttons from "./components/Buttons";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [jejuweather, setJejuweather] = useState(null);
    const [santoriniweather, setSantoriniweather] = useState(null);
    const [parisweather, setParisweather] = useState(null);
    const [newyorkweather, setNewyorkweather] = useState(null);
    const [selectedWeather, setSelectedWeather] = useState(null);


    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("현재위치", lat, lon);
            getCurrentWeather(lat, lon);
        });
    }
    const getCurrentWeather = async (lat, lon) => {
        let apiKey = '64502aac4a0827f4b4e102f33b81acbe';
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setCurrentWeather(data);

    }

    const getJejuWeather = async () => {

        let apiKey = '64502aac4a0827f4b4e102f33b81acbe';
        let cityName = 'Jeju';

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setJejuweather(data);

    }

    const getSantoriniWeather = async () => {

        let apiKey = '64502aac4a0827f4b4e102f33b81acbe';
        let cityName = 'Santorini';

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setSantoriniweather(data);
    }

    const getParisWeather = async () => {

        let apiKey = '64502aac4a0827f4b4e102f33b81acbe';
        let cityName = 'Paris';

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setParisweather(data);
    }

    const getNewyorkWeather = async () => {

        let apiKey = '64502aac4a0827f4b4e102f33b81acbe';
        let cityName = 'New York';

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setNewyorkweather(data);

    }

        useEffect(() => {
        setSelectedWeather(currentWeather);
    }, [currentWeather]);

    useEffect(() => {



        getCurrentLocation();
        getCurrentWeather();
        getJejuWeather();
        getSantoriniWeather();
        getParisWeather();
        getNewyorkWeather();


    }, []);


    //1. APp이 실행되자마자 현재 위치 기반의 날씨가 보인다.
    //2. 날씨정보에는 도시, 날씨,섭씨,화씨 날씨상태
    //3. 5개의 버튼이 있음. 1 현재위치, 다른도시 4개
    //4. 도시버튼을 클릭할떄마다 도시별 날씨가 나온다.
    //5..현재위치를 버르면 다시 현재 위치 기반의 날씨가 나온다
    //6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

    // weartherapi key : 64502aac4a0827f4b4e102f33b81acbe

    // current api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    //city api : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    return (
        <div>
            {selectedWeather && <WeatherBox selectedWeather={selectedWeather}/>}
            <Buttons
                currentWeather={currentWeather}
                jejuWeather={jejuweather}
                santoriniWeather={santoriniweather}
                parisWeather={parisweather}
                newYorkWeather={newyorkweather}
                setSelectedWeather={setSelectedWeather}
            />

        </div>
    );
}

export default App;
