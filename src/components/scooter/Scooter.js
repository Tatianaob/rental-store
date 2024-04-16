import React from 'react'

const Scooter = ({ model, chargePercent}) => {
  return (
    <div className='scooter-item'>
        <h2>Scooter Details:</h2>
        <p>Model: {model}</p>
        <p>Charge Percent: {chargePercent}</p>
        
    </div>
  )
}

export default Scooter
