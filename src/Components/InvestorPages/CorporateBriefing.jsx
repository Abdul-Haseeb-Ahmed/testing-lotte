"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Corporate() {
  const archivedSessions = [
    { date: "21 November 2023", url: "https://www.lottechem.pk/wp-content/uploads/2023/11/Presentation-PSX.pdf" },
    { date: "16 November 2022", url: "https://www.lottechem.pk/wp-content/uploads/2022/12/CBS-prsentation-2022.pdf" },
    { date: "11 November 2021", url: "https://www.lottechem.pk/wp-content/uploads/2022/12/CBS-presentation-2021.pdf" },
    { date: "12 November 2020", url: "https://www.lottechem.pk/wp-content/uploads/2022/12/CBS-presentation-2020.pdf" },
    { date: "21 November 2019", url: "https://www.lottechem.pk/wp-content/uploads/2022/12/CBS-presentation-2019.pdf" }
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/corporate-briefing"
      section="investor"
    >
      <div className="content-box">
        <h2>Corporate Briefing Session</h2>
        
        <p className="body-text">
          The company holds annual Corporate Briefing Session (CBS) for shareholders and analysts, to provide information about the Company's historic performance, its financial and future prospects.
        </p>

        <div className="management-section">
          <h3>Corporate Briefing Session 2024</h3>
          
          <p className="body-text">
            The company's Annual Corporate Briefing Session (CBS) is scheduled for 05 December 2024. Click the link below to access the presentation.
          </p>

          <div style={{ 
            marginTop: '30px',
            padding: '30px',
            background: 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)',
            borderRadius: '8px',
            textAlign: 'center',
            border: '2px solid rgb(158, 235, 71)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
            <h4 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>
              Corporate Briefing Session 2024
            </h4>
            <a 
              href="https://www.lottechem.pk/wp-content/uploads/2024/12/2024-CBS-Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'rgb(158, 235, 71)',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgb(142, 211, 63)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgb(158, 235, 71)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              View Presentation →
            </a>
          </div>
        </div>

        <div className="management-section">
          <h3>Archived Corporate Briefing Sessions</h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginTop: '20px'
          }}>
            {archivedSessions.map((session, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 25px',
                  background: '#f9f9f9',
                  borderRadius: '6px',
                  borderLeft: '3px solid #999',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f0f0f0';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f9f9f9';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span style={{ 
                  fontSize: '15px', 
                  color: '#333',
                  fontWeight: '500' 
                }}>
                  Held on {session.date}
                </span>
                <a 
                  href={session.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#999',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#666';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  View Presentation →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Last Updated */}
        <div className="last-updated">
          <p>Last Updated on December 2, 2024</p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Corporate