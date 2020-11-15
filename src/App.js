import React from 'react'
import Products from './components/test_comp'
import './App.css'

function App(){
    return(
        <div>
            <h1>Flash Products</h1>
            <hr />
            <Products car="20000" bike="12000"/>
            <h1>Second-Hand Products</h1>
            <hr />
            <Products car="14000" bike="9000"/>
            <h1>Expensive Products</h1>
            <hr />
            <Products car="40000" bike="24000"/>
        </div>
    )
}

export default App;