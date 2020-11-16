import React from 'react'

function Products(props) {
    return (
        <div>
            <h3>Car Price is: {props.car}</h3>
            <h3>Bike Price is: {props.bike}</h3>
            <h3>Smart Watch Price is: {props.watch}</h3>
        </div>
    )
}

export default Products;
