import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, FileText, Target, BookOpen, Users, Globe } from 'lucide-react';

export default function SimulationResearch() {
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
          {/* Language Switcher Button */}
          <button onClick={toggleLanguage} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px' }}>
            <Globe size={16} /> EN / 中文
          </button>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header text-center mb-12">
          <h1 className="section-title">{t('simulation.title')}</h1>
          <div className="title-underline mx-auto"></div>
          <p className="section-desc mx-auto" style={{ maxWidth: '800px' }}>
            {t('simulation.desc')}
          </p>
        </div>

        {/* 研究脈絡圖 Roadmap */}
        <div className="roadmap-container glass-card mb-16 p-8">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Target className="text-teal" /> {t('simulation.roadmapTitle')}
          </h2>
          <div className="timeline">
            {/* Timeline: 比較早的放在最上面 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{t('simulation.p1Year')}</span>
                <h3 className="font-bold text-lg mb-2">{t('simulation.p1Title')}</h3>
                <p className="text-gray-600 text-sm">{t('simulation.p1Desc')}</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{t('simulation.p2Year')}</span>
                <h3 className="font-bold text-lg mb-2">{t('simulation.p2Title')}</h3>
                <p className="text-gray-600 text-sm">{t('simulation.p2Desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{t('simulation.p3Year')}</span>
                <h3 className="font-bold text-lg mb-2">{t('simulation.p3Title')}</h3>
                <p className="text-gray-600 text-sm">{t('simulation.p3Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 論文介紹區塊 */}
        <h2 className="text-2xl font-bold mb-8">{t('simulation.articleTitle')}</h2>
        <div className="articles-grid space-y-8">

          {/* Article 1 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2026.04 • NEP</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('simulation.a1Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('simulation.a1Sub')}</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Users size={18} /> {t('simulation.a1MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('simulation.a1Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> {t('simulation.a1SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('simulation.a1Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2025.01 • BMC Medical Education</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('simulation.a2Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('simulation.a2Sub')}</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('simulation.a2MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('simulation.a2Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> {t('simulation.a2SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('simulation.a2Sum')}</p>
              </div>
            </div>
          </article>
          
          {/* Article 3 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2022.11 • Nurse Education Today</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('simulation.a3Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('simulation.a3Sub')}</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Users size={18} /> {t('simulation.a3MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('simulation.a3Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> {t('simulation.a3SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('simulation.a3Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 4 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2022.08 • BMC Medical Education</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('simulation.a4Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('simulation.a4Sub')}</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Users size={18} /> {t('simulation.a4MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('simulation.a4Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> {t('simulation.a4SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('simulation.a4Sum')}</p>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
