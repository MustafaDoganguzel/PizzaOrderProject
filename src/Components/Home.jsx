import React from 'react'
import { useHistory } from 'react-router-dom';
import OrderPizza from './OrderPizza';

export default function Home() {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/OrderPizza');
    };
    return (
        <div className='home'>

            <img src="./images/iteration-1-images/home-banner.png" alt="home" />
            <h1 className='logo'>Teknolojik Yemekler</h1>
            <h1 className='banner'>KOD ACIKTIRIR, PIZZA DOYURUR</h1>
            <button className='aciktim' onClick={handleButtonClick}>Aciktim</button>

        </div>
    )
}
