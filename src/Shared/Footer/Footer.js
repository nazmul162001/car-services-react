import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <footer>
      <p className='text-center py-5 mt-5'><small>copyright {year} all right reserve @nazmul-hassan</small></p>
    </footer>
  );
};

export default Footer;