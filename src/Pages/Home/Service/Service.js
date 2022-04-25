import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
  const {name, price, description, img, _id} = service;

  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`)
  }


  return (
    <div id='services' className='service-container'>
      <img className='w-100' src= {img} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: {price} </p>
      <p><small> {description} </small></p>
      <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book {name} </button>
    </div>
  );
};

export default Service;