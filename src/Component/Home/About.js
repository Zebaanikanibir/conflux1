import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className='mt-5'>
            
                <div className="about">
                    <div className="about-box">
                        <div className="about-box-svg">
                        <svg style={{width:'25px',marginTop:'9px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        </div>
                        <p className="header-text about-text">Benefit One</p>
                        <p className="header-text">Lorem ipsum dolor sit amet <br /> adipisicing elit. Consectetur<br /> Animi harum praesentium </p>
                    </div>
                    <div className="about-box">
                       <div className="about-box-svg">
                       <svg style={{width:'25px',marginTop:'9px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                       </div>
                        <p className="header-text about-text">Benefit Two</p>
                        <p className="header-text">Lorem ipsum dolor sit amet <br /> adipisicing elit. Consectetur<br /> Animi harum praesentium </p>
                    </div>
                    <div className="about-box">
                        <div className="about-box-svg">
                        <svg style={{width:'25px',marginTop:'9px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                        </div>
                        <p className="header-text about-text">Benefit Three</p>
                        <p className="header-text">Lorem ipsum dolor sit amet <br /> adipisicing elit. Consectetur<br /> Animi harum praesentium </p>
                    </div>
                    <div className="about-box">
                       <div className="about-box-svg">
                       <svg style={{width:'25px',marginTop:'9px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                       </div>
                        <p className="header-text about-text">Benefit Four</p>
                        <p className="header-text">Lorem ipsum dolor sit amet <br /> adipisicing elit. Consectetur<br /> Animi harum praesentium </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;
