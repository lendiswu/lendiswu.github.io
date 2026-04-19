import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight, UserCheck, Stethoscope, ChevronDown, GraduationCap, Award, Building, MessageSquare, Users, Globe } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="text-teal font-bold text-2xl">GET</span>
            <span className="text-gray-800 font-semibold ml-2">Team</span>
          </div>
          <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="nav-links">
              <button onClick={() => scrollTo('vision')}>{t('nav.vision')}</button>
              <button onClick={() => scrollTo('team')}>{t('nav.team')}</button>
              <button onClick={() => scrollTo('research')}>{t('nav.research')}</button>
              <button onClick={() => scrollTo('projects')}>{t('nav.project')}</button>
              <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ padding: '8px 24px' }}>{t('nav.contact')}</button>
            </div>
            {/* Language Switcher (Always visible) */}
            <button onClick={toggleLanguage} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '0.9rem' }}>
              <Globe size={16} /> EN / 中文
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">{t('home.heroBadge')}</div>
            <h1 className="hero-title">
              {t('home.heroTitle1')}<br/>
              <span className="text-teal-gradient">{t('home.heroTitle2')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('home.heroSub')}
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollTo('vision')} className="btn-primary flex-center gap-2">
                {t('home.btnMore')} <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo('research')} className="btn-outline">
                {t('home.btnExplore')}
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card visual-card">
              <div className="icon-wrapper">
                <Stethoscope size={48} className="text-teal" />
              </div>
              <div className="stats-row mt-6">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">{t('home.stat1')}</span>
                </div>
                <div className="divider"></div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">{t('home.stat2')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollTo('vision')}>
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section bg-light-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.visionTitle')}</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="vision-card glass-panel">
            <div className="vision-icon">
              <GraduationCap size={40} className="text-teal" />
            </div>
            <p className="vision-text" style={{ whiteSpace: 'pre-wrap' }}>
              {t('home.visionDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.teamTitle')}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="section-desc mx-auto">{t('home.teamSub')}</p>
          </div>

          <div className="team-grid">
            {/* Team Member: 吳人傑 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/dr_wu_profile.jpg" alt={t('home.team.wu.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.wu.name')}</h3>
                  <p className="member-title">{t('home.team.wu.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.wu.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <h4 className="body-subtitle flex-center gap-2 mt-4"><Award size={16} /> {t('home.honorLabel')}</h4>
                <div className="honor-badge">
                  <span>{t('home.team.wu.honor')}</span>
                </div>
              </div>
            </div>

            {/* Team Member: 陳皓羽 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/haoyu_profile.jpg" alt={t('home.team.chenH.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.chenH.name')}</h3>
                  <p className="member-title">{t('home.team.chenH.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.chenH.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            {/* Team Member: 陳虹蓁 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/hongzhen_profile.jpeg" alt={t('home.team.chenHz.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transform: 'scale(0.9)' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.chenHz.name')}</h3>
                  <p className="member-title">{t('home.team.chenHz.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.chenHz.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            {/* Team Member: 段月婷 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/duan_profile.jpeg" alt={t('home.team.duan.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transform: 'scale(1.35)' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.duan.name')}</h3>
                  <p className="member-title">{t('home.team.duan.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.duan.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <h4 className="body-subtitle flex-center gap-2 mt-4"><Award size={16} /> {t('home.awardLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.duan.honor', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            {/* Team Member: 徐逸庭 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/xu_profile.jpg" alt={t('home.team.xu.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.xu.name')}</h3>
                  <p className="member-title">{t('home.team.xu.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.xu.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <h4 className="body-subtitle flex-center gap-2 mt-4"><Award size={16} /> {t('home.awardLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.xu.honor', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            {/* Team Member: 蔡鴻維 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/tsai_profile.jpeg" alt={t('home.team.tsai.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.tsai.name')}</h3>
                  <p className="member-title">{t('home.team.tsai.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.tsai.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            {/* Team Member: 陳惠雯 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/huiwen_image1.jpg" alt={t('home.team.chenHw.name')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                </div>
                <div>
                  <h3 className="member-name">{t('home.team.chenHw.name')}</h3>
                  <p className="member-title">{t('home.team.chenHw.title')}</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> {t('home.expLabel')}</h4>
                <ul className="member-list">
                  {t('home.team.chenHw.exp', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section bg-teal-50">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.researchTitle')}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="section-desc mx-auto">{t('home.researchDesc')}</p>
          </div>

          <div className="research-grid">
            <Link to="/research/speak-up" style={{ textDecoration: 'none' }}>
              <div className="research-card hover-teal">
                <div className="research-icon">
                  <MessageSquare size={32} />
                </div>
                <h3 className="research-title">{t('home.r1Title')}</h3>
                <p className="research-summary">
                  {t('home.r1Desc')}
                </p>
                <div className="research-actions mt-4 text-teal font-semibold flex-center gap-1">
                  {t('home.btnView')} <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link to="/research/simulation" style={{ textDecoration: 'none' }}>
              <div className="research-card hover-teal">
                <div className="research-icon">
                  <Users size={32} />
                </div>
                <h3 className="research-title">{t('home.r2Title')}</h3>
                <p className="research-summary">
                  {t('home.r2Desc')}
                </p>
                <div className="research-actions mt-4 text-teal font-semibold flex-center gap-1">
                  {t('home.btnView')} <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.pTitle')}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="section-desc mx-auto">{t('home.pDesc')}</p>
          </div>

          <div className="research-grid">
            <Link to="/projects/virtual-hospital" style={{ textDecoration: 'none' }}>
              <div className="research-card hover-teal">
                <div className="research-icon">
                  <Building size={32} />
                </div>
                <h3 className="research-title">{t('home.p1Title')}</h3>
                <p className="research-summary">
                  {t('home.p1Desc')}
                </p>
                <div className="research-actions mt-4 text-teal font-semibold flex-center gap-1">
                  {t('home.btnViewP')} <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container contact-container">
          <div className="glass-panel contact-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title text-center">{t('home.contactTitle')}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
              {t('home.contactDesc')}
            </p>
            <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <a href="mailto:lendiswu@hotmail.com" className="contact-btn" style={{ minWidth: '300px' }}>
                <Mail size={24} className="mr-3" />
                lendiswu@hotmail.com
              </a>
              <a href="mailto:lendiswu@tmu.edu.tw" className="contact-btn" style={{ minWidth: '300px', background: '#e2e8f0', color: '#0f172a' }}>
                <Mail size={24} className="mr-3" />
                lendiswu@tmu.edu.tw
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p className="text-gray-500 font-medium tracking-wide">
            {t('home.footer')}
          </p>
        </div>
      </footer>
    </div>
  );
}
