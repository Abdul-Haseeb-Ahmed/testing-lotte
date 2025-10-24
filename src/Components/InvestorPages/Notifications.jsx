"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Download, ExternalLink } from 'lucide-react';
import PageLayout from '../PageLayout/PageLayout';
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

const Notifications = () => {
  const [expandedYears, setExpandedYears] = useState({ 2025: true });

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const notifications = {
    2025: [
      { 
        title: "Financial Results for the quarter and six months period ended 30 June 2025",
        description: "Board meeting results and financial statements for Q2 2025",
        url: "https://www.lottechem.pk/wp-content/uploads/2025/08/Q2-BOD-PSX-Letter.pdf",
        hasDownload: false
      },
      { 
        title: "Results Letter for March 2025",
        description: "Board meeting held on 17 April 2025 at 1:00 p.m. at Karachi recommended the following",
        url: "https://www.lottechem.pk/wp-content/uploads/2025/04/Result-Letter-17-4-2025.pdf",
        hasDownload: false
      },
      { 
        title: "Press Notice Announcing Annual General Meeting",
        description: "Press notice for 27th Annual General Meeting scheduled to be held on 17 April 2025",
        url: "https://www.lottechem.pk/wp-content/uploads/2025/03/SECP-Filing-for-Notice.pdf",
        hasDownload: false
      },
      { 
        title: "Notice of 27th Annual General Meeting",
        description: "AGM scheduled for Thursday, 17 April 2025 at 11:00 a.m. at Institute of Chartered Accountants of Pakistan (ICAP) auditorium, Chartered Accountants Avenue, Clifton, Karachi",
        url: "https://www.lottechem.pk/wp-content/uploads/2025/03/27th-AGM-Notice.pdf",
        hasDownload: true,
        downloads: [
          { name: "Notice of 27th Annual General Meeting", url: "https://www.lottechem.pk/wp-content/uploads/2025/03/27th-AGM-Notice.pdf" },
          { name: "Proxy Form 27th AGM (English / Urdu)", url: "https://www.lottechem.pk/wp-content/uploads/2025/03/27th-AGM-Form-of-Proxy.pdf" }
        ]
      }
    ],
    2024: [
      { 
        title: "Financial Results for the year ended 31 December 2024",
        description: "The Board of Directors approved the audited financial statements for the year ended 31 December 2024",
        url: "https://www.lottechem.pk/wp-content/uploads/2025/02/Result-Letter-2024.pdf",
        hasDownload: true
      },
      { 
        title: "Financial Results for the quarter and nine months period ended 30 September 2024",
        description: "Board of Directors approved the un-audited financial statements for Q3 2024",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/10/PSX-Result-Letter-30-Sep-2024.pdf",
        hasDownload: true
      },
      { 
        title: "List of Unclaimed/Unpaid Dividend (D-8) as at 23 August 2024",
        description: "Notice Issued for Unclaimed Dividend (No. 8) U/S 244 of the Companies Act 2017",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/08/List-of-Final-Notice-D8-as-at-23-Aug-2024.pdf",
        hasDownload: false
      },
      { 
        title: "Financial Results for the quarter and six months period ended 30 June 2024",
        description: "Q2 2024 financial results and statements",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/08/List-of-Final-Notice-D8-as-at-23-Aug-2024.pdf",
        hasDownload: false
      },
      { 
        title: "Credit of final Cash Dividend (D-14)",
        description: "Final dividend credit notice for shareholders",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/05/Binder-for-website-Credit-ad.pdf",
        hasDownload: false
      },
      { 
        title: "Credit of final Cash Dividend (D-13)",
        description: "Final dividend credit notice for shareholders",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/05/Binder1.pdf",
        hasDownload: false
      },
      { 
        title: "Press Notice Announcing Interim Cash Dividend and Book Closure for the Q1, 2024",
        description: "Interim dividend announcement and book closure dates for first quarter 2024",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/04/Binder-for-website-ad.pdf",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2024",
        description: "Certificate with reference to SRO No. 634(I)2014 dated 10 July 2014 confirming that the Annual Financial Statements and Reports were duly adopted by Members during the 26th AGM held on 18 April 2024",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/04/Compliance-Certificate-2024.pdf",
        hasDownload: false
      },
      { 
        title: "Results Letter for March 2024",
        description: "Board meeting held on 18 April 2024 at 2:00 p.m. at Karachi approved Q1 2024 results",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/04/Result-Letter-Q1-2024.pdf",
        hasDownload: false
      }
    ],
    2023: [
      { 
        title: "Press Notice Announcing Annual General Meeting",
        description: "Newspaper clippings in respect of the Notice of the Annual General Meeting scheduled to be held on 18 April 2024",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/03/SECP-and-PSX-newspaper-Cutting.pdf",
        hasDownload: true,
      },
      { 
        title: "Notice of 26th Annual General Meeting",
        description: "AGM scheduled for Thursday, 18 April 2024 at 11:00 a.m. at Institute of Chartered Accountants of Pakistan (ICAP) auditorium",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/03/26th-AGM-Notice.pdf",
        hasDownload: true,
        downloads: [
          { name: "Notice of 26th Annual General Meeting", url: "https://www.lottechem.pk/wp-content/uploads/2024/03/26th-AGM-Notice.pdf" },
          { name: "Proxy Form 26th AGM (English / Urdu)", url: "https://www.lottechem.pk/wp-content/uploads/2024/03/26th-AGMProxy-form-Urdu-English.pdf" }
        ]
      },
      { 
        title: "Financial Results for the Year Ended 31 December 2023",
        description: "Board of Directors approved the audited financial statements for the year ended 31 December 2023 in meeting held on 21 February 2024",
        url: "https://www.lottechem.pk/wp-content/uploads/2024/02/Result-Letter-21-2-24.pdf",
        hasDownload: false
      },
      { 
        title: "Financial Results for the quarter and nine months period ended 30 September 2023",
        description: "Q3 2023 financial results approved by the Board",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/10/Result-Letter-Sep-2023.pdf",
        hasDownload: true
      },
      { 
        title: "Financial Results for the quarter and six months period ended 30 June 2023",
        description: "Q2 2023 financial results and statements",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/10/Result-Letter-Sep-2023.pdf",
        hasDownload: false
      },
      { 
        title: "Election of Directors",
        description: "Result Letter and documentation regarding Election of Directors",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/06/Election-of-Directors.pdf",
        hasDownload: true
      },
      { 
        title: "Notice published in newspaper for Extra Ordinary General Meeting",
        description: "EOGM notification published in newspapers on 31-May-2023",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Publication-EOGM-Notice-English.pdf",
        hasDownload: false
      },
      { 
        title: "Credit of Interim Cash Dividend (D-12)",
        description: "Interim dividend credit notice for shareholders",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Cover-page-for-cliping-news-papersd12-English.pdf",
        hasDownload: false
      },
      { 
        title: "Credit of Interim Cash Dividend (D-11)",
        description: "Interim dividend credit notice for shareholders",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Cover-page-for-cliping-news-papers11-English.pdf#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2022-23",
        description: "Certificate confirming Annual Financial Statements were adopted during the 25th AGM held on 13 April 2023",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/05/Cover-page-for-cliping-news-papers11-English.pdf",
        hasDownload: false
      },
      { 
        title: "Results Letter for March 2023",
        description: "Board meeting held on 13 April 2023 at 1:30 p.m at Karachi approved Q1 2023 results",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/04/Result-Mar-2023.pdf",
        hasDownload: false
      },
      { 
        title: "Notice U/S 246 of the Company Act, 2017",
        description: "Notice under Section 246 of the Company Act, 2017",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/03/Notice-U_S-246.pdf",
        hasDownload: true
      },
      { 
        title: "Notice of 25th Annual General Meeting",
        description: "AGM scheduled for Thursday, 13 April 2023 at 11:00 a.m. at ICAP auditorium, Clifton, Karachi",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/03/25th-AGM-Notice.pdf",
        hasDownload: true,
        downloads: [
          { name: "Notice of 25th Annual General Meeting", url: "https://www.lottechem.pk/wp-content/uploads/2023/03/25th-AGM-Notice.pdf" }
        ]
      },
      { 
        title: "Final Notice for Unclaimed Dividend (D-7)",
        description: "Final notice for claiming unclaimed dividends",
        url: "https://www.lottechem.pk/wp-content/uploads/2023/03/D-7-Final-Notice-for-website.pdf",
        hasDownload: false
      }
    ],
    2022: [
      { 
        title: "Financial Results for the Year Ended 31 December 2022",
        description: "Board of Directors approved the audited financial statements in meeting held on 10 February 2023 at Karachi",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Corporate Briefing Session 2022",
        description: "Corporate briefing session held for stakeholders and investors",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Credit of Interim Cash Dividend (D-10)",
        description: "Interim dividend credit notice for shareholders",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Interim Cash Dividend and Book Closure Notice",
        description: "Notice of interim dividend announcement and book closure dates",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Financial Results for the quarter and six months period ended 30 June 2022",
        description: "Q2 2022 financial results approved by Board of Directors",
        url: "https://www.lottechem.pk/wp-content/uploads/2022/08/Result-Letter-Q2.pdf",
        hasDownload: true
      },
      { 
        title: "Final Notice for Unclaimed Dividend 2018 (D-6)",
        description: "Final notice for claiming unclaimed dividends from 2018",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2021-22",
        description: "Certificate confirming Annual Financial Statements were adopted during the 24th AGM held on 21 April 2022",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Press Notice Announcing Annual General Meeting",
        description: "Newspaper clippings for the AGM scheduled to be held on 21 April 2022",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 24th Annual General Meeting",
        description: "AGM scheduled for Thursday, 21 April 2022 at 11:00 a.m. at Institute of Bankers Pakistan (IBP), M.T. Khan Road, Karachi",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 24th Annual General Meeting", url: "https://www.lottechem.pk/wp-content/uploads/2022/03/24th-AGM-Notice.pdf" }
        ]
      },
      { 
        title: "Directors Reports – Urdu version",
        description: "Directors' reports in Urdu language for stakeholders",
        url: "#",
        hasDownload: false
      }
    ],
    2021: [
      { 
        title: "Financial Results for the Year Ended 31 December 2021",
        description: "Board of Directors approved the audited financial statements in meeting held on 17 February 2022 at Karachi",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Credit of Interim Cash Dividend (D-9)",
        description: "Interim dividend for the year ending 31 December 2021",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Interim Cash Dividend and Book Closure Notice",
        description: "Notice of interim dividend and book closure dates for 2021",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For September 2021",
        description: "Board meeting held on 15 October 2021 at 10:30 a.m at Karachi approved Q3 2021 results",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Final Notice for Unclaimed Dividend 2017 (D-5)",
        description: "Final notice for claiming unclaimed dividends from 2017",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For June 2021",
        description: "Board meeting held on 20 August 2021 approved the un-audited financial statements for Q2 2021",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2020-21",
        description: "Certificate confirming Annual Financial Statements were adopted during the 23rd AGM held on 21 April 2021",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For March 2021",
        description: "Board meeting held on 22 April 2021 approved the un-audited financial statements for Q1 2021",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Press Notice Announcing Annual General Meeting",
        description: "Newspaper clippings for the AGM scheduled to be held on 21 April 2021",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 23rd Annual General Meeting",
        description: "AGM held on Wednesday, 21 April 2021 at 11:00 a.m. through video-link",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 23rd Annual General Meeting", url: "https://www.lottechem.pk/wp-content/uploads/2021/03/Notice-of-AGM-Final.pdf" }
        ]
      }
    ],
    2020: [
      { 
        title: "Results Letter For December 2020",
        description: "Board of Directors approved the audited financial statements in meeting held on 26 February 2021 at Karachi",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Corporate Briefing Session 2020",
        description: "Lotte Chemical Pakistan Limited held a corporate briefing session via video-link",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For September 2020",
        description: "Board meeting held on 20 October 2020 approved the un-audited financial statements for Q3 2020",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For June 2020",
        description: "Board meeting held on 21 August 2020 approved the un-audited financial statements for Q2 2020",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice – Election of Directors",
        description: "Notification of the Election of Directors, published in newspapers on 10-Jun-2020",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of EOGM – 17-Jun-2020",
        description: "Extraordinary General Meeting held on Wednesday, 17 June 2020 at 11:00 AM through video-link",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2019-20",
        description: "Certificate confirming Annual Financial Statements were adopted during the 22nd AGM held on 16 April 2020",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For March 2020",
        description: "Board meeting held on 16 Apr 2020 approved the un-audited financial statements for Q1 2020",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 22nd Annual General Meeting",
        description: "AGM held on Thursday, 16 April 2020 at 11:00 a.m. at EZ/1/P-4, Eastern Industrial Zone, Port Qasim, Karachi",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 22nd Annual General Meeting", url: "https://www.lottechem.pk/wp-content/uploads/2020/03/Notice_AGM2020.pdf" }
        ]
      }
    ],
    2019: [
      { 
        title: "Results Letter For 2019",
        description: "Board of Directors approved the audited financial statements in meeting held on 14 February 2020 at Karachi",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Corporate Briefing Session",
        description: "Corporate Briefing Session held on Thursday, November 21, 2019, at 3:00 pm at Pakistan Stock Exchange Auditorium",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Interim Cash Dividend For 2019",
        description: "Notice of Book Closure and interim dividend announcement for 2019",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For September 2019",
        description: "Board meeting held on 17 October 2019 approved the un-audited financial statements for Q3 2019",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For June 2019",
        description: "Board meeting held on 26 August 2019 at Seoul, Korea approved the un-audited financial statements for Q2 2019",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2018-19",
        description: "Certificate confirming Annual Financial Statements were adopted during the 21st AGM held on 18 April 2019",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For March 2019",
        description: "Board meeting held on 19 April 2019 approved the un-audited financial statements for Q1 2019",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 21st Annual General Meeting",
        description: "AGM held on Thursday, 18 April 2019 at 11:00 a.m. at Institute of Bankers Pakistan (IBP), M.T. Khan Road, Karachi",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 21st Annual General Meeting", url: "https://www.lottechem.pk/resource/NOM%2021%20AGM.pdf" }
        ]
      }
    ],
    2018: [
      { 
        title: "Results Letter For 2018",
        description: "Board of Directors approved the audited financial statements in meeting held on 14 February 2019 at Karachi",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Interim Cash Dividend For 2018",
        description: "Notice of interim dividend and book closure for 2018",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For September 2018",
        description: "Board meeting held on 19 October 2018 approved the un-audited financial statements for Q3 2018",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For June 2018",
        description: "Board meeting held on 07 August 2018 approved the un-audited financial statements for Q2 2018",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Credit of Final Cash Dividend",
        description: "Notice of E-credit into Bank for final cash dividend",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2017-18",
        description: "Certificate confirming Annual Financial Statements were adopted during the 20th AGM held on 20 April 2018",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For March 2018",
        description: "Board meeting held on 20 April 2018 approved the un-audited financial statements for Q1 2018",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 20th Annual General Meeting",
        description: "AGM held on Friday, 20 April 2018 at 11:00 a.m. at ICAP auditorium, Chartered Accountants Avenue, Clifton, Karachi",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 20th Annual General Meeting", url: "https://www.lottechem.pk/resource/20th%20AGM%20Notice%20of%20Meeting.pdf" }
        ]
      },
      { 
        title: "Final Notice to File Claim",
        description: "Notice to file claim in respect of unclaimed dividend/shares under section 244 of Companies Act 2017",
        url: "#",
        hasDownload: false
      }
    ],
    2017: [
      { 
        title: "Results Letter For 2017",
        description: "Board of Directors approved the audited financial statements in meeting held on 02 February 2018 at Karachi",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For September 2017",
        description: "Board meeting held on 24 October 2017 approved the un-audited financial statements for Q3 2017",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For June 2017",
        description: "Board meeting held on 24 August 2017 approved the un-audited financial statements for Q2 2017",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for the year 2016-17",
        description: "Certificate confirming Annual Financial Statements were adopted during the 19th AGM held on 25 April 2017",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For March 2017",
        description: "Board meeting held on 25 April 2017 approved the un-audited financial statements for Q1 2017",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 19th Annual General Meeting",
        description: "AGM held on Tuesday, 25 April 2017 at 11:00 a.m. at ICAP auditorium, Chartered Accountants Avenue, Clifton, Karachi",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 19th Annual General Meeting", url: "https://www.lottechem.pk/resource/LOTTE%20EnglishNotice%20of%20AGM%20Final.pdf" }
        ]
      }
    ],
    2016: [
      { 
        title: "Results Letter For 2016",
        description: "Board of Directors approved the audited financial statements in meeting held on 07 February 2017 at Dubai, UAE",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For September 2016",
        description: "Board meeting held on 25 October 2016 approved the un-audited financial statements for Q3 2016",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For June 2016",
        description: "Board meeting held on 23 August 2016 approved the un-audited financial statements for Q2 2016",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Compliance Certificate for Functional Website",
        description: "Certificate with reference to SRO No. 634(I)2014 dated 01 July 2014",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Results Letter For March 2016",
        description: "Board meeting held on 21 April 2016 approved the un-audited financial statements for Q1 2016",
        url: "#",
        hasDownload: false
      },
      { 
        title: "Notice of 18th Annual General Meeting",
        description: "AGM held on Thursday, 21 April 2016 at 10:30 a.m. at ICAP auditorium, Chartered Accountants Avenue, Clifton, Karachi",
        url: "#",
        hasDownload: true,
        downloads: [
          { name: "Notice of 18th Annual General Meeting", url: "https://www.lottechem.pk/resource/NoticeofMeeting(English)-18thAGM.pdf" }
        ]
      }
    ],
    2015: [
      { 
        title: "Results Letter For 2015",
        description: "Board of Directors approved the audited financial statements in meeting held on 22 January 2016 at Karachi",
        url: "#",
        hasDownload: false
      }
    ]
  };

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/notifications"
      section="investor"
    >
      <div className="content-box">
        <h2>Notifications</h2>
        
        <div className="intro-text">
          Stay updated with the latest announcements, financial results, AGM notices, and regulatory compliance documents from Lotte Chemical Pakistan Limited.
        </div>

        {/* Notifications by Year */}
        <div style={{ marginTop: '30px' }}>
          {Object.entries(notifications).map(([year, items]) => (
            <div 
              key={year} 
              style={{ 
                marginBottom: '25px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 235, 71, 0.15)';
                e.currentTarget.style.borderColor = 'rgb(158, 235, 71)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e0e0e0';
              }}
            >
              {/* Year Header */}
              <div 
                onClick={() => toggleYear(year)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 25px',
                  background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)',
                  borderLeft: '5px solid rgb(158, 235, 71)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #f8f8f8 100%)';
                  e.currentTarget.style.paddingLeft = '30px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)';
                  e.currentTarget.style.paddingLeft = '25px';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgb(158, 235, 71)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 8px rgba(158, 235, 71, 0.3)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(5deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                  }}
                  >
                    <FileText style={{ width: '24px', height: '24px', color: '#fff' }} />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '28px', 
                      color: '#333',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      {year}
                    </h3>
                    <span style={{
                      fontSize: '12px',
                      color: '#999',
                      display: 'block',
                      marginTop: '2px'
                    }}>
                      {items.length} {items.length === 1 ? 'notification' : 'notifications'}
                    </span>
                  </div>
                </div>
                <div style={{ 
                  transition: 'transform 0.3s ease',
                  transform: expandedYears[year] ? 'rotate(0deg)' : 'rotate(-90deg)'
                }}>
                  <ChevronDown style={{ width: '24px', height: '24px', color: 'rgb(158, 235, 71)' }} />
                </div>
              </div>

              {/* Notifications List */}
              {expandedYears[year] && (
                <div style={{
                  background: '#fff',
                  animation: 'slideDown 0.3s ease-out'
                }}>
                  <style>
                    {`
                      @keyframes slideDown {
                        from {
                          opacity: 0;
                          max-height: 0;
                        }
                        to {
                          opacity: 1;
                          max-height: 5000px;
                        }
                      }
                      @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                    `}
                  </style>
                  {items.map((item, index) => (
                    <div 
                      key={index}
                      style={{
                        borderTop: '1px solid #f0f0f0',
                        padding: '20px 25px',
                        transition: 'all 0.3s ease',
                        animation: `fadeIn 0.4s ease-out ${index * 0.05}s backwards`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(158, 235, 71, 0.05)';
                        e.currentTarget.style.paddingLeft = '35px';
                        e.currentTarget.style.borderLeftWidth = '5px';
                        e.currentTarget.style.borderLeftStyle = 'solid';
                        e.currentTarget.style.borderLeftColor = 'rgb(158, 235, 71)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.paddingLeft = '25px';
                        e.currentTarget.style.borderLeft = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px' }}>
                        <div style={{ flex: 1 }}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: '#333',
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontWeight: '500',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '8px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'rgb(158, 235, 71)';
                              e.currentTarget.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#333';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <ExternalLink style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                            {item.title}
                          </a>
                          {item.description && (
                            <p style={{
                              fontSize: '14px',
                              color: '#666',
                              lineHeight: '1.6',
                              margin: '0 0 10px 0'
                            }}>
                              {item.description}
                            </p>
                          )}
                          
                          {/* Downloads Section */}
                          {item.downloads && item.downloads.length > 0 && (
                            <div style={{ 
                              display: 'flex', 
                              flexWrap: 'wrap', 
                              gap: '10px', 
                              marginTop: '12px' 
                            }}>
                              {item.downloads.map((download, idx) => (
                                <a
                                  key={idx}
                                  href={download.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 14px',
                                    background: 'rgb(158, 235, 71)',
                                    color: '#fff',
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(158, 235, 71, 0.3)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgb(148, 225, 61)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(158, 235, 71, 0.4)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgb(158, 235, 71)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(158, 235, 71, 0.3)';
                                  }}
                                >
                                  <Download style={{ width: '14px', height: '14px' }} />
                                  {download.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Download Icon for single files */}
                        {item.hasDownload && !item.downloads && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              flexShrink: 0,
                              width: '45px',
                              height: '45px',
                              background: 'rgba(158, 235, 71, 0.1)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                              border: '2px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgb(158, 235, 71)';
                              e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                              e.currentTarget.style.borderColor = 'rgb(148, 225, 61)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(158, 235, 71, 0.1)';
                              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                              e.currentTarget.style.borderColor = 'transparent';
                            }}
                          >
                            <Download 
                              style={{ 
                                width: '20px', 
                                height: '20px', 
                                color: 'rgb(158, 235, 71)',
                                transition: 'color 0.3s ease'
                              }} 
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#fff';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgb(158, 235, 71)';
                              }}
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Notifications;