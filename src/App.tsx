import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { FunctionSection } from './components/sections/FunctionSection';
import { RoiSection } from './components/sections/RoiSection';
import { UseCaseLibrary } from './components/sections/UseCaseLibrary';
import { LeadModal } from './components/ui/LeadModal';
import { SuccessStoriesSection } from './components/sections/SuccessStoriesSection';
import { DashboardSection } from './components/sections/DashboardSection';
import { IndustrySection } from './components/sections/IndustrySection';
import { AboutSection } from './components/sections/AboutSection';
import { ContentModal } from './components/ui/ContentModal';
import { MapPin, Mail } from 'lucide-react';

function App() {
  const [showLibrary, setShowLibrary] = useState(false);
  const [initialDepartment, setInitialDepartment] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'download' | null>(null);
  const [infoModalType, setInfoModalType] = useState<'cases' | 'careers' | 'privacy' | null>(null);

  const openModal = (type: 'demo' | 'download') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="app-layout">
      {/* Header / Nav — Artisan.AI Intellectual Luxury style */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(249,249,249,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e8e8e8',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          maxWidth: '1920px', margin: '0 auto', padding: '1.5rem 4rem',
        }}>
          {/* Brand */}
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif',
            fontSize: '1.2rem', fontWeight: 400,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1a1c1c',
            cursor: 'pointer',
          }} onClick={() => { setShowLibrary(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            SAI
          </div>

          {/* Nav Links */}
          <nav style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            {[
              { label: 'Strategy',         href: '#architecture',  action: () => setShowLibrary(false) },
              { label: 'Expertise',        href: '#functions',     action: () => setShowLibrary(false) },
              { label: 'Agent Portfolios', href: '#',              action: (e: React.MouseEvent) => { e.preventDefault(); setInitialDepartment('All'); setShowLibrary(true); } },
              { label: 'Insights',         href: '#roi',           action: () => setShowLibrary(false) },
            ].map(item => (
              <a key={item.label} href={item.href} onClick={item.action} style={{
                fontFamily: 'Inter, sans-serif',
                color: '#4c4546', textDecoration: 'none',
                fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a1c1c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4c4546')}
              >{item.label}</a>
            ))}
          </nav>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button onClick={() => openModal('download')} style={{
              background: 'transparent', color: '#4c4546', border: 'none',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Material</button>

            <button onClick={() => openModal('demo')} style={{
              background: '#1a1c1c', color: '#ffffff',
              border: '1px solid #1a1c1c', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: '0.72rem',
              fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.75rem 2rem', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Consultation</button>

            <button onClick={() => { if (showLibrary) { setShowLibrary(false); } else { setInitialDepartment('All'); setShowLibrary(true); } }}
              style={{
                background: showLibrary ? '#e8e8e8' : 'transparent',
                color: '#1a1c1c', border: '1px solid #cfc4c5',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '0.75rem 1.5rem', transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e8e8e8')}
              onMouseLeave={e => (e.currentTarget.style.background = showLibrary ? '#e8e8e8' : 'transparent')}
            >{showLibrary ? '← Back' : '600+ Agents'}</button>
          </div>
        </div>
      </header>

      <main>
        {showLibrary ? (
          <UseCaseLibrary initialDepartment={initialDepartment} />
        ) : (
          <>
            <HeroSection onDepartmentClick={(dept) => { setInitialDepartment(dept); setShowLibrary(true); window.scrollTo(0, 0); }} />
            <DashboardSection onOpenDemo={() => openModal('demo')} />
            <ArchitectureSection />
            <FunctionSection />
            <IndustrySection />
            <SuccessStoriesSection />
            <RoiSection />
            <AboutSection />
          </>
        )}
      </main>

      {/* Ready to Deploy CTA */}
      <section id="contact" style={{
        background: '#1a1c1c',
        borderTop: '1px solid #000',
        padding: 'var(--spacing-16) 0',
        textAlign: 'center',
        color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, marginBottom: 'var(--spacing-4)', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            Ready to Deploy AI Agents?
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', opacity: 0.9, marginBottom: 'var(--spacing-8)', lineHeight: 1.6 }}>
            Join 50+ enterprise clients across 15+ industry segments including Public Sector, Manufacturing, Telecommunications, and Retail. Get a free ROI analysis customized for your business.
          </p>
          <button
            className="btn"
            onClick={() => openModal('demo')}
            style={{
              background: '#fff',
              color: '#0052FF',
              padding: '1rem 2rem',
              fontSize: 'var(--font-size-base)',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Schedule Free Consultation &rarr;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 'var(--spacing-16) 0 var(--spacing-8) 0', background: '#f9f9f9', borderTop: '1px solid #e8e8e8' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) 1fr 1fr 1fr', gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-12)' }}>
            {/* Branding & Info */}
            <div>
              <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.3rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1c1c', marginBottom: 'var(--spacing-6)' }}>
                SequelString AI
              </div>
              <p style={{ color: '#4c4546', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, marginBottom: 'var(--spacing-4)', maxWidth: '90%' }}>
                DPIIT-recognized enterprise AI and automation company.<br />
                120+ employees serving 50+ clients across India and MEA.<br />
                <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.5rem', background: '#e8e8e8', border: '1px solid #cfc4c5', color: '#1a1c1c', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>ISO 27001 &amp; SOC 2 Type 2</span>
              </p>
              <div style={{ color: '#4c4546', fontSize: 'var(--font-size-sm)', lineHeight: 2 }}>
                <div className="flex items-center gap-2"><MapPin size={12} /> Navi Mumbai, India (HQ)</div>
                <div className="flex items-center gap-2"><MapPin size={12} /> Dubai, UAE</div>
                <div className="flex items-center gap-2"><MapPin size={12} /> Delaware, USA</div>
                <div className="flex items-center gap-2" style={{ marginTop: '0.5rem' }}><Mail size={12} /> <a href="mailto:info@sequelstring.com" style={{ color: '#1a1c1c', textDecoration: 'underline', textUnderlineOffset: '3px' }}>info@sequelstring.com</a></div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 style={{ fontFamily: 'Inter, sans-serif', color: '#1a1c1c', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 'var(--spacing-6)' }}>Solutions</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                {['AI Agents Platform','SAP Automation','Procurement AI','Finance Automation','Supply Chain AI'].map(s => (
                  <li key={s}><a href="#functions" onClick={e => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('functions')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: '#7e7576', textDecoration: 'none', fontSize: 'var(--font-size-sm)' }} onMouseEnter={e => (e.currentTarget.style.color='#1a1c1c')} onMouseLeave={e => (e.currentTarget.style.color='#7e7576')}>{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 style={{ color: '#00D4FF', fontWeight: 600, marginBottom: 'var(--spacing-6)', fontSize: 'var(--font-size-base)' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>Infrastructure</a></li>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>Manufacturing</a></li>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>FMCG &amp; Retail</a></li>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>Government</a></li>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>Automotive</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ color: '#00D4FF', fontWeight: 600, marginBottom: 'var(--spacing-6)', fontSize: 'var(--font-size-base)' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>About Us</a></li>
                <li><button onClick={() => setInfoModalType('cases')} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s', cursor: 'pointer', textAlign: 'left' }}>Case Studies</button></li>
                <li><button onClick={() => setInfoModalType('careers')} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s', cursor: 'pointer', textAlign: 'left' }}>Careers</button></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); setShowLibrary(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s' }}>Contact</a></li>
                <li><button onClick={() => setInfoModalType('privacy')} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', transition: 'color 0.2s', cursor: 'pointer', textAlign: 'left' }}>Privacy Policy</button></li>
              </ul>
            </div>
          </div>

          <div style={{
            color: 'var(--color-text-muted)',
            fontSize: 'var(--font-size-xs)',
            paddingTop: 'var(--spacing-6)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            opacity: 0.7
          }}>
            &copy; 2026 SequelString AI Pvt. Ltd. (SAI). All rights reserved. | "Govern Smarter. Operate Leaner. Impact Greener."
          </div>
        </div>
      </footer>

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />

      {/* Info Modals for Footer Content */}
      <ContentModal
        isOpen={infoModalType !== null}
        onClose={() => setInfoModalType(null)}
        title={
          infoModalType === 'cases' ? "Enterprise Case Studies" :
          infoModalType === 'careers' ? "Join SequelString AI" :
          "Privacy Policy"
        }
      >
        {infoModalType === 'cases' && (
          <div>
            <p style={{ marginBottom: '1.5rem', color: '#9CA3AF' }}>Browse our curated selection of verified multi-million dollar transformations powered by SAI Autonomous Agents.</p>
            
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0, 212, 255, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#00D4FF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Automotive Manufacturer Supply Chain</h3>
                <p style={{ marginBottom: '1rem', color: '#D1D5DB' }}><strong>Client:</strong> Top 3 Indian 2-Wheeler Manufacturer</p>
                <p style={{ marginBottom: '1rem' }}>Deployed 12 synchronized AI Agents to autonomously monitor SAP inventories, execute POs, and negotiate freight variance.</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#10B981', fontWeight: 600 }}>
                  <li>$12M Annual Procurement Savings</li>
                  <li>94% reduction in manual tracking</li>
                  <li>Payback Period: 4.2 Months</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0, 212, 255, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#00D4FF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Public Transit Infrastructure</h3>
                <p style={{ marginBottom: '1rem', color: '#D1D5DB' }}><strong>Client:</strong> Major Metropolitan Railway (DMRC)</p>
                <p style={{ marginBottom: '1rem' }}>Implemented a highly-secure internal control AI to monitor vendor compliance, safety audits, and predictive maintenance schedules across 250+ stations.</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#10B981', fontWeight: 600 }}>
                  <li>Zero Compliance Breaches in 18 Months</li>
                  <li>$4.5M operational overhead slashed</li>
                  <li>100% adherence to GeM regulations</li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button onClick={() => { setInfoModalType(null); openModal('download'); }} className="btn btn-primary">Download Full Report</button>
            </div>
          </div>
        )}

        {infoModalType === 'careers' && (
          <div>
            <p style={{ marginBottom: '1.5rem', color: '#9CA3AF' }}>We are a team of 120+ innovators, engineers, and strategists obsessed with the future of autonomous enterprise operations. Join our Navi Mumbai HQ or work remotely.</p>
            
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Open Roles</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ color: '#00D4FF', marginBottom: '0.25rem' }}>Senior AI Engineer (Agentic Systems)</h4>
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Navi Mumbai, India • Full-time</p>
                </div>
                <a href="mailto:careers@sequelstring.com?subject=Application for Senior AI Engineer (Agentic Systems) - Navi Mumbai, India" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}>Apply</a>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ color: '#00D4FF', marginBottom: '0.25rem' }}>Enterprise Sales Director</h4>
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Dubai, UAE • Full-time</p>
                </div>
                <a href="mailto:careers@sequelstring.com?subject=Application for Enterprise Sales Director - Dubai, UAE" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}>Apply</a>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ color: '#00D4FF', marginBottom: '0.25rem' }}>SAP Integration Specialist</h4>
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Remote • Contract</p>
                </div>
                <a href="mailto:careers@sequelstring.com?subject=Application for SAP Integration Specialist - Remote" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}>Apply</a>
              </li>
            </ul>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#9CA3AF', textAlign: 'center' }}>Don't see a fit? Send your resume to <a href="mailto:careers@sequelstring.com" style={{ color: '#00D4FF' }}>careers@sequelstring.com</a></p>
          </div>
        )}

        {infoModalType === 'privacy' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#D1D5DB' }}>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>SequelString AI Pvt. Ltd. ("SAI", "we", "our", or "us") is committed to protecting your privacy and ensuring the highest level of security for your enterprise data.</p>
            
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1rem' }}>1. Data Collection &amp; Usage</h3>
            <p>Our autonomous AI agents process data exclusively within your secure enterprise environments (e.g., your SAP VPC). We do not aggregate, train on, or export your proprietary operational data to external public LLMs.</p>

            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1rem' }}>2. Global Compliance & Security Standards</h3>
            <p>We are fully compliant with the <strong>DPDP Act (India)</strong>, <strong>GDPR (EU)</strong>, and <strong>CCPA (USA)</strong>. Our organization and data center operations are audited and certified for <strong>ISO 27001</strong> and <strong>SOC 2 Type 2</strong>, ensuring the highest echelon of information security management and continuous trust.</p>

            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1rem' }}>3. Contacting the Data Protection Officer</h3>
            <p>For any inquiries regarding data deletion, export requests, or security audits, please contact our global compliance team at <a href="mailto:privacy@sequelstring.com" style={{ color: '#00D4FF' }}>privacy@sequelstring.com</a>.</p>
          </div>
        )}
      </ContentModal>
    </div>
  );
}

export default App;
