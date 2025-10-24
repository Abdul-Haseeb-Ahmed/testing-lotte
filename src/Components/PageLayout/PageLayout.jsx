"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import '../../app/globals.css'

function PageLayout({ 
  headerImage, 
  children,
  activeMenu = '/about-lcpl',
  section = 'company'
}) {
  const router = useRouter()

  // Company Menu Items
  const companyMenu = [
    { label: 'Home', path: '/' },
    { label: 'About LCPL', path: '/about-lcpl' },
    { label: 'Vision, Mission & Values', path: '/vision' },
    { label: 'Culture', path: '/culture' },
    { label: 'LCPL History', path: '/lcpl-history' },
    { label: 'LOTTE Global', path: '/lotte-global' },
    { label: 'LOTTE Group Vision', path: '/lotte-group-vision' },
    { label: 'Charlotte\'s Story', path: '/charlottes-story' },
  ]

  // Product Menu Items
  const productMenu = [
    { label: 'Home', path: '/' },
    { label: 'PTA', path: '/pta' },
    { label: 'Process / Technology', path: '/process-technology' },
    { label: 'Specification', path: '/specification' },
    { label: 'Customer Satisfaction', path: '/customer-satisfaction' },
  ]

  // Investor Menu Items
  const investorMenu = [
    { label: 'Home', path: '/' },
    { label: 'Investor Information', path: '/investor-information' },
    { label: 'Financial Documents', path: '/financial-documents' },
    { label: 'Board of Directors', path: '/board-of-director' },
    { label: 'Corporate Governance', path: '/corporate-governance' },
    { label: 'Corporate Briefing', path: '/corporate-briefing' },
    { label: 'Share Holding', path: '/share-holding' },
    { label: 'Financial Highlights', path: '/financial-highlights' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Investor Feedback', path: '/investor-feedback' },
    { label: 'Free Float', path: '/free-float' },
    { label: 'Gender Pay Gap', path: '/gender-pay-gap' },
    { label: 'Election of Directors', path: '/election-of-directors' },
    { label: 'Unclaimed Dividend & Shares', path: '/unclaimed-dividend' },
    { label: 'Dividend Withheld', path: '/dividend-withheld' },
    { label: 'Standard Request Forms', path: '/request-form' },
  ]

  // Career Menu Items
  const careerMenu = [
    { label: 'Home', path: '/' },
    { label: 'Career', path: '/growth' },
    { label: 'Recruitment', path: '/recrutiment' },
    { label: 'Equal Opportunity', path: '/equal-opportunity' },
    { label: 'Training & Development', path: '/training-development' },
    { label: 'Technical Training Center', path: '/technical-training' },
    { label: 'Current Vacancies', path: '/current-vacancies' },
    { label: 'Career Support for Para Professional', path: '/support' },
  ]

  // Newsletter Menu Items
  const newsletterMenu = [
    { label: 'Home', path: '/' },
    { label: 'Newsletter', path: '/newsletter' },
  ]

  // CSR Menu Items
  const csrMenu = [
    { label: 'Home', path: '/' },
    { label: 'CSR In-Focus', path: '/csr-in-focus' },
    { label: 'Community', path: '/community' },
    { label: 'Education', path: '/education' },
    { label: 'Health', path: '/health' },
    { label: 'Environment', path: '/environment' },
    { label: 'Lotte Pakistan Foundation', path: "https://foundation.lotteppta.com/", external: true },
  ]

  // HSE Menu Items
  const hseMenu = [
    { label: 'Home', path: '/' },
    { label: 'HSE In-Focus', path: '/hse-in-focus' },
    { label: 'Health & Safety', path: '/health-safety' },
    { label: 'Environment', path: '/hse-environment' },
    { label: 'Policies', path: '/policies' },
  ]

  // Select menu based on section
  const menuItems = 
    section === 'products' ? productMenu :
    section === 'investor' ? investorMenu :
    section === 'career' ? careerMenu :
    section === 'newsletter' ? newsletterMenu :
    section === 'csr' ? csrMenu :
    section === 'hse' ? hseMenu : companyMenu

  const handleNavigation = (path, isExternal = false) => {
    if (isExternal) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      router.push(path);
    }
  }

  return (
    <div className="page-container">
      {/* Header Image Section */}
      <div className="page-header-image">
        <img src={headerImage} alt="Header" />
      </div>

      {/* Sidebar + Content Layout */}
      <div className="page-wrapper">
        {/* Left Sidebar */}
        <aside className="page-sidebar">
          <div className="sidebar-menu">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${item.path === activeMenu ? "active" : ""}`}
                onClick={() => handleNavigation(item.path, item.external)}
              >
                <span className="menu-arrow">❯</span>
                <span className="menu-link">{item.label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Content */}
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default PageLayout