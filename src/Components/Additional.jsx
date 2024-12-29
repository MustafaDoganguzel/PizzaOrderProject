import { input } from '@testing-library/user-event/dist/cjs/event/input.js'
import React, { useState } from 'react'
const ekMalzeme = ["Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak"
]
export default function Additional() {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const item = event.target.id;
        if (event.target.checked) {
            if (selectedItems.length < 10) {
                setSelectedItems((prevSelected) => [...prevSelected, item]);
            } else {
                alert("En fazla 10 malzeme seçebilirsiniz.");
            }
        } else {
            setSelectedItems((prevSelected) => prevSelected.filter((e) => e !== item));
        }
    };


    return (
        <div className='additional'>
            <h4>Ek Malzemeler</h4>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            {ekMalzeme.map((e) => {
                return <div className='malzemeler' key={e}>
                    <input type="checkbox"
                        id={e}
                        onChange={handleCheckboxChange}
                        checked={selectedItems.includes(e)} />
                    <label htmlFor={e}>{e}</label>
                </div>

            })}
        </div>
    )
}
