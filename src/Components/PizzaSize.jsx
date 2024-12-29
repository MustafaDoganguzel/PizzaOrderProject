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
        <div>


            <div className='Size'>
                <h4>Boyut Seç <span className='zorunlu'>*</span></h4>
                <h4>Hamur seç <span className='zorunlu'>*</span></h4>
            </div>
            <div>

                <div>
                    <label>
                        <input
                            type="radio"
                            value="small"
                            checked={selectedSize === 'small'}
                            onChange={handleSizeChange}
                        />
                        Small
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="medium"
                            checked={selectedSize === 'medium'}
                            onChange={handleSizeChange}
                        />
                        Medium
                    </label>
                </div>
                <div>
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
