"use client";
import React from 'react';
import { Beaker, FileText } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const Specification = () => {
  const allSpecifications = [
    {
      category: "Chemical",
      property: "Appearance",
      value: "White, free flowing crystalline powder, free from visible contamination"
    },
    {
      category: "Chemical",
      property: "Acid Number (mg KOH/g)",
      value: "675 ± 2"
    },
    {
      category: "Chemical",
      property: "4-Carboxybenzaldehyde (ppm w/w)",
      value: "Max 25"
    },
    {
      category: "Chemical",
      property: "Combined p-toluic acid & 4-Carboxybenzaldehyde (ppm w/w)",
      value: "Max 190"
    },
    {
      category: "Chemical",
      property: "Benzoic acid (ppm w/w)",
      value: "Max 30"
    },
    {
      category: "Chemical",
      property: "Al, Ca, Co, Cr, Fe, K, Mg, Mn, Na, Ni, Ti (ppm w/w)",
      value: "None greater than 1 and in total max 4"
    },
    {
      category: "Chemical",
      property: "Water (% pct w/w)",
      value: "Max 0.15"
    },
    {
      category: "Chemical",
      property: "Ash (ppm w/w)",
      value: "Max 6"
    },
    {
      category: "Chemical",
      property: "Millipore",
      value: "Min 0.90"
    },
    {
      category: "Chemical",
      property: "Appearance compared with standard",
      value: "Acceptable"
    },
    {
      category: "Chemical",
      property: "b* colour",
      value: "0.4 – 1.2"
    },
    {
      category: "Physical",
      property: "Molecular weight",
      value: "166.30"
    },
    {
      category: "Physical",
      property: "Melting Point in sealed tube (°C)",
      value: "425 (sublimation occurs above 300°C at atmospheric pressure)"
    },
    {
      category: "Physical",
      property: "Solubility",
      value: "1 part in 67,000 parts water at 10 °C. Partially soluble in dimethyl formamide and pyridine."
    },
    {
      category: "Physical",
      property: "Typical median particle size range (micron)",
      value: "130 ± 25"
    },
    {
      category: "Physical",
      property: "Typical bulk density g/ml (DIN 53194)",
      value: "1.12"
    },
    {
      category: "Physical",
      property: "Typical angle of repose (degrees) (poured)",
      value: "Poured 40"
    }
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/specification"
      section="products"
    >
      <div className="content-box">
        <h2>PTA Specifications</h2>
        
        <div className="intro-text">
          Purified Terephthalic Acid (PTA) manufactured by LOTTE Chemical Pakistan meets international quality standards and specifications.
        </div>

        <div className="body-text">
          <p>
            Our PTA product is characterized by high purity and consistent quality, making it ideal for 
            polyester production. Below are the detailed technical specifications including both chemical 
            and physical properties of our PTA product.
          </p>
        </div>

        {/* Complete Specifications Table */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ 
            fontSize: '24px', 
            color: '#333', 
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '2px solid rgb(158, 235, 71)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Beaker style={{ width: '28px', height: '28px', color: 'rgb(158, 235, 71)' }} />
            Complete Specifications & Properties
          </h3>

          <div style={{
            overflowX: 'auto',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: '#fff'
            }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, rgb(158, 235, 71) 0%, rgb(148, 225, 61) 100%)'
                }}>
                  <th style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '15px',
                    borderBottom: '2px solid rgb(148, 225, 61)',
                    width: '45%'
                  }}>
                    Property
                  </th>
                  <th style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '15px',
                    borderBottom: '2px solid rgb(148, 225, 61)',
                    width: '55%'
                  }}>
                    Specification / Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {allSpecifications.map((spec, index) => {
                  const isFirstInCategory = index === 0 || allSpecifications[index - 1].category !== spec.category;
                  
                  return (
                    <React.Fragment key={index}>
                      {isFirstInCategory && (
                        <tr style={{
                          background: 'linear-gradient(135deg, rgba(158, 235, 71, 0.15) 0%, rgba(158, 235, 71, 0.1) 100%)'
                        }}>
                          <td 
                            colSpan="2" 
                            style={{
                              padding: '12px 20px',
                              color: '#333',
                              fontSize: '15px',
                              fontWeight: '700',
                              borderTop: index !== 0 ? '2px solid rgb(158, 235, 71)' : 'none',
                              borderBottom: '1px solid rgba(158, 235, 71, 0.3)'
                            }}
                          >
                            {spec.category === 'Chemical' ? '🧪 Chemical Specifications' : '🔬 Typical Physical Properties'}
                          </td>
                        </tr>
                      )}
                      <tr 
                        style={{
                          background: index % 2 === 0 ? '#fff' : '#f9f9f9',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(158, 235, 71, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#f9f9f9';
                        }}
                      >
                        <td style={{
                          padding: '16px 20px',
                          borderBottom: '1px solid #e8e8e8',
                          color: '#333',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {spec.property}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          borderBottom: '1px solid #e8e8e8',
                          color: '#666',
                          fontSize: '14px',
                          lineHeight: '1.6'
                        }}>
                          {spec.value}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Specification;