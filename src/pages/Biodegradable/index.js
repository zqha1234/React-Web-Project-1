import React from 'react';
import './index.css'
import Header from '../../components/header';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

import mission from '../../assets/mission.png';
// import aboutus from '../../assets/aboutus.png';
import mainpage1 from '../../assets/mainpage1.jpg';
import testimg1 from '../../assets/test1.png';
import p1img1 from '../../assets/p1img1.png';
import p2img1 from '../../assets/p2img1.png';
import p3img1 from '../../assets/p3img1.png';
import p4img1 from '../../assets/p4img1.png';
import p5img1 from '../../assets/p5img1.png';
import p6img1 from '../../assets/p6img1.png';
import p7img1 from '../../assets/p7img1.png';
import p8img1 from '../../assets/p8img1.png';
import p9img1 from '../../assets/p9img1.png';
import p10img1 from '../../assets/p10img1.png';
import p11img1 from '../../assets/p11img1.png';
import p12img1 from '../../assets/p12img1.png';
import p13img1 from '../../assets/p13img1.png';
import p14img1 from '../../assets/p14img1.png';

const Biodegradablebags = () => {
    useEffect(() => {
        document.title = "Bio-degradable bags";
    }, []);

    const products = [
        // ... your products array with id, name, image, and description
        {
            id: 'product12',
            name: 'Product 12',
            image: p12img1,
            description: 'Biodegradable T-Shirt Bags Recyclable',
          },
          {
              id: 'product13',
              name: 'Product 13',
              image: p13img1,
              description: 'Biodegradable Carrier Bags',
          },
          {
              id: 'product14',
              name: 'Product 14',
              image: p14img1,
              description: 'Biodegradable Carrier Bags',
          },
    ];

    return (
    <div>
        <Header />
        <div className='img-description'>
            <div className='bags-img-area'>
                <img src={mainpage1} alt=''></img>
            </div>
        </div>
        <div className='bags-body-bio'>

            <div className='path-area'>
            <a href="/">Home</a> &gt; <span>Bio-degradable bags</span>
            </div>

            <div className='bags-img-bottom'>
                    <div className='bags-contents'>
                        <h3>Bio-degradable Bags</h3>
                        <p>
                            Degradable plastic bags include those that can be degraded by physical and biological factors 
                            (light or heat, or microbial action). So-called aerobic degradation (i.e., degradation accelerated 
                            by catalysts or activators at high temperatures) or photodegradable starch-polyethylene plastics 
                            can create some environmental problems.
                            <br></br>
                            <br></br>
                            Biodegradable plastic bags are those that can be fully digested by the microorganisms in the treatment 
                            system as food for energy (into the food chain). This complete microbial digestion/utilization is 
                            determined by testing whether the carbon element of the test plastic can be completely converted to 
                            CO2 through microbial processes occurring in the cells.
                            <br></br>
                            <br></br>
                            At Haidee, we are bale to customize colors, size and especially with logos or branding for businesses 
                            to distribute at trade shows or events, ensuring that the brand is effectively promoted and associated 
                            with environmental responsibility.
                        </p>
                        <br></br>
                    </div>
            </div>

            <div className='title-area'>
                <h3>Products</h3>
            </div>

            <div className='product-body'>
                <div className='product-area'>
                    {products.map((product) => (
                        <div key={product.id} className='items'>
                            <Link to={`/nonwovenbags/${product.id}`}>
                                <div className='img-box'>
                                    <img className='item-img' src={product.image} alt={product.name} />
                                </div>
                                {/* <p className='item-name'>{product.name}</p> */}
                                <p className='item-desc'>{product.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        <Footer />
    </div>
    )
    };
  
  export default Biodegradablebags