import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Building, AlertCircle, Monitor, Users, Glasses, CheckCircle2, Globe, HeartPulse, GraduationCap, Shield } from 'lucide-react';

export default function VirtualHospital() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="page-container bg-bg-light min-h-screen pb-20">
      <nav className="navbar scrolled shadow-sm">
        <div className="nav-content">
          <Link to="/" className="text-gray-600 hover:text-teal font-semibold flex items-center gap-2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <ArrowLeft size={20} /> {t('nav.home')}
          </Link>
          <div className="text-teal font-bold text-xl">{t('nav.project')}</div>
          {/* Language Switcher Button */}
          <button onClick={toggleLanguage} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px' }}>
            <Globe size={16} /> EN / 中文
          </button>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        {/* Hero Section */}
        <div className="section-header text-center" style={{ marginBottom: '80px' }}>
          <div className="flex-center justify-center" style={{ marginBottom: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-teal-50)', borderRadius: '50%' }}>
              <Building size={56} className="text-teal" />
            </div>
          </div>
          <h1 className="section-title">{t('vh.title')}<br/><span className="text-teal-gradient">{t('vh.subtitle')}</span></h1>
          <div className="title-underline mx-auto"></div>
          <p className="text-gray-800 font-bold" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
            {t('vh.enTitle')}
          </p>
          <p className="text-gray-500 mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
            {t('vh.desc')}
          </p>
        </div>

        {/* Section 1: 初衷與挑戰 */}
        <section style={{ marginBottom: '100px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2" style={{ marginBottom: '40px' }}>
            <AlertCircle className="text-teal" /> {t('vh.sec1.title')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 className="font-bold text-gray-800" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec1.card1Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec1.card1Desc')}</p>
            </div>
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 className="font-bold text-gray-800" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec1.card2Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec1.card2Desc')}</p>
            </div>
            <div className="glass-card hover-lift" style={{ padding: '40px', backgroundColor: 'var(--color-bg-teal-50)', borderColor: 'var(--color-bg-teal-100)' }}>
              <h3 className="font-bold text-teal" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec1.card3Title')}</h3>
              <p className="text-gray-800" style={{ lineHeight: '1.8' }}>{t('vh.sec1.card3Desc')}</p>
            </div>
            <div className="glass-card hover-lift" style={{ padding: '40px', backgroundColor: 'var(--color-bg-teal-50)', borderColor: 'var(--color-bg-teal-100)' }}>
              <h3 className="font-bold text-teal" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec1.card4Title')}</h3>
              <p className="text-gray-800" style={{ lineHeight: '1.8' }}>{t('vh.sec1.card4Desc')}</p>
            </div>
          </div>
        </section>

        {/* Section 2: 核心架構 */}
        <section style={{ marginBottom: '100px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2" style={{ marginBottom: '40px' }}>
            <Globe className="text-teal" /> {t('vh.sec2.title')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="glass-card hover-lift" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Monitor size={48} className="text-teal" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec2.card1Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec2.card1Desc')}</p>
            </div>
            <div className="glass-card hover-lift" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Users size={48} className="text-teal" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec2.card2Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec2.card2Desc')}</p>
            </div>
            <div className="glass-card hover-lift" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Glasses size={48} className="text-teal" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec2.card3Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec2.card3Desc')}</p>
            </div>
          </div>
        </section>

        {/* Section 3: 教與學的翻轉 */}
        <section style={{ marginBottom: '100px' }}>
          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              <div style={{ padding: '48px', backgroundColor: 'var(--color-bg-light)', borderRight: '1px solid var(--color-border)' }}>
                <div className="badge">{t('vh.sec3.pastBadge')}</div>
                <h3 className="font-bold text-gray-800" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>{t('vh.sec3.pastTitle')}</h3>
                <blockquote style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  {t('vh.sec3.pastQuote')}
                </blockquote>
                <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec3.pastDesc')}</p>
              </div>
              <div style={{ padding: '48px', backgroundColor: 'var(--color-bg-teal-50)' }}>
                <div className="badge" style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderColor: 'var(--color-primary-dark)' }}>{t('vh.sec3.nowBadge')}</div>
                <h3 className="font-bold text-teal" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>{t('vh.sec3.nowTitle')}</h3>
                <blockquote style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--color-primary-dark)', marginBottom: '24px' }}>
                  {t('vh.sec3.nowQuote')}
                </blockquote>
                <p className="text-gray-800" style={{ lineHeight: '1.8' }}>{t('vh.sec3.nowDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 落地課程範例 */}
        <section style={{ marginBottom: '100px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2" style={{ marginBottom: '40px' }}>
            <GraduationCap className="text-teal" /> {t('vh.sec4.title')}
          </h2>
          <div className="roadmap-container glass-card" style={{ padding: '40px' }}>
            <p className="text-gray-600 mb-8 text-center" style={{ fontSize: '1.1rem' }}>{t('vh.sec4.desc')}</p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{t('vh.sec4.w1Badge')}</span>
                  <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec4.w1Title')}</h3>
                  <div className="text-gray-600" style={{ lineHeight: '1.8' }}>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                      <li>{t('vh.sec4.w1L1')}</li>
                      <li>{t('vh.sec4.w1L2')}</li>
                      <li>{t('vh.sec4.w1L3')}</li>
                    </ul>
                    <p style={{ fontWeight: '600', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-bg-teal-50)', padding: '12px', borderRadius: '8px' }}>
                      {t('vh.sec4.w1Task')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{t('vh.sec4.w2Badge')}</span>
                  <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec4.w2Title')}</h3>
                  <div className="text-gray-600" style={{ lineHeight: '1.8' }}>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                      <li>{t('vh.sec4.w2L1')}</li>
                      <li>{t('vh.sec4.w2L2')}</li>
                      <li>{t('vh.sec4.w2L3')}</li>
                    </ul>
                    <p style={{ fontWeight: '600', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-bg-teal-50)', padding: '12px', borderRadius: '8px' }}>
                      {t('vh.sec4.w2Task')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{t('vh.sec4.w3Badge')}</span>
                  <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{t('vh.sec4.w3Title')}</h3>
                  <div className="text-gray-600" style={{ lineHeight: '1.8' }}>
                    <ul style={{ paddingLeft: '24px', marginBottom: '8px' }}>
                      <li>{t('vh.sec4.w3L1')}</li>
                      <li>{t('vh.sec4.w3L2')}</li>
                      <li>{t('vh.sec4.w3L3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: 願景與核心價值 */}
        <section style={{ marginBottom: '80px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2 justify-center" style={{ marginBottom: '40px' }}>
            <HeartPulse className="text-teal" /> {t('vh.sec5.title')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="glass-card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
              <Shield size={40} className="text-teal mx-auto" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '16px' }}>{t('vh.sec5.card1Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec5.card1Desc')}</p>
            </div>
            <div className="glass-card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
              <Building size={40} className="text-teal mx-auto" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '16px' }}>{t('vh.sec5.card2Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec5.card2Desc')}</p>
            </div>
            <div className="glass-card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
              <AlertCircle size={40} className="text-teal mx-auto" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '16px' }}>{t('vh.sec5.card3Title')}</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>{t('vh.sec5.card3Desc')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
