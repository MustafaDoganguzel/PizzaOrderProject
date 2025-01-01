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
            <button className='aciktim' onClick={handleButtonClick}>Aciktim</button>

        </div>
    )
}
