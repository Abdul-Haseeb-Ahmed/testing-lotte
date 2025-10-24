"use client";
import React from 'react';
import { Download } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const StandardRequestForms = () => {
  const forms = [
    {
      name: "Solemn Affirmation for Zakat Exemption",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/03/Solemn-Affirmation-for-Zakat-Exemption.pdf"
    },
    {
      name: "Electronic Credit Bank Mandate Form",
      url: "https://www.lottechem.pk/wp-content/uploads/2025/03/Electronic-Credit-Bank-Mandate-Form.pdf"
    },
    {
      name: "Request for Audited Financial Statements in Hard Form",
      url: "https://www.lottechem.pk/wp-content/uploads/2025/03/Consent-for-Hard-Copy.pdf"
    },
    {
      name:  "Video Conference Facility Consent Form",
      url: "https://www.lottechem.pk/wp-content/uploads/2025/03/Video-Conference-request-form.pdf"
    }
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/request-form"
      section="investor"
    >
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>Standard Request Forms – Downloads</h2>
        
        <div style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
          Download standard request forms for various shareholder services.
        </div>

        {/* Forms List */}
        <div style={{ marginTop: '40px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px' 
          }}>
            {forms.map((form, index) => (
              <a
                key={index}
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 25px',
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgb(158, 235, 71)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    boxShadow: '0 2px 4px rgba(158, 235, 71, 0.3)'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: '17px', 
                      fontWeight: '600', 
                      color: '#333'
                    }}>
                      {form.name}
                    </h4>
                  </div>
                </div>
                
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: 'rgba(158, 235, 71, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <Download style={{ 
                    width: '22px', 
                    height: '22px', 
                    color: 'rgb(158, 235, 71)'
                  }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default StandardRequestForms;