"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function CharlottesStory() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/charlottes-story"
    >
      <div className="content-box">
        <h2>Charlotte's Story</h2>
        
        <div className="charlotte-grid">
          {/* TEXT */}
          <div className="charlotte-text">
            <p className="body-text">
              The name "LOTTE" is inspired by Charlotte, the beloved heroine from <em>The Sorrows of Young Werther</em> by Johann Wolfgang von Goethe, a renowned German literary figure. The slogan "Your palate's sweetheart" reflects the company's vision, drawing from the character of Charlotte, who lingers in the memory and holds a special place in the hearts of people worldwide.
            </p>

            <p className="body-text">
              Lotte, symbolizing the "Beloved woman," is far from a passive character loved without reason. She is responsible, proactive, bright, and open-minded. She loves her family and the world around her, showing deep care for the poor and powerless. Her decisions are guided by intellectual thought, and she is passionate about her hobbies and social interactions. Honest about her emotions, Lotte dances gracefully and embodies a spirit ahead of her time.
            </p>
          </div>

          <div className="charlotte-image">
            <UniversalImage 
              src={images.charlotte} 
              alt="Charlotte" 
              className="charlotte-portrait"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CharlottesStory