import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Globe, Award, FileText, Image as ImageIcon, X, ExternalLink, ChevronRight, Trophy, GraduationCap, Building, Star, Lightbulb } from 'lucide-react';

const achievementsData = [
  {
    year: '2026.03',
    title: '中華民國專利 P25107002-TW (證書)',
    category: '專利與發明',
    enCategory: 'Patents & Inventions',
    enTitle: 'ROC Patent P25107002-TW',
    file: '/achievements/教學相關專利/2026.03.01 專利P25107002-TW(證書).PDF',
    type: 'pdf'
  },
  {
    year: '2026.02',
    title: '113學年度北醫附醫教學創新 團體銅獎',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'TMUH Team Teaching Innovation Bronze Award',
    file: '/achievements/醫院創新獎項/2026.02.09 113學年度北醫附醫教學創新 團體 銅.jpg',
    type: 'img'
  },
  {
    year: '2026.01',
    title: '北醫附醫 優良教師',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'TMUH Excellent Teacher',
    file: '/achievements/醫院創新獎項/優良教師:最佳主治醫師/2026.01.19北醫附醫優良教師.jpg',
    type: 'img'
  },
  {
    year: '2026',
    title: '美國模擬醫學會認證模擬師資證書 CHSE',
    category: '國際認證及獎項',
    enCategory: 'International Certifications',
    enTitle: 'Certified Healthcare Simulation Educator (CHSE)',
    file: '/achievements/美國模擬醫學會認證模擬師資證書CHSE 2026 (最新版寄送中).jpeg',
    type: 'img'
  },
  {
    year: '2025.12',
    title: '教學表現優良獎',
    category: '學校榮耀',
    enCategory: 'Academic & School Awards',
    enTitle: 'Excellent Teaching Performance Award',
    file: '/achievements/學校獎項/2025.12.03教學表現優良獎.jpg',
    type: 'img'
  },
  {
    year: '2025.06',
    title: '113學年度校級優良教師',
    category: '學校榮耀',
    enCategory: 'Academic & School Awards',
    enTitle: 'University-level Excellent Teacher',
    file: '/achievements/學校獎項/2025.06 113學年度校級優良教師.jpg',
    type: 'img'
  },
  {
    year: '2025.03',
    title: '112學年度北醫教學創新金獎',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'TMUH Teaching Innovation Gold Award',
    file: '/achievements/醫院創新獎項/2025.03.17 112學年度北醫教學創新金獎.jpg',
    type: 'img'
  },
  {
    year: '2025.03',
    title: '美國發明專利證書',
    category: '專利與發明',
    enCategory: 'Patents & Inventions',
    enTitle: 'US Invention Patent',
    file: '/achievements/教學相關專利/2025.3.11美國發明專利證書.pdf',
    type: 'pdf'
  },
  {
    year: '2025',
    title: '專利核准審定書 P25107003-TW',
    category: '專利與發明',
    enCategory: 'Patents & Inventions',
    enTitle: 'Patent Approval Notice P25107003-TW',
    file: '/achievements/教學相關專利/P25107003-TW(核准審定書).pdf',
    type: 'pdf'
  },
  {
    year: '2025',
    title: '114年度吳大猷先生紀念獎',
    category: '國家級獎項',
    enCategory: 'National & Regional Awards',
    enTitle: 'Ta-You Wu Memorial Award',
    file: '/achievements/國家:區域獎項/2025 吳人傑 國科會吳大猷紀念獎 醫學教育學門.jpg',
    type: 'img'
  },
  {
    year: '2024.12',
    title: '優良教材教案獎',
    category: '學校榮耀',
    enCategory: 'Academic & School Awards',
    enTitle: 'Excellent Teaching Materials & Lesson Plans Award',
    file: '/achievements/學校獎項/2024.12優良教材教案獎.jpg',
    type: 'img'
  },
  {
    year: '2024.06',
    title: '中華民國專利 P23107001-TW (證書)',
    category: '專利與發明',
    enCategory: 'Patents & Inventions',
    enTitle: 'ROC Patent P23107001-TW',
    file: '/achievements/教學相關專利/2024.06.11中華民國專利證書P23107001-TW(證書).pdf',
    type: 'pdf'
  },
  {
    year: '2024.03',
    title: '111學年度 團隊創新金獎 (急診醫學科)',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Team Innovation Gold Award (Emergency Medicine)',
    file: '/achievements/醫院創新獎項/2024.03.18 111 學年度 團隊創新金獎 急診醫學科吳人傑.pdf',
    type: 'pdf'
  },
  {
    year: '2023.11',
    title: '銀獎 — Code Team急救團隊合作',
    category: '國家級獎項',
    enCategory: 'National & Regional Awards',
    enTitle: 'Silver Award - Code Team Resuscitation Teamwork',
    file: '/achievements/國家:區域獎項/2023.11.23銀獎—Code Team急救團隊合作.pdf',
    type: 'pdf'
  },
  {
    year: '2023.03',
    title: '110學年度醫院教學創新金獎',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Hospital Teaching Innovation Gold Award',
    file: '/achievements/醫院創新獎項/2023.03.20醫院教學創新金獎110學年度.pdf',
    type: 'pdf'
  },
  {
    year: '2023.03',
    title: '109學年度醫院優良教師',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Hospital Excellent Teacher',
    file: '/achievements/醫院創新獎項/優良教師:最佳主治醫師/2023.03.20醫院優良教師109學年度.pdf',
    type: 'pdf'
  },
  {
    year: '2019.06',
    title: '107年度最佳主治醫師',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Best Attending Physician',
    file: '/achievements/醫院創新獎項/優良教師:最佳主治醫師/2019.6.10 107最佳主治醫師.pdf',
    type: 'pdf'
  },
  {
    year: '2018.05',
    title: '106年度最佳主治醫師',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Best Attending Physician',
    file: '/achievements/醫院創新獎項/優良教師:最佳主治醫師/2018.5.31 106最佳主治醫師.pdf',
    type: 'pdf'
  },
  {
    year: '2017',
    title: '美國匹茲堡 WISER fellowship',
    category: '國際認證及獎項',
    enCategory: 'International Certifications',
    enTitle: 'WISER Fellowship, Pittsburgh, USA',
    file: '/achievements/美國匹茲堡WISER fellowship 2017.jpeg',
    type: 'img'
  },
  {
    year: '2016.05',
    title: '104年度最佳主治醫師',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Best Attending Physician',
    file: '/achievements/醫院創新獎項/優良教師:最佳主治醫師/2016.5.31 104最佳主治醫師.pdf',
    type: 'pdf'
  },
  {
    year: '2014.05',
    title: '103年度最佳主治醫師',
    category: '醫院榮耀',
    enCategory: 'Hospital Innovation Awards',
    enTitle: 'Best Attending Physician',
    file: '/achievements/醫院創新獎項/優良教師:最佳主治醫師/2014.5.29103最佳主治醫師.pdf',
    type: 'pdf'
  }
];

