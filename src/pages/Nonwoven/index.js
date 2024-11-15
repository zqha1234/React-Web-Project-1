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

const Nonwovenbags = () => {
    useEffect(() => {
        document.title = "Non woven bags";
    }, []);

    const products = [
        // ... your products array with id, name, image, and description
        {
            id: 'product1',
            name: 'Product 1',
            image: p1img1,
            description: 'Tote bag with reinforced handle to bottom',
        },
        {
            id: 'product2',
            name: 'Product 2',
            image: p2img1,
            description: 'Laminated Non-woven fashion shopping bag 110-125 gsm',
        },
        {
            id: 'product3',
            name: 'Product 3',
            image: p3img1,
            description: 'Laminated Non-woven bag 110 gsm with curved Bottom',
        },
        {
            id: 'product4',
            name: 'Product 4',
            image: p4img1,
            description: 'Laminated Non-woven bag with  2 long handles sewn from bottom',
        },
        {
            id: 'product5',
            name: 'Product 5',
            image: p5img1,
            description: 'Non-woven bag with zipper and  2 long handles sewn from bottom',
        },
        {
            id: 'product6',
            name: 'Product 6',
            image: p6img1,
            description: 'Non-woven bag with  2 long handles sewn from bottom',
        },
        {
            id: 'product7',
            name: 'Product 7',
            image: p7img1,
            description: 'T-Shirt Non-Woven PP bags',
        },
        {
            id: 'product8',
            name: 'Product 8',
            image: p8img1,
            description: 'Non-Woven PP bags with bottom without side',
        },
        {
            id: 'product9',
            name: 'Product 9',
            image: p9img1,
            description: 'Die-Cut Non-woven Bag',
        },
        {
            id: 'product10',
            name: 'Product 10',
            image: p10img1,
            description: 'Hand-Held Aluminum Foil Non-Woven Bag',
        },
        {
            id: 'product11',
            name: 'Product 11',
            image: p11img1,
            description: 'Hand-Held Aluminum Foil Non-Woven Bag',
        },
        // {
        //     id: 'product12',
        //     name: 'Product 12',
        //     image: p12img1,
        //     description: 'item description',
        // },
    ];

    return (
    <div className='nonwoven-body'>
        <Header />
        <div className='img-description'>
            <div className='bags-img-area'>
                <img src={mainpage1} alt=''></img>
            </div>
        </div>
        <div className='bags-body-nonwoven'>

            <div className='path-area'>
            <a href="/">Home</a> &gt; <span>Non-woven bags</span>
            </div>

            <div className='bags-img-bottom'>
                    <div className='bags-contents'>
                        <h3>Non Woven Bags</h3>
                        <p>
                            Non-woven bags are reusable bags that are made from recyclable and biodegradable fabric-like 
                            material polypropylene, offer a sustainable choice. Few  key advantages of non-woven bags are 
                            water-resistant, flame-resistant and air permeable, ideal for protecting contents from moisture, 
                            odors, and fire hazards. These making them an excellent choice for carrying items that may be 
                            susceptible to moisture damage, unpleasant odors and  risk of the bag catching fire.
                            <br></br>
                            <br></br>
                            Beyond their functional benefits, non-woven bags are designed with user comfort in mind. Their 
                            texture is remarkably soft and stiff, which means they feel gentle and comfortable to carry for 
                            extended periods. Their softness doesn't compromise their strength; these bags are robust and 
                            durable, capable of carrying heavy loads without the risk of tears or breaks for extended periods.
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
  
  export default Nonwovenbags