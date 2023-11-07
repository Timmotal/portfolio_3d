import React from 'react';
import { TimLight } from '../assets';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="h-50 bg-red xs:pb-5 pb-10">
        <div className="w-5/6 mx-auto">
            <div className="md:flex justify-center md:justify-around text-center">
                <div className="flex justify-center items-center">
                <a href="#">
                <img className='w-24 mx-5' src={TimLight} alt='logo'/>
                </a>
                <SocialMediaIcons />
                </div>
                <p className="text-sm pt-10 text-white">Copyright © {new Date().getFullYear()} Timmortal. All Rights Reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer