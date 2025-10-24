"use client";
import React, { useState } from 'react';
import { Download, DollarSign, FileText, Archive, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const UnclaimedDividend = () => {
  const [showArchive, setShowArchive] = useState(false);

  const currentDocuments = [
    {
      year: "2024",
      title: "List of Unclaimed Dividend / Shares as of December 31 2024",
      description: "Complete list of unclaimed dividends and shares for the year 2024",
      url: "https://www.lottechem.pk/wp-content/uploads/2025/03/List-of-Unclaimed_Unpaid-dividend-and-Shares-2024.pdf",
      isLatest: true
    },
    {
      year: "2023",
      title: "List of Unclaimed Dividend / Shares as of December 31 2023",
      description: "Complete list of unclaimed dividends and shares for the year 2023",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/01/Unclaimed_unpaid-dividen-and-share-detail-2023.pdf",
      isLatest: false
    }
  ];

  const archivedDocuments = [
    {
      year: "2022",
      title: "List of Unclaimed Dividend / Shares as of December 31, 2022",
      description: "Complete list of unclaimed dividends and shares for the year 2022",
      url: "https://www.lottechem.pk/wp-content/uploads/2023/01/Unclaimed-Divid-and-Share-System-Report-31-12-2022-1.pdf"
    },
    {
      year: "2022",
      title: "Unclaimed Dividend / Shares up to 2022",
      description: "Cumulative list of unclaimed dividends and shares up to April 30, 2022",
      url: "https://www.lottechem.pk/wp-content/uploads/2022/05/List-of-Unclaimed-D-6-As-at-30-Apr-2022.pdf"
    },
    {
      year: "2021",
      title: "Unclaimed Dividend / Shares up to 2021",
      description: "Complete list of unclaimed dividends and shares up to December 2021",
      url: "https://www.lottechem.pk/wp-content/uploads/2022/02/Report-Dec-2021.pdf"
    },
    {
      year: "2020",
      title: "Unclaimed Dividend / Shares up to 2020",
      description: "Data for unclaimed dividend and shares for the year 2020",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/03/Data-for-Unclaimed-Dividend-and-Sahres-2020.pdf"
    },
    {
      year: "2019",
      title: "Unclaimed Dividend / Shares up to 2019",
      description: "Data for annual return - unclaimed dividends and shares 2019",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/03/Data-for-Annual-Return-2019.pdf"
    },
    {
      year: "2018",
      title: "Unclaimed Dividend / Shares up to 2018",
      description: "Data for annual return - unclaimed dividends and shares 2018",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/03/Data-for-Annual-Return-2018.pdf"
    },
    {
      year: "2018",
      title: "Unclaimed Dividend 2018 – Dividend No. 6",
      description: "List of unclaimed dividend No. 6 as at April 30, 2022",
      url: "https://www.lottechem.pk/wp-content/uploads/2022/05/List-of-Unclaimed-D-6-As-at-30-Apr-2022.pdf"
    },
    {
      year: "2017",
      title: "Unclaimed Dividend 2017 – Dividend No. 5",
      description: "List of unclaimed dividend No. 5 for the year 2017",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/10/D5-Unclaimed-Devidend-2017.pdf"
    },
    {
      year: "2011",
      title: "Unclaimed Dividend 2011 – Dividend No. 4",
      description: "List of unclaimed dividend No. 4 for the year 2011",
      url: "https://www.lottechem.pk/resource/D4%20Unclaim%20Dividend%202011.pdf"
    },
    {
      year: "2010",
      title: "Unclaimed Dividend 2010 – Dividend No. 3",
      description: "List of unclaimed dividend No. 3 for the year 2010",
      url: "https://www.lottechem.pk/resource/D3%20Unclaim%20Dividend%202010.pdf"
    },
    {
      year: "2009",
      title: "Unclaimed Dividend 2009 – Dividend No. 2",
      description: "List of unclaimed dividend No. 2 for the year 2009",
      url: "https://www.lottechem.pk/resource/D2%20Unclaim%20Dividend%202009.pdf"
    },
    {
      year: "2005",
      title: "Unclaimed Dividend 2005 – Dividend No. 1",
      description: "List of unclaimed dividend No. 1 for the year 2005",
      url: "https://www.lottechem.pk/resource/D1%20Unclaim%20Dividend%202005.pdf"
    }
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/unclaimed-dividend"
      section="investor"
    >
      <div className="content-box">
        <h2>Unclaimed Dividend & Shares</h2>
        
        <div className="intro-text">
          View and download the list of unclaimed dividends and shares. Shareholders are encouraged to claim their dividends and shares as per the Companies Act, 2017.
        </div>

        {/* Current Lists Section */}
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
            Current List of Unclaimed Dividend / Shares
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {currentDocuments.map((doc, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {doc.isLatest && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    padding: '5px 12px',
                    background: 'rgb(158, 235, 71)',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: '600',
                    borderRadius: '20px',
                    boxShadow: '0 2px 8px rgba(158, 235, 71, 0.3)'
                  }}>
                    Latest
                  </div>
                )}

                <div style={{ padding: '25px 30px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, rgb(158, 235, 71) 0%, rgb(148, 225, 61) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(158, 235, 71, 0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      <span style={{ 
                        fontSize: '24px', 
                        fontWeight: '700',
                        color: '#fff',
                        lineHeight: '1'
                      }}>
                        {doc.year}
                      </span>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: '500',
                        color: '#fff',
                        marginTop: '3px'
                      }}>
                        Year
                      </span>
                    </div>

                    <div style={{ flex: 1, paddingRight: doc.isLatest ? '80px' : '0' }}>
                      <h4 style={{ 
                        margin: '0 0 10px 0', 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#333',
                        lineHeight: '1.4'
                      }}>
                        {doc.title}
                      </h4>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '14px', 
                        color: '#666',
                        lineHeight: '1.6'
                      }}>
                        {doc.description}
                      </p>

                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginTop: '15px',
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
                        <Download style={{ width: '16px', height: '16px' }} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Section - Expandable */}
        <div style={{ 
          marginTop: '50px',
          background: 'linear-gradient(135deg, rgba(158, 235, 71, 0.05) 0%, rgba(158, 235, 71, 0.02) 100%)',
          border: '2px solid rgba(158, 235, 71, 0.3)',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}>
          {/* Archive Header - Clickable */}
          <div 
            onClick={() => setShowArchive(!showArchive)}
            style={{
              padding: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(158, 235, 71, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
                  <Archive style={{ width: '24px', height: '24px', color: '#fff' }} />
                </div>
                <div>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '22px', 
                    color: '#333',
                    fontWeight: '600'
                  }}>
                    Archived Records ({archivedDocuments.length})
                  </h3>
                  <p style={{ 
                    margin: '5px 0 0 0', 
                    fontSize: '14px', 
                    color: '#666' 
                  }}>
                    View historical unclaimed dividend records (2005-2022)
                  </p>
                </div>
              </div>

              <div style={{
                width: '40px',
                height: '40px',
                background: showArchive ? 'rgb(158, 235, 71)' : '#fff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                border: '2px solid rgb(158, 235, 71)'
              }}>
                {showArchive ? (
                  <ChevronUp style={{ width: '24px', height: '24px', color: '#fff' }} />
                ) : (
                  <ChevronDown style={{ width: '24px', height: '24px', color: 'rgb(158, 235, 71)' }} />
                )}
              </div>
            </div>
          </div>

          {/* Archive Content - Expandable */}
          <div style={{
            maxHeight: showArchive ? '3500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            borderTop: showArchive ? '2px solid rgba(158, 235, 71, 0.3)' : 'none'
          }}>
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {archivedDocuments.map((doc, index) => (
                <div
                  key={index}
                  style={{
                    background: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '20px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.15)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #999 0%, #777 100%)',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ 
                      fontSize: '20px', 
                      fontWeight: '700',
                      color: '#fff',
                      lineHeight: '1'
                    }}>
                      {doc.year}
                    </span>
                    <span style={{ 
                      fontSize: '10px', 
                      fontWeight: '500',
                      color: '#fff',
                      marginTop: '2px'
                    }}>
                      Archive
                    </span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '16px', 
                      fontWeight: '600', 
                      color: '#333'
                    }}>
                      {doc.title}
                    </h4>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '13px', 
                      color: '#666'
                    }}>
                      {doc.description}
                    </p>
                  </div>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      background: 'rgb(158, 235, 71)',
                      color: '#fff',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgb(148, 225, 61)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgb(158, 235, 71)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <Download style={{ width: '14px', height: '14px' }} />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UnclaimedDividend;