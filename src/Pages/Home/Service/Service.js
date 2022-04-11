import React from 'react';
import './Service.css';

const Service = ({service}) => {
  const {name, price, description, img} = service;
  return (
    <div className='service-container'>
      <img src= {img} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: {price} </p>
      <p><small> {description} </small></p>
      <button>Book {name} </button>
    </div>
  );
};

export default Service;