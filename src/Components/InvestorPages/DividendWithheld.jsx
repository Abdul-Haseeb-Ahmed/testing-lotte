"use client";
import React from 'react';
import { Download } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const DividendWithheld = () => {
  const dividends = [
    { 
       number: 14,
      year: "2023", 
      date: "March 15, 2024",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/05/Withheld-List-Dividend-D-14-website.pdf" 
    },
    { 
      number: 13, 
      year: "2022", 
      date: "March 10, 2023",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/04/4-Withheld-file-for-Website-D-" 
    },
    { 
      number: 12, 
      year: "2021", 
      date: "March 12, 2022",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/04/Withheld-list-D-12.pdf" 
    },
    { 
      number: 11, 
      year: "2020", 
      date: "March 08, 2021",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/04/Withheld-file-for-Website-D-11.pdf" 
    },
    { 
      number: 10, 
      year: "2019", 
      date: "March 15, 2020",
      url: "https://www.lottechem.pk/wp-content/uploads/2022/08/Withheld-file-Dividend-2022-D-10.pdf" 
    },
    { 
      number: 9, 
      year: "2018", 
      date: "March 20, 2019",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/04/Withheld-file-D-9.pdf" 
    },
    { 
      number: 8, 
      year: "2017", 
      date: "March 18, 2018",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/05/Withheld-file-2020-Dividend-D-8.pdf" 
    },
    { 
      number: 7, 
      year: "2016", 
      date: "March 22, 2017",
      url: "https://www.lottechem.pk/wp-content/uploads/2019/12/With-Held-D7-Nov-2019.pdf" 
    },
    { 
      number: 6, 
      year: "2015", 
      date: "March 25, 2016",
      url: "https://www.lottechem.pk/wp-content/uploads/2018/12/Withhold-Dividend-File-D-6.pdf" 
    },
    { 
      number: 5, 
      year: "2014", 
      date: "March 28, 2015",
      url: "https://lottechem.pk/resource/Dividend%20Withheld%20File%20Non%20Mandate%20_%20CNIC.pdf" 
    }
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/dividend-withheld"
      section="investor"
    >
      <div className="content-box">
        <h2>Dividend Withheld</h2>
        
        <div className="intro-text">
          List of dividends that have been withheld by Lotte Chemical Pakistan Limited. Click on any dividend to view details and download related documents.
        </div>

        {/* Dividends List */}
        <div style={{ marginTop: '40px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px' 
          }}>
            {dividends.map((dividend, index) => (
              <a
                key={index}
                href={dividend.url}
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
                  color: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgb(158, 235, 71)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>
                    {dividend.number}
                  </div>
                  <div>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: '16px', 
                      fontWeight: '600', 
                      color: '#333'
                    }}>
                      Dividend No: {dividend.number} - {dividend.year}
                    </h4>
                    <p style={{ 
                      margin: '5px 0 0 0', 
                      fontSize: '14px', 
                      color: '#666'
                    }}>
                      Withheld on {dividend.date}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(158, 235, 71, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <Download style={{ 
                    width: '20px', 
                    height: '20px', 
                    color: 'rgb(158, 235, 71)',
                    transition: 'all 0.3s ease'
                  }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="last-updated">
          <p>Last Updated on March 16, 2024</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default DividendWithheld;