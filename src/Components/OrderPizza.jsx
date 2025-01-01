import React from 'react'

import Nav from './Nav'
import Header1 from './header1'
import PizzaName from './PizzaName'
import PizzaSize from './PizzaSize'
import Additional from './Additional'
import OrderNote from './OrderNote'
import NumberOfOrder from './NumberOfOrder'

export default function OrderPizza() {
    return (
        <div className='OrderPizza'>
            <Header1 />
            <Nav />
            <PizzaName />
            <PizzaSize />
            <Additional />
            <OrderNote />
            <NumberOfOrder />
        </div>
    )
}
