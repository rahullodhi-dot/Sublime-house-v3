import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/Logo1.png';
import FacebookIcon from '../assets/images/facebook.png';
import InstaIcon from '../assets/images/insta.png';
import EmailIcon from '../assets/images/mail2.png';
import PhoneIcon from '../assets/images/phone2.png';
import LocationIcon from '../assets/images/lc2.png';
import DarkLogo from '../assets/images/Dark-Logo.png';
import tokri from "../assets/images/tokri.png"
import Tealeaf from "../assets/images/TealLeaf.png"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF7EA] text-gray-900 border-t border-gray-200 overflow-hidden">
      <div className="mx-auto relative max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-10 xl:px-10">
        <div className='absolute left-0 opacity-10'>
          <img src={tokri} alt="" />
        </div>
         <div className='absolute right-0 -top-20 opacity-20'>
          <img src={Tealeaf} alt="" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info - Left Column */}
          <div className="space-y-4 lg:col-span-1">
            {/* Logo */}
            <Link 
              to="/" 
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="Sublime House Tea - Home"
            >
              <img 
                src={DarkLogo} 
                alt="Sublime House Tea Logo" 
                className="h-20 w-auto sm:h-24 object-contain"
              />
            </Link>

            {/* Company Description */}
            <p style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className="text-karla font-light text-[17px] leading-[30px] text-black mt-3 sm:mt-4">
              Sublime House of Tea is more than just a cup of tea, a jar of honey, or a spice. Founded in 2013, Sublime is an attempt to bring freshness, superior quality, and authenticity to our daily lives.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 font-karla font-light text-[18px] leading-[30px] text-[#1A302A] capitalize hover:bg-[#316763] hover:text-white hover:border-[#316763] transition-all active:scale-95"
             style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Locate Us
              </Link>
              <Link
                to="/products?category=gifting"
                className="flex items-center justify-center gap-2 font-karla font-light text-[18px] leading-[30px] text-[#1A302A] capitalize hover:bg-[#316763] hover:text-white hover:border-[#316763] transition-all active:scale-95"
             style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Gifting
              </Link>
            </div>

            {/* Horizontal Line */}
            <div className="">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 sm:gap-4">
                <a 
                  href="https://www.facebook.com/sublimehouse" 
                  aria-label="Facebook" 
                  className="transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={FacebookIcon} 
                    alt="Facebook" 
                    className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/sublimehouse" 
                  aria-label="Instagram" 
                  className="transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={InstaIcon} 
                    alt="Instagram" 
                    className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Discover Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '22px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-lora font-semibold text-base leading-[30px] text-[#316763] uppercase tracking-wide">DISCOVER</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/faq" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  FAQ
                </Link>
              </li>
              <li style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/about" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  About US
                </Link>
              </li>
              <li style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                <Link  style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}to="/legal/disclaimer" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/blogs" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Blog
                </Link>
              </li>
              <li style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/contact" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '22px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-lora font-semibold text-base leading-[30px] text-[#316763] uppercase tracking-wide">HELP CENTER</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/returns" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Return &amp; Refund
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/privacy-policy" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Privacy &amp; Policy
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/terms-of-service" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/brochure" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Brochure
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/tracking" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '22px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-lora font-semibold text-base leading-[30px] text-[#316763] uppercase tracking-wide">ADDRESS</h4>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <img 
                  src={LocationIcon} 
                  alt="Location" 
                  className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 flex-shrink-0 object-contain"
                />
                <p style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,
                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-karla font-light text-[17px] leading-[30px] text-black">Prestige Falcon Towers, 19, Brunton Road, Bengaluru 560025</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src={PhoneIcon} 
                  alt="Phone" 
                  className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 object-contain"
                />
                <a style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} href="tel:08069496126" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors">
                  +91 9035827204
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src={EmailIcon} 
                  alt="Email" 
                  className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 object-contain"
                />
                <a  style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}href="mailto:mohammed.maqsood@sublime.in" className="text-karla font-light text-[17px] leading-[30px] text-black hover:text-[#316763] transition-colors break-all">
                mohammed.maqsood@sublime.in
                </a>
              </div>
            </div>
          </div>
        </div>

{/* #FFFEF1 */}
        {/* Bottom Copyright Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-[#316763] pt-4 sm:pt-6">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <p style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-karla font-light text-[17px] leading-[30px] text-black text-center">© {currentYear} Sublime House of Tea | All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Red Circular */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 bg-[#9a7522] text-white rounded-full shadow-lg hover:bg-[#b83d3d] transition-all hover:scale-110 active:scale-95 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
