import React, { useState } from 'react'
import '../App.css';

const Buttons = ({cities,setCity, handleCityChange}) => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleClick = (city) => {
        setCity(city);
        setSelectedCity(city);
    }

    return (
    <div className='buttonBox'>
        <button
            onClick={() => {
                handleCityChange("current");
                setSelectedCity("current");
            }}
            className={selectedCity === "current" ? 'btn selected' : 'btn'}
        >
            현재 위치
        </button>
        {cities.map((item,index) => (
            <button
                className={selectedCity === item ? 'btn selected' : 'btn'}
                key={index}
                onClick={()=> handleClick(item)}
            >
                {item}
            </button>
        ))}
    </div>
)
}

export default Buttons;