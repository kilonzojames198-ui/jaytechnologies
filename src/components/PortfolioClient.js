'use client'
import { useState } from 'react'

const filters = ['all', 'web', 'design', 'brand']
const filterLabels = { all: 'All', web: 'Web Dev', design: 'Design', brand: 'Branding' }

export default function PortfolioClient({ items }) {
  const [active, setActive] = useState('all')

  return (
    <>
      <div className="portfolio-filter">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {items.map(item => (
          <div
            key={item.title}
            className="portfolio-item"
            style={{
              opacity: active === 'all' || active === item.category ? 1 : 0.2,
              transform: active === 'all' || active === item.category ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.3s ease',
              pointerEvents: active === 'all' || active === item.category ? 'auto' : 'none',
            }}
          >
            <div className={`portfolio-img ${item.cls}`}>
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
                <span>{item.cat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
