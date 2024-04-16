import React from 'react'
// import Rental from './components/rental/Rental';
import Customer from './components/customer/Customer';
import RentalHistory from './components/RentalHistory';
import Scooter from './components/scooter/Scooter';
import './styles.css';


const App = () => {
    const customerData = {
            name: 'Beyonce',
            email: 'b@email.com',
            phone: '123456'
        };
    const scooterData = [
        { id: 1, model: 'VespaLT', chargePercent: 20, available: true },
        { id: 2, model: 'Honda1', chargePercent: 78, available: true },
        { id: 3, model: 'KymcoG', chargePercent: 80, available: true },
        { id: 4, model: 'VespaGTV', chargePercent: 90, available: true }
    ];

    const handleShowRentalHistory = () => {
        // add logic to handle the rental history
        alert('Showing Rental History .... ')
    }

  return (
    <div>
        <h1>Rental Store App</h1>
        <div className="container">
            <div className="left-section">
                <h2>Customer </h2>
                <Customer {...customerData}></Customer>
            </div>
        <div className='right-section'>
            <h2>Scooters Available</h2>
            {scooterData.map(scooter => (
                <Scooter 
                key={scooter.id}
                model={scooter.model}
                chargePercent={scooter.chargePercent}
                />
            ))}
        </div>
        </div>
        <div className="button-container">
            <RentalHistory onClick={handleShowRentalHistory}></RentalHistory>
        </div>
    </div>
  )
};

export default App
