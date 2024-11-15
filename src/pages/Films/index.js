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
import p19img1 from '../../assets/p19img1.png';
import p20img1 from '../../assets/p20img1.png';
import p21img1 from '../../assets/p21img1.png';
import p22img1 from '../../assets/p22img1.png';
import p23img1 from '../../assets/p23img1.png';

const Films = () => {
    useEffect(() => {
        document.title = "Films";
    }, []);

    const products = [
        // ... your products array with id, name, image, and description
        {
            id: 'product19',
            name: 'Product 19',
            image: p19img1,
            description: 'COLORFUL SHRINK WRAP FILM',
          },
          {
              id: 'product20',
              name: 'Product 20',
              image: p20img1,
              description: 'TRANSPARENT SHRINK WRAP FILM',
          },
          {
              id: 'product21',
              name: 'Product 21',
              image: p21img1,
              description: 'FLEXOGRAPHY BOPP THERMAL MATT LAMINATION FILM',
          },
          {
              id: 'product22',
              name: 'Product 22',
              image: p22img1,
              description: 'DOUBLE-SIDED ALUMINUM ALUMINIZED FOIL PE WOVEN FABRIC',
          },
          {
              id: 'product23',
              name: 'Product 23',
              image: p23img1,
              description: 'DOUBLE-SIDED ALUMINUM ALUMINIZED FOIL PE WOVEN FABRIC',
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
        <div className='bags-body-film'>

            <div className='path-area'>
            <a href="/">Home</a> &gt; <span>Films</span>
            </div>

            <div className='bags-img-bottom'>
                <div className='bags-contents'>
                    <h3>Films</h3>
                    <p>
                        Shrink wrap film is puncture-resistant and shrinks when exposed to heat, conforming to the item being wrapped. 
                        It is commonly used to protect small packages, loaded pallets, and dry-docked boats. 
                        <br></br>
                        <br></br>
                        Aluminum foil is a thin sheet of aluminum that offers an incredible barrier against light, oxygen, and moisture, 
                        making it a perfect material for packaging sensitive food items. It's heat-resistant and can conform to any shape, 
                        which makes it an excellent option for cooking, storage, and packaging, keeping food fresh and preventing freezer burn.
                        <br></br>
                        <br></br>
                        At Haidee, we are also able to  manicuring m and extrude the various films including shrink wrap film and aluminum foil. 
                        At Haidee, both aluminum foil and shrink wrap are customizable in terms of size and thickness to meet specific packaging needs.
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
  
  export default Films