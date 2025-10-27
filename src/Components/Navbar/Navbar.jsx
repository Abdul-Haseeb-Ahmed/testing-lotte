'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/Contexts/LanguageContext';
import './Navbar.css';
import { images } from '../CloudinaryImagesUrl/ImagesUrl';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const { locale, changeLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (dropdownName) => {
    if (window.innerWidth > 840) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 840) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (dropdownName) => {
    if (window.innerWidth <= 840) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );

  const DropdownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  );

  return (
    <div className="header-container">
      <div className="top-header">
        <img 
          src={images.lotteLogo} 
          alt="Lotte Logo" 
          className="logo"
          onClick={() => handleNavigation('/')}
          style={{ cursor: 'pointer' }}
        />
        <div className="search-section">
          <div className="search-box">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "active" : "hide-mobile-menu"}>
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('company')}>
              COMPANY <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'company' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/about-lcpl')}>About LCPL</a>
              <a onClick={() => handleNavigation('/vision')}>Vision, Mission & Values</a>
              <a onClick={() => handleNavigation('/culture')}>Culture</a>
              <a onClick={() => handleNavigation('/lcpl-history')}>LCPL History</a>
              <a onClick={() => handleNavigation('/lotte-global')}>LOTTE Global</a>
              <a onClick={() => handleNavigation('/lotte-group-vision')}>LOTTE Group Vision</a>
              <a onClick={() => handleNavigation('/charlottes-story')}>Charlotte's Story</a>
            </div>
          </li>

          <li className="dropdown" onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('product')}>
              PRODUCT <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'product' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/pta')}>PTA</a>
              <a onClick={() => handleNavigation('/process-technology')}>Process / Technology</a>
              <a onClick={() => handleNavigation('/specification')}>Specification</a>
              <a onClick={() => handleNavigation('/customer-satisfaction')}>Customer Satisfaction</a>
            </div>
          </li>

          <li className="dropdown" onMouseEnter={() => handleMouseEnter('investors')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('investors')}>
              INVESTORS <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'investors' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/investor-information')}>Investor Information</a>
              <a onClick={() => handleNavigation('/financial-documents')}>Financial Documents</a>
              <a onClick={() => handleNavigation('/board-of-director')}>Board of Directors</a>
              <a onClick={() => handleNavigation('/corporate-governance')}>Corporate Governance</a>
              <a onClick={() => handleNavigation('/corporate-briefing')}>Corporate Briefing</a>
              <a onClick={() => handleNavigation('/share-holding')}>Share-Holding</a>
              <a onClick={() => handleNavigation('/financial-highlights')}>Financial Highlights</a>
              <a onClick={() => handleNavigation('/notifications')}>Notifications</a>
              <a onClick={() => handleNavigation('/investor-feedback')}>Investor Feedback</a>
              <a onClick={() => handleNavigation('/free-float')}>Free Float</a>
              <a onClick={() => handleNavigation('/gender-pay-gap')}>Gender Pay Gap</a>
              <a onClick={() => handleNavigation('/election-of-directors')}>Election of Directors</a>
              <a onClick={() => handleNavigation('/unclaimed-dividend')}>Unclaimed Dividend & Shares</a>
              <a onClick={() => handleNavigation('/dividend-withheld')}>Dividend Withheld</a>
              <a onClick={() => handleNavigation('/request-form')}>Standard Request Forms</a>
            </div>
          </li>

          <li className="dropdown" onMouseEnter={() => handleMouseEnter('career')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('career')}>
              CAREER <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'career' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/growth')}>Career Growth with LCPL</a>
              <a onClick={() => handleNavigation('/recrutiment')}>Recrutiment</a>
              <a onClick={() => handleNavigation('/equal-opportunity')}>Equal Opportunity</a>
              <a onClick={() => handleNavigation('/training-development')}>Training & Development</a>
              <a onClick={() => handleNavigation('/technical-training')}>Technical Training Center</a>
              <a onClick={() => handleNavigation('/current-vacancies')}>Current Vacancies</a>
              <a onClick={() => handleNavigation('/support')}>Career Support for Para Professional</a>
            </div>
          </li>

          <li className="dropdown" onMouseEnter={() => handleMouseEnter('news')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('news')}>
              NEWS <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'news' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/newsletter')}>Newsletter</a>
            </div>
          </li>

          <li className="dropdown" onMouseEnter={() => handleMouseEnter('csr')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('csr')}>
              CSR <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'csr' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/csr-in-focus')}>CSR In Focus</a>
              <a onClick={() => handleNavigation('/community')}>Community</a>
              <a onClick={() => handleNavigation('/education')}>Education</a>
              <a onClick={() => handleNavigation('/health')}>Health</a>
              <a onClick={() => handleNavigation('/environment')}>Environment</a>
              <a href="https://foundation.lotteppta.com/" target="_blank" rel="noopener noreferrer">
                LOTTE Pakistan Foundation
              </a>
            </div>
          </li>

          <li className="dropdown" onMouseEnter={() => handleMouseEnter('hse')} onMouseLeave={handleMouseLeave}>
            <span className="nav-item" onClick={() => handleDropdownClick('hse')}>
              HSE <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'hse' ? 'show' : ''}`}>
              <a onClick={() => handleNavigation('/hse-in-focus')}>HSE In Focus</a>
              <a onClick={() => handleNavigation('/health-safety')}>Health & Safety</a>
              <a onClick={() => handleNavigation('/hse-environment')}>Environment</a>
              <a onClick={() => handleNavigation('/policies')}>Policies</a>
            </div>
          </li>

          {/* Language Switcher */}
          <li 
            className="dropdown" 
            onMouseEnter={() => handleMouseEnter('language')} 
            onMouseLeave={handleMouseLeave}
          >
            <span 
              className="nav-item" 
              onClick={() => handleDropdownClick('language')}
            >
              Language ({locale.toUpperCase()}) <DropdownIcon />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'language' ? 'show' : ''}`}>
              <a 
                onClick={() => {
                  console.log('English clicked');
                  changeLanguage('en');
                  setMenuOpen(false);
                  setActiveDropdown(null);
                }} 
                className={locale === 'en' ? 'active-lang' : ''}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: locale === 'en' ? '#f0f0f0' : 'transparent',
                  fontWeight: locale === 'en' ? 'bold' : 'normal'
                }}
              >
                🇬🇧 English
              </a>
              <a 
                onClick={() => {
                  console.log('Korean clicked');
                  changeLanguage('ko');
                  setMenuOpen(false);
                  setActiveDropdown(null);
                }} 
                className={locale === 'ko' ? 'active-lang' : ''}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: locale === 'ko' ? '#f0f0f0' : 'transparent',
                  fontWeight: locale === 'ko' ? 'bold' : 'normal'
                }}
              >
                🇰🇷 한국어 (Korean)
              </a>
              <a 
                onClick={() => {
                  console.log('Urdu clicked');
                  changeLanguage('ur');
                  setMenuOpen(false);
                  setActiveDropdown(null);
                }} 
                className={locale === 'ur' ? 'active-lang' : ''}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: locale === 'ur' ? '#f0f0f0' : 'transparent',
                  fontWeight: locale === 'ur' ? 'bold' : 'normal'
                }}
              >
                🇵🇰 اردو (Urdu)
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar