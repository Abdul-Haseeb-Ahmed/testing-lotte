"use client";
import React, { useEffect, useRef, useState } from 'react'
import './CapabilitiesSection.css'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaBuilding, FaArrowRight } from "react-icons/fa";

function ParallaxSection({ image, title, text, isContact }) {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: '', text: '' }); // Clear previous message
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '65c0be3c-519a-456e-9655-a89b1f310a97',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Form submitted successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitMessage({ type: '', text: '' });
        }, 10000);
      } else {
        setSubmitMessage({ type: 'error', text: 'Error: Form not submitted. Please try again.' });
        
        // Auto hide error message after 10 seconds
        setTimeout(() => {
          setSubmitMessage({ type: '', text: '' });
        }, 10000);
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Error: Form not submitted. Please try again.' });
      
      // Auto hide error message after 10 seconds
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 10000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const box = boxRef.current;
      if (!section || !box) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visibilityThreshold = windowHeight * 0.7;
      const isInView = rect.top < visibilityThreshold;
      
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
      
      // Smooth parallax effect on background
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrolled = (windowHeight - rect.top) / windowHeight;
        const movement = scrolled * 150;
        
        section.style.backgroundPositionY = `calc(50% + ${movement}px)`;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="capabilities-section"
      style={{ 
        backgroundImage: `url(${image})`,
        willChange: 'background-position',
        minHeight: isContact ? '900px' : '750px'
      }}
    >
      <div className="overlay"></div>
      <div 
        ref={boxRef}
        className={`sub-div ${isVisible ? 'visible' : ''} ${isContact ? 'contact-sub-div' : ''}`}
      >
        <div className="sub-div-content">
          <h2>{title}</h2>
          <p>{text}</p>
          
          {isContact && (
            <div className="contact-layout">
              {/* Contact Info */}
              <div className="contact-info-grid">
                <div className="info-card">
                  <h3><FaBuilding /> Registered Address</h3>
                  <p>
                    <strong>Plant Address</strong><br />
                    LOTTE Chemical Pakistan Ltd<br />
                    Plot No. EZ/I/P-4, Eastern Industrial Zone,<br />
                    Port Qasim Authority Bin Qasim, Karachi – 75020
                  </p>
                </div>

                <div className="info-card">
                  <h3><FaMapMarkerAlt /> City Office</h3>
                  <p>
                    Al-Tijarah Centre, 14th Floor,<br />
                    32/1-A, Main Shahrah-e-Faisal,<br />
                    Block 6, P.E.C.H.S, Karachi-75400, Pakistan
                  </p>
                </div>

                <div className="info-card">
                  <h3><FaPhone /> Telephone & UAN</h3>
                  <p>
                    <strong>Tel:</strong> +92-(0)21 3472-6005 / 3472-6010<br />
                    <strong>PABX:</strong> +92-(0)21 3416-9101-4<br />
                    <strong>UAN:</strong> +92-(0)21 111 782 111
                  </p>
                </div>

                <div className="info-card">
                  <h3><FaFax /> Fax</h3>
                  <p>
                    +92-(0)21 3472-6004<br />
                    +92-(0)21 3416-9126
                  </p>
                </div>

                <div className="info-card">
                  <h3><FaEnvelope /> Email</h3>
                  <p>
                    <a href="mailto:contact@lottechem.pk">contact@lottechem.pk</a>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name (required)</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email (required)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Message (required)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn btn">
                    SEND &nbsp; <FaArrowRight />
                  </button>

                  {/* Submit Message */}
                  {submitMessage.text && (
                    <div className={`submit-message ${submitMessage.type}`}>
                      {submitMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CapabilitiesSection() {
  return (
    <>
      <ParallaxSection
        image={images.capImage1}
        title="CAPABILITIES THAT DELIVER"
        text="The only world-class manufacturer and supplier of Purified Terephthalic Acid (PTA) in Pakistan with a capacity to deliver 500,000 tonnes of PTA every year through its state-of-the-art plant at Port Qasim, Karachi."
        isContact={false}
      />
      
      <ParallaxSection
        image={images.capImage2}
        title="EXPERIENCES THAT SHAPE US"
        text="Driven by innovation and commitment, we continue to refine our processes, expand our capabilities, and strengthen the foundations of Pakistan's industrial growth."
        isContact={false}
      />

      <ParallaxSection
        image={images.capImage3}
        title="COMMUNITIES THAT WE PROSPER WITH"
        text="About 2 decades of significant contribution to health, education and disaster relief initiatives for the communities around us. Building a better tomorrow together."
        isContact={false}
      />

      <ParallaxSection
        image={images.capImage4}
        title="PERFORMANCE THAT SPEAKS ALOUD"
        text={
          <>
          That is how it's done. <br/> Efficiency | Growth | Sustainability
          </>
        }
        isContact={false}

      />

      <ParallaxSection
        image={images.capImage5}
        title="CONNECTIONS THAT WE VALUE"
        text={
          <>
            Connect with us.<br/> Write us directly using the form below or call us on our numbers.
          </>
        }
        isContact={true}

      />
    </>
  );
}

export default CapabilitiesSection;