import React from 'react';
import './index.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import ContactForm from '../../components/contactform';

import testimg from '../../assets/test.png';
import testimg1 from '../../assets/test1.png';
import aboutus from '../../assets/aboutus.png';
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
import mainpage1 from '../../assets/mainpage1.jpg';
import mainpage2 from '../../assets/mainpage2.jpg';
import mainpage3 from '../../assets/mainpage3.jpg';
import mainaboutus1 from '../../assets/mainpage-aboutus1.jpg';
import mainaboutus2 from '../../assets/mainpage-aboutus2.jpg';
import mainaboutus3 from '../../assets/mainpage-aboutus3.jpg';
import companyVideo from '../../assets/company.mp4';


const Mainpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
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

    const imageData = [
        { id: 1, src: mainpage1, alt: 'Image 1' },
        { id: 2, src: mainpage2, alt: 'Image 2' },
        { id: 3, src: mainpage3, alt: 'Image 3' },
        // { id: 4, src: aboutus, alt: 'Image 4' }
        // add more images
    ];

    const imageDataAboutus = [
        { id: 1, src: mainaboutus1, alt: 'Image 1' },
        { id: 2, src: mainaboutus2, alt: 'Image 2' },
        { id: 3, src: mainaboutus3, alt: 'Image 3' },
        // { id: 4, src: aboutus, alt: 'Image 4' }
        // add more images
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % imageData.length; // 循环到第一个
        setCurrentIndex(nextIndex);
    };

    const goToPrev = () => {
        const prevIndex = (currentIndex - 1 + imageData.length) % imageData.length; // 循环到最后一个
        setCurrentIndex(prevIndex);
    };

    const goToNext_ = () => {
        const nextIndex = (currentIndex + 1) % imageDataAboutus.length; // 循环到第一个
        setCurrentIndex(nextIndex);
    };

    const goToPrev_ = () => {
        const prevIndex = (currentIndex - 1 + imageDataAboutus.length) % imageDataAboutus.length; // 循环到最后一个
        setCurrentIndex(prevIndex);
    };

    const [startIndex, setStartIndex] = useState(0);
    const displayCount = 8;

    const handlePrev_mainpage = () => {
        if (startIndex > 4) {
            setStartIndex(startIndex - 4);
        } else {
            setStartIndex(0);
        }
    };

    const handleNext_mainpage = () => {
        if (startIndex + 4 < products.length - displayCount + 1) {
            setStartIndex(startIndex + 4);
        } else {
            setStartIndex(products.length - 4);
        }
    };
      
    // interval
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext(); 
            goToNext_();
        }, 5000); // unit: ms

        // clear interval
        return () => clearInterval(interval);
    }, [currentIndex]); 

    return (
    <div className='layout-body'>
        <Header />
        <div className='main-area'>
            <div className='carousel-area'>
                <img src={imageData[currentIndex].src} alt={imageData[currentIndex].alt} />
                <div className='tools'>
                    <ul>
                        {/* <button onClick={goToPrev}>
                            <svg style={{ transform: "rotate(180deg)" }} viewBox="0 0 1024 1024">
                                <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="145.067" stroke="currentColor" d="m341.333 170.667 341.334 341.332-341.334 341.335"></path>
                            </svg>
                        </button> */}
                        {imageData.map((image, index) => (
                            <li key={image.id} className={index === currentIndex ? 'active' : ''} onClick={() => setCurrentIndex(index)} style={{ cursor: 'pointer' }}>
                            <a href="#" onClick={(e) => e.preventDefault()}></a>
                            </li>
                        ))}
                        {/* <button onClick={goToNext}>
                            <svg viewBox="0 0 1024 1024">
                                <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="145.067" stroke="currentColor" d="m341.333 170.667 341.334 341.332-341.334 341.335"></path>
                            </svg>
                        </button> */}
                    </ul>

                    <div className='buttons'>
                        <button onClick={goToPrev}>
                            <svg style={{ transform: "rotate(180deg)" }} viewBox="0 0 1024 1024">
                                <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="145.067" stroke="currentColor" d="m341.333 170.667 341.334 341.332-341.334 341.335"></path>
                            </svg>
                        </button>
                        <button onClick={goToNext}>
                            <svg viewBox="0 0 1024 1024">
                                <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="145.067" stroke="currentColor" d="m341.333 170.667 341.334 341.332-341.334 341.335"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='video-area'>
                <h2 className='company-video'>
                    Company Video
                </h2>
                <ReactPlayer
                    url={companyVideo}
                    controls={true}
                    width="900px"
                    // height="240px"
                />
            </div>
            <div className='products'>
                <h2 className='product-header'>Products</h2>
                <div className='product-catalog'>
                    <span>Product Catalog: </span>
                    <div className='catalog-list'>
                        <a href="/nonwovenbags"><p>Non-woven bags</p></a>
                        <a href="/biodegradablebags"><p>Bio-degradable bags</p></a>
                        <a href="/vacuumtriplelayersbags"><p>Vacuum triple layers bags</p></a>
                        <a href="/films"><p>Films</p></a>
                    </div>
                </div>
                <div className='products-area'>
                    <button onClick={handlePrev_mainpage} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <svg width="40" height="40" style={{ fontSize: '40px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L11.83 12z"/>
                        </svg>
                    </button>
                    {products.slice(startIndex, startIndex + displayCount).map(product => (
                        <div key={product.id} className='items-mp'>
                            <Link to={`/nonwovenbags/${product.id}`}>
                                <div className='img-box-mp'>
                                    <img className='item-img-mp' src={product.image} alt={product.name} />
                                </div>
                                {/* <p className='item-name-mp'>{product.name}</p> */}
                                <p className='item-desc-mp'>{product.description}</p>
                            </Link>
                        </div>
                    ))}
                    <button onClick={handleNext_mainpage} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <svg width="40" height="40" style={{ fontSize: '40px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='mainpage-aboutus'>
                <div className='mainpage-aboutus-title'>
                    <h2>About Us</h2>
                </div>
                <div className='aboutus-img-mainpage'>
                    <div className='aboutus-text-area'>
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
                    </div>
                    <div className='aboutus-img-area-mainpage'>
                        {/* <img className='aboutus-img-mainpage' src={mainaboutus1} alt='Cannot Load Image' /> */}
                        <div className='carousel-area-aboutus'>
                            <img src={imageDataAboutus[currentIndex].src} alt={imageDataAboutus[currentIndex].alt} />
                            <div className='tools-aboutus'>
                                <ul>
                                {imageDataAboutus.map((image, index) => (
                                    <li key={image.id} className={index === currentIndex ? 'active' : ''} onClick={() => setCurrentIndex(index)} style={{ cursor: 'pointer' }}>
                                    <a href="#" onClick={(e) => e.preventDefault()}></a>
                                    </li>
                                ))}
                                </ul>

                                <div className='buttons_aboutus'>
                                    <button onClick={goToPrev_}>
                                        <svg style={{ transform: "rotate(180deg)" }} viewBox="0 0 1024 1024">
                                            <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="145.067" stroke="currentColor" d="m341.333 170.667 341.334 341.332-341.334 341.335"></path>
                                        </svg>
                                    </button>
                                    <button onClick={goToNext_}>
                                        <svg viewBox="0 0 1024 1024">
                                            <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="145.067" stroke="currentColor" d="m341.333 170.667 341.334 341.332-341.334 341.335"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='aboutus-pic-area'>
                <div className='aboutus-pic-area-left'>
                    
                </div>
                <div className='aboutus-pic-area-right'>

                </div>
            </div> */}
            <ContactForm></ContactForm>
        </div>
        <Footer />
    </div>
    )
    };
  
  export default Mainpage