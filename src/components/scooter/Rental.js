import React from 'react';
import Customer from '../customer/Customer';
import Scooter from './Scooter';

const Rental = ({rental}) => {
  return (
    <div>
      <h2>Rental Details:</h2>
      <Customer customer={rental.customer}> </Customer>
      <Scooter scooter={rental.scooter}></Scooter>
    </div>
  )
}

export default Rental
