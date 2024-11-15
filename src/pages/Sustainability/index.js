import React from 'react';
import './index.css'
import Header from '../../components/header'
import { useEffect } from 'react';
import Footer from '../../components/footer';

import mission from '../../assets/mission.png'
import aboutus from '../../assets/aboutus.png'
import sus from '../../assets/sustainability.png'

const Sustainability = () => {
    useEffect(() => {
        document.title = "Sustainability";
    }, []);

    return (
    <div>
        <Header />
        <div className='sus-img-area'>
            <img src={sus} alt=''></img>
        </div>
        <div className='sus-body'>
            <div className='sus-left-right'>
                <div className='sus-left'>
                    <img src={mission} alt=''></img>
                </div>
                <div className='sus-contents'>
                    <h3>Vision</h3>
                    <p>
                        Committed to sustainability and excellence, we develop products and services that not 
                        only drive profitable growth but also foster positive economic, social, and environmental 
                        impacts.
                    </p>
                    <br></br>
                    <h3>Mission</h3>
                    <p>
                        At Haidee, we are dedicated to pioneering sustainable business practices that prioritize 
                        excellence and deliver positive economic, social, and environmental impacts. These values 
                        guide our daily work and are ingrained in everything we do and plan.
                    </p>
                    <br></br>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
    };
  
  export default Sustainability