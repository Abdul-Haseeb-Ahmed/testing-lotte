"use client";
import React, { useState } from 'react';
import { Send, User, Mail, Phone, FileText, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

const InvestorFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Updated Web3Forms configuration
  const WEB3FORMS_ACCESS_KEY = "65c0be3c-519a-456e-9655-a89b1f310a97";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'Lotte Chemical - Investor Feedback');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 7000);
      } else {
        setSubmitError(result.message || 'Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Network error. Please check your connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/investor-feedback"
      section="investor"
    >
      <div className="content-box">
        <h2>Investor Feedback</h2>
        
        <div className="intro-text">
          Please direct all enquiries/complaints to Mr. Waseem Ahmed Siddiqui, Manager Shares & Secretarial, using the form provided below. Required fields are marked with an asterisk.
        </div>

        {/* Contact Information Cards */}
        <div className="grid-2col" style={{ marginTop: '30px', marginBottom: '40px' }}>
          <div className="grid-item" style={{ 
            background: 'linear-gradient(135deg, rgba(158, 235, 71, 0.1) 0%, rgba(158, 235, 71, 0.05) 100%)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(158, 235, 71, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <h4>Contact Person</h4>
            <p style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>Mr. Waseem Ahmed Siddiqui</p>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>Manager Shares & Secretarial</p>
          </div>

          <div className="grid-item" style={{ 
            background: 'linear-gradient(135deg, rgba(158, 235, 71, 0.1) 0%, rgba(158, 235, 71, 0.05) 100%)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(158, 235, 71, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <p style={{ fontSize: '14px', color: '#666' }}>
              <strong>Email:</strong> waseem.siddiqui@lottechem.pk
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
              <strong>Contact Info:</strong><br /> Tel: +92 21 111 568 782 <br /> Fax: +92 21 3416 9126
            </p>
          </div>
        </div>

        {/* Feedback Form */}
        <div style={{ 
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '40px',
          marginTop: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, rgb(158, 235, 71) 0%, rgb(148, 225, 61) 100%)'
          }} />

          <h3 style={{ marginTop: 0, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MessageSquare style={{ width: '28px', height: '28px', color: 'rgb(158, 235, 71)' }} />
            Send Us Your Feedback
          </h3>

          {submitError && (
            <div style={{
              padding: '20px',
              background: 'rgba(255, 68, 68, 0.1)',
              border: '2px solid #ff4444',
              borderRadius: '8px',
              marginBottom: '30px',
              animation: 'slideIn 0.5s ease-out'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: '#ff4444',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>!</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#ff4444' }}>
                    Message could not be sent
                  </p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                    We're experiencing technical difficulties. Please contact us directly:
                  </p>
                  <div style={{ 
                    marginTop: '12px', 
                    padding: '12px', 
                    background: '#fff',
                    borderRadius: '6px',
                    border: '1px solid #f0f0f0'
                  }}>
                    <p style={{ margin: '0 0 6px 0', fontSize: '14px', color: '#333' }}>
                      <strong>Email:</strong> <a href="mailto:shares@lottechem.pk" style={{ color: 'rgb(158, 235, 71)', textDecoration: 'none' }}>shares@lottechem.pk</a>
                    </p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
                      <strong>Phone:</strong> <a href="tel:+922134720041" style={{ color: 'rgb(158, 235, 71)', textDecoration: 'none' }}>+92 21 34720041-6</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <style>
            {`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Full Name<span style={{ color: 'rgb(158, 235, 71)', marginLeft: '3px' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 45px',
                    fontSize: '15px',
                    color: '#333',
                    background: '#fff',
                    border: `2px solid ${errors.name ? '#ff4444' : '#e0e0e0'}`,
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgb(158, 235, 71)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(158, 235, 71, 0.1)';
                  }}
                  onBlur={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                <User style={{ 
                  width: '18px', 
                  height: '18px', 
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none'
                }} />
              </div>
              {errors.name && <span style={{ display: 'block', color: '#ff4444', fontSize: '13px', marginTop: '5px' }}>{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Email Address<span style={{ color: 'rgb(158, 235, 71)', marginLeft: '3px' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 45px',
                    fontSize: '15px',
                    color: '#333',
                    background: '#fff',
                    border: `2px solid ${errors.email ? '#ff4444' : '#e0e0e0'}`,
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgb(158, 235, 71)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(158, 235, 71, 0.1)';
                  }}
                  onBlur={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                <Mail style={{ 
                  width: '18px', 
                  height: '18px', 
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none'
                }} />
              </div>
              {errors.email && <span style={{ display: 'block', color: '#ff4444', fontSize: '13px', marginTop: '5px' }}>{errors.email}</span>}
            </div>

            {/* Phone Field */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Phone Number<span style={{ color: 'rgb(158, 235, 71)', marginLeft: '3px' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 45px',
                    fontSize: '15px',
                    color: '#333',
                    background: '#fff',
                    border: `2px solid ${errors.phone ? '#ff4444' : '#e0e0e0'}`,
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgb(158, 235, 71)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(158, 235, 71, 0.1)';
                  }}
                  onBlur={(e) => {
                    if (!errors.phone) {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                <Phone style={{ 
                  width: '18px', 
                  height: '18px', 
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none'
                }} />
              </div>
              {errors.phone && <span style={{ display: 'block', color: '#ff4444', fontSize: '13px', marginTop: '5px' }}>{errors.phone}</span>}
            </div>

            {/* Subject Field */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Subject<span style={{ color: 'rgb(158, 235, 71)', marginLeft: '3px' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Brief subject of your enquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 45px',
                    fontSize: '15px',
                    color: '#333',
                    background: '#fff',
                    border: `2px solid ${errors.subject ? '#ff4444' : '#e0e0e0'}`,
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgb(158, 235, 71)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(158, 235, 71, 0.1)';
                  }}
                  onBlur={(e) => {
                    if (!errors.subject) {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                <FileText style={{ 
                  width: '18px', 
                  height: '18px', 
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none'
                }} />
              </div>
              {errors.subject && <span style={{ display: 'block', color: '#ff4444', fontSize: '13px', marginTop: '5px' }}>{errors.subject}</span>}
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Message<span style={{ color: 'rgb(158, 235, 71)', marginLeft: '3px' }}>*</span>
              </label>
              <textarea
                name="message"
                placeholder="Please describe your enquiry or complaint in detail..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '15px',
                  color: '#333',
                  background: '#fff',
                  border: `2px solid ${errors.message ? '#ff4444' : '#e0e0e0'}`,
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  minHeight: '150px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgb(158, 235, 71)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(158, 235, 71, 0.1)';
                }}
                onBlur={(e) => {
                  if (!errors.message) {
                    e.target.style.borderColor = '#e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.message && <span style={{ display: 'block', color: '#ff4444', fontSize: '13px', marginTop: '5px' }}>{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? '#ccc' : 'rgb(158, 235, 71)',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 40px',
                border: 'none',
                borderRadius: '8px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: isSubmitting ? 'none' : '0 4px 12px rgba(158, 235, 71, 0.3)',
                opacity: isSubmitting ? 0.6 : 1,
                marginBottom: isSubmitted ? '20px' : '0'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = 'rgb(148, 225, 61)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(158, 235, 71, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = 'rgb(158, 235, 71)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.3)';
                }
              }}
            >
              <Send style={{ width: '20px', height: '20px' }} />
              {isSubmitting ? 'Sending...' : 'Submit Feedback'}
            </button>

            {/* Success Message - NOW BELOW SUBMIT BUTTON */}
            {isSubmitted && (
              <div style={{
                padding: '20px',
                background: 'rgba(158, 235, 71, 0.1)',
                border: '2px solid rgb(158, 235, 71)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                animation: 'slideIn 0.5s ease-out'
              }}>
                <CheckCircle style={{ width: '24px', height: '24px', color: 'rgb(158, 235, 71)', flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#333' }}>
                    Thank you for your feedback!
                  </p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>
                    We have received your message and will get back to you shortly.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Bottom Image */}
        <div style={{ 
          marginTop: '50px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
        >
          <UniversalImage 
            src={images.investorFeedback} 
            alt="Investor Feedback" 
            className="investorfeedback-image"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default InvestorFeedback;