"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function CurrentVacancies() {
  const vacancies = [
    {
      title: "Manager Maintenance",
      qualification: "Graduate Mechanical Engineer or Masters in Mechanical Engineering",
      experience: "Minimum 10 to 15 Years in Petrochemical, Fertilizer, Refinery, or Oil & Gas sector in the field of Maintenance, Inspection, and Reliability.",
      responsibilities: [
        {
          category: "HSE & Quality",
          items: [
            "Operate and maintain plant in compliance with approved procedures, legislation, and regulations."
          ]
        },
        {
          category: "Administrative",
          items: [
            "Optimize use of human and material resources.",
            "Coach, mentor, and develop staff to meet organizational objectives.",
            "Provide necessary resources for staff performance."
          ]
        },
        {
          category: "Budget & Inventory Management",
          items: [
            "Collaborate with Maintenance on spares management.",
            "Evaluate vendors and contractors.",
            "Approve and ensure timely utilization of CAPEX, OPEX, and spares budgets."
          ]
        },
        {
          category: "Plant Maintenance",
          items: [
            "Lead mechanical maintenance teams in predictive, routine, and overhaul activities.",
            "Apply engineering codes, prepare specifications, and support improvement projects.",
            "Expertise in rotary equipment (compressors, turbines, pumps, blowers, gearboxes).",
            "Strong knowledge of stationary equipment (heat exchangers, vessels, columns, piping, valves, PSVs).",
            "Review and execute modification packages for reliability, safety, and efficiency.",
            "Conduct Root Cause Analysis (RCA) and develop maintenance strategies.",
            "Coordinate with OEMs, licensors, and EPC contractors to resolve issues and deliver projects.",
            "Improve plant safety through hazard analysis and audits.",
            "Supervise project execution, bar charts, and job reports.",
            "Drive reverse engineering initiatives for local development of critical spares.",
            "Oversee lifting equipment/tools inspections and ensure compliance.",
            "Identify training needs, implement succession plans, and build a technically competent team."
          ]
        }
      ],
      link: "https://lcplonlinetest.lotteppta.com/lcpl/employment-form-lcpl/42/"
    },
    {
      title: "Assistant Engineer – Maintenance",
      qualification: "DAE (Mechanical)",
      experience: "Minimum 8+ years in Petrochemical, Fertilizer, and Refinery or in Oil & Gas Sector.",
      responsibilities: [
        {
          category: "Key Responsibilities",
          items: [
            "Support the supervisor in executing mechanical maintenance activities during plant flushes, short shutdowns, and annual overhauls, ensuring timely completion with optimal scope, adherence to SSHE standards, and compliance with engineering best practices.",
            "Hands-on experience in handling rotating and stationary equipment, including planning and execution of routine maintenance jobs.",
            "Manage day-to-day troubleshooting and technical problem-solving for equipment issues, while identifying recurring problems for root cause analysis and resolution."
          ]
        }
      ],
      link: "https://lcplonlinetest.lotteppta.com/lcpl/employment-form-lcpl/42/"
    },
    {
      title: "Assistant Engineer – Electrical",
      qualification: "D.A.E or B.Tech in Electrical Engineering",
      experience: "Minimum 8+ years in Petrochemical, Fertilizer, Refinery, or Oil & Gas sector",
      responsibilities: [
        {
          category: "Key Responsibilities",
          items: [
            "Knowledge of preventive and corrective maintenance methodologies for electrical equipment",
            "Strong troubleshooting skills on transformers, generators, motors, switchgears, etc.",
            "Ability to evaluate technical specifications of electrical equipment",
            "Experience supervising technicians and helpers, with capability to work independently on process plant electrical equipment",
            "Support Engineer Electrical in maintaining spares inventory",
            "Analyze critical electrical network issues and provide engineering solutions"
          ]
        }
      ],
      link: "https://lcplonlinetest.lotteppta.com/lcpl/employment-form-lcpl/42/"
    },
    {
      title: "Boiler Engineer",
      qualification: "First Class Boiler Engineer",
      experience: "Minimum 10 years in Petrochemical, Fertilizer, Refinery, or Oil & Gas sector",
      ageLimit: "40 years",
      responsibilities: [
        {
          category: "Key Responsibilities",
          items: [
            "Experience in boiler operations and water treatment, including RO and Demin plants",
            "Knowledge of effluent treatment plants with aerobic and anaerobic biological reactors",
            "Skilled in raw material storage and handling, cooling tower, and diesel generator operations",
            "Strong command of DCS operations"
          ]
        }
      ],
      link: "https://lcplonlinetest.lotteppta.com/lcpl/employment-form-lcpl/42/"
    },
    {
      title: "Process Engineer",
      qualification: "Bachelor's degree in Chemical Engineering",
      experience: "5–6 years in the Petrochemical, Fertilizer, Refinery, or Oil & Gas sector",
      responsibilities: [
        {
          category: "Key Responsibilities",
          items: [
            "Lead and support process design, simulation, and modification projects to enhance plant performance",
            "Provide technical troubleshooting for process upsets, equipment failures, and operational challenges",
            "Conduct Root Cause Analysis (RCA) and implement corrective/preventive actions",
            "Collaborate with operations, maintenance, and project teams to ensure safe and efficient plant performance",
            "Support debottlenecking, revamp, and capacity enhancement studies",
            "Prepare and review PFDs, P&IDs, datasheets, and operating manuals",
            "Participate in HAZOP, risk assessments, and safety reviews",
            "Train and mentor junior engineers, providing technical guidance"
          ]
        },
        {
          category: "Skills & Expertise",
          items: [
            "Proficiency in Aspen HYSYS, Aspen Plus, and other process simulation tools",
            "Strong knowledge of process design, sizing, and calculations",
            "Troubleshooting and Root Cause Analysis",
            "Process safety, risk management, and compliance with international design codes/standards",
            "Project engineering and execution",
            "Strong analytical, problem-solving, and communication skills"
          ]
        }
      ],
      link: "https://lcplonlinetest.lotteppta.com/lcpl/employment-form-lcpl/42/"
    }
  ];

  return (
    <PageLayout 
      headerImage={images.currentVacancies}
      activeMenu="/current-vacancies"
      section="career"
    >
      <div className="content-box">
        <h2>Current Vacancies</h2>
        
        <p className="body-text">
          LOTTE Chemical Pakistan stands strong as the only world-class manufacturer and supplier of Purified Terephthalic Acid (PTA) in Pakistan with a capacity to deliver 500,000 tonnes of PTA annually through its state-of-the-art plant situated at Port Qasim, Karachi.
        </p>
        
        <p className="body-text">
          At Lotte Chemical Pakistan, we nurture a collaborative and innovative culture. We value diversity and believe in providing opportunities for personal and professional growth.
        </p>
        <div className="management-graph">
          <UniversalImage 
            src={images.vacancies} 
            alt="Current Vacancies" 
            className="vacancies-image"
          />
        </div>

        {vacancies.map((vacancy, index) => (
          <div key={index} className="management-section">
            <h3>{vacancy.title}</h3>
            
            <p className="body-text">
              <strong>Qualification:</strong> {vacancy.qualification}
            </p>
            
            <p className="body-text">
              <strong>Experience:</strong> {vacancy.experience}
            </p>

            {vacancy.ageLimit && (
              <p className="body-text">
                <strong>Age Limit:</strong> {vacancy.ageLimit}
              </p>
            )}

            {vacancy.responsibilities.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4>{section.category}</h4>
                <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="body-text" style={{ marginBottom: '8px' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="body-text">
              <a 
                href={vacancy.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#d32f2f', 
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Apply Now →
              </a>
            </p>
          </div>
        ))}

        <div className="body-text" style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '15px', 
          borderRadius: '5px',
          marginTop: '30px'
        }}>
          <p className="body-text" style={{ 
            fontWeight: '600', 
            color: '#d32f2f',
            marginBottom: '0'
          }}>
            Deadline for Submission of Applications: 25 October 2025
          </p>
        </div>


      </div>
    </PageLayout>
  )
}

export default CurrentVacancies