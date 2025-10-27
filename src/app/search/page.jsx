'use client';
import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { searchData } from '@/data/SearchData';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  
  // Search Logic (same as Navbar)
  const performSearch = (searchQuery) => {
    if (!searchQuery || searchQuery.trim() === '') return [];
    
    const searchTerm = searchQuery.toLowerCase().trim();
    
    const results = searchData
      .map(page => {
        let score = 0;
        
        if (page.title.toLowerCase().includes(searchTerm)) {
          score += 100;
        }
        
        const matchingKeywords = page.keywords.filter(keyword => 
          keyword.toLowerCase().includes(searchTerm)
        );
        score += matchingKeywords.length * 10;
        
        if (page.description.toLowerCase().includes(searchTerm)) {
          score += 5;
        }
        
        if (page.category.toLowerCase().includes(searchTerm)) {
          score += 3;
        }
        
        return { ...page, score };
      })
      .filter(page => page.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.priority - b.priority;
      })
      .slice(0, 50); // Max 50 results
    
    return results;
  };
  
  const results = query ? performSearch(query) : [];

  const handleResultClick = (url) => {
    router.push(url);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Search Results</h1>
        {query && (
          <p style={styles.query}>
            Showing results for: <strong style={styles.queryText}>"{query}"</strong>
          </p>
        )}
      </div>

      {results.length > 0 ? (
        <div style={styles.resultsList}>
          <p style={styles.count}>{results.length} results found</p>
          {results.map((result) => (
            <div 
              key={result.id}
              style={styles.card}
              onClick={() => handleResultClick(result.url)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderLeftColor = '#e31937';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={styles.category}>{result.category}</div>
              <h2 style={styles.resultTitle}>{result.title}</h2>
              <p style={styles.description}>{result.description}</p>
              <div style={styles.url}>{result.url}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.noResults}>
          <div style={styles.noResultsIcon}>🔍</div>
          <h2 style={styles.noResultsTitle}>No results found</h2>
          <p style={styles.noResultsText}>Try searching with different keywords</p>
          <button 
            style={styles.backBtn}
            onClick={() => router.push('/')}
            onMouseEnter={(e) => {
              e.target.style.background = '#c41530';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(227, 25, 55, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#e31937';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Go to Homepage
          </button>
        </div>
      )}
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    minHeight: '60vh',
  },
  header: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px',
  },
  query: {
    fontSize: '16px',
    color: '#666',
  },
  queryText: {
    color: '#e31937',
  },
  count: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  resultsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  card: {
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    borderLeft: '4px solid transparent',
  },
  category: {
    fontSize: '12px',
    color: '#e31937',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: '8px',
    letterSpacing: '0.5px',
  },
  resultTitle: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '8px',
    fontWeight: '600',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  url: {
    fontSize: '12px',
    color: '#999',
    fontFamily: 'monospace',
  },
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  noResultsIcon: {
    fontSize: '80px',
    marginBottom: '20px',
    opacity: '0.3',
  },
  noResultsTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  noResultsText: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  backBtn: {
    padding: '12px 30px',
    background: '#e31937',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{textAlign: 'center', padding: '40px'}}>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}