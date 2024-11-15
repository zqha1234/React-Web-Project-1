import './index.css'
import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer';
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

function searchThroughContent(query) {
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
      description: ' Hand-Held Aluminum Foil Non-Woven Bag',
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
      description: 'PA/PE Clear /Black Vacuum Bag ',
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
  
    if (!query) return [];  // Return an empty array if query is null or undefined

    const lowerQuery = query.toLowerCase();
    const keywords = lowerQuery.split(/\s+and\s+|\s+/);

    // First, find exact matches
    const exactMatches = allProducts.filter(item =>
        item.name.toLowerCase() === lowerQuery ||
        item.description.toLowerCase() === lowerQuery
    );

    // Then, find matches for any individual keyword
    const keywordMatches = allProducts.filter(item =>
        keywords.some(keyword =>
        (item.name.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)) &&
        item.name.toLowerCase() !== lowerQuery &&
        item.description.toLowerCase() !== lowerQuery
        )
    );

    // Combine exact matches and keyword matches, ensuring no duplicates
    return [...exactMatches, ...keywordMatches.filter(item => !exactMatches.includes(item))];
  
    // return allProducts.filter(item =>
    //   item.name.toLowerCase().includes(query.toLowerCase()) ||
    //   item.description.toLowerCase().includes(query.toLowerCase())
    // );
  }
  
  

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
    const query = useQuery().get('q');
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      // Ensure query is not null or empty before searching
      if (query) {
        const searchResults = searchThroughContent(query);
        setResults(searchResults);
      } else {
        setResults([]);  // Set results to an empty array if no query is present
      }
    }, [query]);

    // Divide results into exact and keyword matches
    const exactMatches = results.filter(result => 
        result.name.toLowerCase() === query.toLowerCase() ||
        result.description.toLowerCase() === query.toLowerCase()
    );
    const keywordMatches = results.filter(result => !exactMatches.includes(result));
  
    return (
      <div>
        <Header />
        <div className='search-body'> 
          <div className="search-results-container">
          <h1>Search Results for: {query ? query : "Empty Query"}</h1>
          {exactMatches.length > 0 && (
            <div>
              {/* <h2>Exact Matches</h2> */}
              {exactMatches.map((item, index) => (
                <div key={index} className="result-item">
                  <img src={item.imageUrl[0]} alt={item.name} className="result-image" />
                  <div className="result-info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <a href={`/${item.web}/${item.id}`}>Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {keywordMatches.length > 0 && (
            <div>
              {/* <h2>Keyword Matches</h2> */}
              {keywordMatches.map((item, index) => (
                <div key={index} className="result-item">
                  <img src={item.imageUrl[0]} alt={item.name} className="result-image" />
                  <div className="result-info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <a href={`/${item.web}/${item.id}`}>Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
         <Footer />
     </div>
    );
  }
  
  export default SearchPage;