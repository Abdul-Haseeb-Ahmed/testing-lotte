"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function FinancialHighlight() {
const financialimages = [images.financialHighlight1, images.financialHighlight2, images.financialHighlight3]

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/financial-highlights"
      section = "investor"
    >
      <div className="content-box">
        <h2>Financial Highlight</h2>
        
        <div style={{ margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px', alignItems: 'center' }}>
          {financialimages.map((img, i) => (
            <img loading='lazy' key={i} src={img} alt={`Vision ${i + 1}`} style={{ width: '105%', maxWidth: '800px', height: 'auto', border: '1px solid' }} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default FinancialHighlight