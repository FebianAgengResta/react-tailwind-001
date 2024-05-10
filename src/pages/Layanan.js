import React from 'react'
import NavBar from '../components/NavBar';
import PriceList from '../components/PriceList';



function Layanan() {
  
  
    return (
      <div className="text-blue-600 md:text-green-600" >
        <header className="App-header">
        <NavBar/>
        <br/>
        <br/>
          <PriceList/>
        </header>
      </div>
    )
}

export default Layanan