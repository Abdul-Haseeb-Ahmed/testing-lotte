'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [isChanging, setIsChanging] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if we're in the middle of a language change
    const isChangingLang = sessionStorage.getItem('isChangingLanguage');
    
    if (isChangingLang === 'true') {
      // Show loading screen during reload and HIDE content
      setIsChanging(true);
      setShowContent(false);
    }

    // Get saved language BEFORE anything loads
    const savedLocale = localStorage.getItem('locale') || 'en';
    setLocale(savedLocale);
    
    // Set cookie IMMEDIATELY before Google Translate loads
    if (savedLocale !== 'en') {
      setGoogleTranslateCookie(savedLocale);
    }
    
    // Small delay to ensure cookie is set
    setTimeout(() => {
      loadGoogleTranslate();
    }, 100);

    // Wait for translation to complete, then hide loading screen
    if (isChangingLang === 'true') {
      let checkCount = 0;
      const maxChecks = 30; // 3 seconds max
      
      const checkTranslation = setInterval(() => {
        checkCount++;
        
        // For English, no translation needed
        if (savedLocale === 'en') {
          clearInterval(checkTranslation);
          sessionStorage.removeItem('isChangingLanguage');
          setIsChanging(false);
          setShowContent(true);
          return;
        }
        
        // Check if Google Translate has finished by looking for translated elements
        const translatedElements = document.querySelectorAll('font[style]');
        const bodyHasLang = document.body.classList.contains('translated-ltr') || 
                           document.body.classList.contains('translated-rtl');
        
        if (translatedElements.length > 5 || bodyHasLang) {
          clearInterval(checkTranslation);
          // Extra small delay to ensure all elements are translated
          setTimeout(() => {
            sessionStorage.removeItem('isChangingLanguage');
            setIsChanging(false);
            setShowContent(true);
          }, 200);
        }
        
        // Fallback: hide loading after max checks
        if (checkCount >= maxChecks) {
          clearInterval(checkTranslation);
          sessionStorage.removeItem('isChangingLanguage');
          setIsChanging(false);
          setShowContent(true);
        }
      }, 100);

      return () => clearInterval(checkTranslation);
    } else {
      // Normal page load (no language change)
      setShowContent(true);
    }
  }, []);

  const setGoogleTranslateCookie = (lang) => {
    const currentLang = localStorage.getItem('locale') || 'en';

    document.cookie = 'googtrans=; path=/; max-age=0';
    document.cookie = 'googtrans=; path=/; domain=.' + window.location.hostname + '; max-age=0';

    const cookieValue = `/${currentLang}/${lang}`;
    document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000; SameSite=Lax`;

    console.log('Cookie set to:', cookieValue);
  };

  const loadGoogleTranslate = () => {
    // Define initialization function
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ur,ko',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Add script only once
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    }
  };

  const changeLanguage = (newLocale) => {
    if (newLocale === locale || isChanging) {
      return;
    }

    console.log(`Changing language from ${locale} to ${newLocale}`);
    
    // IMMEDIATELY hide content with CSS - no waiting for React state
    const contentDiv = document.getElementById('app-content');
    if (contentDiv) {
      contentDiv.style.visibility = 'hidden';
      contentDiv.style.opacity = '0';
    }
    
    // Show loading screen immediately
    setIsChanging(true);
    setShowContent(false);

    // Save to localStorage
    localStorage.setItem('locale', newLocale);
    
    // Set flag in sessionStorage to show loading after reload
    sessionStorage.setItem('isChangingLanguage', 'true');

    // Apply RTL immediately for Urdu
    document.documentElement.dir = newLocale === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;

    if (newLocale === 'en') {
      // Clear cookies for English
      document.cookie = 'googtrans=; path=/; max-age=0';
      document.cookie = 'googtrans=; path=/; domain=.' + window.location.hostname + '; max-age=0';
    } else {
      // Set cookie for other languages
      setGoogleTranslateCookie(newLocale);
    }

    // Reload immediately
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, isChanging }}>
      {/* Loading screen - always on top when active */}
      {isChanging && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#6398FF',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>Changing language...</div>
          {/* Loading spinner */}
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e0e0e0',
            borderTop: '4px solid #6398FF',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }} />
        </div>
      )}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {/* Content - only show when ready */}
      <div 
        id="app-content"
        style={{ 
          visibility: showContent ? 'visible' : 'hidden',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};