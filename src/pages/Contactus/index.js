import React from 'react';
import './index.css';
import Header from '../../components/header';
import ContactForm from '../../components/contactform';
import { useEffect } from 'react';
import Footer from '../../components/footer';

import map from '../../assets/map.png';
import aboutus from '../../assets/aboutus.png';

const Contactus = () => {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
    <div>
        <Header />
        <div className='contact-img-area'>
            <img src={aboutus} alt=''></img>
        </div>
        <div className='contact-body'>
            <div className='contact-left-right'>
                {/* <div className='sus-left'>
                    <img src={mission} alt=''></img>
                </div> */}
                <div className='contact-contents'>
                    <h3>Contact Us</h3>
                    <div className='map-contact'>
                        <div className='map'>
                            <img src={map} alt='map'></img>
                        </div>
                        <div className='contact-info'>
                            <div className='info-title'>
                                <p><strong>Address:</strong> </p>
                                <br></br>
                                <p><strong>Postal code:</strong> </p>
                                <p><strong>Fax:</strong> </p>
                                <p><strong>Phone:</strong> </p>
                                <p><strong>Website:</strong> </p>
                                <p><strong>Email:</strong> </p>
                                <p><strong>Wechat:</strong> </p>
                            </div>
                            <div className='info'>
                                <p> Shuang Xin Industrial Park, Wei Road and Jingshi Road, Tongcheng City, Anqing City, Anhui Province. China.</p>
                                <p> 231480</p>
                                <p> 0556-6860199</p>
                                <p> 13909660590, 18005560323</p>
                                <p> <a href="https://www.haideepackaging.com" target="_blank" rel="noopener noreferrer">www.haideepackaging.com</a></p>
                                <p> <a href="mailto:734867924@qq.com">734867924@qq.com</a></p>
                                <p> 13909660590</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
        <ContactForm></ContactForm>
        <Footer />
    </div>
    )
    };
  
  export default Contactus