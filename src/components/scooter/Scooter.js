import React from 'react'

const Scooter = ({scooter}) => {
  return (
    <div>
        <h2>Scooter Details:</h2>
        <p>Model: {scooter.model}</p>
        <p>Charge Percent: {scooter.charge_perct}</p>
    </div>
  )
}

export default Scooter