const categoryConfig = [
  { id: '國家級獎項', icon: Trophy, color: '#ca8a04', bg: '#fefce8', border: '1px solid #fef08a' },
  { id: '國際認證及獎項', icon: Globe, color: '#2563eb', bg: '#eff6ff', border: '1px solid #bfdbfe' },
  { id: '學校榮耀', icon: GraduationCap, color: '#16a34a', bg: '#f0fdf4', border: '1px solid #bbf7d0' },
  { id: '醫院榮耀', icon: Building, color: '#0d9488', bg: '#f0fdfa', border: '1px solid #99f6e4' },
  { id: '專利與發明', icon: Lightbulb, color: '#9333ea', bg: '#faf5ff', border: '1px solid #e9d5ff' }
];

export default function Achievements() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  const isZh = i18n.language === 'zh';

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  const displayedItems = useMemo(() => {
    if (!selectedCategory) return [];
    return achievementsData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="page-container bg-bg-light min-h-screen pb-20">
      <nav className="navbar scrolled shadow-sm" style={{ padding: '16px 0', zIndex: 100 }}>
        <div className="nav-content">
          <Link to="/#team" className="text-gray-600 hover:text-teal font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
            <ArrowLeft size={20} /> 返回團隊成員
          </Link>
          <button onClick={toggleLanguage} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px' }}>
            <Globe size={16} /> EN / 中文
          </button>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header text-center mb-12">
          <h1 className="section-title">吳人傑 醫師</h1>
          <div className="title-underline mx-auto"></div>
          <p className="section-desc mx-auto" style={{ maxWidth: '800px' }}>
            {t('achievements.title')}
          </p>
          {!selectedCategory && (
            <p className="text-teal font-medium mt-4 flex items-center justify-center gap-2">
              <Star size={18} /> 點擊分類查看詳細紀錄
            </p>
          )}
        </div>

        {!selectedCategory ? (
          <div className="achievements-category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
            {categoryConfig.map((cat, idx) => {
              const itemsCount = achievementsData.filter(d => d.category === cat.id).length;
              if (itemsCount === 0) return null;
              
              const Icon = cat.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card hover-lift cursor-pointer p-6 transition-all duration-300"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'white', border: cat.border }}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', backgroundColor: cat.bg, color: cat.color }}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{isZh ? cat.id : achievementsData.find(d => d.category === cat.id)?.enCategory}</h3>
                  <p className="text-sm text-gray-500 mb-4">共 {itemsCount} 項紀錄</p>
                  <div className="text-teal font-medium flex items-center gap-1 mt-auto">
                    查看內容 <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="achievements-detail-view max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="mb-8 flex items-center gap-2 text-gray-500 hover:text-teal transition-colors font-medium"
            >
              <ArrowLeft size={18} /> 返回分類總覽
            </button>
            
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800" style={{ borderBottom: '2px solid var(--color-bg-teal-100)', paddingBottom: '12px' }}>
              {isZh ? selectedCategory : displayedItems[0]?.enCategory}
            </h2>

            <div className="achievements-list">
              {displayedItems.map((item, index) => (
                <div 
                  key={index}
                  className="glass-card achievement-card"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="achievement-left">
                    <div className="achievement-year">
                      {item.year}
                    </div>
                    <div className="achievement-info">
                      <h3>{isZh ? item.title : item.enTitle}</h3>
                      <div className="achievement-category">
                        <Award size={14} className="text-teal" />
                        <span>點擊預覽內容</span>
                      </div>
                    </div>
                  </div>
                  <div className="achievement-icon">
                    {item.type === 'pdf' ? <FileText size={24} /> : <ImageIcon size={24} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal / Lightbox */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-group">
                <h3>{isZh ? selectedItem.title : selectedItem.enTitle}</h3>
                <div className="modal-subtitle">{selectedItem.year} • {isZh ? selectedItem.category : selectedItem.enCategory}</div>
              </div>
              <div className="modal-actions">
                <a 
                  href={encodeURI(selectedItem.file)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-btn primary"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="modal-btn"
                  title={t('achievements.close')}
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="modal-body">
              {selectedItem.type === 'img' ? (
                <img 
                  src={encodeURI(selectedItem.file)} 
                  alt={isZh ? selectedItem.title : selectedItem.enTitle} 
                />
              ) : (
                <iframe 
                  src={`${encodeURI(selectedItem.file)}#view=Fit`} 
                  title={isZh ? selectedItem.title : selectedItem.enTitle}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
