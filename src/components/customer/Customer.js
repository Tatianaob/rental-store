import React from 'react'

const Customer = ({Customer}) => {
  return (
    <div>
        <h2>Customer Details:</h2>
        <p>Name: {Customer.name}</p>
        <p>Email: {Customer.email}</p>
        <p>Phone: {Customer.phone}</p>
      
    </div>
  )
}

export default Customer
