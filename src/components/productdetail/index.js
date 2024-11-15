import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ContactForm from '../../components/contactform';
import ImageCarousel from '../../components/Carousel';
import './index.css'; 
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import testimg1 from '../../assets/test1.png'; // Assuming this is your placeholder image
import aboutus from '../../assets/aboutus.png'
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

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // window.onload = function() {
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Product Detail";
    const productDetails = allProducts.find((p) => p.id === productId);
    // console.log("Product Details Loaded:", productDetails); // Debug: Check loaded product details
    setProduct(productDetails);
  }, [productId]);

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

  // Corrected allProducts array with a proper structure
  const allProducts = [
    {
      id: 'product1',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Laminated Non-woven bag',
      description: 'Tote bag with reinforced handle to bottom',
      Material: '80 gsm PP nonwoven fabric + Matte/Glossy OPP Lamination',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p1img1],
      Usage: 'For shopping, advertising, packing',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product2',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Laminated Non-woven fashion shopping bag 110-125 gsm',
      Material: '80 gsm non-woven fabric with 30 gsm polypropylene lamination',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p2img1],
      Usage: 'For shopping, advertising, packing',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product3',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Laminated Non-woven bag 110 gsm with curved Bottom',
      Material: '80 gsm non-woven fabric with 30 gsm polypropylene lamination',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p3img1],
      Usage: 'For shopping, advertising, packing, Reusable, Eco-friendly',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product4',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Laminated Non-woven bag with  2 long handles sewn from bottom',
      Material: 'Non-woven fabric with polypropylene lamination',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p4img1],
      Usage: 'For daily grocery shopping.',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product5',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Non-woven bag with zipper and  2 long handles sewn from bottom',
      Material: '80 g-180 gsm PP nonwoven',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p5img1],
      Usage: 'For shopping, giveaways, trade shows',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product6',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Non-woven bag with  2 long handles sewn from bottom',
      Material: '80 - 180 gsm PP nonwoven',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p6img1],
      Usage: 'For shopping, advertising, packing',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product7',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'T-Shirt Non-Woven PP bags',
      Material: '70-180 GSM PP Non-woven fabric',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p7img1],
      Usage: 'For shopping, advertising, packing',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product8',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Non-Woven PP bags with bottom without side',
      Material: '70-180 GSM Non-Woven PP',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p8img1],
      Usage: 'For shopping, advertising, packing',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product9',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Die-Cut Non-woven Bag',
      Material: '70-180 GSM Non-Woven PP',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p9img1],
      Usage: 'For shopping, advertising, packing',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product10',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Material: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p10img1],
      Usage: 'For take-out  food & wine cold & hot insulation',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product11',
      web: 'nonwovenbags',
      type: 'Non-woven bag',
      name: 'Non-woven bag',
      description: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Material: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p11img1],
      Usage: 'For take-out  food & wine cold & hot insulation',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product12',
      web: 'biodegradablebags',
      type: 'Bio-degradable bag',
      name: 'Bio-degradable bag',
      description: 'Biodegradable T-Shirt Bags Recyclable',
      Material: 'PLA',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p12img1],
      Usage: 'For shopping and grocery',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product13',
      web: 'biodegradablebags',
      type: 'Bio-degradable bag',
      name: 'Bio-degradable bag',
      description: 'Biodegradable Carrier Bags',
      Material: 'PLA',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p13img1],
      Usage: 'For shopping and grocery',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product14',
      web: 'biodegradablebags',
      type: 'Bio-degradable bag',
      name: 'Bio-degradable bag',
      description: 'Biodegradable Carrier Bags',
      Material: 'PLA',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p14img1],
      Usage: 'For shopping and grocery',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product15',
      web: 'vacuumtriplelayersbags',
      type: 'Vacuum triple layers bag',
      name: 'Vacuum triple layers bag',
      description: 'Vacuum STAND-UP BARRIER POUCHES',
      Material: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p15img1],
      Usage: 'For food storage',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product16',
      web: 'vacuumtriplelayersbags',
      type: 'Vacuum triple layers bag',
      name: 'Vacuum triple layers bag',
      description: 'PA/PE Clear /Black Vacuum Bag',
      Material: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p16img1],
      Usage: 'For food storage',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product17',
      web: 'vacuumtriplelayersbags',
      type: 'Vacuum triple layers bag',
      name: 'Vacuum triple layers bag',
      description: 'Vacuum Stand-up pounch BAGS',
      Material: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Size: 'Customizable',
      Color: 'Customizable',
      Waterproof: 'Waterproof',
      imageUrl: [p17img1],
      Usage: 'For food storage',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product18',
      web: 'vacuumtriplelayersbags',
      type: 'Vacuum triple layers bag',
      name: 'Vacuum triple layers bag',
      description: 'Vacuum bags',
      Material: 'Hand-Held Aluminum Foil Non-Woven Bag',
      Size: 'Customizable',
      Color: 'Transparent',
      Waterproof: 'Waterproof',
      imageUrl: [p18img1],
      Usage: 'For food storage',
      Logoprinting: 'With Logo',
      Certification: 'BSCI or ISO   ISO 9001: 2008 SGS',
      Loadbearing: '50lbs',
      MQQ: '3000 pieces',
      OEMOED: 'Accept',
      Specification: '2/3 Side Seal',
    },
    {
      id: 'product19',
      web: 'films',
      type: 'films',
      name: 'films',
      description: 'COLORFUL SHRINK WRAP FILM',
      Material: '100% Virgin LLDPE',
      Size: 'Customizable',
      Color: 'Transparent',
      Waterproof: 'Waterproof',
      imageUrl: [p19img1],
      Usage: 'Packaging Film',
      Logoprinting: '',
      Certification: 'ISO9001:2008 + SGS1 + MSDS',
      Loadbearing: '200N/25mm',
      MQQ: '2000 square meters',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product20',
      web: 'films',
      type: 'films',
      name: 'films',
      description: 'TRANSPARENT SHRINK WRAP FILM',
      Material: '100% Virgin LLDPE',
      Size: 'Customizable',
      Color: 'Transparent',
      Waterproof: 'Waterproof',
      imageUrl: [p20img1],
      Usage: 'Packaging Film',
      Logoprinting: '',
      Certification: 'ISO9001:2008 + SGS1 + MSDS',
      Loadbearing: '200N/25mm',
      MQQ: '2000 square meters',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product21',
      web: 'films',
      type: 'films',
      name: 'films',
      description: 'FLEXOGRAPHY BOPP THERMAL MATT LAMINATION FILM',
      Material: 'PE/VMPET/BOPP',
      Size: 'Customizable',
      Color: 'Transparent',
      Waterproof: 'Waterproof',
      imageUrl: [p21img1],
      Usage: 'Packaging Film',
      Logoprinting: '',
      Certification: 'ISO9001:2008 + SGS1 + MSDS',
      Loadbearing: '200N/25mm',
      MQQ: '2000 square meters',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product22',
      web: 'films',
      type: 'films',
      name: 'films',
      description: 'DOUBLE-SIDED ALUMINUM ALUMINIZED FOIL PE WOVEN FABRIC',
      Material: 'Aluminum foil',
      Size: 'Customizable',
      Color: 'Silver',
      Waterproof: 'Waterproof',
      imageUrl: [p21img1],
      Usage: 'Packaging Film',
      Logoprinting: '',
      Certification: 'ISO9001:2008 + SGS1 + MSDS',
      Loadbearing: '200N/25mm',
      MQQ: '2000 square meters',
      OEMOED: 'Accept',
      Specification: '',
    },
    {
      id: 'product23',
      web: 'films',
      type: 'films',
      name: 'films',
      description: 'DOUBLE-SIDED ALUMINUM ALUMINIZED FOIL PE WOVEN FABRIC',
      Material: 'Aluminum foil +PE+ Woven Fabric + PE',
      Size: 'Customizable',
      Color: 'Silver',
      Waterproof: 'Waterproof',
      imageUrl: [p23img1],
      Usage: 'Packaging Film',
      Logoprinting: '',
      Certification: 'ISO9001:2008 + SGS1 + MSDS',
      Loadbearing: '200N/25mm',
      MQQ: '2000 square meters',
      OEMOED: 'Accept',
      Specification: '',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 4;

  const handleNext = () => {
      if (startIndex + 4 < products.length - displayCount + 1) {
          setStartIndex(startIndex + 4);
      }
  };

  const handlePrev = () => {
      if (startIndex > 0) {
          setStartIndex(startIndex - 4);
      }
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }
  // window.location.reload();
  const productUrl = encodeURIComponent(window.location.href);
  const productTitle = encodeURIComponent(product.name);

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${productUrl}&text=${productTitle}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${productUrl}&title=${productTitle}`;

  return (
    <div>
      <Header />
      <div className='contents-product'>
        <div className='path-area-product'>
          <a href="/">Home</a> &gt; <a href={"/" + product.web}>{product.type}</a> &gt; <span>{product.name}</span>
        </div>

        <div className='product-detail'>
          <div className='img-gallery'>
            <ImageCarousel images={product.imageUrl} />
          </div>

          <div className='product-info'>
            <div className='prod-table-header'>
              <div className='pro-desc'><strong>{product.description} </strong></div>
            </div>
            <table className='table-pro-info'>
              <tbody>
                {/* <tr>
                  <th><strong>{product.name}: </strong></th>
                  <td><strong>{product.description} </strong></td>
                </tr> */}
                <tr>
                  <th>Material: </th>
                  <td>{product.Material}</td>
                </tr>
                <tr>
                  <th>Size: </th>
                  <td>{product.Size}</td>
                </tr>
                <tr>
                  <th>Color: </th>
                  <td>{product.Color}</td>
                </tr>
                <tr>
                  <th>Waterproof: </th>
                  <td>{product.Waterproof}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='social-content'>
          <div className="social-share">
            <span>Share to </span>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
              <FacebookIcon size={32} round />
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
              <TwitterIcon size={32} round />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
              <LinkedinIcon size={32} round />
            </a>
          </div>
        </div>

        <div className='additional-info'>
          <div className="product-details-table">
            <h2>Additional information</h2>
            <table>
              <tbody>
                <tr>
                  <th>Usage</th>
                  <td>{product.Usage}</td>
                  <th>Load bearing</th>
                  <td>{product.Loadbearing}</td>
                </tr>
                <tr>
                  <th>Logo printing</th>
                  <td>{product.Logoprinting}</td>
                  <th>MOQ</th>
                  <td>{product.MQQ}</td>
                </tr>
                <tr>
                  <th>Sample</th>
                  <td>{product.sample}</td>
                  <th>OEM or OED</th>
                  <td>{product.OEMOED}</td>
                </tr>
                <tr>
                  <th>Certification</th>
                  <td>{product.Certification}</td>
                  <th>Specification</th>
                  <td>{product.Specification}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='also-like'>
          <h1>You May Also Like</h1>
          <div className='also-like-layout'>
            {/* <button onClick={handlePrev} disabled={startIndex === 0}>Left</button> */}
            <button onClick={handlePrev} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="40" height="40" style={{ fontSize: '40px'}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L11.83 12z"/>
              </svg>
            </button>
            <div className='also-like-display'>
              {products.slice(startIndex, startIndex + displayCount).map(product => (
                  <div key={product.id} className='items-'>
                      <Link to={`/nonwovenbags/${product.id}`}>
                          <div className='img-box-'>
                              <img className='item-img-' src={product.image} alt={product.name} />
                          </div>
                          {/* <p className='item-name-'>{product.name}</p> */}
                          <p className='item-desc-p'>{product.description}</p>
                      </Link>
                  </div>
              ))}
            </div>
            {/* <button onClick={handleNext} disabled={startIndex + displayCount >= products.length}>Right</button> */}
            <button onClick={handleNext} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="40" height="40" style={{ fontSize: '40px'}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
        </div>

        <ContactForm></ContactForm>

      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
