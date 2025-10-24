"use client";
import React, { useState } from 'react'
import PageLayout from '../PageLayout/PageLayout'
import './FinancialDocuments.css'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function FinancialDocuments() {
  const [expandedYears, setExpandedYears] = useState({});

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const annualReports = [
    { year: "2024", url: "https://www.lottechem.pk/wp-content/uploads/2024/03/AR-2023-Final-22-Mar-2024.pdf" },
    { year: "2023", url: "https://www.lottechem.pk/wp-content/uploads/2023/03/Annual-Report-2022.pdf" },
    { year: "2022", url: "https://www.lottechem.pk/wp-content/uploads/2022/03/Lotte-AR-2021-Final-upload.pdf" },
    { year: "2021", url: "https://www.lottechem.pk/wp-content/uploads/2021/03/Lotte-Chemical-Annual-Report-2020.pdf" },
    { year: "2020", url: "https://www.lottechem.pk/wp-content/uploads/2020/03/Lotte-AR-2019-Final.pdf" },
    { year: "2019", url: "https://lottechem.pk/resource/Lotte%20Chemical%20AR%202018.pdf" },
    { year: "2018", url: "https://lottechem.pk/resource/Lotte%20Chemical%20AR%202017%20Final.pdf" },
    { year: "2017", url: "https://lottechem.pk/resource/LCPL%20Annual%20Report%202016.pdf" },
    { year: "2016", url: "https://www.lottechem.pk/resource/LOTTE-AR2015.pdf" },
    { year: "2015", url: "https://www.lottechem.pk/resource/LOTTE-AR2014.pdf" },
    { year: "2014", url: "https://www.lottechem.pk/resource/LotteAR-2013.pdf" },
    { year: "2013", url: "https://lottechem.pk/resource/LotteAR-2012.pdf" },
    { year: "2012", url: "#" }, // Add actual URL
  ];

  const archivedAnnualReports = [
    { year: "2011", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2010.pdf" },
    { year: "2010", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2009.pdf" },
    { year: "2009", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2008.pdf" },
    { year: "2008", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2007.pdf" },
    { year: "2007", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2006.pdf" },
    { year: "2006", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2005.pdf" },
    { year: "2005", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/annualreport_2004.pdf" },
    { year: "2004", url: "#" },
  ];

  const quarterlyReports = {
    2025: [
      { title: "Q1 Report Jan-Mar", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" }
    ],
    2024: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2023: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2022: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2021: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2020: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2019: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2018: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2017: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2016: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2015: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2014: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2013: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2012: [
      { title: "Q3 Report Jul-Sep", url: "#" },
      { title: "Half Yearly Report Ended June", url: "#" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ]
  };

  const archivedQuarterlyReports = {
    2011: [
      { title: "Q3 Report Jul-Sep", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/lotte_30jun_2011.pdf" },
      { title: "Half Yearly Report Ended June", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/lqr_30mar_2011.pdf" },
      { title: "Q1 Report Jan-Mar", url: "#" }
    ],
    2010: [
      { title: "Q3 Report Jul-Sep", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/lqr_30sept_2010.pdf" },
      { title: "Half Yearly Report Ended June", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/lqr_30jun_2010.pdf" },
      { title: "Q1 Report Jan-Mar", url: "https://www.lottechem.pk/wp-content/uploads/2022/04/lqr_30mar_2010.pdf" }
    ]
  };

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/financial-documents"
      section="investor"
    >
      <div className="content-box">
        <h2>Financial Documents</h2>
        
        {/* Annual Reports Section */}
        <div className="management-section">
          <h3>Annual Reports</h3>
          
          <div className="financial-grid">
            {annualReports.map((report, index) => (
              <div key={index} className="financial-card">
                <div className="financial-icon">📊</div>
                <h4>Annual Report {report.year}</h4>
                <a 
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="financial-btn"
                >
                  Preview / Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Archived Annual Reports */}
        <div className="management-section">
          <h3 style={{ color: 'rgb(158, 235, 71)', marginBottom: '20px' }}>Archived Annual Reports</h3>
          
          <div className="financial-grid">
            {archivedAnnualReports.map((report, index) => (
              <div key={index} className="financial-card archived-card">
                <div className="financial-icon">📁</div>
                <h4>Annual Report {report.year}</h4>
                <a 
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="financial-btn"
                >
                  Preview / Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quarterly Reports Section */}
        <div className="management-section">
          <h3>Quarterly Reports</h3>
          
          {Object.entries(quarterlyReports).map(([year, reports]) => (
            <div key={year} className="quarterly-year-section">
              <div 
                className="year-heading-collapsible"
                onClick={() => toggleYear(year)}
              >
                <span className="year-text">{year}</span>
                <span className="toggle-icon">
                  {expandedYears[year] ? '▼' : '▶'}
                </span>
              </div>
              
              {expandedYears[year] && (
                <div className="quarterly-list">
                  {reports.map((report, index) => (
                    <div key={index} className="quarterly-item">
                      <span className="quarterly-title">{report.title}</span>
                      <a 
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quarterly-link"
                      >
                        Download →
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Archived Quarterly Reports */}
        <div className="management-section">
          <h3 style={{ color: 'rgb(158, 235, 71)', marginBottom: '20px' }}>Archived Quarterly Reports</h3>
          
          {Object.entries(archivedQuarterlyReports).map(([year, reports]) => (
            <div key={year} className="quarterly-year-section">
              <div 
                className="year-heading-collapsible archived"
                onClick={() => toggleYear(`archived-${year}`)}
              >
                <span className="year-text">{year}</span>
                <span className="toggle-icon">
                  {expandedYears[`archived-${year}`] ? '▼' : '▶'}
                </span>
              </div>
              
              {expandedYears[`archived-${year}`] && (
                <div className="quarterly-list">
                  {reports.map((report, index) => (
                    <div key={index} className="quarterly-item">
                      <span className="quarterly-title">{report.title}</span>
                      <a 
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quarterly-link"
                      >
                        Download →
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </PageLayout>
  )
}

export default FinancialDocuments