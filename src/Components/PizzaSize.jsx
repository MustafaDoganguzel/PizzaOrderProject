import React, { useState } from 'react'
import '../App.css'


export default function PizzaSize() {
    const [selectedSize, setSelectedSize] = useState('');
    const [doughThickness, setDoughThickness] = useState('');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };


    const handleChange = (event) => {
        setDoughThickness(event.target.value);
    }
    return (
        <div className='pizzaSize'>


            <div className='Size'>
                <h4>Boyut Seç <span className='zorunlu'>*</span></h4>


                <div className='radio'>
                    <label>
                        <input
                            type="radio"
                            value="small"
                            checked={selectedSize === 'small'}
                            onChange={handleSizeChange}
                        />
                        Small
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="medium"
                            checked={selectedSize === 'medium'}
                            onChange={handleSizeChange}
                        />
                        Medium
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="large"
                            checked={selectedSize === 'large'}
                            onChange={handleSizeChange}
                        />
                        Large
                    </label>
                </div>


            </div>

            <div className='hamurKalinlik'>
                <h4>Hamur seç <span className='zorunlu'>*</span></h4>
                <select value={doughThickness} onChange={handleChange}>
                    <option value="" disabled>
                        Hamur Kalınlığı
                    </option>
                    <option value="ince">İnce Hamur</option>
                    <option value="kalin">Kalın Hamur</option>
                </select>
            </div>


        </div>

    )
}
