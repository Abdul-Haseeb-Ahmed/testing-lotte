"use client";
import React from 'react';
import { Download, FileText, Users, Calendar } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const ElectionOfDirectors = () => {
  const documents = [
    {
      title: "Scrutinizer Report",
      description: "Official scrutinizer report for the election of directors",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Signed-Scruitinizer-report.pdf",
      icon: "file"
    },
    {
      title: "Result Letter – Election of Directors",
      description: "Official results of the directors election process",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Election-of-Directors.pdf",
      icon: "file"
    },
    {
      title: "List of members as of 14 June 2023",
      description: "Complete list of company members (Password Protected)",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/LIST-OF-MEMBERS-PW-PROTECTED-1.pdf",
      icon: "users"
    },
    {
      title: "Notice under section 159(4) of Companies Act, 2017",
      description: "Legal notice as per Companies Act requirements",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Notice-U-S-159-final.pdf",
      icon: "file"
    },
    {
      title: "Ballot paper English",
      description: "Ballot paper for voting (English version)",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Ballot-Paper-English.pdf",
      icon: "file"
    },
    {
      title: "Ballot paper Urdu",
      description: "Ballot paper for voting (Urdu version)",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Ballot-Paper-Urdu.pdf",
      icon: "file"
    },
    {
      title: "Profile of the Candidates for election of directors",
      description: "Detailed profiles and qualifications of all candidates",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Profiles.pdf",
      icon: "users"
    }
  ];

  const eogmDocuments = [
    {
      title: "Notice of EOGM",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Notice-of-EOGM.pdf"
    },
    {
      title: "Proxy Form (English)",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Form-of-Proxy-English.pdf"
    },
    {
      title: "Proxy Form (Urdu)",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Form-of-Proxy-Urdu.pdf"
    }
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'users':
        return <Users style={{ width: '24px', height: '24px', color: 'rgb(158, 235, 71)' }} />;
      default:
        return <FileText style={{ width: '24px', height: '24px', color: 'rgb(158, 235, 71)' }} />;
    }
  };

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/election-of-directors"
      section="investor"
    >
      <div className="content-box">
        <h2>Election of Directors</h2>
        
        <div className="intro-text">
          All relevant documents and information regarding the Election of Directors for Lotte Chemical Pakistan Limited are available below for download.
        </div>

        {/* Documents Section */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ 
            fontSize: '24px', 
            color: '#333', 
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '2px solid rgb(158, 235, 71)'
          }}>
            Election Documents
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
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
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(158, 235, 71, 0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    {getIcon(doc.icon)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: '16px', 
                      fontWeight: '600', 
                      color: '#333',
                      marginBottom: '5px'
                    }}>
                      {doc.title}
                    </h4>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '14px', 
                      color: '#666',
                      lineHeight: '1.5'
                    }}>
                      {doc.description}
                    </p>
                  </div>
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgb(158, 235, 71)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }}>
                  <Download style={{ width: '20px', height: '20px', color: '#fff' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* EOGM Notice Section */}
        <div style={{ 
          marginTop: '50px',
          background: 'linear-gradient(135deg, rgba(158, 235, 71, 0.05) 0%, rgba(158, 235, 71, 0.02) 100%)',
          border: '2px solid rgba(158, 235, 71, 0.3)',
          borderRadius: '8px',
          padding: '30px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(158, 235, 71, 0.3)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgb(158, 235, 71)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(158, 235, 71, 0.3)'
            }}>
              <Calendar style={{ width: '24px', height: '24px', color: '#fff' }} />
            </div>
            <div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '22px', 
                color: '#333',
                fontWeight: '600'
              }}>
                Notice of EOGM 22-Jun-2023
              </h3>
              <p style={{ 
                margin: '5px 0 0 0', 
                fontSize: '14px', 
                color: '#666' 
              }}>
                Extraordinary General Meeting
              </p>
            </div>
          </div>

          <p className="body-text" style={{ marginBottom: '20px' }}>
            An Extraordinary General Meeting of LOTTE Chemical Pakistan Limited will be held on Thursday, 22 June 2023 at 10:00 AM at the Institute of Chartered Accountants of Pakistan (ICAP) auditorium.
          </p>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px',
            marginTop: '25px'
          }}>
            {eogmDocuments.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 20px',
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
                <Download style={{ width: '16px', height: '16px' }} />
                {doc.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ElectionOfDirectors;