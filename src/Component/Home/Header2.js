import React from 'react'
import { Container } from 'react-bootstrap';
import image from '../../images/headset (4).png';
const Header2 = () => {
  return (
    <div className='header2'>
            <Container className='header-1'>
            <div className="header-box mt-5">
               <img style={{width:'40%'}} src={image} alt="" srcset="" />
           </div>
           <div className="header-box mt-5">
               <p className="header-text" style={{color:"blue"}}><small>Showcase</small></p>
               <p style={{fontWeight:'700'}}  className="header-text header-brand-promotion ">Describe what's being  <br /> promoted</p>
               <p className="header-text"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Dolorem ipsam voluptatem totam<br /> Dolorem ipsam  voluptatem totam ipsam  voluptatem totam</small></p>
               
               
           </div>
           
           
       </Container>
       <hr className='margin'/>
        </div>
  )
}

export default Header2
