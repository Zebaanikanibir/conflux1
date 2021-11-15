import React from 'react';
import { Container } from 'react-bootstrap';

const Logo = () => {
  return (
    <div className='logo-section'>
      <Container>
          <p className='trusted'>Trusted by</p>
          <div className="logo">
              <button className="logo-button">CompanyLogo</button>
              <button className="logo-button">CompanyLogo</button>
              <button className="logo-button">CompanyLogo</button>
              <button className="logo-button">CompanyLogo</button>
          </div>
      </Container>
    </div>
  );
}

export default Logo;
