"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function LOTTEGlobal() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/lotte-global"
    >
      <div className="content-box">
        <h2>LOTTE Global</h2>
        
        <p className="body-text">
          LOTTE improves the quality of our everyday lives by providing trusted, reliable products and services. With the formation of LOTTE Confectionery in 1967, LOTTE officially entered the food industry. It now leads the Korean tourism and retail industries by establishing some of Korea's top department stores and hotels. LOTTE has since then evolved and expanded into key industries like petrochemicals and construction and positioned itself as one of Korea's key conglomerates based on a wealth of diverse skills and experiences. It is now rising as a global corporation, trusted by customers all over the world, with a vision of becoming Asia's TOP 10 Global Groups by 2018. LOTTE will continue to improve lives with its quality products control and differentiated services.
        </p>

        <div>
          <img src={images.lotteGlobal1} loading='lazy' alt="LOTTE Global 1" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} /> <br />
          <img src={images.lotteGlobal2} loading='lazy' alt="LOTTE Global 2" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
        </div>


      </div>
    </PageLayout>
  )
}

export default LOTTEGlobal