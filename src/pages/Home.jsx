import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, UserCheck, Stethoscope, ChevronDown, GraduationCap, Award } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="nav-links">
            <button onClick={() => scrollTo('vision')}>團隊願景</button>
            <button onClick={() => scrollTo('team')}>團隊成員</button>
            <button onClick={() => scrollTo('research')}>研究領域</button>
            <button onClick={() => scrollTo('contact')} className="btn-primary">聯絡我們</button>
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
            <div className="badge">Growing and Empowering Together 醫學教育與研究團隊</div>
            <h1 className="hero-title">
              推動醫學教育的<br/>
              <span className="text-teal-gradient">創新與卓越</span>
            </h1>
            <p className="hero-subtitle">
              我們致力於產出具深遠意義的教學活動，並深入探索學員的學習歷程，以教育創新引領醫療品質提升。
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollTo('vision')} className="btn-primary flex-center gap-2">
                了解更多 <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo('research')} className="btn-outline">
                探索研究產出
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
                  <span className="stat-label">國際期刊發表</span>
                </div>
                <div className="divider"></div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">跨領域團隊領域</span>
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
            <h2 className="section-title">團隊願景</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="vision-card glass-panel">
            <div className="vision-icon">
              <GraduationCap size={40} className="text-teal" />
            </div>
            <p className="vision-text">
              我們是一群對醫學教育與研究充滿熱忱的跨專業團隊，匯聚了醫師、護理師、專科護理師、模擬教師與大學教職人員。
              <br/><br/>
              我們深信多元專業的交融能帶來獨特的視角，共同致力於發展具備深遠意義的教學活動，並深入探索學員的學習歷程，以教育的創新引領醫療品質的卓越提升。
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">團隊成員</h2>
            <div className="title-underline"></div>
            <p className="section-desc">結合多元臨床與教育專業，打造堅強的研究陣容</p>
          </div>

          <div className="team-grid">
            {/* Team Member: 吳人傑 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/dr_wu_profile.jpg" alt="吳人傑 醫師" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">吳人傑 醫師</h3>
                  <p className="member-title">醫學教育學者 / 急診主治醫師</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> 現職與經歷</h4>
                <ul className="member-list">
                  <li>臺北醫學大學附設醫院 <b>急診主治醫師</b></li>
                  <li>教學部臨床技能中心主任 / 醫學模擬教育中心副主任</li>
                  <li>臺北醫學大學 醫學教育暨人文學科 助理教授</li>
                  <li>美國匹茲堡 WISER Research Fellow</li>
                  <li>美國模擬醫學會(SSH)認證模擬教師(CHSE)</li>
                </ul>
                <h4 className="body-subtitle flex-center gap-2 mt-4"><Award size={16} /> 重大殊榮</h4>
                <div className="honor-badge">
                  <span>🏆 2025年國科會 吳大猷先生紀念獎（醫學教育學門）</span>
                </div>

              </div>
            </div>

            {/* Team Member: 陳皓羽 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/haoyu_profile.jpg" alt="陳皓羽" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">陳皓羽</h3>
                  <p className="member-title">醫學模擬教育副主任 / 標準化病人首席訓練師</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> 現職與經歷</h4>
                <ul className="member-list">
                  <li>臺北醫學大學醫學模擬教育中心 <b>副主任</b></li>
                  <li>臺北醫學大學醫學模擬教育中心 標準化病人首席訓練師</li>
                  <li>國北護醫護教育暨數位學習系所 實習指導老師</li>
                  <li>台灣標準化病人協會 第六屆理事</li>
                </ul>
              </div>
            </div>

            {/* Team Member: 陳虹蓁 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/hongzhen_profile.jpeg" alt="陳虹蓁" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transform: 'scale(0.9)' }} />
                </div>
                <div>
                  <h3 className="member-name">陳虹蓁</h3>
                  <p className="member-title">醫學模擬教育管理員 / 標準化病人訓練師</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> 現職與經歷</h4>
                <ul className="member-list">
                  <li>臺北醫學大學醫學模擬教育中心 <b>管理員</b></li>
                  <li>臺北醫學大學醫學模擬教育中心 標準化病人訓練師</li>
                  <li>台灣標準化病人協會 理事</li>
                </ul>
              </div>
            </div>

            {/* Team Member: 段月婷 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/duan_profile.jpeg" alt="段月婷 專科護理師" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transform: 'scale(1.15)' }} />
                </div>
                <div>
                  <h3 className="member-name">段月婷</h3>
                  <p className="member-title">急診專科護理師 / 模擬教學專家</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> 現職與經歷</h4>
                <ul className="member-list">
                  <li>臺北醫學大學附設醫院急診 <b>專科護理師</b></li>
                  <li>聯委會高級心臟救命術指導員</li>
                  <li>曾任外科加護病房暨燒燙傷加護病房護理師</li>
                  <li>臺北醫學大學護理學系 學士</li>
                </ul>
                <h4 className="body-subtitle flex-center gap-2 mt-4"><Award size={16} /> 獲獎殊榮</h4>
                <ul className="member-list">
                  <li>2025年 台灣急診醫學會 <b>十大優秀急診護理師</b></li>
                  <li>111~113學年度 北醫附醫團隊教學創新金獎</li>
                  <li>2023年 NHQA 國家醫療品質獎 擬真情境類急重症照護組獲佳作</li>
                  <li>2022、2026年 北醫附醫優良專科護理師</li>
                </ul>
              </div>
            </div>

            {/* Team Member: 徐逸庭 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/xu_profile.jpg" alt="徐逸庭 專科護理師" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">徐逸庭</h3>
                  <p className="member-title">急診專科護理師 / 模擬醫學核心教師</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> 現職與經歷</h4>
                <ul className="member-list">
                  <li>臺北醫學大學附設醫院急診 <b>專科護理師</b></li>
                  <li>臺北醫學大學醫學模擬教育中心 <b>核心教師</b></li>
                  <li>臺北醫學大學臨床專業技能課程 教師</li>
                  <li>iSIM醫學模擬教育師資培訓 講師</li>
                  <li>臺北醫學大學傷害防治學研究所 碩士</li>
                </ul>
                <h4 className="body-subtitle flex-center gap-2 mt-4"><Award size={16} /> 獲獎殊榮</h4>
                <ul className="member-list">
                  <li>111~113學年度 北醫附醫團隊教學創新金獎</li>
                </ul>
              </div>
            </div>

            {/* Team Member: 蔡鴻維 */}
            <div className="team-card glass-card hover-lift">
              <div className="card-header">
                <div className="avatar" style={{ overflow: 'hidden' }}>
                  <img src="/tsai_profile.jpeg" alt="蔡鴻維 醫師" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <h3 className="member-name">蔡鴻維 醫師</h3>
                  <p className="member-title">急診主治醫師 / 醫學教育專任講師</p>
                </div>
              </div>
              <div className="card-body">
                <h4 className="body-subtitle flex-center gap-2"><Award size={16} /> 現職與經歷</h4>
                <ul className="member-list">
                  <li>臺北醫學大學附設醫院 <b>急診主治醫師</b></li>
                  <li>臺北醫學大學醫學院醫學系醫學教育暨人文學科 <b>專任講師</b></li>
                  <li>臺北醫學大學醫學系 學士</li>
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
            <h2 className="section-title">研究領域與產出</h2>
            <div className="title-underline mx-auto"></div>
            <p className="section-desc">點擊進入觀看系列研究脈絡與文章摘要</p>
          </div>

          <div className="research-grid">
            {/* Research Area 1 */}
            <Link to="/research/speak-up" style={{ textDecoration: 'none' }}>
              <div className="research-card hover-teal">
                <div className="research-icon">
                  <MessageSquare size={32} />
                </div>
                <h3 className="research-title">Speak Up 發聲行為研究</h3>
                <p className="research-summary">
                  探討與改善醫學生及醫療人員在面對醫療錯誤時的「發聲行為 (Speak-Up)」。
                </p>
                <div className="research-actions mt-4 text-teal font-semibold flex-center gap-1">
                  查看系列研究脈絡 <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Research Area 2 */}
            <Link to="/research/simulation" style={{ textDecoration: 'none' }}>
              <div className="research-card hover-teal">
                <div className="research-icon">
                  <Users size={32} />
                </div>
                <h3 className="research-title">臨床模擬與團隊研究</h3>
                <p className="research-summary">
                  專注開發與驗證跨領域團隊（IPE）的模擬教學模式，探討不同教學介入的成效。
                </p>
                <div className="research-actions mt-4 text-teal font-semibold flex-center gap-1">
                  查看系列研究脈絡 <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container contact-container">
          <div className="glass-panel contact-card">
            <h2 className="section-title text-center">聯絡我們</h2>
            <div className="title-underline mx-auto"></div>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              對我們的研究計畫有興趣？或期望進行學術與教學合作？<br/>歡迎透過下方資訊與 GET 團隊取得聯繫。
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
            © {new Date().getFullYear()} GET (Growing and Empowering Together) Medical Education & Research Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MessageSquare(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}

function Users(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}
