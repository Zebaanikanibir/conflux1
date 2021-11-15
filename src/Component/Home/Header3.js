import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../images/headset (4).png';
const Header3 = () => {
  return (
    <div>
      <Container className='header-1'>
           
           <div className="header-box">
               
               <p className="header-text"><small style={{color:'blue'}}>Showcase</small></p>
               <p className="header-text header-brand-promotion" style={{fontWeight:'700'}}>Add more details about <br /> what's being promoted</p>
               <p className="header-text"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Dolorem ipsam voluptatem totam Dolorem ipsam voluptatem totam  <br /> Dolorem ipsam voluptatem totam</small></p>
              
           </div>
           <div className="header-box">
               <img style={{width:'40%'}} src={image} alt="" srcset="" />
           </div>
           
       </Container>
    </div>
  );
}

export default Header3;
