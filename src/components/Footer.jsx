import React from 'react';

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;
