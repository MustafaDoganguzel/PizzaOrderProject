import React from 'react'

export default function OrderNote() {
    return (
        <div>
            <h4>Sipariș Notu</h4>
            <textarea placeholder='Siparisinize eklemek istedigin bir not var mi?'></textarea>
            <button disabled>Not Ekle</button>
            <hr />
        </div>
    )
}
