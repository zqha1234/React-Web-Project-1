import React from 'react';
import './index.css'
import Header from '../../components/header'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

import testimg from '../../assets/test.png'
import testimg1 from '../../assets/test1.png'

const Product = () => {
    useEffect(() => {
        document.title = "Products";
    }, []);

    const products = [
        // ... your products array with id, name, image, and description
        {
            id: 'product1',
            name: 'Product 1',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product2',
            name: 'Product 2',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product3',
            name: 'Product 3',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product4',
            name: 'Product 4',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product5',
            name: 'Product 5',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product6',
            name: 'Product 6',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product7',
            name: 'Product 7',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product8',
            name: 'Product 8',
            image: testimg1,
            description: 'item description',
        },
        {
            id: 'product9',
            name: 'Product 9',
            image: testimg1,
            description: 'item description',
        },
    ];

    return (
    <div>
        <Header />

        <div className='product-body'>
            <div className='product-area'>
                {products.map((product) => (
                    <div key={product.id} className='items'>
                        <Link to={`/product/${product.id}`}>
                            <div className='img-box'>
                                <img className='item-img' src={product.image} alt={product.name} />
                            </div>
                            <p className='item-name'>{product.name}</p>
                            <p className='item-desc'>{product.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <Footer />

    </div>
    )
    };
  
  export default Product