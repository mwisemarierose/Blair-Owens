import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

export const Footer = () => {
    return (
        <footer className='footer'>
        <div className='footerRight'><AiOutlineCopyrightCircle/>2023 WP Pro Real Estate 7 Premium WordPress Theme, All Rights Reserved.<span style={{color:"black",border:"none",cursor:"pointer"}}> Back to top</span></div>
            <div className='footerLinks'>
                <Link to="/properties">Our Properties</Link>
                <Link to="/mls">MLS Search</Link>
                <Link to="/contact">Communities</Link>
                <Link to="/news">News</Link>
                <Link to="/cpntact">Services</Link>
                <Link to="/contact">About Blair</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='footerLow'>
                San Diego Multiple Listing Service Inc. - Powered by RealtyWatch Solutions
            </div>
        </footer>
    )
}