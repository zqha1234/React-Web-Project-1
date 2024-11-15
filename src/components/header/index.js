import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import logo from '../../assets/logo.png'

const Header = () => {
    const searchInputRef = useRef(null);
    const navigate = useNavigate();  // Add this line to use the navigate function
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    
    const handleSearch = () => {
        // 获取搜索框输入的值
        const searchTerm = searchInputRef.current.value;
        if (searchTerm.trim() === "") {
            return;
        }

        // 这里可以执行搜索逻辑，比如过滤内容等
        console.log('Searching for:', searchTerm);
        // filterContent(searchTerm);
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    const filterContent = (searchTerm) => {
        const elements = document.getElementsByClassName('searchable-content');
        Array.from(elements).forEach((element) => {
            if (element.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    };

    return (
        <div className='header'>
            <div className='hd-nav'>
                <a href='/'>
                    <div className='nav-left'>
                        <img src={logo} alt="Logo" style={{ width: '58px' }} />
                        <span className='logo-title'>Haidee</span>
                    </div>
                </a>
                <ul className='nav-mid'>
                    {/* <li className='dropdown'><a href='/products' className='entry-title'> */}
                    <li className='dropdown'><a className='entry-title'>
                        <span>
                            Products
                            <svg focusable="false" className="icon-arrow-bottom" viewBox="0 0 12 8" role="presentation">
                            <path stroke="currentColor" strokeWidth="2" d="M1 1l5 5 5-5" fill="none" strokeLinecap="square"></path>
                            </svg>
                        </span></a>
                        <div className='dropdown-content'>
                            <a href='/nonwovenbags'>Non-woven bags</a>
                            <a href='/biodegradablebags'>Bio-degradable bags</a>
                            <a href='/vacuumtriplelayersbags'>Vacuum triple layers bags</a>
                            <a href='/films'>Films</a>
                        </div>
                    </li>
                    <li><a href='/capabilities' className='entry-title'><span>Capabilities & Service</span></a></li>
                    <li><a href='/aboutus' className='entry-title'><span>About Us</span></a></li>
                    <li><a href='/sustainability' className='entry-title'><span>Sustainability</span></a></li>
                    <li><a href='/contactus' className='entry-title'><span>Contact Us</span></a></li>
                </ul>
                <div className='search-container'>
                    <div className='search-content'>
                        <input type='text' ref={searchInputRef} className='nav-search-input' placeholder="Search" onKeyDown={handleKeyDown}></input>
                    </div>
                    <div className='nav-search-button' onClick={handleSearch}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z" fill="currentColor"></path></svg>
                    </div>
                </div>
                {/* <div className='header-language'>
                    <label htmlFor='langs'>Language: </label>
                    <select id='langs'>
                        <option value='english'>English</option>
                        <option value='english'>简体中文</option>
                    </select>
                </div> */}
            </div>
        </div>
    )
}

export default Header