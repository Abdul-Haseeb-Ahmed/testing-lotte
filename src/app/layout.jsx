'use client';
import { useEffect } from 'react';
import './globals.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { LanguageProvider } from '../Contexts/LanguageContext';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Inject style to hide all Google Translate UI
    const style = document.createElement('style');
    style.id = 'google-translate-styles';
    style.innerHTML = `
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate,
      .skiptranslate,
      #goog-gt-tt,
      .goog-te-balloon-frame,
      .goog-te-menu-frame,
      .goog-tooltip,
      div#goog-gt-,
      div#goog-gt-tt,
      #google_translate_element,
      .goog-te-gadget,
      .goog-te-gadget-simple,
      .goog-te-menu-value span,
      .goog-te-menu-value span:hover,
      .goog-text-highlight {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      /* Hide any icon near Lotte logo or anywhere */
      .goog-te-gadget-icon,
      iframe[id^=":"],
      .goog-te-gadget img,
      .goog-logo-link {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
        height: 0 !important;
      }

      body, body.translated-ltr, body.translated-rtl {
        top: 0 !important;
        position: static !important;
        margin-top: 0 !important;
      }

      #google_translate_element {
        position: absolute !important;
        left: -99999px !important;
        width: 0 !important;
        height: 0 !important;
        opacity: 0 !important;
        overflow: hidden !important;
      }

      font, font[style] {
        font-family: inherit !important;
        font-size: inherit !important;
        color: inherit !important;
        background: transparent !important;
      }

      .goog-text-highlight {
        background-color: transparent !important;
        box-shadow: none !important;
      }

      [dir="rtl"] {
        text-align: right;
        direction: rtl;
      }

      [dir="rtl"] .navbar ul {
        flex-direction: row-reverse;
      }

      [dir="rtl"] .dropdown-content {
        right: 0;
        left: auto;
      }

      .goog-te-balloon-frame {
        display: none !important;
      }
    `;

    const existingStyle = document.getElementById('google-translate-styles');
    if (existingStyle) existingStyle.remove();
    document.head.appendChild(style);

    // MutationObserver to hide dynamic elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (
              node.classList?.contains('goog-te-banner-frame') ||
              node.classList?.contains('skiptranslate') ||
              node.id?.includes('goog-gt-') ||
              node.classList?.contains('goog-te-balloon-frame')
            ) {
              node.style.display = 'none';
              node.style.visibility = 'hidden';
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {/* Hidden Google Translate Element */}
          <div id="google_translate_element" style={{ display: 'none' }} aria-hidden="true" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
