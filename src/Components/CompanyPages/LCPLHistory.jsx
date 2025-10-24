"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function LCPLHistory() {
  const events = [
    { year: '1996', text: 'Construction phase started under ICI\'s supervision.' },
    { year: '1998', text: 'PTA Plant commissioned.' },
    { year: '2000', text: 'PTA business demerged from ICI Pakistan Ltd into Pakistan PTA Ltd (PPTA).' },
    { year: '2008', text: 'AkzoNobel acquired ICI globally, making PPTA part of AkzoNobel.' },
    { year: '2009', text: 'KP Chemical (Subsidiary of LOTTE) acquired PPTA, making PPTA part of LOTTE. Name changed to Lotte Pakistan PTA Ltd (LPPTA).' },
    { year: '2012', text: 'Co-Generation Plant commissioned. KP Chemical\'s identity changed globally to Lotte Chemical.' },
    { year: '2013', text: 'Name changed to Lotte Chemical Pakistan Ltd.' }
  ]

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/lcpl-history"
    >
      <div className="content-box">
        <h2>LCPL History</h2>
        
        <div className="timeline">
          {events.map((event, i) => (
            <div key={i} className="timeline-item">
              <span style={{color:"blue"}} className="year-badge">{event.year}</span>
              <p className="body-text">{event.text}</p>
            </div>
          ))}
        </div>


      </div>
    </PageLayout>
  )
}

export default LCPLHistory