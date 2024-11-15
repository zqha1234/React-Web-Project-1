import React from 'react';
import './index.css';
import Header from '../../components/header';
import { useEffect } from 'react';
import Footer from '../../components/footer';

import testimg from '../../assets/test.png';
import testimg1 from '../../assets/test1.png';
import capimg1 from '../../assets/cap-img1.png';
import capimg2 from '../../assets/cap-img2.png';
import capimg3 from '../../assets/cap-img3.png';


const Capabilities = () => {

    window.onload = function() {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        document.title = "Capabilities & Service";
    }, []);

    return (
    <div>
        <Header />

        <div className='cap-img-area'>
            <img src={capimg1} alt=''></img>
        </div>

        <div className='capabilities-body'>
            <div className='contents-pics'>
                <div className='cap-contents'>
                    <h3>Manufacturing and Technical Service</h3>
                    <p>
                        Haidee's state-of-the-art, integrated manufacturing capabilities generate some of the most 
                        technologically advanced materials and products in the marketplace. Our manufacturing capabilities 
                        include:
                    </p>

                    <ul>
                        <li>Extrusion</li>
                        <li>Laminations and Coatings</li>
                        <li>Pouch</li>
                    </ul>

                    <br></br>
                    <h3>Graphics and Printing</h3>
                    <p>
                        Haidee’s highly skilled in-house graphics and printing centers work closely with customers to 
                        create unique package designs.  Our core print capabilities include:
                    </p>
                    <ul>
                        <li>High Definition (HD) Flexographic Printing</li>
                        <li>Photo-quality graphics</li>
                        <li>Rotogravure Printing</li>
                        <li>Photopolymer Plate Making</li>
                        <li>Expanded Gamut</li>
                        <li>Reverse Printing</li>
                        <li>Printing up to 12 colors</li>
                    </ul>
                    <br></br>
                    {/* <h3>Customerization</h3>
                    <p>description!</p>
                    <br></br> */}
                </div>

                <div className='pics-area'>
                    <img src={capimg2} alt=''></img>
                    <img src={capimg3} alt=''></img>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
    )
    };
  
  export default Capabilities