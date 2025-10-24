"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Career() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/growth"
      section="career"
    >
      <div className="content-box">
        <h2 id="career">Career Growth With LCPL</h2>
        
        <p className="intro-text">
          At Lotte Chemical Pakistan, we nurture constructive and mutually beneficial relationships with our employees, customers, suppliers, and communities. Our vision is to become the preferred employer and supplier in Pakistan and the markets we serve.
        </p>

        <p className="body-text">
          Our talent management strategy focuses on developing the local workforce by utilizing the vast talent available within Pakistan. We are committed to hiring the right people to deliver the operational excellence our customers expect, exactly when and where they need it, while also building and strengthening local talent pools. We provide cutting-edge training and competency development programs to support our employees' growth.
        </p>

        <p className="body-text">
          We understand that our success is built on the strength of our people. That's why we've created an environment where individuals are hired based on their skills and experience and are nurtured in a stimulating, supportive ecosystem that benefits themselves, their colleagues, and the organization.
        </p>

        {/* Benefits Section */}
        <div className="management-section">
          <h3 id="benefits">Our Employee Benefits</h3>
          
          <p className="management-intro">
            In addition to investing in personal development, we offer a comprehensive range of benefits, including:
          </p>

          <div className="grid-2col">
            <div className="grid-item">
              <h4>Competitive Remuneration</h4>
              <p>Performance-based bonus schemes and attractive salary packages that recognize your contribution.</p>
            </div>

            <div className="grid-item">
              <h4>Medical Benefits</h4>
              <p>Comprehensive medical coverage for employees, spouses, and children.</p>
            </div>

            <div className="grid-item">
              <h4>Transportation Services</h4>
              <p>Convenient transportation services between home and office for your comfort.</p>
            </div>

            <div className="grid-item">
              <h4>Annual Paid Leave</h4>
              <p>Generous annual leave policy to maintain work-life balance.</p>
            </div>

            <div className="grid-item">
              <h4>Financial Support</h4>
              <p>House loan facility and car entitlements for eligible employees.</p>
            </div>

            <div className="grid-item">
              <h4>Insurance Coverage</h4>
              <p>Group life insurance and paid sick leave for peace of mind.</p>
            </div>

            <div className="grid-item">
              <h4>Work-Life Balance</h4>
              <p>Weekends off and regular social events to foster team bonding.</p>
            </div>

            <div className="grid-item">
              <h4>Growth & Recognition</h4>
              <p>Long service awards, scholarships, and personal development programs.</p>
            </div>
          </div>

          <p className="management-intro" style={{marginTop: '40px'}}>
            At Lotte Chemical, we are committed to your growth and success.
          </p>
        </div>


      </div>
    </PageLayout>
  )
}

export default Career