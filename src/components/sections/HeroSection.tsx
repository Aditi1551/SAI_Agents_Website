import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Shield, TrendingUp, Building2 } from 'lucide-react';

/* ─── Mosaic tile data — matches the design exactly ─── */
const mosaicTiles = [
  // Row 1: Finance (wide 8/12) + HR (narrow 4/12)
  { name: 'Finance', mapped: 'Finance', gridCol: '1 / span 8', gridRow: '1', height: '400px', bg: '#f6f5f3', bgHover: '#efeee9', bgImage: 'radial-gradient(#cfc4c5 1.5px, transparent 1.5px)', bgSize: '24px 24px', textColor: '#1a1c1c' },
  { name: 'Human Resources', mapped: 'Human Resources', gridCol: '9 / span 4', gridRow: '1', height: '400px', bg: '#f9f9f9', bgHover: '#f0f0f0', bgImage: 'linear-gradient(to right, #e8e8e8 1px, transparent 1px), linear-gradient(to bottom, #e8e8e8 1px, transparent 1px)', bgSize: '40px 40px', textColor: '#1a1c1c' },
  // Row 2: Supply Chain + Sales + Operations (4+4+4)
  { name: 'Supply Chain', mapped: 'Supply Chain Management', gridCol: '1 / span 4', gridRow: '2', height: '300px', bg: '#f6f5f3', bgHover: '#efeee9', textColor: '#1a1c1c' },
  { name: 'Sales', mapped: 'Sales', gridCol: '5 / span 4', gridRow: '2', height: '300px', bg: '#f6f5f3', bgHover: '#efeee9', textColor: '#1a1c1c' },
  { name: 'Operations', mapped: 'Procurement & Sourcing', gridCol: '9 / span 4', gridRow: '2', height: '300px', bg: '#f9f9f9', bgHover: '#f0f0f0', bgImage: 'linear-gradient(to right, #e8e8e8 1px, transparent 1px), linear-gradient(to bottom, #e8e8e8 1px, transparent 1px)', bgSize: '40px 40px', textColor: '#1a1c1c' },
  // Row 3: IT (5/12) + Strategy (7/12)
  { name: 'IT', mapped: 'Research & Development / Product Management', gridCol: '1 / span 5', gridRow: '3', height: '350px', bg: '#f6f5f3', bgHover: '#efeee9', textColor: '#1a1c1c' },
  { name: 'Strategy', mapped: 'General Management / Executive Leadership', gridCol: '6 / span 7', gridRow: '3', height: '350px', bg: '#1a1c1c', bgHover: '#222525', textColor: '#ffffff' },
];

