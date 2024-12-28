import React from 'react'
import style from './GrandTotal.module.css'
const GrandTotal = ({ data, setsmartPhoneData, setCartLength }) => {
    const total = data.reduce((sum, ele) => {
        return sum + (Number(ele.count) * Number(ele.Price));
    }, 0)
    return (
        <div className={style['total-container']}>
            <div className={style.total}>
                <h1>Total</h1>
                <p>${total.toFixed(2)}</p>
            </div>
            <button onClick={() => {
                setsmartPhoneData([])
                setCartLength(0)
            }}>Clear Cart</button>
        </div>
    )
}

export default GrandTotal
