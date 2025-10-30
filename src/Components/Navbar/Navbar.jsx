'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/Contexts/LanguageContext';
import { searchData } from '@/data/SearchData';
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
    if (window.innerWidth > 1030) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1030) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (dropdownName) => {
    if (window.innerWidth <= 1030) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  // ========== SEARCH COMPONENT WITH INDEPENDENT STATE ==========
  const SearchComponent = ({ isMobile = false }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef(null);

    // Click outside to close
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setShowSuggestions(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Search Logic
    const performSearch = (query) => {
      if (!query || query.trim() === '') return [];
      
      const searchTerm = query.toLowerCase().trim();
      
      const results = searchData
        .map(page => {
          let score = 0;
          
          if (page.title.toLowerCase().includes(searchTerm)) {
            score += 100;
          }
          
          const matchingKeywords = page.keywords.filter(keyword => 
            keyword.toLowerCase().includes(searchTerm)
          );
          score += matchingKeywords.length * 10;
          
          if (page.description.toLowerCase().includes(searchTerm)) {
            score += 5;
          }
          
          if (page.category.toLowerCase().includes(searchTerm)) {
            score += 3;
          }
          
          return { ...page, score };
        })
        .filter(page => page.score > 0)
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return a.priority - b.priority;
        })
        .slice(0, 2);
      
      return results;
    };

    const handleSearchInput = (e) => {
      const value = e.target.value;
      setSearchQuery(value);

      if (value.trim().length > 0) {
        const results = performSearch(value);
        setSearchSuggestions(results);
        setShowSuggestions(true);
      } else {
        setSearchSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        setShowSuggestions(false);
        setSearchQuery('');
        setMenuOpen(false);
      }
    };

    const handleSuggestionClick = (url) => {
      if (url.includes('#')) {
        const [path, hash] = url.split('#');
        
        if (window.location.pathname === '/' || window.location.pathname === path) {
          const element = document.getElementById(hash);
          if (element) {
            element.style.scrollMarginTop = '140px';
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        } else {
          router.push(path);
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.style.scrollMarginTop = '145px';
              element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }
          }, 500);
        }
      } else {
        router.push(url);
      }

      setSearchQuery('');
      setSearchSuggestions([]);
      setShowSuggestions(false);
      setMenuOpen(false);
    };

    return (
      <div className={`search-section ${isMobile ? 'mobile-search' : 'desktop-search'}`} ref={searchRef}>
        <form onSubmit={handleSearchSubmit} className="search-box">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
            value={searchQuery}
            onChange={handleSearchInput}
            onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
          />
          <button type="submit" className="search-btn">
            <SearchIcon />
          </button>
        </form>

        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="search-suggestions">
            {searchSuggestions.map((result) => (
              <div 
                key={result.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(result.url)}
              >
                <div className="suggestion-title">{result.title}</div>
                <div className="suggestion-category">{result.category}</div>
                <div className="suggestion-description">{result.description}</div>
              </div>
            ))}
            <div className="suggestion-footer" onClick={handleSearchSubmit}>
              View all results →
            </div>
          </div>
        )}

        {showSuggestions && searchQuery.trim() && searchSuggestions.length === 0 && (
          <div className="search-suggestions">
            <div className="no-results">No results found</div>
          </div>
        )}
      </div>
    );
  };

  // ========== ICONS ==========
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
        
        {/* Desktop Search */}
        <SearchComponent isMobile={false} />
      </div>

      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "active" : "hide-mobile-menu"}>
          {/* Mobile Search */}
          <li className="mobile-search-container">
            <SearchComponent isMobile={true} />
          </li>

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
export default Navbar;