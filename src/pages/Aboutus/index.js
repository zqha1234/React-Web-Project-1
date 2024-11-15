import React from 'react';
import './index.css'
import Header from '../../components/header'
import { useEffect } from 'react';
import Footer from '../../components/footer';

import mainpage3 from '../../assets/mainpage3.jpg';
import aboutus from '../../assets/aboutus.png';
import testimg1 from '../../assets/test1.png';


const Product = () => {

    useEffect(() => {
        document.title = "About Us";
    }, []);

    return (
    <div>
        <Header />
        <div className='aboutus-img-area'>
            <img src={mainpage3} alt='Cannot Load Image'></img>
        </div>
        <div className='aboutus-body'>
            <div className='aboutus-contents'>
                <h3>About Us</h3>
                <p>
                    Welcome to Anhui Haidee Packaging Technology Group! Founded in January 2002, 
                    Anhui HaiDee Packaging Technology Co., Ltd., has evolved over two decades 
                    from a modest packing enterprise into a leading provider of packaging solutions 
                    in China. With a strong reputation for professionalism, diverse product offerings, 
                    extensive industry knowledge, and competitive pricing, HaiDee Packaging has now served 
                    customers globally, including in North America, Europe, and Asia.
                </p>
                <br></br>

                <h3>History</h3>

                <div className="timeline">
                    <div className="event">
                        <div className="event-date">2002</div>
                        <div className="event-description">Established in 2002</div>
                    </div>
                    <div className="event">
                        <div className="event-date">2008</div>
                        <div className="event-description">Established in 2008</div>
                    </div>
                    <div className="event">
                        <div className="event-date">2008</div>
                        <div className="event-description">Established in 2008</div>
                    </div>
                    <div className="event">
                        <div className="event-date">2008</div>
                        <div className="event-description">Established in 2008</div>
                    </div>
                </div>

                <p>
                    Today, our state-of-the-art facilities span approximately <strong>30 acres</strong> of land,
                    boasting a total construction area of around <strong>30,000 square meters</strong>. Equipped
                    with state-of-the-art manufacturing capabilities, in-house graphics and printing
                    centers, and advanced engineering and research facility, we are fully equipped
                    to handle large-scale production orders with high-quality, customized packaging
                    solutions. We maintain an impressive annual production capacity of <strong>6.5 million</strong>
                    environmentally friendly packaging products, supported by a total investment
                    exceeding <strong>200 million yuan</strong>. Our product range has expanded significantly,
                    now encompassing environmentally friendly options such as <strong>non-woven bags</strong>,
                    <strong>vacuum composite bags</strong>, <strong>degradable bags</strong>, <strong>paper-plastic bags</strong>, 
                    <strong>stretch film</strong>, <strong>shrink film</strong>, <strong>aluminum foil film</strong>, and more.
                </p>
                <br></br>

                <h3>Vision</h3>
                <p>
                    Committed to sustainability and excellence, we develop products and services that not 
                    only drive profitable growth but also foster positive economic, social, and environmental 
                    impacts.
                </p>
                <br></br>

                <h3>Mission</h3>
                <p>
                    Our mission is to pioneer sustainable business practices that not only prioritize excellence 
                    but also drive positive economic, social, and environmental outcomes. This is incorporated  
                    in our daily works in Haidee. 
                </p>
                <br></br>
            </div>
        </div>
        <Footer />
    </div>
    )
    };
  
  export default Product