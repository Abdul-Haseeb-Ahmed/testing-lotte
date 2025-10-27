"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function BoardOfDirectors() {

  const directors = [
    {
      name: "Jo Hyun Kwoun",
      position: "Chairman",
      image: images.director1,
      tenure: "Appointed to the Board on 3 February 2025 for the term to expire on 22 June 2026",
      boardActivities: ["Chairman", "Member HR and Remuneration Committee"],
      outsideInterests: ["Director, Lotte Versalis Elastomers"],
      career: "Mr. Kwoun is currently Managing Director of Monomer Business Group for Lotte Chemical Corporation, South Korea. Prior to joining this unit, he had been on Monomer Business Divison for Hyundai Chemical, associated company of Lotte Chemical.\n\nHe has been working for Lotte Chemical Corp. in Korea since 1997 and has worked in Production, Technical, Engineering functions in Olefin Basic Chemical and Monomer Business units.\n\nMr. Kwoun has a versatile experience of more than 28 years of working with petrochemical companies in South Korea. He holds a Bachelor's degree in Chemical Engineering from Hanyang University in South Korea."
    },
    {
      name: "Mr. Young Dae Kim",
      position: "Chief Executive",
      image: images.director2,
      tenure: "Appointed to the Board on 23 June 2023 for the term to expire on 22 June 2026.",
      boardActivities: ["Chairman Shares Sub Committee", "Member HR & Remuneration Committee"],
      outsideInterests: ["None"],
      career: "Mr. Kim has been working with LOTTE Chemical Corporation, South Korea since 1997, spending his first 11 years in Quality Assurance, Logistics and Shift control team at Ulsan Plant.\n\nMr Kim graduated from Ulsan University South Korea, majoring in Chemistry, in 1997. He is a certified Director of Corporate Governance from Pakistan Institute of Corporate Governance (PICG)."
    },
    {
      name: "Cheolsoo Kim",
      position: "Non-executive Director",
      image: images.director3,
      tenure: "Appointed to the Board on 3 Feb 2025 for the term to expire on 22 June 2026",
      boardActivities: ["Member, Shares Sub Committee"],
      outsideInterests: ["Director, Lotte UBE Synthetic Rubber Sdn. Bhd.", "Director, UZ-KOR Gas Chemical."],
      career: "Mr. Kim is currently a Managing Director of Corporate Planning Division for Lotte Chemical Corporation, South Korea. Prior to current directorship, he had been on Corporate Planning Team for more than seven years.\n\nHe has been working for Lotte Chemical Corp. in Korea since 2004 and has worked in Finance, Accounting, and Corporate Planning units. Mr. Kim has a versatile experience of more than 21 years of working with petrochemical companies in South Korea.\n\nMr. Kim holds a Bachelor's degree in Business Administration from Hanyang University in South Korea."
    },
    {
      name: "Seong Jun Park",
      position: "Non-executive Director",
      image: images.director4,
      tenure: "Appointed to the Board on 3 Feb 2025 for the term to expire on 22 June 2026",
      boardActivities: ["Member, Audit Committee"],
      outsideInterests: ["Director, Lotte GS Chemical"],
      career: "Mr. Park is currently a Managing Director of Olefin Divison for Lotte Chemical Corporation, South Korea. Prior to current directorship, he had been on Olefin Feedstock Team for more than seven years.\n\nHe has been working for Lotte Chemical Corp. in Korea since 2002 and has worked in Production, Technical Process, Olefin Management and Feedstock units. Mr. Park has a versatile experience of more than 23 years of working with petrochemical companies in South Korea.\n\nHe holds a Master's degree in Business Administration from Yonsei University in South Korea and a Bachelor's degree in Chemical Engineering from Sungkyunkwan University in South Korea."
    },
    {
      name: "Ms. Jae Sun Park",
      position: "Non-executive Director",
      image: images.director5,
      tenure: "Appointed to the Board on 23 June 2023 for the term to expire on 22 June 2026",
      boardActivities: [],
      outsideInterests: ["Director, Lotte Chemical Titan, Malaysia"],
      career: ""
    },
    {
      name: "Mr. Shabbir Diwan",
      position: "Non-executive Director",
      image: images.director6,
      tenure: "Appointed to the Board on 23 June 2023 for the term to expire on 22 June 2026.",
      boardActivities: [],
      outsideInterests: [
        "Chief Executive, Gatron (Industries) Limited",
        "Chief Executive, Gatro Power (Pvt) Ltd",
        "Director, Novatex Limited",
        "Director, Global Synthetics Limited",
        "Director, G-Pac Energy (Pvt) Ltd",
        "Director, Nova Frontiers Limited",
        "Director, Nova Care (Pvt) Ltd",
        "Chairman & Director, Pakistan Business Council",
        "Chief Governor, Gatron Foundation",
        "Member, Board of Governors – Patients Aid Foundation",
        "Member, Board of Governors – Memon Health & Education Foundation"
      ],
      career: "Mr. Shabbir Diwan is an MBA from Institute of Business Administration, University of Karachi. He is a member of the Board of Governors of Patients Aid Foundation of JPMC, the 2nd largest Government Hospital in Karachi. He is also the Chairman of the Pakistan Business Council. In addition, he is a member of the Board of Governors of Memon Health and Education Foundation.\n\nHe is also an Executive Director of Novatex Limited – producer and exporter of PET Resin, PET Preforms, and BOPET Films."
    },
    {
      name: "Mr. Rashid Ibrahim",
      position: "Independent Director",
      image: images.director7,
      tenure: "Appointed to the Board on 23 June 2023 for the term to expire on 22 June 2026.",
      boardActivities: ["Chairman Audit Committee", "Chairman HR & Remuneration Committee"],
      outsideInterests: [
        "Director, Saif Textile Mills Limited",
        "Director, Saif Power Limited",
        "Director, Human Development Foundation"
      ],
      career: "Mr. Rashid Ibrahim, FCA has more than 40 years of diversified experience of serving various industries as a consultant including but not limited to Electric Power Generation, Telecommunication, Oil and Gas Exploration and Production etc.\n\nHe is a Chartered Accountant by Profession and a Fellow member of ICAP. He graduated from Hailey College, Lahore and completed his training with KPMG Taseer Hadi & Co. He remained Partner of various professional firms including Coopers & Lybrand and A.F. Ferguson & Co (a member firm of PwC).\n\nHe is at present Senior Partner, Septentrio Global Consulting. He was the Vice President of the ICAP and also served as a council member of ICAP for a 4 years term. He served Rawalpindi Islamabad Tax Bar Associations as a Senior Vice president and a Vice President. His major area of expertise is Taxation and Corporate Consultancy."
    },
    {
      name: "Mr. Khurram Rashid",
      position: "Independent Director",
      image: images.director8,
      tenure: "Appointed to the Board on 23 June 2023 for the term to expire on 22 June 2026.",
      boardActivities: ["Member Audit Committee"],
      outsideInterests: ["None"],
      career: "Mr. Khurram Rashid is a Barrister-at-Law with a strong background in corporate and commercial law, intellectual property, employment law, foreign investment, banking, aviation, admiralty and shipping, and insurance laws. With over 22 years of standing, he has extensive litigation experience at High Court, District Courts, Labour Courts, Services Tribunal, and Banking Courts.\n\nHe is currently working as the Lead Counsel at K-Legal Law Firm since July 2016. Prior to that, he served as a Partner at Surridge & Beecheno Law Firm from July 2006 to June 2016 and as an Associate at various law firms, including Surridge & Beecheno Law Firm, Usmani & Iqbal Law Firm, and CR Law Chambers.\n\nIn addition to his professional work, Khurram Rashid has also been involved in the academic field as a Visiting Faculty at various prestigious institutions, including the University of Karachi – SM Law College, University of London – Lecole Institute and Themis Institute, and Institute of Business Administration (IBA).\n\nHe holds a Bar-at-law qualification from the Honourable Society of the Lincoln's Inn, UK, and an LLB (Hons) degree from the University of Buckingham, UK. He has also completed corporate electives from McGill University, Montreal, Canada, and an Advanced Advocacy Course from Keble College, Oxford University, UK."
    }
  ];

  return (
    <PageLayout 
      headerImage={images.boardOfDirectors}
      activeMenu="/board-of-director"
      section="investor"
    >
      <div className="content-box">
        <h2>Board of Directors</h2>
        
        {directors.map((director, index) => (
          <div key={index} className="management-section">
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', marginBottom: '20px' }}>
              {/* Director Image */}
              <div style={{
                minWidth: '160px',
                width: '160px',
                height: '180px',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <UniversalImage 
                  src={director.image} 
                  alt={director.name}
                  width={160}
                  height={180}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0 }}>{director.name}</h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'rgb(158, 235, 71)', 
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  {director.position}
                </p>
              </div>
            </div>

            <h4 style={{ fontSize: '16px', marginTop: '20px' }}>Tenure</h4>
            <p className="body-text">{director.tenure}</p>

            {director.boardActivities.length > 0 && (
              <>
                <h4 style={{ fontSize: '16px', marginTop: '20px' }}>Board and Committee Activities</h4>
                <ul style={{ marginLeft: '20px' }}>
                  {director.boardActivities.map((activity, idx) => (
                    <li key={idx} className="body-text">{activity}</li>
                  ))}
                </ul>
              </>
            )}

            {director.outsideInterests.length > 0 && (
              <>
                <h4 style={{ fontSize: '16px', marginTop: '20px' }}>Outside Interests</h4>
                <ul style={{ marginLeft: '20px' }}>
                  {director.outsideInterests.map((interest, idx) => (
                    <li key={idx} className="body-text">{interest}</li>
                  ))}
                </ul>
              </>
            )}

            {director.career && (
              <>
                <h4 style={{ fontSize: '16px', marginTop: '20px' }}>Career</h4>
                {director.career.split('\n\n').map((para, idx) => (
                  <p key={idx} className="body-text">{para}</p>
                ))}
              </>
            )}
          </div>
        ))}

      </div>
    </PageLayout>
  )
}

export default BoardOfDirectors