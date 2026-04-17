import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Target, BookOpen, Users } from 'lucide-react';

export default function SimulationResearch() {
  return (
    <div className="page-container bg-bg-light min-h-screen pb-20">
      <nav className="navbar scrolled shadow-sm">
        <div className="nav-content">
          <Link to="/" className="text-gray-600 hover:text-teal font-semibold flex items-center gap-2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <ArrowLeft size={20} /> 回到首頁
          </Link>
          <div className="text-teal font-bold text-xl">臨床模擬與團隊研究</div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header text-center mb-12">
          <h1 className="section-title">臨床模擬與團隊合作系列研究</h1>
          <div className="title-underline mx-auto"></div>
          <p className="section-desc mx-auto" style={{ maxWidth: '800px' }}>
            沒有完美的個人，只有完美的團隊。本系列專注於驗證與開發創創新的模擬教學模式，提升跨領域團隊在臨床急救與照護上的合作效能。
          </p>
        </div>

        {/* 研究脈絡圖 Roadmap */}
        <div className="roadmap-container glass-card mb-16 p-8">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Target className="text-teal" /> 研究脈絡與藍圖
          </h2>
          <div className="timeline">
            {/* Timeline: 比較早的放在最上面 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2022 • 教學模式比較與驗證期</span>
                <h3 className="font-bold text-lg mb-2">跨專業 vs. 單一專業與虛擬教學</h3>
                <p className="text-gray-600 text-sm">運用混合研究方法比較傳統單一專業模擬與跨專業領域模擬 (IPE) 的差異，並進一步探討標準化跨專業 (SIPE) 與虛擬跨專業演練 (VIPE) 的成效界線。</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2025 • 維持長期成效期</span>
                <h3 className="font-bold text-lg mb-2">強化工作坊與微劑量模擬學習</h3>
                <p className="text-gray-600 text-sm">不再只做一次性大考驗，我們探索了「正規微劑量模擬 (Low Dose Simulation)」搭配外加「強化工作坊 (Booster Workshop)」是否能有效保持團隊記憶與默契。</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2026 • 實戰轉化期</span>
                <h3 className="font-bold text-lg mb-2">新手護理師與住院醫師的急救效能轉化</h3>
                <p className="text-gray-600 text-sm">將不同的跨界教學方法導入真實的最前線醫療陣容，直接評比他們在承受高壓急救時的客觀表現 (Team Performance)。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 論文介紹區塊 */}
        <h2 className="text-2xl font-bold mb-8">重點文獻解析 (依時序，最新在最上方)</h2>
        <div className="articles-grid space-y-8">

          {/* Article 1: 2026.04 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2026.04 • NEP</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">比較不同教學法對新手護士與住院醫師急救團隊表現之影響</h3>
            <p className="text-gray-500 italic mb-6">Comparing teaching methods on novice nurses' and medical residents' resuscitation teamwork knowledge and team performance</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Users size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">針對職涯早期的醫療人員，及早介入高強度的仿真團隊訓練是建立跨專業信任與實戰力最明確的方法。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">這份即將發表的最新研究，直接鎖定剛入職的 PGY 醫師與第一年護理師，以隨機分佈方式比較不同的教學法對他們面臨 ACES 急救挑戰時，在「團隊知識 (Knowledge)」與「團隊操作表現 (Team Performance)」上的客觀成績差異。</p>
              </div>
            </div>
          </article>

          {/* Article 2: 2025.01 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2025.01 • BMC Medical Education</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">微劑量模擬學習的強力推手：強化工作坊探究</h3>
            <p className="text-gray-500 italic mb-6">Exploring booster workshop to regular low dose sim</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">學習效應會隨時間遞減，但運用「微劑量演練」與「強化工作坊」的雙管齊下可以打破知識的遺忘曲線。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">我們導入了高頻率但短時間的微劑量學習 (Low Dose Simulation)，並在三個月後的遺忘點提供統整式強化工作坊 (Booster Workshop)。結果證實這套「少吃多餐再總複習」的模型，有效創造了超常的技能保留率。</p>
              </div>
            </div>
          </article>
          
          {/* Article 3: 2022.11 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2022.11 • Nurse Education Today</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">標準化實體演練 vs. 虛擬跨專業模擬體驗 (SIPE vs VIPE)</h3>
            <p className="text-gray-500 italic mb-6">SIPE vs VIPE</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Users size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">突破空間與疫情藩籬的 VIPE 虛擬學習，在特定認知屬性上能追平傳統實體演練，但實務操作仍有其界線。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">比較了實體跨專業演練 (Standardized Interprofessional Education, SIPE) 與線上虛擬跨領域演練 (Virtual Interprofessional Education, VIPE)。分析了這兩種教學途徑如何在成本效益與訓練真實感中取得平衡。</p>
              </div>
            </div>
          </article>

          {/* Article 4: 2022.08 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2022.08 • BMC Medical Education</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">跨領域模擬與單一專業模擬之學習成效比較 – 混合研究方法</h3>
            <p className="text-gray-500 italic mb-6">Comparison of learning outcomes of interprofessional education simulation with traditional single-profession education simulation - a mixed-methods study</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Users size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">把「醫師與護理師放在一起組隊學習（IPE）」不僅能增強向心力，更能直接拉抬危機處理的準確率。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">透過客觀成績對比與焦點訪談，結果顯示 IPE 跨科小組比起獨自分離上課的單科小組，在「急救資源分配」、「任務指派溝通閉環」上有著突破性的進展。</p>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
