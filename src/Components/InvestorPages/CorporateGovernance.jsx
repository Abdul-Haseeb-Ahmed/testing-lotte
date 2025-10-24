"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function CorporateGovernance() {
  return (
    <PageLayout 
      headerImage={images.corporateGovernance}
      activeMenu="/corporate-governance"
      section="investor"
    >
      <div className="content-box">
        <h2>Corporate Governance</h2>
        
        <div className="body-text">
          <h3>Business Principles</h3>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li className="body-text">Each employee should implement the Company's core Values, comply with and observe applicable laws, support fundamental human rights and give due regards to health, safety and environment.</li>
          </ul>
        </div>

        <div className="body-text">
          <h3>Business Integrity</h3>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li className="body-text">Bribery and other form of unethical business practices are prohibited</li>
            <li className="body-text">Free enterprise is promoted and strict compliance with competition laws is required</li>
            <li className="body-text">As a responsible corporate citizens, participation in community activities is encouraged and all measures are taken for the safety and health of employees as well as for the protection of the environment</li>
            <li className="body-text">Employees are expected to maintain confidentiality and to act in the Company's interest at all times</li>
          </ul>
        </div>

        <div className="body-text">
          <h3>Company Responsibilities</h3>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li className="body-text">Adopt the spirit of open communication</li>
            <li className="body-text">Provide equal opportunities and a healthy, safe and secure environment</li>
            <li className="body-text">Ensure the rights of employees to join unions/associations</li>
            <li className="body-text">Protect personal data of employees</li>
            <li className="body-text">Engage in an active performance management system</li>
          </ul>
        </div>

        <div className="body-text">
          <h3>Employee Responsibilities</h3>
          
          <p className="body-text">
            The Code provides guidance to employees on their responsibilities in the following areas:
          </p>

          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li className="body-text">Media relations and disclosures</li>
            <li className="body-text">Inside information</li>
            <li className="body-text">Corporate identity</li>
            <li className="body-text">Protecting intellectual property</li>
            <li className="body-text">Internet USE</li>
            <li className="body-text">Business travel policy</li>
            <li className="body-text">Prohibition on substance abuse</li>
          </ul>
        </div>

        {/* Last Updated */}
        <div className="last-updated">
          <p>Last Updated on April 4, 2016</p>
        </div>
      </div>
    </PageLayout>
  )
}

export default CorporateGovernance