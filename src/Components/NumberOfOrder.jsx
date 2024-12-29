import React, { useState } from 'react'

export default function NumberOfOrder() {
    const [count, setCount] = useState(1);

    function arttir() {
        setCount(count + 1);
    }
    function azalt() {
        if (count >= 0) {
            alert('Siparis sayiniz negatif olamaz!!')
        }
        setCount(count - 1);
    }


    return (
        <>
            <hr />
            <div className='countButton'>
                <button className='btn' onClick={azalt}>-</button>
                <span className='count'>{count}</span>
                <button className='btn' onClick={arttir}>+</button>
            </div>
        </>
    )
}
