import React from 'react'
import '../App.css';

const Buttons = ({currentWeather, jejuWeather, santoriniWeather, parisWeather, newYorkWeather, setSelectedWeather}) => {

    const handleCurrentWeatherClick = () => {
        setSelectedWeather(currentWeather);
    }

    const handleJejuWeatherClick = () => {
        setSelectedWeather(jejuWeather);
    }

    const handleSantoriniWeatherClick = () => {
        setSelectedWeather(santoriniWeather);
    }

    const handleParisWeatherClick = () => {
        setSelectedWeather(parisWeather);
    }

    const handleNewYorkWeatherClick = () => {
        setSelectedWeather(newYorkWeather);
    }

    return (
        <div className='buttonBox'>
            <button className='btn' onClick={handleCurrentWeatherClick}>현재 지역</button>
            <button className='btn' onClick={handleJejuWeatherClick}>Jeju </button>
            <button className='btn' onClick={handleSantoriniWeatherClick}>Santorini </button>
            <button className='btn' onClick={handleParisWeatherClick}>Paris </button>
            <button className='btn' onClick={handleNewYorkWeatherClick}>New York </button>
        </div>
    );
}

export default Buttons;