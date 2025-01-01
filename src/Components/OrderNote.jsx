import React, { useState } from 'react'

export default function OrderNote() {

    return (
        <div className='orderNote'>
            <div>
                <h4>Sipariș Notu</h4>
                <textarea className='not' placeholder='Siparisinize eklemek istedigin bir not var mi?'></textarea>
            </div>
            <button >Not Ekle</button>
            <hr />
        </div>
    )
}
