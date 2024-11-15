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
import p15img1 from '../../assets/p15img1.png';
import p16img1 from '../../assets/p16img1.png';
import p17img1 from '../../assets/p17img1.png';
import p18img1 from '../../assets/p18img1.png';

const Vacuumbags = () => {
    useEffect(() => {
        document.title = "Vacuum triple layers bags";
    }, []);

    const products = [
        // ... your products array with id, name, image, and description
        {
            id: 'product15',
            name: 'Product 15',
            image: p15img1,
            description: 'Vacuum STAND-UP BARRIER POUCHES',
          },
          {
              id: 'product16',
              name: 'Product 16',
              image: p16img1,
              description: 'PA/PE Clear /Black Vacuum Bag',
          },
          {
            id: 'product17',
            name: 'Product 17',
            image: p17img1,
            description: 'Vacuum Stand-up pounch BAGS',
          },
          {
              id: 'product18',
              name: 'Product 18',
              image: p18img1,
              description: 'Vacuum bags',
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
        <div className='bags-body-vacuum'>

            <div className='path-area'>
            <a href="/">Home</a> &gt; <span>Vacuum triple layers bags</span>
            </div>

            <div className='bags-img-bottom'>
                <div className='bags-contents'>
                    <h3>Vacuum triple layers Bags</h3>
                    <p>
                        A vacuum bag is a pivotal tool for preserving the integrity and extending the shelf life of food 
                        and other perishable items. By extracting the air from the bag and creating a tight seal, it minimizes 
                        exposure to oxygen, which is often the main culprit in spoiling and degradation. This method of storage 
                        is not only essential for maintaining freshness but also for safeguarding the taste and nutritional value 
                        of food. 
                        <br></br>
                        <br></br>
                        The vacuum bag also an efficient solution for space-saving and can reduce the risk of cross-contamination 
                        among products. At Haidee, we offer customization in the size and sealing options of our vacuum bags, ensuring 
                        they can be tailored to meet the specific needs of any item you wish to preserve, whether for individual households 
                        or commercial packaging needs.
                        <br></br>
                        <br></br>
                        At Haidee, we are bale to customize size, vacuum sealing needs,  and logos or branding for businesses to distribute 
                        at trade shows or events, ensuring that the brand is effectively promoted and associated with environmental 
                        responsibility.
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
  
  export default Vacuumbags