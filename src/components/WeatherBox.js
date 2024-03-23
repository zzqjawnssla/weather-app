import React from 'react'

const WeatherBox = ({selectedWeather}) => {
    const cityName = selectedWeather?.name;
    const tempCelsius = selectedWeather?.main?.temp;
    const tempFahrenheit = tempCelsius ? tempCelsius * 9/5 + 32 : null;  // 섭씨를 화씨로 변환
    const weatherState = selectedWeather?.weather?.[0]?.description;

    return (
        <div className='box'>
            <div className='city-name'>{cityName}</div>
            {tempCelsius && <div className='temp'>{tempCelsius.toFixed(1)}°C / {tempFahrenheit.toFixed(1)}°F</div>}
            <div className='weather-state'>{weatherState}</div>
        </div>
    )
}
export default WeatherBox