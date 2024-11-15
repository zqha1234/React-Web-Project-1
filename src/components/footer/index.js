import React from 'react';
// import './index.css'; 

const Footer = () => {
    return (
        <div className='footer'>
            <div style={{ textAlign: 'center', width: '100%', height: 40, marginTop: 10, marginTop: 20, marginBottom: 16, fontSize: 20}} >
                HaideePackaging © {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default Footer;