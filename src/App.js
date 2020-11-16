import React from 'react'
import Products from './components/test_comp'
import './App.css'

function App(){
    return(
        <div>
            <h1>Flash Products</h1>
            <hr />
            <Products car="20000" bike="12000" watch="8000"/>
            <h1>Second-Hand Products</h1>
            <hr />
            <Products car="14000" bike="9000" watch="3000"/>
            <h1>Expensive Products</h1>
            <hr />
            <Products car="40000" bike="24000" watch="18000"/>
        </div>
    )
}

export default App;