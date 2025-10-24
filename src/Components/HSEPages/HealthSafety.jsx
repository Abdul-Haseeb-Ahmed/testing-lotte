"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function HealthSafety() {
  return (
    <PageLayout 
      headerImage={images.healthSafety}
      activeMenu="/health-safety"
      section="hse"
    >
      <div className="content-box">
        <h2>Health & Safety</h2>
        
        <div className="body-text">
          <h3>Rigorous Audit Regime</h3>
          
          <p className="body-text">
            Lotte Chemical Pakistan upholds a rigorous audit regime, with daily, weekly, and monthly audit cycles to ensure adherence to safety standards. Continuous training, retraining, effective communication of HSE learning events (including near misses), and daily toolbox talks are integral to improving behavior-based safety and system compliance.
          </p>
        </div>

        <div className="management-section">
          <h3>Employee Health Monitoring</h3>
          
          <p className="body-text">
            Employee health is a top priority for the company. Health and hygiene monitoring plans are developed at the start of each year, ensuring 100% compliance with medical examinations. Ongoing field monitoring is emphasized to prevent workplace conditions from contributing to occupational illnesses.
          </p>
        </div>

        <div className="management-section">
          <h3>Our Philosophy</h3>
          
          <p className="body-text">
            The company strongly believes in and promotes the philosophy that "Good HSE&S is Good Business."
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default HealthSafety