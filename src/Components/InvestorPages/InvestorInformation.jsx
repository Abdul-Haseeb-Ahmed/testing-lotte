"use client";
import React from 'react';
import { Building2, ExternalLink, TrendingUp } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const InvestorInformation = () => {
  const companyInfo = [
    {
      label: "Company Symbol in Pakistan Stock Exchange",
      value: "LOTCHEM"
    },
    {
      label: "Registration No.",
      value: "0039152"
    },
    {
      label: "NTN No.",
      value: "34-01-1279414-7"
    },
    {
      label: "Company Auditor",
      value: "A.F. Ferguson & Co., Chartered Accountant."
    },
    {
      label: "Legal Advisor",
      value: "Ms. Naz Toosy, 148, 18th East Street, Phase 1, DHA Karachi"
    },
    {
      label: "Share Registrar",
      value: "M/s. FAMCO Share Registration Services (Pvt) Ltd 8-F, Near Hotel Faran, Nursery, Block-6, P.E.C.H.S, Shahrah-e-Faisal, Karachi"
    }
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/investor-information"
      section="investor"
    >
      <div className="content-box">
        <h2>Investor Information</h2>
        
        <div className="intro-text">
          Key information for investors including company registration details, stock exchange symbol, and contact information for auditors and legal advisors.
        </div>

        <div className="body-text">
          <p>
            LOTTE Chemical Pakistan Limited is listed on the Pakistan Stock Exchange under the symbol 
            <strong> LOTCHEM</strong>. Below you will find essential company information that may be useful 
            for investors, shareholders, and other stakeholders.
          </p>
        </div>

        {/* Company Information Table */}
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
            <Building2 style={{ width: '28px', height: '28px', color: 'rgb(158, 235, 71)' }} />
            Company Details
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
                    width: '40%'
                  }}>
                    Information
                  </th>
                  <th style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '15px',
                    borderBottom: '2px solid rgb(148, 225, 61)',
                    width: '60%'
                  }}>
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {companyInfo.map((info, index) => (
                  <tr 
                    key={index}
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
                      fontWeight: '600'
                    }}>
                      {info.label}
                    </td>
                    <td style={{
                      padding: '16px 20px',
                      borderBottom: '1px solid #e8e8e8',
                      color: '#666',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {info.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Float Section */}
        <div style={{ marginTop: '50px' }}>
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
            <TrendingUp style={{ width: '28px', height: '28px', color: 'rgb(158, 235, 71)' }} />
            Free Float Information
          </h3>

          <div style={{
            padding: '25px 30px',
            background: 'linear-gradient(135deg, rgba(158, 235, 71, 0.1) 0%, rgba(158, 235, 71, 0.05) 100%)',
            border: '2px solid rgba(158, 235, 71, 0.3)',
            borderLeft: '5px solid rgb(158, 235, 71)',
            borderRadius: '8px'
          }}>
            <p style={{ 
              margin: '0 0 15px 0', 
              fontSize: '14px', 
              color: '#666',
              lineHeight: '1.7'
            }}>
              For detailed information about the free float of LOTTE Chemical Pakistan Limited shares, 
              please refer to our dedicated Free Float section or visit the Pakistan Stock Exchange website.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a
                href="/investor/free-float"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'rgb(158, 235, 71)',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(158, 235, 71, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgb(148, 225, 61)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgb(158, 235, 71)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(158, 235, 71, 0.3)';
                }}
              >
                <TrendingUp style={{ width: '16px', height: '16px' }} />
                View Free Float Details
              </a>

              <a
                href="https://www.psx.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: '#fff',
                  color: 'rgb(158, 235, 71)',
                  border: '2px solid rgb(158, 235, 71)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgb(158, 235, 71)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = 'rgb(158, 235, 71)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ExternalLink style={{ width: '16px', height: '16px' }} />
                Pakistan Stock Exchange
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default InvestorInformation;