import React from 'react'

const Customer = ({name, email, phone}) => {
  return (
    <div>
        <h2>Customer Details:</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      
    </div>
  )
}

export default Customer
