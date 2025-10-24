"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import './Newsletter.css'
import { images } from '../CloudinaryImagesUrl/ImagesUrl';
import '../../app/globals.css'

function Newsletter() {
  const newsletters = [
    {
      period: "H1-2024",
      year: "2024",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-H1-2024.pdf"
    },
    {
      period: "H2-2023",
      year: "2023",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-H2-2023.pdf"
    },
    {
      period: "H1-2023",
      year: "2023",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-H1-2023.pdf"
    },
    {
      period: "H2-2022",
      year: "2022",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-H2-2022.pdf"
    },
    {
      period: "H1-2022",
      year: "2022",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-H1-2022.pdf"
    },
    {
      period: "H2-2021",
      year: "2021",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-H2-2021.pdf"
    },
    {
      period: "H1-2021",
      year: "2021",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/09/Lotte-Newsletter-H1-2021.pdf"
    },
    {
      period: "H2-2020",
      year: "2020",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/04/Lotte-Newsletter-H2-2020.pdf"
    },
    {
      period: "H1-2020",
      year: "2020",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/04/Lotte-Newsletter-H1-2020.pdf"
    },
    {
      period: "Q4-2019",
      year: "2019",
      url: "https://www.lottechem.pk/wp-content/uploads/2020/09/LCPL-Newsletter-Q4-2019.pdf"
    },
    {
      period: "Q3-2019",
      year: "2019",
      url: "https://www.lottechem.pk/wp-content/uploads/2020/09/LCPL-Newsletter-Q3-2019.pdf"
    },
    {
      period: "Q2-2019",
      year: "2019",
      url: "https://www.lottechem.pk/wp-content/uploads/2020/09/LCPL-Newsletter-Q2-2019.pdf"
    },
    {
      period: "Q1-2019",
      year: "2019",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/04/Lotte-Newsletter-Q1-2019.pdf"
    },
    {
      period: "Q4-2018",
      year: "2018",
      url: "https://www.lottechem.pk/wp-content/uploads/2021/04/Lotte-Newsletter-Q4-2018.pdf"
    },
    {
      period: "Q3-2018",
      year: "2018",
      url: "https://www.lottechem.pk/wp-content/uploads/2018/12/Lotte-Newsletter-Q3-2018.pdf"
    },
    {
      period: "Q2-2018",
      year: "2018",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q2-2018.pdf"
    },
    {
      period: "Q1-2018",
      year: "2018",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q1-2018.pdf"
    },
    {
      period: "Q4-2017",
      year: "2017",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q4-2017.pdf"
    },
    {
      period: "Q3-2017",
      year: "2017",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q3-2017.pdf"
    },
    {
      period: "Q2-2017",
      year: "2017",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q2-2017.pdf"
    },
    {
      period: "Q1-2017",
      year: "2017",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q1-2017.pdf"
    },
    {
      period: "Q4-2016",
      year: "2016",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q4-2016.pdf"
    },
    {
      period: "Q3-2016",
      year: "2016",
      url: "https://www.lottechem.pk/wp-content/uploads/2024/09/Lotte-Newsletter-Q3-2016.pdf"
    }
  ];

  return (
    <PageLayout 
      headerImage={images.newsletter}
      activeMenu="/newsletter"
      section="newsletter"
    >
      <div className="content-box">
        <h2>Newsletter</h2>
        
        <p className="body-text">
          Lotte Chemical Pakistan issues a newsletter normally to employees and contractors, as part of a policy of communication and openness.
        </p>

        <div className="newsletter-grid">
          {newsletters.map((newsletter, index) => (
            <div key={index} className="newsletter-card">
              <div className="newsletter-card-header">
                <div className="pdf-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#d32f2f"/>
                    <path d="M14 2V8H20" fill="#b71c1c"/>
                    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PDF</text>
                  </svg>
                </div>
                <span className="year-badge">{newsletter.year}</span>
              </div>
              
              <div className="newsletter-card-body">
                <h3 className="newsletter-period">{newsletter.period}</h3>
                <p className="newsletter-description">Newsletter Issue</p>
              </div>
              
              <div className="newsletter-card-footer">
                <a 
                  href={newsletter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  <span className="btn-icon">📥</span>
                  <span className="btn-text">Download PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default Newsletter