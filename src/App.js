import React from 'react'
import Rental from '../src/components/rental';

const App = () => {
    const rentalData = {
        customer: {
            name: 'Beyonce',
            email: 'b@email.com',
            phone: '123456'
        },
        scooter: {
            model: 'VespaLT',
            charge_percent: 20
        }
    };
  return (
    <div>
        <h1>Rental Store App</h1>
        <Rental rental={rentalData}/>
    </div>
  )
}

export default App
