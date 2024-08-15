import React from 'react';
import { Link } from "react-router-dom"; 
import { FaEnvelope, FaWhatsapp, FaHome, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section id='contact-section' className="w-4/5 p-4 mx-auto mt-5 bg-white rounded-lg shadow-md">
        <h2 className='text-2xl  text-center pb-5'>Contact us</h2>
        <div className='flex justify-center items-center space-x-8'>
          <a href="mailto: bharathjbiet10@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="mail">
            <FaEnvelope className="text-1xl" />
          </a>
          <a href="https://wa.me/918639954433" target="_blank" rel="noopener noreferrer" aria-label="whatsapp">
            <FaWhatsapp className="text-1xl" />
          </a>
          <a href="https://maps.app.goo.gl/TrRqjH5Ky23T8aBc7" target="_blank" rel="noopener noreferrer" aria-label="address">
            <FaHome className="text-1xl" />
          </a>    
        </div> 
      </section>

      <section id="footer" className="w-4/5 p-4 mx-auto mt-5 mb-5 bg-white text-black rounded-lg shadow-md">
        <h2 className='text-2xl text-center pb-5'>Connect with me</h2>
        <div className='flex justify-center items-center space-x-8'>
          <a href="https://twitter.com/Bharathtwt1?t=LWGqlQmRF9NzBRojKtGSxw&s=08" target="_blank" rel="noopener noreferrer" aria-label="twitter">
            <FaTwitter className="text-1xl text-black" />
          </a>
          <a href="https://www.linkedin.com/in/bharath-k-6436a11b2" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
            <FaLinkedin className="text-1xl text-black" />
          </a>
          <a href="https://www.instagram.com/bharathk_ig/" target="_blank" rel="noopener noreferrer" aria-label="instagram">
            <FaInstagram className="text-1xl " />
          </a>
          <a href="mailto: bharathjbiet10@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="mail">
            <FaEnvelope className="text-1xl " />
          </a>
        </div>
      </section>

      <div className='text-center mb-5'>
        <Link to="/Termsandconditions" className='text-black no-underline mx-2'>Terms and Conditions</Link>
        <Link to="/PrivacyPolicy" className='text-black no-underline mx-2'>Privacy Policy</Link>
        <Link to="/Aboutus" className='text-black no-underline mx-2'>About Us</Link>
      </div>

      <div className="text-center mt-5">
        © 2024 | DEVELOPED BY: 
        <a href="https://www.instagram.com/bharathk_ig/" className='text-black no-underline ml-2'>Bharath</a>
      </div>
    </>
  )
}

export default Footer;
