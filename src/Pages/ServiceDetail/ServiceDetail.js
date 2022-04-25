import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const {serviceId} = useParams()

  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])

  return (
    <div className='text-center'>
      <h2 className='text-secondary'>You Are About to book {service.name} </h2>
      <Link to='/checkout'>
        <button className='btn btn-success'>Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;