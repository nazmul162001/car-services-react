import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const {serviceId} = useParams()

  return (
    <div className='text-center'>
      <h2 className='text-secondary'>Wellcome to detail {serviceId} </h2>
      <Link to='/checkout'>
        <button className='btn btn-success'>Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;