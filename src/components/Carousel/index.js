import React, { useEffect, useRef, useState  } from 'react';
import Slider from 'react-slick';

import './index.css'; 

const ImageCarousel = ({ images }) => {
  // console.log("Received images:", images);  // Debug: Log received images
  const nav1 = useRef(null);
  const nav2 = useRef(null);

  const [key, setKey] = useState(0);  // Used to force re-render

  useEffect(() => {
    // This timeout ensures any asynchronous issues with ref setting are bypassed
    setTimeout(() => setKey(prevKey => prevKey + 1), 1);
  }, []);

  return (
    <div>
      <Slider className='big-img' 
        asNavFor={nav2.current} 
        ref={nav1}
        infinite={false}
        arrows={false}>
        {images.map((image, idx) => (
          <div key={idx}>
            <img src={image} alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
      {/* <Slider className='thumbnail-slider'
        asNavFor={nav1.current}
        ref={nav2}
        slidesToShow={images.length}
        slidesToScroll={1}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={images.length > 5}
        infinite={images.length > 5}
        arrows={images.length > 5}>
        {images.map((image, idx) => (
          <div key={idx}>
            <img src={image} alt={`Thumbnail ${idx}`} />
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default ImageCarousel;
