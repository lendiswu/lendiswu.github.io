import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, FileText, Target, BookOpen, BarChart, Globe } from 'lucide-react';

export default function SpeakUpResearch() {
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
          {/* Language Switcher */}
          <button onClick={toggleLanguage} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px' }}>
            <Globe size={16} /> EN / 中文
          </button>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header text-center mb-12">
          <h1 className="section-title">{t('speakup.title')}</h1>
          <div className="title-underline mx-auto"></div>
          <p className="section-desc mx-auto" style={{ maxWidth: '800px' }}>
            {t('speakup.desc')}
          </p>
        </div>

        {/* 研究脈絡圖 Roadmap */}
        <div className="roadmap-container glass-card mb-16 p-8">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Target className="text-teal" /> {t('speakup.roadmapTitle')}
          </h2>
          <div className="timeline">
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{t('speakup.p1Year')}</span>
                <h3 className="font-bold text-lg mb-2">{t('speakup.p1Title')}</h3>
                <p className="text-gray-600 text-sm">{t('speakup.p1Desc')}</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{t('speakup.p2Year')}</span>
                <h3 className="font-bold text-lg mb-2">{t('speakup.p2Title')}</h3>
                <p className="text-gray-600 text-sm">{t('speakup.p2Desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{t('speakup.p3Year')}</span>
                <h3 className="font-bold text-lg mb-2">{t('speakup.p3Title')}</h3>
                <p className="text-gray-600 text-sm">{t('speakup.p3Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 論文介紹區塊 */}
        <h2 className="text-2xl font-bold mb-8">{t('speakup.articleTitle')}</h2>
        <div className="articles-grid space-y-8">

          {/* Article 1 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2025.11</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('speakup.a1Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('speakup.a1Sub')}</p>
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('speakup.a1MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('speakup.a1Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> {t('speakup.a1SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('speakup.a1Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2025.08 • Medical Education</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('speakup.a2Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('speakup.a2Sub')}</p>
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('speakup.a2MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('speakup.a2Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> {t('speakup.a2SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('speakup.a2Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 3 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2024.08 • Medical Teacher</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('speakup.a3Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('speakup.a3Sub')}</p>
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('speakup.a3MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('speakup.a3Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BarChart size={18} /> {t('speakup.a3SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('speakup.a3Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 4 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2023.04 • Nurse Education Today</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('speakup.a4Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('speakup.a4Sub')}</p>
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('speakup.a4MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('speakup.a4Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> {t('speakup.a4SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('speakup.a4Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 5 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2022.10 • Medical Teacher</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('speakup.a5Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('speakup.a5Sub')}</p>
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('speakup.a5MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('speakup.a5Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> {t('speakup.a5SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('speakup.a5Sum')}</p>
              </div>
            </div>
          </article>

          {/* Article 6 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2021.09 • Medical Teacher</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t('speakup.a6Title')}</h3>
            <p className="text-gray-500 italic mb-6">{t('speakup.a6Sub')}</p>
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> {t('speakup.a6MsgTitle')}</h4>
                <p className="text-sm text-gray-700">{t('speakup.a6Msg')}</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BarChart size={18} /> {t('speakup.a6SumTitle')}</h4>
                <p className="text-sm text-gray-600">{t('speakup.a6Sum')}</p>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
