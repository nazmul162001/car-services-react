import React from 'react';
import notFound from  '../../images/404.png'
const NotFound = () => {
  return (
    <div>
      <img style={{width:'100%', height: '100vh'}} src= {notFound} alt="" />
    </div>
  );
};

export default NotFound;