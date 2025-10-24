"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import { images } from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function CustomerSatisfaction() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/customer-satisfaction"
      section="products"
    >
      <div className="content-box">
        <h2>Customer Satisfaction</h2>
        <p className="body-text">
            Customer satisfaction is essential to every business. The sales team holds regular meetings to strengthen relationships and assess customer satisfaction. Any concerns or issues are prioritized and addressed promptly, with systems in place to prevent recurrence. Additionally, a robust complaint management system ensures all issues are resolved within a specified time frame. Updates on the status of complaints are shared with top-level management.        
        </p>

      </div>
    </PageLayout>
  )
}

export default CustomerSatisfaction