import React from 'react'

const Customer = ({customer}) => {
  return (
    <div>
        <h2>Customer Details:</h2>
        <p>Name: {customer.name}</p>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
      
    </div>
  )
}

export default Customer