interface HeroSectionProps {
  onDepartmentClick?: (dept: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDepartmentClick }) => {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section style={{
        minHeight: '85vh',
        background: '#1a1c1c',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Right abstract overlay */}
        <div style={{
          position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
          width: '50%', height: '120%', opacity: 0.12, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at right center, rgba(255,255,255,0.3) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, width: '45%', height: '100%',
          opacity: 0.06, pointerEvents: 'none',
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 60px,
            rgba(255,255,255,0.15) 60px, rgba(255,255,255,0.15) 61px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 60px,
            rgba(255,255,255,0.15) 60px, rgba(255,255,255,0.15) 61px
          )`,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div style={{
              fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
              marginBottom: '2rem', fontFamily: 'Inter, sans-serif'
            }}>
              SAI · Agentic AI Platform
            </div>

            <h1 style={{
              fontFamily: 'Newsreader, Georgia, serif',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '2rem',
              maxWidth: '800px',
            }}>
              The Future of Enterprise Intelligence
            </h1>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '580px',
              marginBottom: '3rem',
            }}>
              Autonomous AI agents engineered for high-stakes enterprise environments. 
              Deploy 600+ specialized agents across Procurement, Finance, HR, Operations and more. 
              Proven $150M+ annual value across 50+ global clients.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#functions" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.95rem 2.5rem',
                background: 'transparent', color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.5)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1a1c1c'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
              >
                Explore Portfolios <MoveRight size={14} />
              </a>
              <a href="#roi" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.95rem 2.5rem',
                background: '#ffffff', color: '#1a1c1c',
                border: '1px solid #ffffff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                See ROI Analysis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Department Mosaic Grid — Architectures of Intelligence ─── */}
      <section style={{ padding: '8rem 4rem', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ marginBottom: '4rem', marginLeft: '8.333%' }}>
            <h2 style={{
              fontFamily: 'Newsreader, Georgia, serif',
              fontSize: '2.25rem', fontWeight: 400,
              letterSpacing: '-0.01em', color: '#000000',
              marginBottom: '1rem',
            }}>
              Architectures of Intelligence
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem', color: '#4c4546',
              lineHeight: 1.6, maxWidth: '400px',
            }}>
              Specialized autonomous systems designed to integrate seamlessly into core business verticals.
            </p>
          </div>

          {/* The mosaic grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
            gap: '2rem',
          }}>
            {mosaicTiles.map((tile) => {
              const isHovered = hoveredTile === tile.name;
              return (
                <motion.div
                  key={tile.name}
                  onClick={() => onDepartmentClick && onDepartmentClick(tile.mapped)}
                  onHoverStart={() => setHoveredTile(tile.name)}
                  onHoverEnd={() => setHoveredTile(null)}
                  style={{
                    gridColumn: tile.gridCol,
                    gridRow: tile.gridRow,
                    height: tile.height,
                    backgroundColor: isHovered ? tile.bgHover : tile.bg,
                    backgroundImage: tile.bgImage || 'none',
                    backgroundSize: tile.bgSize || 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Department name — dead center, editorial */}
                  <h3 style={{
                    fontFamily: 'Newsreader, Georgia, serif',
                    fontSize: '2.25rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: tile.textColor || '#1a1c1c',
                    userSelect: 'none',
                    transition: 'opacity 0.2s',
                    opacity: isHovered ? 0.6 : 1,
                  }}>
                    {tile.name}
                  </h3>

                  {/* Hover: subtle bottom border accent */}
                  <motion.div
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '2px', background: tile.textColor || '#1a1c1c',
                      transformOrigin: 'left',
                    }}
                  />

                  {/* Hover: explore label bottom-right */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute', bottom: '1.25rem', right: '1.5rem',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.62rem', fontWeight: 600,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: tile.textColor === '#ffffff' ? 'rgba(255,255,255,0.7)' : '#4c4546',
                    }}
                  >
                    Explore →
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Trust / Stats Bar ─── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          borderTop: '1px solid #cfc4c5',
          borderBottom: '1px solid #cfc4c5',
          background: '#ffffff',
          padding: '3rem 4rem',
        }}
      >
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', gap: '4rem', flexWrap: 'wrap',
        }}>
          {[
            { icon: Building2, value: '50+', sub: 'Enterprise Clients', note: 'Transforming operations globally' },
            { divider: true },
            { icon: TrendingUp, value: '$5.5B+', sub: 'Client Revenue Protected', note: 'Combined across all deployments' },
            { divider: true },
            { icon: Shield, value: 'ISO 27001', sub: 'SOC 2 Type 2', note: 'Certified security infrastructure' },
          ].map((item, i) => {
            if ('divider' in item) return (
              <div key={i} style={{ width: '1px', height: '48px', background: '#cfc4c5' }} />
            );
            const Icon = item.icon!;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Icon size={20} style={{ color: '#4c4546', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{
                    fontFamily: 'Newsreader, Georgia, serif',
                    fontSize: '1.75rem', fontWeight: 400, color: '#1a1c1c', lineHeight: 1,
                  }}>{item.value}</div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.68rem', fontWeight: 600,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: '#4c4546', marginTop: '6px',
                  }}>{item.sub}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#7e7576', marginTop: '2px' }}>{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};
