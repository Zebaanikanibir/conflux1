import React from 'react'
import { Container } from 'react-bootstrap';
import image from '../../images/headset (4).png';
import './Home.css';
const Header = () => {
    return (
        <div className='header'>
            <Container className='header-1'>
           
           <div className="header-box">
               <p className="header-text header-brand-name"><span style={{fontWeight:'700'}}>Brand</span>Name</p>
               <p className="header-text"><small style={{color:'blue'}}>Special Promotion</small></p>
               <p style={{fontWeight:'700'}} className="header-text header-brand-promotion">Whats Your Special <br /> Promotion?</p>
               <p className="header-text"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem <br /> ipsam voluptatem totam</small></p>
               <button className="header-button">Primary CTA</button>
           </div>
           <div className="header-box">
               <img style={{width:'40%'}} src={image} alt="" srcset="" />
           </div>
           
       </Container>
        </div>
    )
}

export default Header
