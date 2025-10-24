"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Vision() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/vision"
    >
      <div className="content-box">
        <h2>Vision, Mission & Values</h2>
        
        {/* Vision Section */}
        <div className="vision-section">
          <h3>Vision</h3>
          <p className="body-text" style={{color: "blue"}}>
            The spirit to make a difference through Value, Quality, and Excellence.
          </p>
          <p className="body-text">
            At LOTTE Chemical Pakistan Limited, customer satisfaction is at the heart of what we do. Our efficient operations and best practices in safety, health and environment ensure a quality product and make a significant economic and social difference.
          </p>
        </div>
        {/* Mission Section */}
        <div className="mission-section">
          <h3>Mission</h3>
          <p className="body-text" style={{color: "blue"}}>
            We enrich people's lives by providing superior products and services that our customers love and trust.
          </p>
        </div>
        <div className="value-section">
          <h3>Values</h3>
          <p className="body-text" style={{color: "blue"}}>
            Core Values are teh standard that all the LOTTE staff should aspire towards so that LOTTE can fulfill its mission and vision.
          </p>
        </div>
          <div className="management-graph">
          <img src={images.vision2} loading='lazy' alt="Vision image" />
        </div>
        <div className="core-values">
          <h4 style={{color: "rgb(158, 235, 71)"}}>Beyond Customer Expectation</h4>
          <p>We do not aim to satisfy customers needs, but rather to create value beyond their expectations.</p>
          <h4 style={{color: "red"}}>Challenge</h4>
          <p>We focus on the nature of our task and continue to challenge ourselves to accomplish higher goals.</p>
          <h4 style={{color: "dark-blue"}}>Respect</h4>
          <p>We respect different opinions, communicate with others and observe general rules to build a bond of trust with our community.</p>
          <h4 style={{color: "#999"}}>Originality</h4>
          <p>We quickly respond to changes, cooperate with other fields without boundaries, and implement inovations to develop originality inimitable by anyone</p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Vision